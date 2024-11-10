import Image from "next/image";
import React from "react";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <Image src="/logos/logo-white.png" alt="logo" width={60} height={100} />
  );
};
