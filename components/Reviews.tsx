// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { reviews } from "@/lib/data";

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || isHovered) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 4000);
    return () => window.clearInterval(id);
  }, [emblaApi, isHovered]);

  const dashMarks = [
    { top: "16%", left: "12%", width: 14, height: 3.5, rotate: -24 },
    { top: "30%", left: "78%", width: 16, height: 3, rotate: 33 },
    { top: "56%", left: "20%", width: 12, height: 4, rotate: 19 },
    { top: "72%", left: "66%", width: 10, height: 3.5, rotate: -35 },
  ] as const;

  const slides = emblaApi?.scrollSnapList() ?? [];

  return (
    <section
      id="reviews"
      style={{
        position: "relative",
        background: "#FAFAF5",
        overflow: "hidden",
        padding: "80px 20px",
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
            width: 130,
            height: 120,
            top: -30,
            right: "7%",
            opacity: 0.06,
            borderRadius: "55% 45% 60% 40%",
            background: "#F5A623",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 110,
            height: 100,
            bottom: -24,
            left: "8%",
            opacity: 0.06,
            borderRadius: "50% 50% 42% 58%",
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
              borderRadius: 2,
              background: "#1A1A2E",
              opacity: 0.07,
              transform: `rotate(${dash.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto" }}>
        <header style={{ textAlign: "center" }}>
          <p
            style={{
              margin: 0,
              textTransform: "uppercase",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 12,
              letterSpacing: "0.1em",
              fontWeight: 600,
              color: "#2BB5A0",
            }}
          >
            ВІДГУКИ
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: "var(--font-nunito), system-ui, sans-serif",
              fontSize: "clamp(30px, 4vw, 38px)",
              fontWeight: 800,
              color: "#1A1A2E",
              lineHeight: 1.2,
            }}
          >
            Що кажуть учні та батьки
          </h2>
        </header>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ marginTop: 36 }}
        >
          <div style={{ overflow: "hidden" }} ref={emblaRef}>
            <div style={{ display: "flex", marginLeft: -10 }}>
              {reviews.map((review) => (
                <div key={review.name} className="ptashka-review-slide">
                  <article
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 16,
                      padding: 28,
                      border: "1px solid #F5A62320",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ color: "#F5A623", fontSize: 20, lineHeight: 1 }}>★★★★★</div>
                    <p
                      style={{
                        margin: "14px 0 0",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "#444",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {review.text}
                    </p>
                    <div style={{ height: 1, background: "#eee", marginTop: 16 }} />
                    <footer style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: "#F5A62320",
                          color: "#854F0B",
                          fontFamily: "var(--font-nunito), system-ui, sans-serif",
                          fontSize: 14,
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        aria-hidden
                      >
                        {review.initials}
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-nunito), system-ui, sans-serif",
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#1A1A2E",
                          }}
                        >
                          {review.name}
                        </div>
                        <div
                          style={{
                            marginTop: 2,
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontSize: 13,
                            color: "#888",
                          }}
                        >
                          {review.role}
                        </div>
                      </div>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            .ptashka-review-slide {
              flex: 0 0 100%;
              min-width: 0;
              padding-left: 10px;
            }
            @media (min-width: 960px) {
              .ptashka-review-slide {
                flex: 0 0 33.3333%;
              }
            }
          `}</style>

          <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: selectedIndex === index ? "#F5A623" : "#E2DCCF",
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            background: "#FFFFFF",
            borderRadius: 20,
            padding: 40,
            textAlign: "center",
            border: "1px solid #F5A62320",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <InstagramIcon size={32} color="white" />
          </div>

          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: "#1A1A2E",
              margin: "0 0 12px",
            }}
          >
            Наші роботи в Instagram
          </h3>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "#666",
              lineHeight: 1.5,
              maxWidth: 400,
              margin: "0 auto 28px",
            }}
          >
            Слідкуйте за нашими учнями та їхніми роботами. Нові публікації щотижня.
          </p>

          <a
            href="https://www.instagram.com/Ptashka.school"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#F5A623",
              color: "#412402",
              borderRadius: 28,
              padding: "12px 32px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: 16,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.opacity = "1";
            }}
          >
            <InstagramIcon size={18} color="#412402" />
            Відкрити @Ptashka.school
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke={color} strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill={color} />
    </svg>
  );
}
