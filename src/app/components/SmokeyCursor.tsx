"use client";

import { useEffect, useId } from "react";

type RGB = {
  r: number;
  g: number;
  b: number;
};

interface SmokeyCursorProps {
  densityDissipation?: number;
  velocityDissipation?: number;
  splatForce?: number;
  colorUpdateSpeed?: number;
  simulationResolution?: number;
  dyeResolution?: number;
  pressureIterations?: number;
  splatRadius?: number;
  curl?: number;
  backgroundColor?: RGB;
  opacity?: number;
}

export function SmokeyCursor({
  densityDissipation = 0.985,
  velocityDissipation = 0.985,
  splatForce = 4800,
  colorUpdateSpeed = 0.18,
  simulationResolution = 128,
  dyeResolution = 1024,
  pressureIterations = 12,
  splatRadius = 0.2,
  curl = 24,
  backgroundColor = { r: 0, g: 0, b: 0 },
  opacity = 0.78,
}: SmokeyCursorProps = {}) {
  const canvasId = useId().replace(/:/g, "");
  const { r, g, b } = backgroundColor;

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    if (media.matches) {
      return;
    }

    let cancelled = false;

    const boot = async () => {
      const { initFluid } = await import("smokey-fluid-cursor");
      if (cancelled) return;

      initFluid({
        id: canvasId,
        simResolution: simulationResolution,
        dyeResolution,
        densityDissipation,
        velocityDissipation,
        pressureIteration: pressureIterations,
        curl,
        splatRadius,
        splatForce,
        shading: true,
        colorUpdateSpeed,
        transparent: true,
        backColor: { r, g, b },
      });

      const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
      if (!canvas) return;

      canvas.style.position = "fixed";
      canvas.style.inset = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "0";
      canvas.style.opacity = String(opacity);
      canvas.style.mixBlendMode = "screen";
    };

    void boot();

    return () => {
      cancelled = true;
      const canvas = document.getElementById(canvasId);
      canvas?.remove();
    };
  }, [
    canvasId,
    colorUpdateSpeed,
    curl,
    densityDissipation,
    dyeResolution,
    opacity,
    pressureIterations,
    r,
    g,
    b,
    simulationResolution,
    splatForce,
    splatRadius,
    velocityDissipation,
  ]);

  return (
    <canvas
      id={canvasId}
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      aria-hidden="true"
    />
  );
}
