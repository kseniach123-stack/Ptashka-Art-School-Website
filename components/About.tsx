// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";

const dashMarks = [
  { top: "18%", left: "12%", width: 14, height: 3.5, rotate: -26 },
  { top: "48%", left: "8%", width: 17, height: 3, rotate: 32 },
  { top: "62%", left: "55%", width: 12, height: 4, rotate: -18 },
  { top: "28%", left: "72%", width: 16, height: 3.5, rotate: 24 },
] as const;

const defaultParagraphs: [string, string, string] = [
  "Я вірю, що творчість живе у кожному, якщо дати їй простір і підтримку. На онлайн-уроках ми м'яко розкриваємо сміливість пробувати нове, без страху помилитися.",
  "Пояснюю складне просто: крок за кроком працюємо з формою, кольором і композицією. Учні підключаються з дому, бачать прогрес з перших занять і малюють у комфортному темпі.",
  "Я працюю онлайн із 2020 року, тож до занять легко приєднатися з будь-якого міста чи країни. Допомагаю знайти власний стиль і перетворити ідеї на виразні роботи.",
];

export type AboutProps = {
  className?: string;
  youtubeVideoId?: string;
  instructorName?: string;
  paragraphs?: [string, string, string];
};

export function About({
  className,
  youtubeVideoId = "UzdcWuuQe50",
  instructorName = "Ім'я",
  paragraphs = defaultParagraphs,
}: AboutProps) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.65 }}
      style={{
        position: "relative",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            top: -36,
            right: -28,
            opacity: 0.08,
            borderRadius: "55% 45% 60% 40%",
            background: "#F5A623",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            bottom: -32,
            left: -24,
            opacity: 0.07,
            borderRadius: "50% 50% 40% 60%",
            background: "#2BB5A0",
          }}
        />
        {dashMarks.map((dash, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: dash.top,
              left: dash.left,
              width: dash.width,
              height: dash.height,
              background: "#1A1A2E",
              opacity: 0.08,
              borderRadius: 2,
              transform: `rotate(${dash.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div className="ptashka-about-inner">
        <style>{`
          .ptashka-about-inner {
            position: relative;
            z-index: 1;
            max-width: 1120px;
            margin: 0 auto;
            padding: 80px 48px;
            display: grid;
            gap: 56px;
            grid-template-columns: 1fr;
          }
          .ptashka-about-title {
            margin: 14px 0 0;
            font-family: var(--font-nunito), system-ui, sans-serif;
            font-size: 32px;
            font-weight: 800;
            color: #1A1A2E;
            line-height: 1.2;
          }
          @media (min-width: 900px) {
            .ptashka-about-inner {
              grid-template-columns: 3fr 2fr;
              align-items: start;
            }
            .ptashka-about-title {
              font-size: 38px;
            }
          }
          @media (max-width: 899px) {
            .ptashka-about-inner {
              padding: 56px 20px;
              gap: 36px;
            }
          }
        `}</style>

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              textTransform: "uppercase",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "#2BB5A0",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            ПРО МЕНЕ
          </p>
          <h2 className="ptashka-about-title">Привіт, я — {instructorName}</h2>

          <div
            style={{
              marginTop: 24,
              borderLeft: "4px solid #F5A623",
              borderRadius: 0,
              paddingLeft: 20,
            }}
          >
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                style={{
                  margin: idx === 0 ? 0 : "1em 0 0",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#333333",
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: 999,
              background: "#F5A62320",
              color: "#854F0B",
              border: "1px solid #F5A62340",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            7+ років досвіду | Онлайн з 2020
          </div>
        </div>

        <div
          style={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              aspectRatio: "4 / 5",
              borderRadius: 16,
              background: "#E8E8E8",
              border: "2px dashed #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 15,
              color: "#888",
            }}
          >
            Твоє фото
          </div>

          <iframe
            title="YouTube video"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 14,
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
