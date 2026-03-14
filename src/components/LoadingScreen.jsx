import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  useProgress,
  Float,
  Center,
} from "@react-three/drei";
import gsap from "gsap";

useGLTF.preload("/models/magical_orb.glb");

const SpinningModel = () => {
  const { scene } = useGLTF("/models/magical_orb.glb");
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(
        groupRef.current.scale,
        { x: 0, y: 0, z: 0 },
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 2.5,
          ease: "elastic.out(1, 0.75)",
        },
      );
    }
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <Center>
          <primitive object={scene} scale={2.5} />
        </Center>
      </group>
    </Float>
  );
};

const LoadingScreen = ({ onLoaded }) => {
  const container = useRef();
  const titleRef = useRef();
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100 && !isReady) {
      setIsReady(true);

      const tl = gsap.timeline();

      tl.to(
        container.current,
        {
          scale: 4,
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            if (onLoaded) onLoaded();
          },
        },
        "+=0.2",
      );
    }
  }, [progress, isReady, onLoaded]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[100] bg-[#101011] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <spotLight
            position={[-10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            color="#C24128"
          />
          <React.Suspense fallback={null}>
            <SpinningModel />
            <Environment preset="city" resolution={128} />{" "}
          </React.Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-[60vw] max-w-sm z-10 pointer-events-none opacity-80">
        <div className="w-full h-px bg-white/10 overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-(--color-brand-red) transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          Entering{" "}
          <span className="text-(--color-brand-red)">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
