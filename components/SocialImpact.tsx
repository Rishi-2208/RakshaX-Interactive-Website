'use client';

import React from 'react';
import { HeartHandshake, Users, Sparkles, Compass, Shield, WifiOff, Watch, Activity, Globe } from 'lucide-react';

export function SocialImpact() {
  return (
    <section id="impact" className="section-py" style={{ background: 'var(--bg-surface-raised)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-purple">
              <HeartHandshake size={13} />
              Human-Centred Purpose
            </span>
          </div>
          <h2>
            Empowering individuals, <br />
            <span className="gradient-text-purple">strengthening community safety.</span>
          </h2>
          <p>
            Developed for the Seva First Innovation Challenge, RakshaX addresses real-world vulnerability by giving every citizen a dependable personal safety companion.
          </p>
        </div>

        {/* 3 Impact Areas */}
        <div className="impact-areas-grid">
          <div className="glass-panel impact-card">
            <div className="impact-num">01</div>
            <h3>Solo Commuters &amp; Students</h3>
            <p>
              Provides quiet confidence during late-night transit, campus walks, or unfamiliar commutes with a fast, one-tap connection to parents and emergency guardians.
            </p>
          </div>

          <div className="glass-panel impact-card">
            <div className="impact-num">02</div>
            <h3>Seniors &amp; Independent Living</h3>
            <p>
              Minimizes cognitive and physical friction during sudden medical distress or disorientation by automating phone, SMS, and email coordinates with zero confusing menus.
            </p>
          </div>

          <div className="glass-panel impact-card">
            <div className="impact-num">03</div>
            <h3>Community Guardian Circles</h3>
            <p>
              Enables local families and neighborhood groups to form interconnected mutual-support circles, fostering rapid community-led first responder assistance.
            </p>
          </div>
        </div>

        {/* Future Scope Box (Explicitly Labeled) */}
        <div className="future-scope-container glass-panel">
          <div className="future-scope-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="badge-pill badge-cyan">
                <Compass size={13} />
                Future Roadmap
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                (Planned Innovations — Not in Current Build)
              </span>
            </div>
            <h3>Expanding the Boundaries of Personal Protection</h3>
          </div>

          <div className="future-grid">
            <div className="future-item">
              <div className="future-icon">
                <WifiOff size={18} />
              </div>
              <div>
                <strong>Offline Mesh Networking</strong>
                <p>Bluetooth Low Energy (BLE) and Wi-Fi Direct peer relays to propagate SOS alerts when cellular data is offline.</p>
              </div>
            </div>

            <div className="future-item">
              <div className="future-icon">
                <Watch size={18} />
              </div>
              <div>
                <strong>Smartwatch &amp; Wearable Companion</strong>
                <p>Hardware wrist triggers and discreet physical button tap combinations for concealed distress activation.</p>
              </div>
            </div>

            <div className="future-item">
              <div className="future-icon">
                <Activity size={18} />
              </div>
              <div>
                <strong>Automated Fall &amp; Impact Detection</strong>
                <p>Accelerometer and gyroscope sensor fusion to detect hard falls or vehicular accidents and start countdown alerts.</p>
              </div>
            </div>

            <div className="future-item">
              <div className="future-icon">
                <Globe size={18} />
              </div>
              <div>
                <strong>Regional Indian Language Support</strong>
                <p>Voice command recognition and UI localization across Hindi, Tamil, Telugu, Bengali, and Marathi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .impact-areas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 50px;
        }
        .impact-card {
          padding: 34px 28px;
          position: relative;
        }
        .impact-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
        }
        .impact-card h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }
        .impact-card p {
          font-size: 0.94rem;
          line-height: 1.65;
        }

        .future-scope-container {
          padding: 40px;
          border: 1px solid var(--border-bright);
        }
        .future-scope-header {
          margin-bottom: 30px;
        }
        .future-scope-header h3 {
          font-size: 1.45rem;
          margin-top: 12px;
        }
        .future-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .future-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
        }
        .future-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .future-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .future-item p {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 900px) {
          .impact-areas-grid {
            grid-template-columns: 1fr;
          }
          .future-grid {
            grid-template-columns: 1fr;
          }
          .future-scope-container {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
