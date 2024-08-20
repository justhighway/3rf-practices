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

  return (
    <group {...props}>
      <Text
        fontSize={0.4}
        fontWeight="bold"
        position={[0, -1.3, 0.051]} // position을 배열로 설정
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
      >
        <MeshPortalMaterial
          side={THREE.DoubleSide}
          blend={active === text ? 1 : 0}
        >
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
