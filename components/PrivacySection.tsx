'use client';

import React from 'react';
import { ShieldCheck, MapPin, MessageSquare, Users, EyeOff, AlertCircle, RefreshCw } from 'lucide-react';

export function PrivacySection() {
  return (
    <section className="section-py" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-emerald">
              <ShieldCheck size={13} />
              Privacy &amp; Data Ethics
            </span>
          </div>
          <h2>
            Protection without intrusion: <br />
            <span className="gradient-text-purple">safety with zero compromise.</span>
          </h2>
          <p>
            Emergency applications require sensitive permissions. RakshaX is architected on a strict &quot;SOS-Only&quot; principle, ensuring your personal coordinates remain completely private during daily life.
          </p>
        </div>

        {/* 4 Privacy Commitments Grid */}
        <div className="privacy-cards-grid">
          {/* Card 1 */}
          <div className="glass-panel privacy-card">
            <div className="privacy-icon-box emerald">
              <MapPin size={22} />
            </div>
            <h3>Location strictly during SOS</h3>
            <p>
              GPS coordinates are polled only at the exact instant an emergency SOS is dispatched. There is zero background tracking or location polling during ordinary day-to-day device use.
            </p>
            <div className="permission-indicator">
              <code>ACCESS_FINE_LOCATION</code>
              <span>Engaged only upon active SOS trigger</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel privacy-card">
            <div className="privacy-icon-box purple">
              <MessageSquare size={22} />
            </div>
            <h3>Targeted Emergency SMS</h3>
            <p>
              Telephony access is scoped strictly to dispatching distress alerts to user-designated trusted contacts. No marketing messages, unverified broadcasts, or third-party gateways.
            </p>
            <div className="permission-indicator">
              <code>SEND_SMS</code>
              <span>Direct operator SMS to saved guardians</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel privacy-card">
            <div className="privacy-icon-box cyan">
              <Users size={22} />
            </div>
            <h3>Local Contact Circle</h3>
            <p>
              Contacts permission is requested exclusively to allow users to select trusted family members and guardians from their phonebook. Contact lists are never exported to commercial servers.
            </p>
            <div className="permission-indicator">
              <code>READ_CONTACTS</code>
              <span>Local device selection &amp; storage</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel privacy-card">
            <div className="privacy-icon-box red">
              <RefreshCw size={22} />
            </div>
            <h3>Controlled 15-20 Min Cycle</h3>
            <p>
              During an ongoing crisis, automated background emails update saved contacts every 15-20 minutes. As soon as the user confirms safety, all background polling immediately terminates.
            </p>
            <div className="permission-indicator">
              <code>BACKGROUND_JOB</code>
              <span>Terminated immediately when SOS cleared</span>
            </div>
          </div>
        </div>

        {/* Zero Third Party Guarantee */}
        <div className="guarantee-box glass-panel">
          <div className="guarantee-icon">
            <EyeOff size={26} color="var(--accent-emerald)" />
          </div>
          <div>
            <h4>Zero Commercial Advertising or Third-Party Data Selling</h4>
            <p>
              RakshaX does not monetize user distress. The project is created as a social innovation contribution for the Seva First Innovation Challenge, strictly prioritizing human life, transparent permissions, and reliable mobile safety.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        .privacy-card {
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
        }
        .privacy-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .privacy-icon-box.emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .privacy-icon-box.purple {
          background: rgba(155, 99, 255, 0.12);
          color: var(--primary);
          border: 1px solid rgba(155, 99, 255, 0.25);
        }
        .privacy-icon-box.cyan {
          background: rgba(56, 189, 248, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }
        .privacy-icon-box.red {
          background: var(--accent-red-soft);
          color: var(--accent-red);
          border: 1px solid rgba(255, 56, 76, 0.25);
        }
        .privacy-card h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }
        .privacy-card p {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .permission-indicator {
          padding: 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
        }
        .permission-indicator code {
          display: block;
          font-family: monospace;
          font-size: 0.74rem;
          color: var(--primary);
          margin-bottom: 3px;
        }
        .permission-indicator span {
          display: block;
          font-size: 0.74rem;
          color: var(--text-tertiary);
        }

        .guarantee-box {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 30px;
          border-left: 4px solid var(--accent-emerald);
        }
        .guarantee-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .guarantee-box h4 {
          font-size: 1.1rem;
          margin-bottom: 6px;
        }
        .guarantee-box p {
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .privacy-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .privacy-cards-grid {
            grid-template-columns: 1fr;
          }
          .guarantee-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
