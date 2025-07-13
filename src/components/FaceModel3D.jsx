import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FaceModel3D() {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/faceModel/Shaded/base_basic_shaded.glb');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const { camera } = useThree();

  useEffect(() => {
    if (gltf.scene) {
      // Scale the model appropriately
      gltf.scene.scale.set(0.5, 0.5, 0.5);
      // Move the model down to visually center it
      gltf.scene.position.set(0, -1.2, -1);
      // Enable shadows if needed
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [gltf]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      // Fix the inverted y-axis - now mouse up = face up, mouse down = face down
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive camera adjustments
  useEffect(() => {
    if (camera) {
      // Adjust camera position based on screen size
      if (screenSize.width < 768) {
        // Mobile
        camera.position.set(0, 0, 8);
        camera.fov = 50;
      } else if (screenSize.width < 1024) {
        // Tablet
        camera.position.set(0, 0, 6);
        camera.fov = 40;
      } else {
        // Desktop
        camera.position.set(0, 0, 5);
        camera.fov = 30;
      }
      camera.updateProjectionMatrix();
    }
  }, [camera, screenSize]);

  // Responsive model scaling
  useEffect(() => {
    if (meshRef.current) {
      let scale = 1;
      if (screenSize.width < 768) {
        scale = 0.8; // Smaller on mobile
      } else if (screenSize.width < 1024) {
        scale = 0.9; // Medium on tablet
      } else {
        scale = 1; // Full size on desktop
      }
      
      meshRef.current.scale.set(scale, scale, scale);
    }
  }, [screenSize, meshRef]);

  useFrame((state) => {
    if (meshRef.current) {
      // Add subtle rotation animation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Mouse following with increased limits for more complete rotation
      const maxRotationX = 0.5; // Increased limit for up/down rotation
      const maxRotationY = 2; // Increased limit for left/right rotation
      
      // Smooth interpolation for mouse following
      const targetRotationX = mousePosition.y * maxRotationX;
      const targetRotationY = mousePosition.x * maxRotationY;
      
      // Smoothly interpolate to target rotation with faster response
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.28;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.28;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.3} />
      
      <primitive 
        ref={meshRef}
        object={gltf.scene} 
        position={[0, -1.2, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false}
      />
      
      <Environment preset="city" />
    </>
  );
}

export default FaceModel3D; 