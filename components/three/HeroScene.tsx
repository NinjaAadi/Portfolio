"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

/* ── Dense particle field ───────────────────────────────────────── */
function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 4000;

  const { positions, colors } = useMemo(() => {
    const pos    = new Float32Array(count * 3);
    const col    = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#6366f1"),
      new THREE.Color("#22d3ee"),
      new THREE.Color("#4ade80"),
      new THREE.Color("#f472b6"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#38bdf8"),
    ];
    for (let i = 0; i < count; i++) {
      const r     = 6 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((s) => {
    ref.current.rotation.y = s.clock.elapsedTime * 0.012;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.007) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ── Neural network ──────────────────────────────────────────────── */
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!);

  const { linePos, nodePos } = useMemo(() => {
    const nodeCount = 55;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 2,
      ));
    }
    const lines: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3.5) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z,
                     nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const np = new Float32Array(nodeCount * 3);
    nodes.forEach((n, i) => { np[i*3]=n.x; np[i*3+1]=n.y; np[i*3+2]=n.z; });
    return { linePos: new Float32Array(lines), nodePos: np };
  }, []);

  useFrame((s) => {
    groupRef.current.rotation.y = s.clock.elapsedTime * 0.02;
    groupRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.012) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePos, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.2} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.09} color="#a78bfa" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

/* ── Expanding radar rings ───────────────────────────────────────── */
function RadarRing({ delay, color }: { delay: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.MeshBasicMaterial>(null!);
  useFrame((s) => {
    const t = ((s.clock.elapsedTime * 0.45 + delay) % 1);
    const sc = 1 + t * 5;
    ref.current.scale.set(sc, sc, sc);
    matRef.current.opacity = (1 - t) * 0.35;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.9, 1.0, 64]} />
      <meshBasicMaterial ref={matRef} color={color} transparent opacity={0.35} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ── Hexagonal spinning rings ────────────────────────────────────── */
function HexRing({ radius, tube, color, speed, tilt }: {
  radius: number; tube: number; color: string; speed: number; tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    ref.current.rotation.z = s.clock.elapsedTime * speed;
    ref.current.rotation.x = tilt + Math.sin(s.clock.elapsedTime * 0.2) * 0.04;
  });
  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <torusGeometry args={[radius, tube, 2, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.25} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ── Floating wireframe polyhedra ────────────────────────────────── */
function Polyhedron({ position, color, speed, size }: {
  position: [number, number, number]; color: string; speed: number; size: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    mesh.current.rotation.x = s.clock.elapsedTime * speed * 0.3;
    mesh.current.rotation.y = s.clock.elapsedTime * speed * 0.4;
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <octahedronGeometry args={[size]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.5} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

/* ── Central distorted core sphere ──────────────────────────────── */
function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    ref.current.rotation.y = s.clock.elapsedTime * 0.1;
    ref.current.rotation.x = s.clock.elapsedTime * 0.07;
  });
  return (
    <Float speed={1.0} floatIntensity={0.3}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.5}
          speed={2.2}
          roughness={0}
          metalness={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

/* ── Inner glowing core ──────────────────────────────────────────── */
function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.MeshBasicMaterial>(null!);
  useFrame((s) => {
    const p = 0.65 + Math.sin(s.clock.elapsedTime * 1.5) * 0.15;
    ref.current.scale.set(p, p, p);
    matRef.current.opacity = 0.45 + Math.sin(s.clock.elapsedTime * 1.5) * 0.1;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.55, 32, 32]} />
      <meshBasicMaterial ref={matRef} color="#a78bfa" transparent opacity={0.5} />
    </mesh>
  );
}

/* ── Energy rings ────────────────────────────────────────────────── */
function EnergyRing({ y, color, speed }: { y: number; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const sc = 1 + Math.sin(s.clock.elapsedTime * speed) * 0.07;
    ref.current.scale.set(sc, sc, sc);
    ref.current.rotation.z = s.clock.elapsedTime * speed * 0.4;
  });
  return (
    <mesh ref={ref} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.1, 0.01, 2, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

/* ── Orbiting data nodes ─────────────────────────────────────────── */
function DataOrbit({ radius, speed, color, yOffset }: {
  radius: number; speed: number; color: string; yOffset: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const angle = s.clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(angle) * radius;
    ref.current.position.z = Math.sin(angle) * radius;
    ref.current.position.y = yOffset + Math.sin(s.clock.elapsedTime * 0.8) * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

/* ── Grid floor ──────────────────────────────────────────────────── */
function GridFloor() {
  const ref = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.MeshBasicMaterial>(null!);
  useFrame((s) => {
    matRef.current.opacity = 0.06 + Math.sin(s.clock.elapsedTime * 0.4) * 0.02;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.5, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial ref={matRef} color="#6366f1" wireframe transparent opacity={0.06} />
    </mesh>
  );
}

/* ── Scanning beam ───────────────────────────────────────────────── */
function ScanBeam() {
  const ref = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.MeshBasicMaterial>(null!);
  useFrame((s) => {
    ref.current.position.y = Math.sin(s.clock.elapsedTime * 0.35) * 5;
    matRef.current.opacity = 0.03 + Math.abs(Math.sin(s.clock.elapsedTime * 0.35)) * 0.05;
  });
  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <planeGeometry args={[35, 0.06]} />
      <meshBasicMaterial ref={matRef} color="#22d3ee" transparent opacity={0.04} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ── Mouse-driven camera ─────────────────────────────────────────── */
function CameraController() {
  const { camera } = useThree();
  const mouse = useMousePosition();
  useFrame(() => {
    camera.position.x += (mouse.normalizedX * 1.5 - camera.position.x) * 0.022;
    camera.position.y += (mouse.normalizedY * 1.0 - camera.position.y) * 0.022;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Scene ───────────────────────────────────────────────────────── */
function SceneContent() {
  return (
    <>
      <CameraController />

      <ambientLight intensity={0.2} />
      <pointLight position={[5,  5,  4]}  intensity={2.5} color="#7c3aed" />
      <pointLight position={[-5, -3,  4]} intensity={1.8} color="#22d3ee" />
      <pointLight position={[0,  5, -4]}  intensity={1.2} color="#f472b6" />
      <pointLight position={[0, -5,  2]}  intensity={0.8} color="#4ade80" />
      <pointLight position={[0,  0,  2]}  intensity={1.5} color="#a78bfa" />

      <Stars radius={90} depth={50} count={5500} factor={3} saturation={0.2} fade speed={0.2} />

      <ParticleField />
      <NeuralNetwork />

      <CoreSphere />
      <CoreGlow />

      <RadarRing delay={0}    color="#6366f1" />
      <RadarRing delay={0.33} color="#22d3ee" />
      <RadarRing delay={0.66} color="#a78bfa" />

      <HexRing radius={2.2} tube={0.016} color="#7c3aed" speed={0.28}  tilt={0.5} />
      <HexRing radius={3.1} tube={0.010} color="#22d3ee" speed={-0.20} tilt={1.3} />
      <HexRing radius={4.2} tube={0.007} color="#f472b6" speed={0.14}  tilt={0.9} />
      <HexRing radius={5.0} tube={0.005} color="#4ade80" speed={-0.09} tilt={0.3} />

      <EnergyRing y={0}    color="#6366f1" speed={1.1} />
      <EnergyRing y={0.5}  color="#22d3ee" speed={0.75} />
      <EnergyRing y={-0.5} color="#a78bfa" speed={0.9} />

      <DataOrbit radius={2.8}  speed={0.6}   color="#22d3ee" yOffset={0.5} />
      <DataOrbit radius={2.8}  speed={-0.4}  color="#f472b6" yOffset={-0.4} />
      <DataOrbit radius={3.5}  speed={0.35}  color="#4ade80" yOffset={0.2} />
      <DataOrbit radius={3.5}  speed={-0.55} color="#a78bfa" yOffset={-0.2} />

      <ScanBeam />

      <Polyhedron position={[ 3.8,  1.8, -1]} color="#22d3ee" speed={1.3} size={0.42} />
      <Polyhedron position={[-4.0, -1.4,  0]} color="#f472b6" speed={1.0} size={0.36} />
      <Polyhedron position={[ 2.4, -2.4,  1]} color="#4ade80" speed={1.6} size={0.28} />
      <Polyhedron position={[-2.6,  2.8, -2]} color="#6366f1" speed={0.8} size={0.48} />
      <Polyhedron position={[ 4.8, -0.6, -2]} color="#a78bfa" speed={1.2} size={0.24} />
      <Polyhedron position={[-1.8,  3.4, -1]} color="#34d399" speed={0.7} size={0.32} />
      <Polyhedron position={[ 0.8, -3.8,  0]} color="#fb7185" speed={1.4} size={0.22} />
      <Polyhedron position={[-4.5,  0.5, -1]} color="#38bdf8" speed={0.9} size={0.30} />

      <GridFloor />
    </>
  );
}

/* ── Export ──────────────────────────────────────────────────────── */
export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
