// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
"use client";
import { motion } from "framer-motion";

export function CtaBanner() {
  const dashMarks = [
    { top: "18%", left: "12%", width: 14, height: 3.5, rotate: -24 },
    { top: "30%", left: "72%", width: 18, height: 4, rotate: 34 },
    { top: "55%", left: "24%", width: 12, height: 3, rotate: 19 },
    { top: "70%", left: "62%", width: 16, height: 3.5, rotate: -38 },
    { top: "46%", left: "84%", width: 11, height: 3, rotate: 26 },
  ] as const;

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#F5A623",
        padding: "60px 40px",
        borderRadius: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            opacity: 0.1,
            top: -50,
            right: -30,
            borderRadius: "55% 45% 60% 40%",
            background: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            opacity: 0.2,
            bottom: -30,
            right: "18%",
            borderRadius: "50%",
            background: "#2BB5A0",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            opacity: 0.18,
            top: -10,
            left: "50%",
            borderRadius: "60% 40% 50% 50%",
            background: "#FF7BAC",
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
              opacity: 0.15,
              borderRadius: 2,
              transform: `rotate(${dash.rotate}deg)`,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            width: 9,
            height: 9,
            borderRadius: "50%",
            opacity: 0.25,
            background: "#fff",
            top: "36%",
            left: "16%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            opacity: 0.25,
            background: "#fff",
            bottom: "26%",
            right: "26%",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-nunito), system-ui, sans-serif",
            fontSize: "clamp(30px, 5vw, 42px)",
            fontWeight: 800,
            color: "#412402",
            lineHeight: 1.15,
          }}
        >
          Спробуйте перше заняття онлайн
        </h2>
        <p
          style={{
            marginTop: 12,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 18,
            color: "#633806",
            lineHeight: 1.55,
          }}
        >
          Приєднуйтесь з будь-якої точки світу. Без поїздок — просто відкрийте Zoom.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{
            marginTop: 28,
            border: "none",
            cursor: "pointer",
            background: "#FFFFFF",
            color: "#854F0B",
            borderRadius: 28,
            padding: "14px 36px",
            fontFamily: "var(--font-nunito), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 18,
          }}
        >
          Записатись зараз
        </motion.button>
      </motion.div>
    </section>
  );
}
