/* eslint-disable react/no-unknown-property */

import { Box, CameraControls, Cone, TorusKnot } from "@react-three/drei";
import PortalCard from "./PortalCard";
import { useEffect, useRef, useState } from "react";
import MyBox from "./MyBox";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export default function Experience() {
  const [active, setActive] = useState(null); // 현재 blend된 PortalCard의 text(name)
  const [hover, setHover] = useState(null);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[3, 5, 5]} />
      <CameraControls ref={controlsRef} />
      <MyBox />
      <PortalCard
        texture={"texture/env1.jpg"}
        position-x={-2.5}
        rotation-y={0.5}
        text={"EXAM 1"}
        color="blue"
        active={active}
        setActive={setActive}
      >
        <Box scale={0.6}>
          <meshNormalMaterial />
        </Box>
      </PortalCard>
      <PortalCard
        texture={"texture/env2.jpg"}
        text={"EXAM 2"}
        color="skyblue"
        active={active}
        setActive={setActive}
      >
        <TorusKnot scale={0.2} args={[1, 0.3]}>
          <meshNormalMaterial />
        </TorusKnot>
      </PortalCard>
      <PortalCard
        texture={"texture/env3.jpg"}
        position-x={2.5}
        rotation-y={-0.5}
        text={"EXAM 3"}
        color="red"
        active={active}
        setActive={setActive}
      >
        <Cone scale={0.8} args={[0.5]}>
          <meshNormalMaterial />
        </Cone>
      </PortalCard>
    </>
  );
}
