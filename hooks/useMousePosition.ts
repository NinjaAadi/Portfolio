"use client";

import { useState, useEffect, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const normalizedX = (x / window.innerWidth) * 2 - 1;
    const normalizedY = -(y / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y, normalizedX, normalizedY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return mousePosition;
}
