import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const About3DEmblem: React.FC = () => {
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
    const width = container.clientWidth || 220;
    const height = container.clientHeight || 220;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner solid black core
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 2. Outer Wireframe Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(1.05, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // 3. Nested Inner Wireframe Octahedron
    const octGeo = new THREE.OctahedronGeometry(0.65, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xd4d4d8,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    group.add(octMesh);

    // 4. Concentric Gimbal Ring
    const ringGeo = new THREE.TorusGeometry(1.4, 0.015, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    // 5. Orbiting Data Point Nodes
    const pointGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    const pointMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const satellites: { mesh: THREE.Mesh; angle: number; speed: number; radius: number }[] = [];

    for (let i = 0; i < 4; i++) {
      const mesh = new THREE.Mesh(pointGeo, pointMat);
      const angle = (i / 4) * Math.PI * 2;
      satellites.push({ mesh, angle, speed: 0.015 + i * 0.005, radius: 1.35 });
      group.add(mesh);
    }

    // Mouse movement inside container
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener('mousemove', handleMouseMove);

    let frameId: number;
    const animate = () => {
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.y += 0.008;
      group.rotation.x = mouseY * 0.4;
      group.rotation.z = mouseX * 0.2;

      outerMesh.rotation.y += 0.005;
      octMesh.rotation.x -= 0.007;
      ring.rotation.z += 0.006;

      for (const s of satellites) {
        s.angle += s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.radius;
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
        s.mesh.position.y = Math.sin(s.angle * 2) * 0.25;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 220;
      const h = container.clientHeight || 220;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      pointGeo.dispose();
      pointMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-hidden="true"
    />
  );
};
