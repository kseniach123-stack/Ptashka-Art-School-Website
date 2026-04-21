// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
import { pricingPlans } from "@/lib/data";

function formatPrice(value: number): string {
  return `${new Intl.NumberFormat("uk-UA").format(value)} грн`;
}

export function Pricing() {
  const dashMarks = [
    { top: "20%", left: "14%", width: 12, height: 3.5, rotate: -20 },
    { top: "36%", left: "82%", width: 16, height: 3, rotate: 28 },
    { top: "72%", left: "54%", width: 11, height: 3.5, rotate: -34 },
  ] as const;

  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        background: "#FFFFFF",
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
            width: 90,
            height: 80,
            top: -20,
            right: "8%",
            opacity: 0.05,
            borderRadius: "58% 42% 55% 45%",
            background: "#F5A623",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 70,
            height: 68,
            bottom: 18,
            left: "10%",
            opacity: 0.05,
            borderRadius: "50% 50% 45% 55%",
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
              opacity: 0.07,
              borderRadius: 2,
              background: "#1A1A2E",
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
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2BB5A0",
            }}
          >
            ЦІНИ
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
            Оберіть свій формат
          </h2>
        </header>

        <div className="ptashka-pricing-grid">
          <style>{`
            .ptashka-pricing-grid {
              margin-top: 36px;
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              align-items: center;
            }
            @media (min-width: 960px) {
              .ptashka-pricing-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
          `}</style>
          {pricingPlans.map((plan) => {
            const pricePerLesson = Math.round(plan.price / plan.lessons);
            const isFeatured = plan.featured;

            return (
              <article
                key={plan.title}
                style={{
                  position: "relative",
                  background: isFeatured ? "#F5A623" : "#FFFFFF",
                  border: isFeatured ? "none" : "1.5px solid #eee",
                  borderRadius: 20,
                  padding: isFeatured ? "40px 32px" : "32px",
                  transform: isFeatured ? "scale(1.05)" : "none",
                  zIndex: isFeatured ? 2 : 1,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100%",
                }}
              >
                {isFeatured ? (
                  <div
                    style={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#FFFFFF",
                      color: "#854F0B",
                      borderRadius: 20,
                      padding: "4px 16px",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Найпопулярніше
                  </div>
                ) : null}

                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-nunito), system-ui, sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    color: isFeatured ? "#412402" : "#1A1A2E",
                  }}
                >
                  {plan.title}
                </h3>
                <p
                  style={{
                    margin: "14px 0 0",
                    fontFamily: "var(--font-nunito), system-ui, sans-serif",
                    fontSize: 44,
                    fontWeight: 800,
                    lineHeight: 1,
                    color: isFeatured ? "#412402" : "#F5A623",
                  }}
                >
                  {formatPrice(plan.price)}
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 14,
                    color: isFeatured ? "#633806" : "#888",
                  }}
                >
                  {`${formatPrice(pricePerLesson)} за заняття`}
                </p>

                <ul
                  style={{
                    margin: "18px 0 0",
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gap: 10,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: isFeatured ? "#412402" : "#333",
                  }}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: "flex", gap: 8 }}>
                      <span aria-hidden>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  style={{
                    marginTop: "auto",
                    alignSelf: "flex-start",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 24,
                    padding: "12px 28px",
                    fontFamily: "var(--font-nunito), system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    background: isFeatured ? "#FFFFFF" : "#F5A623",
                    color: isFeatured ? "#854F0B" : "#412402",
                  }}
                >
                  Обрати
                </button>
              </article>
            );
          })}
        </div>

        <p
          style={{
            marginTop: 24,
            textAlign: "center",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 14,
            color: "#888",
          }}
        >
          * Ціни для групових занять. Індивідуально — за запитом
        </p>
      </div>
    </section>
  );
}
