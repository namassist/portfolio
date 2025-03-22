"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  avatarUrls: string;
}

const AvatarCircles = ({ className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 relative rounded-full shadow-xl", className)}>
      <Image
        className="h-[150] w-[150px] rounded-full "
        src={avatarUrls}
        width={500}
        height={500}
        alt={`Avatar saya`}
      />
    </div>
  );
};

export default AvatarCircles;
