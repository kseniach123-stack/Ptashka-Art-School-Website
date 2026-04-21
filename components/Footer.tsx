// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
import { contactContent, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A2E",
        color: "#FFFFFF",
        padding: "60px 40px 40px",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div className="ptashka-footer-grid">
          <style>{`
            .ptashka-footer-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 28px;
            }
            @media (min-width: 900px) {
              .ptashka-footer-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
            .ptashka-footer-link {
              color: rgba(255,255,255,0.6);
              text-decoration: none;
              font-family: var(--font-inter), system-ui, sans-serif;
              font-size: 14px;
              transition: color 0.2s ease;
            }
            .ptashka-footer-link:hover {
              color: rgba(255,255,255,1);
            }
            .ptashka-social {
              width: 34px;
              height: 34px;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.25);
              color: #fff;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              opacity: 0.8;
              transition: opacity 0.2s ease;
            }
            .ptashka-social:hover {
              opacity: 1;
            }
          `}</style>

          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <BirdLogo />
              <span
                style={{
                  fontFamily: "var(--font-nunito), system-ui, sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                }}
              >
                Пташка
              </span>
            </div>
            <p
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Школа малювання для душі
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
              <a className="ptashka-social" href="https://www.instagram.com/ptashka.school?igsh=MTEweHdybm9qeXNxYQ==" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className="ptashka-social" href="https://www.youtube.com/@Ptashka.school" target="_blank" rel="noreferrer" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-nunito), system-ui, sans-serif", fontSize: 18, fontWeight: 800 }}>
              Навігація
            </h3>
            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="ptashka-footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-nunito), system-ui, sans-serif", fontSize: 18, fontWeight: 800 }}>
              Контакти
            </h3>
            <div style={{ marginTop: 12, display: "grid", gap: 8, fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
              <p style={{ margin: 0 }}>{contactContent.phone || "+38 (000) 000-00-00"}</p>
              <p style={{ margin: 0 }}>{contactContent.email || "hello@ptashka.school"}</p>
              <p style={{ margin: 0 }}>Пн–Пт 10:00–20:00 / Сб 10:00–16:00</p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          © 2025 Школа мистецтв Пташка. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}

function BirdLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M7.5 23.5C7.5 15.8 13.8 9.5 21 9.5C26 9.5 30.2 12.2 32 16.5C32.6 18 33 19.6 33 21.3C33 22.5 32.8 23.6 32.5 24.8C34.8 25.2 36.8 27 37.2 29.5C37.6 31.8 36.5 34 34.5 35.2C32.8 36.2 30.5 36.3 28.5 35.5C26.2 36.8 23.4 37.5 20.2 37.5C12.8 37.5 7 31.8 7 24.5C7 24.2 7.2 23.8 7.5 23.5Z"
        fill="#F5A623"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9L15.5 12L10 15V9Z" fill="currentColor" />
    </svg>
  );
}
