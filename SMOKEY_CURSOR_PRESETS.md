// Smokey Cursor Component - Available Presets
// Import: import { SmokeyCursor } from "@/app/components/SmokeyCursor";

// =============================================================================
// BASIC USAGE - Full screen overlay with default settings
// =============================================================================
// <SmokeyCursor />

// =============================================================================
// PRESETS
// =============================================================================

// 1. CUSTOM SIMULATION QUALITY
// <SmokeyCursor
//   simulationResolution={256}
//   dyeResolution={1024}
//   enableShading={true}
// />

// 2. PERFORMANCE OPTIMIZED FOR MOBILE
// <SmokeyCursor
//   simulationResolution={64}
//   dyeResolution={512}
//   densityDissipation={5}
//   velocityDissipation={3}
//   enableShading={false}
// />

// 3. HIGH QUALITY DESKTOP EXPERIENCE (CURRENT SET)
// <SmokeyCursor
//   simulationResolution={256}
//   dyeResolution={2048}
//   densityDissipation={2}
//   curl={5}
//   splatForce={8000}
//   enableShading={true}
// />

// 4. INTENSE FIRE-LIKE EFFECT
// <SmokeyCursor
//   curl={10}
//   splatForce={12000}
//   densityDissipation={1.5}
//   colorUpdateSpeed={20}
//   backgroundColor={{ r: 0.8, g: 0.1, b: 0 }}
// />

// 5. SUBTLE AMBIENT EFFECT
// <SmokeyCursor
//   splatRadius={0.1}
//   splatForce={3000}
//   densityDissipation={8}
//   velocityDissipation={5}
//   colorUpdateSpeed={5}
// />

// =============================================================================
// ALL AVAILABLE PROPS
// =============================================================================

// interface SmokeyCursorProps {
//   // Basic Configuration
//   densityDissipation?: number;      // Default: 3.2 (how fast smoke fades)
//   velocityDissipation?: number;     // Default: 2.5 (momentum decay)
//   splatRadius?: number;             // Default: 0.18 (particle spread)
//   splatForce?: number;              // Default: 7000 (force intensity)
//   colorUpdateSpeed?: number;        // Default: 10 (HSV cycling speed)
//
//   // Advanced Parameters
//   simulationResolution?: number;    // Default: 128 (grid resolution)
//   dyeResolution?: number;           // Default: 1024 (color resolution)
//   curl?: number;                    // Default: 4.5 (vorticity confinement)
//   pressure?: number;                // Default: 0.1 (pressure gradient)
//   pressureIterations?: number;      // Default: 20 (solver iterations)
//
//   // Rendering
//   enableShading?: boolean;          // Default: true (normal mapping)
//   backgroundColor?: {               // Default: { r: 0, g: 0, b: 0 }
//     r: number;
//     g: number;
//     b: number;
//   };
//   intensity?: number;               // Default: 1.2 (overall brightness)
// }

// =============================================================================
// CONFIGURATION GUIDE
// =============================================================================

// Density Dissipation (Lower = Smoother, Longer trails)
//   - 1.5: Very dense, trails linger long (intense effect)
//   - 2: Nice balance (used in high quality)
//   - 3.2: Default, good for ambient
//   - 8: Very fast fade (subtle effect)

// Velocity Dissipation (Lower = Faster movement)
//   - 2.5: Faster dissipation (default)
//   - 3: Slower dissipation
//   - 5: Very slow dissipation (subtle)

// Curl (Higher = More Swirling)
//   - 4.5: Default, natural swirl
//   - 5: More turbulent
//   - 10: Very chaotic (fire effect)

// Splat Force (Higher = More Spread)
//   - 3000: Subtle, close to cursor
//   - 7000: Default, balanced
//   - 8000: Higher quality
//   - 12000: Intense spread (fire effect)

// Color Update Speed (Higher = Faster color cycling)
//   - 5: Slow, subtle color changes
//   - 10: Default, steady cycling
//   - 20: Fast, vibrant color changes

// For best visual quality on desktop, use the HIGH QUALITY preset currently set in layout.tsx
