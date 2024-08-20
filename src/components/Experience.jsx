/* eslint-disable react/no-unknown-property */

import { Box, Cone, OrbitControls, TorusKnot } from "@react-three/drei";
import PortalCard from "./PortalCard";
import { useState } from "react";

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <>
      <ambientLight intensity={0.5} />
      <OrbitControls />
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
