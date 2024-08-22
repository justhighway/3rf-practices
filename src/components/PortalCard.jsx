/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import {
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  Sphere,
  Text,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import * as THREE from "three";

export default function PortalCard({
  children,
  texture,
  text,
  color,
  active,
  setActive,
  ...props
}) {
  const map = useTexture(texture);
  const portalRef = useRef(null);
  const textRef = useRef(null);

  useFrame((_state, delta) => {
    const worldOpen = active === text;
    easing.damp(portalRef.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <Text
        ref={textRef}
        fontSize={0.4}
        fontWeight="bold"
        position={[0, -1.3, 0.051]}
        color={color}
        anchorY={"bottom"}
      >
        {text}
      </Text>
      <RoundedBox
        args={[2, 3, 0.1]}
        onDoubleClick={() => {
          setActive(active === text ? null : text);
        }}
        name={text}
      >
        <MeshPortalMaterial ref={portalRef} side={THREE.DoubleSide}>
          <ambientLight intensity={0.8} />
          <Environment preset="sunset" />
          {children}
          <Sphere args={[6, 64, 64]}>
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </Sphere>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
}
