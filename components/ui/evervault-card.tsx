"use client";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const characters = "01";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Hook to use evervault effect
export function useEvervaultEffect() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setRandomString(generateRandomString(3000));
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    setRandomString(generateRandomString(3000));
  }, [mouseX, mouseY]);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  return {
    mouseX,
    mouseY,
    randomString,
    isHovered,
    handlers: {
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
    }
  };
}

// Pattern overlay component
export function EvervaultPattern({
  mouseX,
  mouseY,
  randomString,
  isHovered,
  className,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  randomString: string;
  isHovered: boolean;
  className?: string;
}) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-0 rounded-2xl overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-burgundy/40 to-crimson/40 transition-opacity duration-300"
        style={style}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      <motion.div
        className="absolute inset-0"
        style={style}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="absolute inset-0 text-sm h-full break-words whitespace-pre-wrap text-burgundy/20 dark:text-white/15 font-mono leading-none overflow-hidden tracking-[0.3em]">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}
