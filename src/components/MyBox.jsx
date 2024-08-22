/* eslint-disable react/no-unknown-property */
import { Box, RenderTexture, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function MyBox() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <>
      <InnerBox
        scale={0.2}
        position={[0, 0, 2]}
        hover={hover}
        setHover={setHover}
        click={click}
        setClick={setClick}
      />
      <Box position={[0, -1, 2]}>
        <meshStandardMaterial>
          <RenderTexture attach="map" anisotropy={20}>
            <PerspectiveCamera />
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} />
            <InnerBox
              scale={1}
              hover={hover}
              setHover={setHover}
              click={click}
              setClick={setClick}
            />
          </RenderTexture>
        </meshStandardMaterial>
      </Box>
    </>
  );
}

const InnerBox = ({
  scale = 1,
  position = [0, 0, 0],
  hover,
  setHover,
  click,
  setClick,
}) => {
  const ref = useRef(null);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta;
    ref.current.rotation.z += delta;
  });

  return (
    <Box
      ref={ref}
      scale={click ? scale * 2 : scale}
      position={position}
      onClick={() => setClick(!click)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial color={hover ? "hotpink" : "gray"} />
    </Box>
  );
};
