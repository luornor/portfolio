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
  const mobileGlowId = `${canvasId}MobileGlow`;
  const { r, g, b } = backgroundColor;

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const isCoarsePointer = media.matches;
    const mobileGlow = document.getElementById(mobileGlowId) as HTMLDivElement | null;

    let cancelled = false;
    let hideGlowTimeout: number | undefined;

    const boot = async () => {
      const { initFluid } = await import("smokey-fluid-cursor");
      if (cancelled) return;

      initFluid({
        id: canvasId,
        simResolution: isCoarsePointer
          ? Math.min(simulationResolution, 64)
          : simulationResolution,
        dyeResolution: isCoarsePointer ? Math.min(dyeResolution, 384) : dyeResolution,
        densityDissipation,
        velocityDissipation,
        pressureIteration: isCoarsePointer
          ? Math.min(pressureIterations, 8)
          : pressureIterations,
        curl: isCoarsePointer ? Math.min(curl, 14) : curl,
        splatRadius: isCoarsePointer ? Math.min(splatRadius, 0.14) : splatRadius,
        splatForce: isCoarsePointer ? Math.min(splatForce, 2200) : splatForce,
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
      canvas.style.opacity = String(
        isCoarsePointer ? Math.min(opacity, 0.42) : opacity,
      );
      canvas.style.mixBlendMode = "screen";
    };

    const moveMobileGlow = (event: TouchEvent) => {
      if (!isCoarsePointer || !mobileGlow) return;

      const touch = event.touches[0] ?? event.changedTouches[0];
      if (!touch) return;

      mobileGlow.style.opacity = "0.9";
      mobileGlow.style.transform = `translate3d(${touch.clientX}px, ${touch.clientY}px, 0) translate(-50%, -50%)`;

      if (hideGlowTimeout) {
        window.clearTimeout(hideGlowTimeout);
      }
      hideGlowTimeout = window.setTimeout(() => {
        mobileGlow.style.opacity = "0";
      }, 520);
    };

    window.addEventListener("touchstart", moveMobileGlow, { passive: true });
    window.addEventListener("touchmove", moveMobileGlow, { passive: true });

    void boot();

    return () => {
      cancelled = true;
      window.removeEventListener("touchstart", moveMobileGlow);
      window.removeEventListener("touchmove", moveMobileGlow);
      if (hideGlowTimeout) {
        window.clearTimeout(hideGlowTimeout);
      }
      const canvas = document.getElementById(canvasId);
      canvas?.remove();
    };
  }, [
    canvasId,
    colorUpdateSpeed,
    curl,
    densityDissipation,
    dyeResolution,
    mobileGlowId,
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
    <>
      <canvas
        id={canvasId}
        className="pointer-events-none fixed inset-0 z-0 block"
        aria-hidden="true"
      />
      <div
        id={mobileGlowId}
        className="pointer-events-none fixed left-0 top-0 z-0 h-44 w-44 rounded-full opacity-0 blur-2xl transition-opacity duration-500 md:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(103,239,255,0.5) 0%, rgba(79,123,255,0.28) 36%, transparent 72%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
