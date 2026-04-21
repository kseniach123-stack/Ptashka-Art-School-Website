// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
import * as React from 'react';

/** Ptashka brand palette */
export const brandColors = {
  orange: '#F5A623',
  teal: '#2BB5A0',
  pink: '#FF7BAC',
  dark: '#1A1A2E',
  cream: '#FFF8F0',
  lightGray: '#FAFAF5',
} as const;

/** Default section surface colors */
export const sectionBackgrounds = {
  hero: brandColors.cream,
  about: '#FFFFFF',
  services: brandColors.lightGray,
  pricing: '#FFFFFF',
  reviews: brandColors.lightGray,
  cta: brandColors.orange,
  contact: '#FFFFFF',
  footer: brandColors.dark,
} as const;

/**
 * Brand pattern (decorative only):
 * - Blobs: organic ellipses in brand colors, opacity scaled by intensity.
 * - Dashes: small dark rectangles, rotated ±15–45°, opacity ~0.10–0.15.
 * - Dot accents: small circles in teal or orange, opacity ~0.5–0.6.
 */
export type BrandPatternIntensity = 'strong' | 'medium' | 'subtle';

const INTENSITY_MULTIPLIER: Record<BrandPatternIntensity, number> = {
  strong: 1,
  medium: 0.6,
  subtle: 0.4,
};

export type BrandPatternProps = {
  intensity: BrandPatternIntensity;
  className?: string;
  'aria-hidden'?: boolean;
};

/**
 * Absolutely positioned decorative layer. Place inside a `position: relative; overflow: hidden` container.
 * Does not set a background — only SVG decoration. `pointer-events: none` on the wrapper.
 */
export function BrandPattern({
  intensity,
  className,
  'aria-hidden': ariaHidden = true,
}: BrandPatternProps) {
  const m = INTENSITY_MULTIPLIER[intensity];

  return React.createElement(
    'div',
    {
      className,
      'aria-hidden': ariaHidden,
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      },
    },
    React.createElement(
      'svg',
      {
        width: '100%',
        height: '100%',
        viewBox: '0 0 400 400',
        preserveAspectRatio: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        style: { display: 'block', pointerEvents: 'none' },
      },
      blobGroup(m, 0.14, brandColors.orange, 48, 52, 72, 58, -18),
      blobGroup(m, 0.2, brandColors.teal, 352, 44, 68, 86, 22),
      blobGroup(m, 0.1, brandColors.pink, 320, 330, 78, 62, 12),
      blobGroup(m, 0.17, brandColors.orange, 56, 320, 64, 76, -8),
      blobGroup(m, 0.11, brandColors.teal, 200, 28, 52, 40, 8),
      blobGroup(m, 0.09, brandColors.pink, 12, 200, 44, 56, -14),
      React.createElement(
        'g',
        { fill: brandColors.dark, style: { opacity: 0.12 } },
        React.createElement('rect', {
          x: 118,
          y: 72,
          width: 16,
          height: 3.5,
          rx: 1,
          transform: 'rotate(-32 126 73.75)',
        }),
        React.createElement('rect', {
          x: 268,
          y: 118,
          width: 14,
          height: 3,
          rx: 1,
          transform: 'rotate(24 275 119.5)',
        }),
        React.createElement('rect', {
          x: 92,
          y: 260,
          width: 18,
          height: 4,
          rx: 1,
          transform: 'rotate(38 101 262)',
        }),
        React.createElement('rect', {
          x: 300,
          y: 240,
          width: 12,
          height: 3.5,
          rx: 1,
          transform: 'rotate(-22 306 241.75)',
        }),
        React.createElement('rect', {
          x: 190,
          y: 340,
          width: 15,
          height: 3,
          rx: 1,
          transform: 'rotate(15 197.5 341.5)',
        }),
        React.createElement('rect', {
          x: 210,
          y: 48,
          width: 11,
          height: 3.5,
          rx: 1,
          transform: 'rotate(-40 215.5 49.75)',
        })
      ),
      dot(145, 155, 4.5, brandColors.teal, 0.55),
      dot(285, 195, 4, brandColors.orange, 0.52),
      dot(165, 310, 5, brandColors.teal, 0.58),
      dot(340, 150, 3.5, brandColors.orange, 0.5)
    )
  );
}

function blobGroup(
  intensityMul: number,
  baseOpacity: number,
  fill: string,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotateDeg: number
) {
  const o = clamp(baseOpacity * intensityMul, 0.03, 0.25);
  return React.createElement(
    'g',
    { style: { opacity: o }, fill },
    React.createElement('ellipse', {
      cx,
      cy,
      rx,
      ry,
      transform: `rotate(${rotateDeg} ${cx} ${cy})`,
    })
  );
}

function dot(cx: number, cy: number, r: number, fill: string, opacity: number) {
  return React.createElement('circle', {
    cx,
    cy,
    r,
    fill,
    style: { opacity },
  });
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
