import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Procedural circular soft glow texture for 3D particles
 */
function createPointTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#FFFFFF');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(0.65, 'rgba(200, 200, 200, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const FuturisticBackground3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL safely
    const isSoftwareGl = (() => {
      try {
        const gl =
          document.createElement('canvas').getContext('webgl2') ||
          document.createElement('canvas').getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      2500
    );
    camera.position.set(0, 25, 220);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------
    // 1. Undulating 3D Cybernetic Grid Plane (Ground Matrix)
    // -------------------------------------------------------------
    const gridCols = 36;
    const gridRows = 36;
    const gridGeo = new THREE.PlaneGeometry(1600, 1600, gridCols, gridRows);
    gridGeo.rotateX(-Math.PI / 2);

    // Store base positions for procedural wave simulation
    const posAttr = gridGeo.attributes.position;
    const originalY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      originalY[i] = posAttr.getY(i);
    }

    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.position.y = -130;
    scene.add(gridMesh);

    // -------------------------------------------------------------
    // 2. Floating 3D Geometric Computing Nodes (Drifting in Depth)
    // -------------------------------------------------------------
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    interface FloatingNode {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      floatSpeed: number;
      floatAmp: number;
      phase: number;
    }

    const floatingNodes: FloatingNode[] = [];

    const cubeGeo = new THREE.BoxGeometry(7, 7, 7);
    const octaGeo = new THREE.OctahedronGeometry(6, 0);
    const icosaGeo = new THREE.IcosahedronGeometry(7, 0);
    const torusGeo = new THREE.TorusGeometry(8, 0.35, 8, 36);

    const wireWhiteMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const wireSilverMat = new THREE.MeshBasicMaterial({
      color: 0xa1a1aa,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireDarkMat = new THREE.MeshBasicMaterial({
      color: 0x71717a,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const materials = [wireWhiteMat, wireSilverMat, wireDarkMat];
    const geometries = [cubeGeo, octaGeo, icosaGeo, torusGeo];

    const nodeCount = 28;
    for (let i = 0; i < nodeCount; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      // Distribute in a generous vertical column corresponding to full page scroll
      const baseX = (Math.random() - 0.5) * 600;
      const baseY = (Math.random() - 0.5) * 800 - 80;
      const baseZ = (Math.random() - 0.5) * 500 - 100;

      mesh.position.set(baseX, baseY, baseZ);
      floatingGroup.add(mesh);

      floatingNodes.push({
        mesh,
        baseX,
        baseY,
        baseZ,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.8 + Math.random() * 1.2,
        floatAmp: 6 + Math.random() * 10,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // -------------------------------------------------------------
    // 3. Deep 3D Starfield & Computational Points
    // -------------------------------------------------------------
    const starCount = 350;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 1200;
      starPositions[i + 1] = (Math.random() - 0.5) * 1400;
      starPositions[i + 2] = (Math.random() - 0.5) * 900 - 150;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starTex = createPointTexture();
    const starMat = new THREE.PointsMaterial({
      map: starTex,
      size: 4.5,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // -------------------------------------------------------------
    // 4. Interactive Scroll Tracking & Mouse Parallax
    // -------------------------------------------------------------
    let targetCameraY = 25;
    let targetCameraZ = 220;
    let targetRotationX = 0;
    let targetRotationY = 0;

    let currentCameraY = 25;
    let currentCameraZ = 220;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const scrollFraction = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Travel smoothly along the vertical 3D space as user explores the site
      targetCameraY = 25 - scrollFraction * 360;
      targetCameraZ = 220 + Math.sin(scrollFraction * Math.PI) * 50;
      gridMesh.position.z = -scrollFraction * 200;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = normX * 0.15;
      targetRotationX = normY * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // 5. Continuous 3D Animation Loop
    // -------------------------------------------------------------
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Exponential damping on camera positions
      currentCameraY += (targetCameraY - currentCameraY) * 0.05;
      currentCameraZ += (targetCameraZ - currentCameraZ) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.04;
      currentRotationY += (targetRotationY - currentRotationY) * 0.04;

      camera.position.y = currentCameraY;
      camera.position.z = currentCameraZ;
      camera.rotation.x = currentRotationX - 0.06;
      camera.rotation.y = currentRotationY;

      // Gentle wave animation on ground cyber-grid
      const pos = gridGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const wave = Math.sin(x * 0.008 + elapsed * 1.2) * Math.cos(z * 0.008 + elapsed * 1.2) * 9;
        pos.setY(i, originalY[i] + wave);
      }
      pos.needsUpdate = true;

      // Animate floating nodes
      for (const node of floatingNodes) {
        node.mesh.rotation.x += node.rotSpeedX;
        node.mesh.rotation.y += node.rotSpeedY;
        node.mesh.rotation.z += node.rotSpeedZ;
        node.mesh.position.y =
          node.baseY + Math.sin(elapsed * node.floatSpeed + node.phase) * node.floatAmp;
      }

      // Rotate starfield slowly
      starField.rotation.y += 0.0003;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean up resources
      renderer.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      cubeGeo.dispose();
      octaGeo.dispose();
      icosaGeo.dispose();
      torusGeo.dispose();
      wireWhiteMat.dispose();
      wireSilverMat.dispose();
      wireDarkMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      starTex.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="full-3d-background-canvas"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
    />
  );
};
