"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF] px-4 py-2",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className="relative flex h-2 w-2 mr-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </span>
      <div className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#000428] to-[#004e92] inline-block">
        {children}
      </div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
}
