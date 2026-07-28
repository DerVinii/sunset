"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * 3D-Hero "Sunset Horizon" (Schritt 5):
 * - Glühende Sonne (Radial-Shader) über einem Horizont, sanftes Pulsieren
 * - Treibende warme Lichtpartikel (additiv, langsam)
 * - Dezente Pointer-Parallaxe
 * Bewusst ruhig gehalten — Atmosphäre statt Spielerei. Läuft nur, wenn
 * prefers-reduced-motion NICHT gesetzt ist (Weiche im Wrapper).
 */

function Sun() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            float d = distance(vUv, vec2(0.5));
            float core = smoothstep(0.5, 0.0, d);
            float halo = smoothstep(0.5, 0.18, d);
            vec3 coreColor = vec3(1.0, 0.85, 0.55);   /* warmes Sonnengelb */
            vec3 midColor  = vec3(0.96, 0.45, 0.15);  /* Orange */
            vec3 rimColor  = vec3(0.75, 0.12, 0.24);  /* Rosé-Tiefe */
            vec3 color = mix(rimColor, mix(midColor, coreColor, core), halo);
            float alpha = pow(core, 0.75) * 0.95 + halo * 0.25;
            float pulse = 1.0 + 0.02 * sin(uTime * 0.6);
            gl_FragColor = vec4(color * pulse, alpha);
          }
        `,
      }),
    []
  );

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.elapsedTime;
    if (mesh.current) {
      mesh.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 0.6) * 0.008);
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0.35, -2]} material={material}>
      <circleGeometry args={[1.6, 64]} />
    </mesh>
  );
}

function Particles({ count = 260 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.35) * 6;
      arr[i * 3 + 2] = -1 - Math.random() * 4;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = Math.sin(clock.elapsedTime * 0.03) * 0.08;
    points.current.position.y = Math.sin(clock.elapsedTime * 0.12) * 0.12;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#fbbf24"
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Horizon() {
  return (
    <mesh position={[0, -1.7, -1.5]} rotation={[-0.12, 0, 0]}>
      <planeGeometry args={[24, 3]} />
      <meshBasicMaterial color="#0c0a09" transparent opacity={0.9} />
    </mesh>
  );
}

function ParallaxRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.25 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.12 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, -2);
  });
  return null;
}

export default function SunsetScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 3], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden
    >
      <Sun />
      <Particles />
      <Horizon />
      <ParallaxRig />
    </Canvas>
  );
}
