// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
"use client";
import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactContent, services } from "@/lib/data";

const phoneRegex = /^\+?3?8?(0\d{9})$/;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Введіть ім'я"),
  phone: z
    .string()
    .trim()
    .min(1, "Введіть номер телефону")
    .regex(phoneRegex, "Некоректний формат телефону"),
  email: z.union([z.literal(""), z.string().trim().email("Некоректний email")]),
  ageGroup: z.enum(["Дитина 5–10 років", "Підліток 11–17 років", "Дорослий"], {
    errorMap: () => ({ message: "Оберіть вік учня" }),
  }),
  direction: z.string().min(1, "Оберіть напрямок"),
  comment: z.string().optional(),
  website: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const inputBaseStyle: React.CSSProperties = {
  width: "100%",
  border: "1.5px solid #eee",
  borderRadius: 10,
  padding: "12px 16px",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontSize: 15,
  color: "#1A1A2E",
};

export function Contact() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      ageGroup: undefined,
      direction: "",
      comment: "",
      website: "",
    },
  });

  const onSubmit = (data: ContactForm) => {
    if (data.website && data.website.trim() !== "") {
      return;
    }
    setIsSuccess(true);
  };

  return (
    <section id="contact" style={{ background: "#FFFFFF", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: 36 }}>
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
            КОНТАКТИ
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: "var(--font-nunito), system-ui, sans-serif",
              fontSize: "clamp(30px, 4vw, 38px)",
              fontWeight: 800,
              color: "#1A1A2E",
            }}
          >
            Запишіться на заняття
          </h2>
        </header>

        <div className="ptashka-contact-grid">
          <style>{`
            .ptashka-contact-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 960px) {
              .ptashka-contact-grid {
                grid-template-columns: 55fr 45fr;
              }
            }
            .ptashka-contact-input:focus {
              border-color: #F5A623 !important;
              outline: none !important;
              box-shadow: 0 0 0 3px #F5A62320 !important;
            }
          `}</style>

          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              border: "1px solid #F5A62320",
              padding: 36,
            }}
          >
            {isSuccess ? (
              <div
                style={{
                  minHeight: 340,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#DDF8E9",
                    color: "#188E4B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <p
                  style={{
                    margin: "16px 0 0",
                    fontFamily: "var(--font-nunito), system-ui, sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#1A1A2E",
                  }}
                >
                  Дякуємо! Ми зв&#39;яжемось з вами найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 14 }}>
                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Ім&#39;я</span>
                  <input className="ptashka-contact-input" type="text" placeholder="Ваше ім&#39;я" style={inputBaseStyle} {...register("name")} />
                  {errors.name ? <span style={{ color: "#B42318", fontSize: 12 }}>{errors.name.message}</span> : null}
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Телефон</span>
                  <input className="ptashka-contact-input" type="tel" placeholder="+380 XX XXX XX XX" style={inputBaseStyle} {...register("phone")} />
                  {errors.phone ? <span style={{ color: "#B42318", fontSize: 12 }}>{errors.phone.message}</span> : null}
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Email (опційно)</span>
                  <input className="ptashka-contact-input" type="email" placeholder="email@example.com" style={inputBaseStyle} {...register("email")} />
                  {errors.email ? <span style={{ color: "#B42318", fontSize: 12 }}>{errors.email.message}</span> : null}
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Вік учня</span>
                  <select className="ptashka-contact-input" style={inputBaseStyle} defaultValue="" {...register("ageGroup")}>
                    <option value="" disabled>Оберіть варіант</option>
                    <option value="Дитина 5–10 років">Дитина 5–10 років</option>
                    <option value="Підліток 11–17 років">Підліток 11–17 років</option>
                    <option value="Дорослий">Дорослий</option>
                  </select>
                  {errors.ageGroup ? <span style={{ color: "#B42318", fontSize: 12 }}>{errors.ageGroup.message}</span> : null}
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Напрямок</span>
                  <select className="ptashka-contact-input" style={inputBaseStyle} defaultValue="" {...register("direction")}>
                    <option value="" disabled>Оберіть напрямок</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                  {errors.direction ? <span style={{ color: "#B42318", fontSize: 12 }}>{errors.direction.message}</span> : null}
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 14, color: "#555", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>Коментар (опційно)</span>
                  <textarea
                    className="ptashka-contact-input"
                    rows={3}
                    placeholder="Розкажіть більше про ваш запит..."
                    style={{ ...inputBaseStyle, resize: "vertical" }}
                    {...register("comment")}
                  />
                </label>

                {/* Honeypot field */}
                <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden>
                  <label htmlFor="website">Website</label>
                  <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: 4,
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                    background: "#F5A623",
                    color: "#412402",
                    fontFamily: "var(--font-nunito), system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    borderRadius: 28,
                    padding: "14px 16px",
                  }}
                >
                  Надіслати заявку
                </button>
              </form>
            )}
          </div>

          <aside
            style={{
              background: "#FFF8F0",
              borderRadius: 20,
              padding: 36,
              display: "grid",
              gap: 14,
              alignContent: "start",
            }}
          >
            <ContactRow icon="📞" label="Телефон" value={contactContent.phone || "+38 (000) 000-00-00"} />
            <ContactRow icon="✉️" label="Email" value={contactContent.email || "hello@ptashka.school"} />
            <ContactRow
              icon="📸"
              label="Instagram"
              value="@Ptashka.school"
              href="https://www.instagram.com/ptashka.school?igsh=MTEweHdybm9qeXNxYQ=="
            />
            <ContactRow icon="▶️" label="YouTube" value="Ptashka.school" href="https://www.youtube.com/@Ptashka.school" />
            <ContactRow icon="🕐" label="Графік" value="Пн–Пт 10:00–20:00 / Сб 10:00–16:00" />

            <div
              style={{
                marginTop: 8,
                width: "100%",
                height: 160,
                borderRadius: 14,
                background: "#E9E9E9",
                color: "#666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 14,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              📍 Адреса буде додана пізніше
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
      <span aria-hidden style={{ fontSize: 18, lineHeight: 1.2 }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 13, color: "#777" }}>{label}</div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 15,
              color: "#1A1A2E",
              textDecoration: "none",
            }}
          >
            {value}
          </a>
        ) : (
          <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, color: "#1A1A2E" }}>{value}</div>
        )}
      </div>
    </div>
  );
}
