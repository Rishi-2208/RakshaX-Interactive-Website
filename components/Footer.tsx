'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, ArrowUp, Heart, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-main)' }}>
      {/* Visual Closing Call to Action Banner */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="glass-panel cta-banner">
          <div className="cta-content">
            <span className="badge-pill badge-red" style={{ marginBottom: '16px' }}>
              Seva First Innovation Challenge
            </span>
            <h2>
              Always Ready. <br />
              <span className="gradient-text-red">Always Protected.</span>
            </h2>
            <p className="cta-lead">
              &quot;A safer tomorrow starts with you.&quot; <br />
              RakshaX stands as a dedicated personal emergency safety assistant designed to bring swift, life-saving clarity to moments of crisis.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#screens" className="btn btn-primary">
                Browse App Screens
              </a>
              <a href="#walkthrough" className="btn btn-secondary">
                View Interactive Walkthrough
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="footer-main-row">
          <div className="footer-brand-side">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  background: 'var(--bg-surface-raised)',
                  border: '1px solid var(--border-bright)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                }}
              >
                <Image
                  src="/images/logo/rakshax-shield.svg"
                  alt="RakshaX Shield Logo"
                  width={28}
                  height={28}
                />
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>
                Raksha<span style={{ color: 'var(--accent-red)' }}>X</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', maxWidth: '340px', lineHeight: 1.6 }}>
              A personal emergency safety assistant mobile application created for the Seva First Innovation Challenge by Rishi Upadhyay.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-link-col">
              <h5>Navigation</h5>
              <a href="#about">About Problem</a>
              <a href="#features">Core Features</a>
              <a href="#walkthrough">App Walkthrough</a>
              <a href="#screens">Screenshots Gallery</a>
            </div>

            <div className="footer-link-col">
              <h5>Technical</h5>
              <a href="#technology">System Architecture</a>
              <a href="#technology">Device Permissions</a>
              <a href="#impact">Social Impact</a>
              <a href="#impact">Future Scope</a>
            </div>

            <div className="footer-link-col">
              <h5>Challenge</h5>
              <span className="footer-text-item">Seva First Challenge</span>
              <span className="footer-text-item">Developer: Rishi Upadhyay</span>
              <span className="footer-text-item">Android Platform</span>
              <button onClick={scrollToTop} className="back-to-top-btn" type="button">
                <ArrowUp size={14} /> Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} RakshaX. Built for the Seva First Innovation Challenge.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Verified from 22 actual application screenshots</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .cta-banner {
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 70px;
          border: 1px solid var(--border-bright);
          box-shadow: 0 20px 60px var(--shadow-glow);
        }
        .cta-content {
          max-width: 680px;
          margin: 0 auto;
        }
        .cta-lead {
          font-size: 1.12rem;
          line-height: 1.7;
          margin: 18px 0 28px;
        }

        .footer-main-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }
        .footer-links-group {
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
        }
        .footer-link-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link-col h5 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .footer-link-col a {
          font-size: 0.84rem;
          color: var(--text-tertiary);
          transition: color 0.2s ease;
        }
        .footer-link-col a:hover {
          color: var(--primary);
        }
        .footer-text-item {
          font-size: 0.84rem;
          color: var(--text-tertiary);
        }
        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 6px;
          transition: all 0.2s ease;
        }
        .back-to-top-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          font-size: 0.8rem;
          color: var(--text-tertiary);
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 40px 20px;
          }
          .footer-main-row {
            flex-direction: column;
          }
          .footer-links-group {
            gap: 30px;
          }
        }
        @media (max-width: 480px) {
          .cta-buttons {
            flex-direction: column;
          }
          .cta-buttons :global(.btn) {
            width: 100%;
          }
          .cta-banner {
            padding: 32px 16px;
            margin-bottom: 48px;
          }
          .footer-links-group {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
            width: 100%;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
