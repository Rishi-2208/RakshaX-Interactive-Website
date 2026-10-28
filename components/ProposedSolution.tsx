'use client';

import React from 'react';
import { ShieldCheck, Radio, Users, Mic, Lock, Zap, ArrowRight, BellRing } from 'lucide-react';

export function ProposedSolution() {
  return (
    <section className="section-py" style={{ background: 'var(--bg-surface-raised)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-purple">
              <ShieldCheck size={13} />
              The RakshaX Solution
            </span>
          </div>
          <h2>
            A unified safety net <br />
            <span className="gradient-text-purple">built for critical moments.</span>
          </h2>
          <p>
            RakshaX condenses critical emergency workflows into a single high-reliability Android app that removes hesitation, automates multi-channel alerts, and respects privacy.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="solution-pillars-grid">
          {/* Pillar 1 */}
          <div className="glass-panel pillar-card">
            <div className="pillar-badge-num">Pillar 01</div>
            <div className="pillar-icon red">
              <Radio size={24} />
            </div>
            <h3>One-Tap Emergency SOS</h3>
            <p>
              A single prominent red trigger button on the primary dashboard immediately activates the emergency safeguard system, eliminating all cognitive confusion.
            </p>
            <div className="status-tag verified">
              <span className="status-dot green" />
              Implemented in Android App
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel pillar-card">
            <div className="pillar-badge-num">Pillar 02</div>
            <div className="pillar-icon purple">
              <Users size={24} />
            </div>
            <h3>Dual-Channel Contact Dispatch</h3>
            <p>
              Pre-saved emergency contacts receive automated SMS alerts containing emergency text, accompanied by direct emails carrying real-time Google Maps coordinates.
            </p>
            <div className="status-tag verified">
              <span className="status-dot green" />
              SMS & Email Broadcast Verified
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel pillar-card">
            <div className="pillar-badge-num">Pillar 03</div>
            <div className="pillar-icon cyan">
              <Mic size={24} />
            </div>
            <h3>Jarvis Voice Assistant Integration</h3>
            <p>
              Voice-triggered safety commands provide a hands-free lifeline when physically reaching or unlocking the phone is impossible or dangerous.
            </p>
            <div className="status-tag verified">
              <span className="status-dot green" />
              'Jarvis Active' Interface Indicator
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="glass-panel pillar-card">
            <div className="pillar-badge-num">Pillar 04</div>
            <div className="pillar-icon emerald">
              <Lock size={24} />
            </div>
            <h3>Transparent SOS-Only Tracking</h3>
            <p>
              GPS location is collected strictly during an active emergency event, with repeated email status coordinates sent every 15-20 minutes until safety is confirmed.
            </p>
            <div className="status-tag verified">
              <span className="status-dot green" />
              Policy Documented in App
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .solution-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .pillar-card {
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .pillar-badge-num {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .pillar-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .pillar-icon.red {
          background: var(--accent-red-soft);
          color: var(--accent-red);
          border: 1px solid rgba(255, 56, 76, 0.25);
        }
        .pillar-icon.purple {
          background: rgba(155, 99, 255, 0.12);
          color: var(--primary);
          border: 1px solid rgba(155, 99, 255, 0.25);
        }
        .pillar-icon.cyan {
          background: rgba(56, 189, 248, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }
        .pillar-icon.emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .pillar-card h3 {
          font-size: 1.15rem;
          margin-bottom: 12px;
        }
        .pillar-card p {
          font-size: 0.9rem;
          line-height: 1.65;
          margin-bottom: 22px;
          flex-grow: 1;
        }
        .status-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-secondary);
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }
        .status-dot.green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
        }

        @media (max-width: 1100px) {
          .solution-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .solution-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
