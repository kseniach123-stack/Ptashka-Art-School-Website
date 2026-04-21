// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
"use client";
import * as React from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: isScrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid #eee" : "1px solid transparent",
        transition: "background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease",
      }}
    >
      <nav className="ptashka-navbar-row">
        <style>{`
          .ptashka-navbar-row {
            height: 68px;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            gap: 20px;
          }
          .ptashka-navbar-links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
          }
          .ptashka-navbar-link {
            color: #555;
            font-family: var(--font-inter), system-ui, sans-serif;
            font-size: 15px;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .ptashka-navbar-link:hover {
            color: #F5A623;
          }
          .ptashka-navbar-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 12px;
          }
          .ptashka-navbar-cta {
            border: none;
            border-radius: 24px;
            background: #F5A623;
            color: #412402;
            padding: 8px 22px;
            font-family: var(--font-nunito), system-ui, sans-serif;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;
          }
          .ptashka-navbar-cta:hover {
            transform: translateY(-1px);
          }
          .ptashka-navbar-burger {
            display: none;
            width: 38px;
            height: 38px;
            border: none;
            border-radius: 8px;
            background: transparent;
            cursor: pointer;
            position: relative;
          }
          .ptashka-navbar-burger-line {
            position: absolute;
            left: 8px;
            right: 8px;
            height: 2px;
            background: #1A1A2E;
            border-radius: 2px;
            transition: transform 0.2s ease, opacity 0.2s ease;
          }
          .ptashka-navbar-burger-line.line-1 { top: 11px; }
          .ptashka-navbar-burger-line.line-2 { top: 18px; }
          .ptashka-navbar-burger-line.line-3 { top: 25px; }
          .ptashka-navbar-burger.open .line-1 { transform: translateY(7px) rotate(45deg); }
          .ptashka-navbar-burger.open .line-2 { opacity: 0; }
          .ptashka-navbar-burger.open .line-3 { transform: translateY(-7px) rotate(-45deg); }
          .ptashka-navbar-drawer {
            display: none;
          }
          @media (max-width: 767px) {
            .ptashka-navbar-row {
              grid-template-columns: 1fr auto;
              padding: 0 20px;
            }
            .ptashka-navbar-links,
            .ptashka-navbar-right .ptashka-navbar-cta {
              display: none;
            }
            .ptashka-navbar-burger {
              display: inline-block;
            }
            .ptashka-navbar-drawer {
              display: block;
              overflow: hidden;
              max-height: 0;
              transition: max-height 0.25s ease;
              background: #fff;
              border-top: 1px solid #eee;
            }
            .ptashka-navbar-drawer.open {
              max-height: 320px;
            }
            .ptashka-navbar-drawer-inner {
              display: grid;
              gap: 12px;
              padding: 14px 20px 18px;
            }
            .ptashka-navbar-drawer-link {
              color: #555;
              text-decoration: none;
              font-family: var(--font-inter), system-ui, sans-serif;
              font-size: 15px;
            }
          }
        `}</style>

        <a href="#top" onClick={closeMenu} style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/logo.png" alt="Пташка" width={36} height={62} priority />
          </div>
        </a>

        <div className="ptashka-navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="ptashka-navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="ptashka-navbar-right">
          <a href="#contact" className="ptashka-navbar-cta">
            Записатись
          </a>
          <button
            type="button"
            className={`ptashka-navbar-burger ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="ptashka-navbar-burger-line line-1" />
            <span className="ptashka-navbar-burger-line line-2" />
            <span className="ptashka-navbar-burger-line line-3" />
          </button>
        </div>
      </nav>

      <div className={`ptashka-navbar-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="ptashka-navbar-drawer-inner">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="ptashka-navbar-drawer-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="ptashka-navbar-cta" onClick={closeMenu}>
            Записатись
          </a>
        </div>
      </div>
    </header>
  );
}
