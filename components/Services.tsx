// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
 "use client";
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { services, type ServiceItem } from '../lib/data';

const brand = {
  lightGray: '#FAFAF5',
  orange: '#F5A623',
  teal: '#2BB5A0',
  dark: '#1A1A2E',
  dash: '#1A1A2E',
  body: '#666',
} as const;

const dashMarks = [
  { top: '14%', left: '10%', width: 15, height: 3.5, rotate: -22 },
  { top: '36%', left: '78%', width: 13, height: 3, rotate: 34 },
  { top: '58%', left: '18%', width: 17, height: 4, rotate: 19 },
  { top: '72%', left: '65%', width: 12, height: 3.5, rotate: -36 },
] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function stripeColor(stripe: ServiceItem['stripe']) {
  return stripe === 'orange' ? brand.orange : brand.teal;
}

function iconCircleBg(stripe: ServiceItem['stripe']) {
  return stripe === 'orange' ? '#F5A62322' : '#2BB5A022';
}

export type ServicesProps = {
  className?: string;
  subtitle?: string;
};

export function Services({
  className,
  subtitle = 'Обери формат, який пасує саме тобі: від перших кроків до серйозної підготовки. Усі групи — невеликі, з увагою до кожного учня.',
}: ServicesProps) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className={className}
      style={{
        position: 'relative',
        background: brand.lightGray,
        overflow: 'hidden',
      }}
    >
      <div
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
            width: 160,
            height: 160,
            top: -40,
            right: -32,
            opacity: 0.07,
            borderRadius: '58% 42% 55% 45%',
            background: brand.orange,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 130,
            height: 130,
            bottom: -36,
            left: -28,
            opacity: 0.06,
            borderRadius: '48% 52% 42% 58%',
            background: brand.teal,
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
              background: brand.dash,
              opacity: 0.07,
              borderRadius: 2,
              transform: `rotate(${d.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 48px',
        }}
        className="ptashka-services-inner"
      >
        <style>{`
          @media (max-width: 767px) {
            .ptashka-services-inner {
              padding: 56px 20px !important;
            }
          }
          .ptashka-services-grid {
            display: grid;
            gap: 24px;
            grid-template-columns: 1fr;
          }
          @media (min-width: 768px) {
            .ptashka-services-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
        `}</style>

        <header
          style={{
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          <p
            style={{
              margin: 0,
              textTransform: 'uppercase',
              fontSize: 12,
              letterSpacing: '0.1em',
              color: brand.teal,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            ПОСЛУГИ
          </p>
          <h2
            style={{
              margin: '14px 0 0',
              fontFamily: "'Nunito', system-ui, sans-serif",
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 800,
              color: brand.dark,
              lineHeight: 1.2,
            }}
          >
            Для кого ці заняття?
          </h2>
          <p
            style={{
              margin: '18px auto 0',
              maxWidth: 560,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: '#555',
            }}
          >
            {subtitle}
          </p>
        </header>

        <motion.div
          className="ptashka-services-grid"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  const accent = stripeColor(item.stripe);
  const circleBg = iconCircleBg(item.stripe);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 40px rgba(0,0,0,0.10)',
        transition: { duration: 0.22 },
      }}
      style={{
        background: '#FFFFFF',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: 6,
          flexShrink: 0,
          background: accent,
        }}
      />
      <div
        style={{
          padding: 28,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: circleBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 48,
            lineHeight: 1,
          }}
          aria-hidden
        >
          {item.icon}
        </div>
        <h3
          style={{
            margin: '18px 0 0',
            fontFamily: "'Nunito', system-ui, sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: brand.dark,
            lineHeight: 1.25,
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            margin: '12px 0 0',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 15,
            lineHeight: 1.7,
            color: brand.body,
            flexGrow: 1,
          }}
        >
          {item.description}
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            marginTop: 'auto',
            paddingTop: 20,
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: accent,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          Детальніше →
        </a>
      </div>
    </motion.article>
  );
}
