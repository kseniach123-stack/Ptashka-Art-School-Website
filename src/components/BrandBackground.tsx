// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
export function BrandBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      {/* Large teal blob - top left */}
      <path
        d="M-50,80 Q-20,20 60,-10 Q140,-40 200,20 Q260,80 220,160 Q180,240 100,250 Q20,260 -30,200 Q-80,140 -50,80 Z"
        fill="#2BB5A0"
        opacity="0.9"
      />
      {/* Large orange blob - top right */}
      <path
        d="M850,50 Q920,30 970,80 Q1020,130 1000,200 Q980,270 920,290 Q860,310 800,270 Q740,230 750,160 Q760,90 850,50 Z"
        fill="#F5A623"
        opacity="0.9"
      />
      {/* Large pink blob - bottom right */}
      <path
        d="M900,550 Q980,530 1050,580 Q1120,630 1100,710 Q1080,790 1000,820 Q920,850 850,800 Q780,750 800,670 Q820,590 900,550 Z"
        fill="#FF7BAC"
        opacity="0.85"
      />
      {/* Teal blob - bottom left */}
      <path
        d="M-30,700 Q30,680 90,720 Q150,760 130,830 Q110,900 50,920 Q-10,940 -60,890 Q-110,840 -80,780 Q-50,720 -30,700 Z"
        fill="#2BB5A0"
        opacity="0.9"
      />
      {/* Orange blob - bottom center-left */}
      <path
        d="M250,820 Q310,800 360,840 Q410,880 390,940 Q370,1000 310,1020 Q250,1040 200,1000 Q150,960 170,900 Q190,840 250,820 Z"
        fill="#F5A623"
        opacity="0.85"
      />
      {/* Cream circle - left center */}
      <circle cx="80" cy="420" r="45" fill="#fef3c7" opacity="0.7" />
      {/* Small cream circle - top left */}
      <circle cx="140" cy="180" r="30" fill="#fef3c7" opacity="0.6" />
      {/* Small dark circle */}
      <circle cx="25" cy="750" r="12" fill="#1A1A2E" />
      {/* Small orange dot - top center */}
      <circle cx="480" cy="80" r="8" fill="#F5A623" opacity="0.6" />
      {/* Dashed lines */}
      <line
        x1="280"
        y1="50"
        x2="320"
        y2="20"
        stroke="#1A1A2E"
        strokeWidth="2"
        strokeDasharray="4,6"
      />
      <line
        x1="630"
        y1="120"
        x2="680"
        y2="140"
        stroke="#F5A623"
        strokeWidth="2"
        strokeDasharray="4,6"
      />
      <line
        x1="920"
        y1="240"
        x2="950"
        y2="280"
        stroke="#F5A623"
        strokeWidth="2"
        strokeDasharray="4,6"
      />
      <line
        x1="180"
        y1="520"
        x2="220"
        y2="550"
        stroke="#F5A623"
        strokeWidth="2"
        strokeDasharray="4,6"
      />
      <line
        x1="880"
        y1="650"
        x2="920"
        y2="620"
        stroke="#1A1A2E"
        strokeWidth="2"
        strokeDasharray="4,6"
      />
      {/* White outline circles */}
      <circle cx="40" cy="30" r="25" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
      <circle cx="980" cy="80" r="30" fill="none" stroke="#F5A623" strokeWidth="3" opacity="0.6" />
      {/* Extra dashes */}
      <line
        x1="540"
        y1="160"
        x2="560"
        y2="180"
        stroke="#F5A623"
        strokeWidth="2"
        strokeDasharray="3,5"
      />
      <line
        x1="550"
        y1="160"
        x2="570"
        y2="140"
        stroke="#F5A623"
        strokeWidth="2"
        strokeDasharray="3,5"
      />
    </svg>
  );
}
