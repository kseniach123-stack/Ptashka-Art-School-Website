// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
 "use client";
import { motion } from "framer-motion";

const brand = {
  orange: '#F5A623',
  teal: '#2BB5A0',
  pink: '#FF7BAC',
  dark: '#1A1A2E',
  primaryText: '#412402',
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

const dashMarks = [
  { top: '20%', left: '14%', width: 14, height: 3.5, rotate: -28 },
  { top: '34%', left: '78%', width: 18, height: 3, rotate: 35 },
  { top: '52%', left: '22%', width: 12, height: 4, rotate: 22 },
  { top: '61%', left: '68%', width: 16, height: 3.5, rotate: -40 },
  { top: '78%', left: '42%', width: 11, height: 3, rotate: 18 },
  { top: '12%', left: '52%', width: 17, height: 3.5, rotate: -19 },
] as const;

function BirdLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7.5 23.5C7.5 15.8 13.8 9.5 21 9.5C26 9.5 30.2 12.2 32 16.5C32.6 18 33 19.6 33 21.3C33 22.5 32.8 23.6 32.5 24.8C34.8 25.2 36.8 27 37.2 29.5C37.6 31.8 36.5 34 34.5 35.2C32.8 36.2 30.5 36.3 28.5 35.5C26.2 36.8 23.4 37.5 20.2 37.5C12.8 37.5 7 31.8 7 24.5C7 24.2 7.2 23.8 7.5 23.5Z"
        fill={brand.orange}
      />
    </svg>
  );
}

export type HeroProps = {
  className?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
};

export function Hero({
  className,
  subtitleLine1 = "Онлайн-заняття для дітей, підлітків та дорослих.",
  subtitleLine2 = "Малюєте вдома — ми поруч у Zoom.",
}: HeroProps) {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .ptashka-hero-pattern {
            transform: scale(0.6);
            transform-origin: 50% 35%;
          }
        }
      `}</style>
      <section
        className={className}
        style={{
          position: 'relative',
          minHeight: '100svh',
          background: 'transparent',
          overflow: 'hidden',
        }}
      >
        <div
          className="ptashka-hero-pattern"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 280,
              height: 260,
              opacity: 0.22,
              top: -80,
              right: -60,
              borderRadius: '58% 42% 55% 45%',
              background: brand.orange,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 220,
              height: 200,
              opacity: 0.18,
              bottom: -70,
              left: -40,
              borderRadius: '45% 55% 42% 58%',
              background: brand.teal,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 120,
              height: 110,
              opacity: 0.15,
              top: '15%',
              left: '38%',
              borderRadius: '65% 35% 50% 50%',
              background: brand.pink,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 55,
              height: 55,
              opacity: 0.15,
              top: '8%',
              left: '10%',
              borderRadius: '50%',
              background: brand.teal,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 45,
              height: 45,
              opacity: 0.2,
              bottom: '18%',
              right: '22%',
              borderRadius: '40% 60% 55% 45%',
              background: brand.orange,
            }}
          />
          {dashMarks.map((d, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: d.top,
                left: d.left,
                width: d.width,
                height: d.height,
                background: brand.dark,
                opacity: 0.12,
                borderRadius: 2,
                transform: `rotate(${d.rotate}deg)`,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              top: '42%',
              right: '16%',
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: brand.teal,
              opacity: 0.55,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '28%',
              left: '20%',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: brand.orange,
              opacity: 0.55,
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'transparent',
            maxWidth: 720,
            margin: '0 auto',
            minHeight: '100svh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '56px 48px 48px',
          }}
          className="ptashka-hero-content"
        >
          <style>{`
            @media (max-width: 767px) {
              .ptashka-hero-content {
                padding: 36px 20px 40px !important;
                justify-content: flex-start;
                padding-top: 48px !important;
              }
            }
          `}</style>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
            <motion.div variants={itemVariants} style={{ marginBottom: 20 }}>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: 'easeInOut',
                }}
                style={{ display: 'inline-block' }}
              >
                <BirdLogo />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "'Nunito', system-ui, sans-serif",
                fontSize: 'clamp(32px, 6vw, 52px)',
                fontWeight: 800,
                color: brand.dark,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Мистецтво, яке живе у кожному
            </motion.h1>

            <motion.div
              variants={itemVariants}
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 18,
                color: '#555',
                marginTop: 16,
                lineHeight: 1.55,
              }}
            >
              <p style={{ margin: 0 }}>{subtitleLine1}</p>
              <p style={{ margin: '0.35em 0 0' }}>{subtitleLine2}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{
                marginTop: 28,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
              }}
              className="ptashka-hero-actions"
            >
              <style>{`
                @media (max-width: 767px) {
                  .ptashka-hero-actions {
                    flex-direction: column;
                    align-items: stretch;
                  }
                  .ptashka-hero-actions button {
                    width: 100%;
                  }
                }
              `}</style>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  cursor: 'pointer',
                  border: 'none',
                  background: brand.orange,
                  color: brand.primaryText,
                  borderRadius: 28,
                  padding: '14px 32px',
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Записатись на заняття
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border: `2px solid ${brand.teal}`,
                  color: brand.teal,
                  borderRadius: 28,
                  padding: '14px 32px',
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                Дізнатись більше
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
