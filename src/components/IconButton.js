"use client";
import Image from "next/image";

export default function IconButton(props) {
  const { width, height, activeImage, unactiveImage, clicked, active } = props;
  const icon = active && activeImage ? activeImage : unactiveImage;
  return (
    <button onClick={clicked}>
      <Image src={icon} width={width} height={height}></Image>
    </button>
  );
}
