import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function MainCanvas() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 30,
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
