'use client';

import React from 'react';
import { AlertTriangle, Clock, MapPinOff, ShieldAlert, CheckCircle2 } from 'lucide-react';

export function ProblemStatement() {
  return (
    <section id="about" className="section-py" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-red">
              <AlertTriangle size={13} />
              The Emergency Dilemma
            </span>
          </div>
          <h2>
            In a stressful moment, <br />
            <span className="gradient-text-red">seconds and clarity matter.</span>
          </h2>
          <p>
            When an unexpected crisis occurs, cognitive overwhelm and adrenaline make ordinary smartphone interactions slow, fragmented, and prone to error.
          </p>
        </div>

        {/* Comparison Grid: Current Friction vs RakshaX Unified Flow */}
        <div className="problem-grid">
          {/* Friction Cards */}
          <div className="glass-panel problem-card">
            <div className="card-header-icon red">
              <Clock size={22} />
            </div>
            <h3>Critical Seconds Lost</h3>
            <p>
              Unlocking a phone, searching through hundreds of contacts, and manually drafting text messages while in distress burns crucial response time.
            </p>
            <ul className="problem-list">
              <li>Manual typing under adrenaline stress</li>
              <li>Scattered emergency phone numbers</li>
              <li>Delay in alerting multiple trusted guardians</li>
            </ul>
          </div>

          <div className="glass-panel problem-card">
            <div className="card-header-icon amber">
              <MapPinOff size={22} />
            </div>
            <h3>Inability to Share Accurate Coordinates</h3>
            <p>
              Explaining an exact physical street corner, landmark, or GPS coordinate while panicking is often impossible, confusing first responders and family.
            </p>
            <ul className="problem-list">
              <li>Vague or inaccurate verbal location descriptions</li>
              <li>Complex manual map pin sharing steps</li>
              <li>No automated continuous location trail</li>
            </ul>
          </div>

          <div className="glass-panel problem-card">
            <div className="card-header-icon purple">
              <ShieldAlert size={22} />
            </div>
            <h3>Invasive Tracking vs Real Privacy</h3>
            <p>
              Many commercial tracking apps constantly track users in the background, draining battery and violating personal privacy when no emergency exists.
            </p>
            <ul className="problem-list">
              <li>Persistent, invasive background location monitoring</li>
              <li>Third-party data harvesting and ad targeting</li>
              <li>Ambiguous permissions that deter user trust</li>
            </ul>
          </div>
        </div>

        {/* Project Principles Ticker */}
        <div className="principles-banner glass-panel">
          <div className="principle-item">
            <span className="principle-number">01</span>
            <div>
              <strong>Quick Access</strong>
              <span>Immediate single-tap dispatch</span>
            </div>
          </div>
          <div className="principle-divider" />
          <div className="principle-item">
            <span className="principle-number">02</span>
            <div>
              <strong>Trusted Circle</strong>
              <span>Pre-verified emergency contacts</span>
            </div>
          </div>
          <div className="principle-divider" />
          <div className="principle-item">
            <span className="principle-number">03</span>
            <div>
              <strong>Location Aware</strong>
              <span>GPS via SMS & Email channels</span>
            </div>
          </div>
          <div className="principle-divider" />
          <div className="principle-item">
            <span className="principle-number">04</span>
            <div>
              <strong>Privacy Minded</strong>
              <span>Location queried strictly during SOS</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 50px;
        }
        .problem-card {
          padding: 32px 26px;
          display: flex;
          flex-direction: column;
        }
        .card-header-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .card-header-icon.red {
          background: var(--accent-red-soft);
          color: var(--accent-red);
          border: 1px solid rgba(255, 56, 76, 0.25);
        }
        .card-header-icon.amber {
          background: rgba(245, 158, 11, 0.12);
          color: var(--accent-amber);
          border: 1px solid rgba(245, 158, 11, 0.25);
        }
        .card-header-icon.purple {
          background: rgba(155, 99, 255, 0.12);
          color: var(--primary);
          border: 1px solid rgba(155, 99, 255, 0.25);
        }
        .problem-card h3 {
          margin-bottom: 12px;
          font-size: 1.28rem;
        }
        .problem-card p {
          font-size: 0.95rem;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .problem-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 18px;
        }
        .problem-list li {
          font-size: 0.86rem;
          color: var(--text-tertiary);
          position: relative;
          padding-left: 18px;
        }
        .problem-list li::before {
          content: '•';
          position: absolute;
          left: 4px;
          color: var(--accent-red);
          font-weight: bold;
        }

        /* Principles Banner */
        .principles-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 32px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .principle-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .principle-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary);
          opacity: 0.8;
        }
        .principle-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .principle-item span {
          display: block;
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }
        .principle-divider {
          width: 1px;
          height: 36px;
          background: var(--border-subtle);
        }

        @media (max-width: 960px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
          .principle-divider {
            display: none;
          }
          .principles-banner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }
        @media (max-width: 580px) {
          .principles-banner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
