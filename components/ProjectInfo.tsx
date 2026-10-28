'use client';

import React from 'react';
import Image from 'next/image';
import { Award, User, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function ProjectInfo() {
  return (
    <section className="section-py" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-purple">
              <Award size={13} />
              Challenge Submission
            </span>
          </div>
          <h2>
            Project &amp; Developer <br />
            <span className="gradient-text-purple">attribution record.</span>
          </h2>
          <p>
            Official project dossier for the Seva First Innovation Challenge, verified directly from the application codebase and assets.
          </p>
        </div>

        {/* Project Card & Developer Info */}
        <div className="project-grid">
          {/* Challenge & Project Summary */}
          <div className="glass-panel project-summary-card">
            <div className="card-tag">Innovation Dossier</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '12px',
                  background: 'var(--bg-surface-raised)',
                  border: '1px solid var(--border-bright)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                }}
              >
                <Image
                  src="/images/logo/rakshax-shield.svg"
                  alt="RakshaX Emblem"
                  width={38}
                  height={38}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>RakshaX</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  ALWAYS READY, ALWAYS PROTECTED
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '22px' }}>
              RakshaX is a personal emergency safety assistant mobile application created to eliminate hesitation and provide an immediate, accessible safety lifeline. Submitted for the <strong>Seva First Innovation Challenge</strong>, it integrates rapid one-tap SOS triggering, dual-channel SMS and Email coordinates dispatch, verified contact directories, and voice-assisted emergency readiness.
            </p>

            <div className="meta-table">
              <div className="meta-row">
                <span className="meta-key">Innovation Challenge</span>
                <span className="meta-val">Seva First Innovation Challenge</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Target Ecosystem</span>
                <span className="meta-val">Android Mobile Platform</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Primary Focus</span>
                <span className="meta-val">Emergency Safety &amp; Rapid Location Dispatch</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Verified Status</span>
                <span className="meta-val" style={{ color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} /> 22 Verified Screens Documented
                </span>
              </div>
            </div>
          </div>

          {/* Developer Attribution Card */}
          <div className="glass-panel dev-card">
            <div className="card-tag">Developer Attribution</div>
            <div className="dev-header">
              <div className="dev-avatar">
                <User size={28} color="var(--primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', margin: '0 0 4px' }}>Rishi Upadhyay</h3>
                <span className="dev-role">Android Developer</span>
              </div>
            </div>

            <div className="dev-quote-box">
              <p>
                &quot;Android Developer passionate about building real-world applications that solve tangible human problems.&quot;
              </p>
              <span className="dev-source">— Verified from in-app Help &amp; About documentation</span>
            </div>

            <div className="dev-competencies">
              <div className="comp-item">
                <Code2 size={16} color="var(--primary)" />
                <div>
                  <strong>Native Android Architecture</strong>
                  <span>UI layout, event loops &amp; Material theming</span>
                </div>
              </div>

              <div className="comp-item">
                <ShieldCheck size={16} color="var(--accent-red)" />
                <div>
                  <strong>Emergency Systems Engineering</strong>
                  <span>Location APIs, SMS Telephony &amp; Email pipelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
        }
        .project-summary-card, .dev-card {
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .card-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .meta-table {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
        }
        .meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.84rem;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .meta-row:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        .meta-key {
          color: var(--text-tertiary);
        }
        .meta-val {
          font-weight: 600;
          color: var(--text-primary);
          text-align: right;
        }

        /* Developer Card */
        .dev-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 22px;
        }
        .dev-avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(155, 99, 255, 0.12);
          border: 1px solid rgba(155, 99, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dev-role {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
        }

        .dev-quote-box {
          padding: 16px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }
        .dev-quote-box p {
          font-size: 0.9rem;
          font-style: italic;
          line-height: 1.6;
          margin: 0 0 6px;
          color: var(--text-primary);
        }
        .dev-source {
          display: block;
          font-size: 0.72rem;
          color: var(--text-tertiary);
        }

        .dev-competencies {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .comp-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .comp-item strong {
          display: block;
          font-size: 0.88rem;
          color: var(--text-primary);
        }
        .comp-item span {
          display: block;
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
