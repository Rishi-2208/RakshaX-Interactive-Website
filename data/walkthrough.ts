export interface WalkthroughStep {
  step: number;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  darkImage: string;
  lightImage: string;
  keyPoints: string[];
  metrics: { label: string; value: string }[];
}

export const walkthroughSteps: WalkthroughStep[] = [
  {
    step: 1,
    title: "Welcome & Safety Gateway",
    shortLabel: "Welcome Gateway",
    tagline: "First-contact simplicity built with reassurance.",
    description: "Upon opening RakshaX, users are welcomed by the official shield emblem and a clear, comforting interface. Designed to minimize anxiety, the screen provides fast access to both returning user sign-in and new account creation.",
    darkImage: "/images/screenshots/dark/Home-Dark-_.jpg",
    lightImage: "/images/screenshots/light/Home-Light-_.jpg",
    keyPoints: [
      "Official RakshaX Shield Emblem and brand identity",
      "Streamlined pathways for immediate Login or Account Creation",
      "Reassuring safety motto: 'Stay safe. We're with you.'",
      "Adaptive dark and light color systems for day/night comfort"
    ],
    metrics: [
      { label: "Theme Adaptation", value: "Automatic" },
      { label: "Design Goal", value: "Reassurance" }
    ]
  },
  {
    step: 2,
    title: "Authentication & Email OTP Verification",
    shortLabel: "Secure Access",
    tagline: "Zero friction, robust verification.",
    description: "Security starts with verified identity. RakshaX provides credential authentication along with email-based One-Time Password (OTP) verification. This guarantees that emergency alert recipient loops are tied to authentic, verified user accounts.",
    darkImage: "/images/screenshots/dark/Create_acc-Dark-_.jpg",
    lightImage: "/images/screenshots/light/Create_acc-Light-_.jpg",
    keyPoints: [
      "Mandatory email OTP delivery to verify genuine ownership",
      "Secure password confirmation and visibility toggling",
      "Explicit Terms & Conditions and Privacy Policy opt-in",
      "Optional 'Remember Me' for swift emergency re-access"
    ],
    metrics: [
      { label: "Verification", value: "Email OTP" },
      { label: "Consent Model", value: "Explicit Opt-in" }
    ]
  },
  {
    step: 3,
    title: "Emergency SOS Dashboard & Jarvis",
    shortLabel: "SOS Dashboard",
    tagline: "The beating heart of RakshaX.",
    description: "In critical moments, cognitive load must be zero. The main dashboard features a large, unmistakable Emergency SOS button. At the top, the Jarvis Voice Assistant status indicator confirms whether the hands-free voice trigger is ready to listen.",
    darkImage: "/images/screenshots/dark/Dashboard-Dark-_.jpg",
    lightImage: "/images/screenshots/light/Dashboard-Light-_.jpg",
    keyPoints: [
      "Prominent, high-contrast central SOS button with radial glow",
      "Real-time indicator: 'Safety system active - Jarvis is ready'",
      "Instant access shortcuts to '+ Add Contact' and 'Contacts'",
      "Quick access Help (?) and emergency exit controls"
    ],
    metrics: [
      { label: "SOS Response", value: "Single Tap" },
      { label: "Voice System", value: "Jarvis Active" }
    ]
  },
  {
    step: 4,
    title: "Emergency Contacts & Live Dispatch",
    shortLabel: "Contacts Directory",
    tagline: "Your personal safety network in your pocket.",
    description: "Users can curate their trusted circle of family, friends, or campus guardians. Each contact record stores a phone number for rapid SMS dispatch and an email address for live GPS coordinates and recurring updates.",
    darkImage: "/images/screenshots/dark/Contact-Dark-_.jpg",
    lightImage: "/images/screenshots/light/Contact-Light-_.jpg",
    keyPoints: [
      "Dedicated search bar for locating specific contacts rapidly",
      "Direct phone and email contact linking per trusted individual",
      "Quick-edit and delete capabilities for network maintenance",
      "Pre-configured emergency notification routing"
    ],
    metrics: [
      { label: "Dispatch Routes", value: "SMS & Email" },
      { label: "Storage", value: "Local/Verified" }
    ]
  },
  {
    step: 5,
    title: "Clear Emergency Protocols & Guidance",
    shortLabel: "User Guidance",
    tagline: "Transparent instructions so anyone can use it under stress.",
    description: "The built-in Help & About system breaks down the emergency workflow into three unambiguous steps: 1. Add emergency contacts, 2. Press SOS in emergency, 3. Contacts receive SMS & Email with location. It also features developer credits for Rishi Upadhyay.",
    darkImage: "/images/screenshots/dark/Help2-Dark-_.jpg",
    lightImage: "/images/screenshots/light/Help2-Light-_.jpg",
    keyPoints: [
      "3-step visual instruction protocol tested for emergency clarity",
      "Real-time GPS coordinate sharing breakdown",
      "Direct developer attribution to Android Developer Rishi Upadhyay",
      "Comprehensive topic navigation across purpose and features"
    ],
    metrics: [
      { label: "Learning Curve", value: "3 Steps" },
      { label: "Guidance", value: "Always Offline Accessible" }
    ]
  },
  {
    step: 6,
    title: "Privacy, Data Protection & Background Alerts",
    shortLabel: "Privacy & Policy",
    tagline: "Location tracked only when your life depends on it.",
    description: "Unlike invasive tracking apps, RakshaX enforces a strict privacy policy: GPS location is queried ONLY during an active SOS trigger. No personal data is ever sold or shared with third parties. During an ongoing crisis, automated background alerts dispatch location updates every 15-20 minutes.",
    darkImage: "/images/screenshots/dark/Privacy-Dark-_.jpg",
    lightImage: "/images/screenshots/light/Privacy-Light-_.jpg",
    keyPoints: [
      "Location permission activated strictly upon SOS engagement",
      "Zero commercial advertising or third-party tracking",
      "Background email dispatch repeats every 15-20 min during SOS",
      "Clear permission disclosures conforming to Android standards"
    ],
    metrics: [
      { label: "Location Use", value: "SOS Only" },
      { label: "Update Frequency", value: "15-20 min cycle" }
    ]
  }
];
