'use client';

import React, { useState } from 'react';
import { 
  Radio, 
  Users, 
  MapPin, 
  Mic, 
  KeyRound, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  SunMoon, 
  MailCheck, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

interface FeatureCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  iconColor: string;
  badge: string;
  description: string;
  screenRef: string;
  details: string[];
}

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<string>('sos');

  const features: FeatureCardData[] = [
    {
      id: 'sos',
      title: 'Emergency SOS Command',
      subtitle: 'Instant one-tap safeguard',
      icon: Radio,
      iconColor: 'var(--accent-red)',
      badge: 'Core Feature',
      description: 'A prominent high-contrast red SOS button situated at the center of the user dashboard. Tapping it triggers the emergency alert sequence immediately.',
      screenRef: 'Dashboard Screen',
      details: [
        'One-touch activation without complex sub-menus',
        'Pulsating active state visual feedback',
        'Direct link to emergency broadcast pipeline'
      ]
    },
    {
      id: 'contacts',
      title: 'Emergency Contacts Circle',
      subtitle: 'Multi-target guardian network',
      icon: Users,
      iconColor: 'var(--primary)',
      badge: 'Directory',
      description: 'Maintain a verified circle of trusted people who will be alerted in real time when emergency SOS is pressed.',
      screenRef: 'Contacts Directory & Add Contact',
      details: [
        'Stores Full Name, Mobile Number, and Email Address',
        'Instant search bar to filter through contacts',
        'Edit and delete options with single-tap actions'
      ]
    },
    {
      id: 'dispatch',
      title: 'Dual-Channel Alert Dispatch',
      subtitle: 'SMS text + Email GPS coordinates',
      icon: MapPin,
      iconColor: 'var(--accent-cyan)',
      badge: 'Broadcast',
      description: 'Upon SOS activation, RakshaX broadcasts emergency notifications through both SMS messaging and direct Email transmission.',
      screenRef: 'Help & Privacy Screens',
      details: [
        'SMS transmits high-priority text message alerts',
        'Email transmits clickable real-time Google Maps coordinates',
        'Redundant delivery paths ensure messages are received'
      ]
    },
    {
      id: 'jarvis',
      title: 'Jarvis Voice Assistant',
      subtitle: 'Hands-free voice safety trigger',
      icon: Mic,
      iconColor: 'var(--accent-emerald)',
      badge: 'Voice AI',
      description: 'An integrated voice assistant module indicating active safety listening. Designed for scenarios where touching the phone screen is compromised.',
      screenRef: 'Dashboard Indicator',
      details: [
        "'Jarvis Active' status indicator on dashboard header",
        "'Safety system active - ready for command' monitoring",
        'Hands-free fallback for physical entrapment or duress'
      ]
    },
    {
      id: 'auth',
      title: 'Email OTP & Secure Auth',
      subtitle: 'Verified account onboarding',
      icon: MailCheck,
      iconColor: 'var(--accent-amber)',
      badge: 'Security',
      description: 'Account registration incorporates email-based One-Time Password (OTP) verification to ensure valid emergency sender identity.',
      screenRef: 'Create Account & Login',
      details: [
        "'Send OTP' verification button for email validation",
        'Password confirmation and show/hide mask toggles',
        'Mandatory Terms & Conditions and Privacy opt-in'
      ]
    },
    {
      id: 'background',
      title: 'Background Periodic Alerts',
      subtitle: '15-20 min recurring updates',
      icon: Clock,
      iconColor: '#ec4899',
      badge: 'Live Trail',
      description: 'Once SOS is triggered, RakshaX automatically updates emergency contacts via email every 15-20 minutes with updated location coordinates.',
      screenRef: 'Privacy Policy Screen',
      details: [
        'Automated repeating email dispatch every 15-20 min',
        'Continuous breadcrumb trail for family and rescuers',
        'Terminated as soon as user deactivates emergency'
      ]
    },
    {
      id: 'privacy',
      title: 'SOS-Only Location Permissions',
      subtitle: 'Zero commercial tracking',
      icon: ShieldCheck,
      iconColor: 'var(--accent-emerald)',
      badge: 'Privacy First',
      description: 'Location data is queried exclusively when the emergency SOS is engaged. No constant user tracking, profiling, or third-party sharing.',
      screenRef: 'Privacy & Policy Screen',
      details: [
        'Android Location: Accessed solely during active SOS',
        'Android SMS: Used only for emergency transmissions',
        'Android Contacts: Accessed strictly to save emergency numbers'
      ]
    },
    {
      id: 'themes',
      title: 'Adaptive Light & Dark Modes',
      subtitle: 'Optimized for all environments',
      icon: SunMoon,
      iconColor: '#a855f7',
      badge: 'UI/UX',
      description: 'Engineered with full light and dark visual themes. High contrast for outdoor sunlight legibility and discreet low-glare dark mode for nighttime.',
      screenRef: 'All 22 App Screenshots',
      details: [
        'Consistent palette across both theme variants',
        'High contrast text conforming to accessibility standards',
        'Discreet night mode reduces screen glare in dark situations'
      ]
    }
  ];

  return (
    <section id="features" className="section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-purple">
              <ShieldCheck size={13} />
              Verified Feature Set
            </span>
          </div>
          <h2>
            Engineered for reliability, <br />
            <span className="gradient-text-purple">built for peace of mind.</span>
          </h2>
          <p>
            Explore the core capabilities verified from the RakshaX mobile application screenshots and technical documentation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="features-bento-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isSelected = selectedFeature === feature.id;

            return (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`glass-panel feature-card ${isSelected ? 'selected' : ''}`}
              >
                <div className="card-top-row">
                  <div
                    className="feature-icon-box"
                    style={{
                      background: `color-mix(in srgb, ${feature.iconColor} 14%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${feature.iconColor} 30%, transparent)`,
                      color: feature.iconColor,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg-surface-raised)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>
                    {feature.badge}
                  </span>
                </div>

                <h3>{feature.title}</h3>
                <div className="feature-subtitle">{feature.subtitle}</div>
                <p>{feature.description}</p>

                <div className="details-box">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="detail-item">
                      <Check size={14} style={{ color: feature.iconColor, flexShrink: 0 }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <span className="screen-ref-label">
                    Visible in: <strong>{feature.screenRef}</strong>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Notice */}
        <div className="feature-notice glass-panel">
          <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <strong>Authentic Implementation:</strong> Every feature described above corresponds directly to verified mobile application screens, in-app help documentation, and privacy disclosures created by Android Developer Rishi Upadhyay.
          </p>
        </div>
      </div>

      <style jsx>{`
        .features-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        .feature-card {
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-bright);
        }
        .feature-card.selected {
          border-color: var(--primary);
          box-shadow: 0 0 24px var(--primary-glow);
        }
        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .feature-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-card h3 {
          font-size: 1.15rem;
          margin-bottom: 4px;
        }
        .feature-subtitle {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 14px;
        }
        .feature-card p {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 18px;
          flex-grow: 1;
        }
        .details-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
          padding: 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
        }
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .card-footer {
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.76rem;
          color: var(--text-tertiary);
        }
        .screen-ref-label strong {
          color: var(--text-primary);
        }

        .feature-notice {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          border-radius: var(--radius-md);
        }

        @media (max-width: 1200px) {
          .features-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .features-bento-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
