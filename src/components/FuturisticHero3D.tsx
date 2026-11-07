import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Creates a soft radial glow particle texture via offscreen 2D canvas
 * in pure monochrome white with gentle opacity falloff.
 */
function createMonochromeGlowTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#FFFFFF');
    gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.85)');
    gradient.addColorStop(0.7, 'rgba(200, 200, 200, 0.25)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const FuturisticHero3D: React.FC = () => {
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
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const initialAspect = container.clientWidth / container.clientHeight;
    camera.aspect = initialAspect;
    camera.position.set(0, 0, container.clientWidth < 640 ? 9.8 : 7.8);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Root Group for interactive parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // -------------------------------------------------------------
    // Full Black and White 3D Futuristic Palette
    // -------------------------------------------------------------
    const WHITE = 0xffffff;
    const SILVER = 0xd4d4d8;
    const ZINC_MUTED = 0x71717a;
    const PURE_BLACK = 0x000000;

    // -------------------------------------------------------------
    // 1. Central 3D Cyber-Sphere (CSE Core)
    // -------------------------------------------------------------
    const sphereGroup = new THREE.Group();
    rootGroup.add(sphereGroup);

    // (a) Inner Solid Black Core: Prevents chaotic line clutter, providing
    // physical depth and ensuring pristine readability for foreground text.
    const darkCoreGeo = new THREE.SphereGeometry(2.38, 36, 28);
    const darkCoreMat = new THREE.MeshBasicMaterial({
      color: PURE_BLACK,
      transparent: true,
      opacity: 0.95,
    });
    const darkCore = new THREE.Mesh(darkCoreGeo, darkCoreMat);
    sphereGroup.add(darkCore);

    // (b) Outer High-Definition Wireframe Sphere: Crisp White (0xFFFFFF)
    const outerSphereGeo = new THREE.SphereGeometry(2.42, 38, 28);
    const outerSphereMat = new THREE.MeshBasicMaterial({
      color: WHITE,
      wireframe: true,
      transparent: true,
      opacity: 0.72,
    });
    const outerSphere = new THREE.Mesh(outerSphereGeo, outerSphereMat);
    sphereGroup.add(outerSphere);

    // (c) Inner Geodesic Computing Lattice: Silver (0xD4D4D8)
    const innerLatticeGeo = new THREE.IcosahedronGeometry(2.40, 2);
    const innerLatticeMat = new THREE.MeshBasicMaterial({
      color: SILVER,
      wireframe: true,
      transparent: true,
      opacity: 0.48,
    });
    const innerLattice = new THREE.Mesh(innerLatticeGeo, innerLatticeMat);
    sphereGroup.add(innerLattice);

    // (d) Luminous Vertex Nodes: Computing Matrix
    const spherePointsMat = new THREE.PointsMaterial({
      color: WHITE,
      size: 0.045,
      transparent: true,
      opacity: 0.9,
    });
    const spherePoints = new THREE.Points(outerSphereGeo, spherePointsMat);
    sphereGroup.add(spherePoints);

    // -------------------------------------------------------------
    // 2. Futuristic 3D Orbital Rings (Gyroscopic Rings)
    // -------------------------------------------------------------
    const ringsGroup = new THREE.Group();
    rootGroup.add(ringsGroup);

    // Ring 1: Primary Tilted White Torus
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.015, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: WHITE,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.35;
    ring1.rotation.y = Math.PI * 0.15;
    ringsGroup.add(ring1);

    // Ring 2: Intersecting Titanium Ring
    const ring2Geo = new THREE.TorusGeometry(4.15, 0.015, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: SILVER,
      transparent: true,
      opacity: 0.65,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.4;
    ring2.rotation.y = Math.PI * 0.25;
    ringsGroup.add(ring2);

    // Ring 3: Delicate Equatorial Coordinate Ring
    const ring3Geo = new THREE.TorusGeometry(3.15, 0.01, 12, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: ZINC_MUTED,
      transparent: true,
      opacity: 0.45,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI * 0.52;
    ringsGroup.add(ring3);

    // -------------------------------------------------------------
    // 3. Floating 3D Geometric Cubes (Computing Nodes)
    // -------------------------------------------------------------
    const cubeCount = 14;
    const cubeGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const cubeWhiteMat = new THREE.MeshBasicMaterial({
      color: WHITE,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const cubeSilverMat = new THREE.MeshBasicMaterial({
      color: SILVER,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });

    interface OrbitCube {
      mesh: THREE.Mesh;
      radius: number;
      angle: number;
      speed: number;
      yAmplitude: number;
      yFreq: number;
      rotSpeedX: number;
      rotSpeedY: number;
    }

    const orbitCubes: OrbitCube[] = [];

    for (let i = 0; i < cubeCount; i++) {
      const isWhite = i % 2 === 0;
      const mesh = new THREE.Mesh(cubeGeo, isWhite ? cubeWhiteMat : cubeSilverMat);

      const radius = 3.1 + (i % 4) * 0.45;
      const angle = (i / cubeCount) * Math.PI * 2;
      const speed = 0.005 + (i % 3) * 0.003;
      const yAmplitude = 0.35 + (i % 3) * 0.25;
      const yFreq = 1.2 + (i % 3) * 0.5;
      const rotSpeedX = (Math.random() - 0.5) * 0.03;
      const rotSpeedY = (Math.random() - 0.5) * 0.03;

      orbitCubes.push({
        mesh,
        radius,
        angle,
        speed,
        yAmplitude,
        yFreq,
        rotSpeedX,
        rotSpeedY,
      });

      rootGroup.add(mesh);
    }

    // -------------------------------------------------------------
    // 4. Subtle Glowing 3D Particles (Monochrome Digital Starfield)
    // -------------------------------------------------------------
    const particleTex = createMonochromeGlowTexture();
    const particleTotal = 180;
    const particlePositions = new Float32Array(particleTotal * 3);

    for (let i = 0; i < particleTotal * 3; i += 3) {
      const radius = 2.9 + Math.random() * 4.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi) * 0.75;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      map: particleTex,
      size: 0.16,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // -------------------------------------------------------------
    // 5. Interactive Mouse Parallax with Exponential Damping
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.35;
      targetY = y * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // -------------------------------------------------------------
    // 6. Responsive Resize Handling
    // -------------------------------------------------------------
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.position.z = w < 640 ? 9.8 : 7.8;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // 7. Animation Loop (Smooth & High Performance)
    // -------------------------------------------------------------
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      rootGroup.rotation.y = mouseX * 0.5;
      rootGroup.rotation.x = mouseY * 0.4;

      // Sphere rotation
      outerSphere.rotation.y += 0.0035;
      outerSphere.rotation.x += 0.0012;

      innerLattice.rotation.y -= 0.004;
      innerLattice.rotation.z += 0.002;

      // Orbital rings rotation
      ring1.rotation.z += 0.005;
      ring1.rotation.y += 0.0025;

      ring2.rotation.z -= 0.0045;
      ring2.rotation.x += 0.003;

      ring3.rotation.z += 0.002;

      // Floating geometric cubes animation
      for (const cube of orbitCubes) {
        cube.angle += cube.speed;
        cube.mesh.position.x = Math.cos(cube.angle) * cube.radius;
        cube.mesh.position.z = Math.sin(cube.angle) * cube.radius;
        cube.mesh.position.y = Math.sin(cube.angle * cube.yFreq + elapsed) * cube.yAmplitude;

        cube.mesh.rotation.x += cube.rotSpeedX;
        cube.mesh.rotation.y += cube.rotSpeedY;
      }

      // Particles subtle drift
      particles.rotation.y += 0.0008;
      particles.rotation.x -= 0.0003;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js objects
      renderer.dispose();
      darkCoreGeo.dispose();
      darkCoreMat.dispose();
      outerSphereGeo.dispose();
      outerSphereMat.dispose();
      innerLatticeGeo.dispose();
      innerLatticeMat.dispose();
      spherePointsMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      cubeGeo.dispose();
      cubeWhiteMat.dispose();
      cubeSilverMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTex.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="wireframe-sphere-3d"
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-85 sm:opacity-95 transition-opacity"
    />
  );
};
