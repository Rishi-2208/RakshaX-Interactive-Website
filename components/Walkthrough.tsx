'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { walkthroughSteps } from '@/data/walkthrough';
import { useTheme } from './ThemeProvider';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Sun,
  Moon,
  Layers
} from 'lucide-react';

export function Walkthrough() {
  const { theme } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [screenshotThemeOverride, setScreenshotThemeOverride] = useState<'auto' | 'dark' | 'light'>('auto');

  const currentStep = walkthroughSteps[activeStepIndex];

  // Decide which screenshot image to display
  const effectiveTheme = screenshotThemeOverride === 'auto' ? theme : screenshotThemeOverride;
  const currentImageSrc = effectiveTheme === 'light' ? currentStep.lightImage : currentStep.darkImage;

  const nextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % walkthroughSteps.length);
  };

  const prevStep = () => {
    setActiveStepIndex((prev) => (prev - 1 + walkthroughSteps.length) % walkthroughSteps.length);
  };

  return (
    <section id="walkthrough" className="section-py" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-cyan">
              <Layers size={13} />
              Interactive Experience
            </span>
          </div>
          <h2>
            Follow the emergency flow <br />
            <span className="gradient-text-purple">step by step.</span>
          </h2>
          <p>
            Experience how a user interacts with RakshaX across the complete safety lifecycle, from onboarding to live emergency coordination.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="walkthrough-tabs-bar">
          {walkthroughSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`step-tab-btn ${isActive ? 'active' : ''}`}
                type="button"
                aria-selected={isActive}
              >
                <span className="step-num-pill">{step.step}</span>
                <span className="step-tab-title">{step.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Walkthrough Card */}
        <div className="glass-panel walkthrough-stage">
          <div className="walkthrough-grid">
            {/* Left: Step Explanations & Details */}
            <div className="step-info-col">
              <div className="step-status-header">
                <span className="badge-pill badge-purple">
                  Step 0{currentStep.step} of 0{walkthroughSteps.length}
                </span>

                {/* Screenshot Theme Toggle */}
                <div className="screenshot-theme-toggle">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>Preview:</span>
                  <button
                    onClick={() => setScreenshotThemeOverride(screenshotThemeOverride === 'dark' ? 'light' : 'dark')}
                    className="theme-switch-btn"
                    type="button"
                  >
                    {effectiveTheme === 'dark' ? (
                      <>
                        <Moon size={14} style={{ color: 'var(--primary)' }} />
                        <span>Dark App UI</span>
                      </>
                    ) : (
                      <>
                        <Sun size={14} style={{ color: '#f59e0b' }} />
                        <span>Light App UI</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <h3>{currentStep.title}</h3>
              <div className="step-tagline">{currentStep.tagline}</div>
              <p className="step-desc">{currentStep.description}</p>

              {/* Key Takeaways */}
              <div className="key-points-list">
                {currentStep.keyPoints.map((point, idx) => (
                  <div key={idx} className="key-point-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Step Metrics */}
              <div className="metrics-row">
                {currentStep.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-box">
                    <span className="metric-label">{metric.label}</span>
                    <strong className="metric-value">{metric.value}</strong>
                  </div>
                ))}
              </div>

              {/* Step Controls */}
              <div className="step-controls">
                <button
                  onClick={prevStep}
                  className="btn btn-secondary btn-nav-step"
                  type="button"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  className="btn btn-primary btn-nav-step"
                  type="button"
                  aria-label="Next step"
                >
                  Next Step
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right: Realistic Device Preview with Actual Screenshot */}
            <div className="step-preview-col">
              <div className="walkthrough-phone-frame">
                <div className="walkthrough-phone-bezel">
                  <div className="phone-island-top" />
                  <div className="screen-frame">
                    <Image
                      src={currentImageSrc}
                      alt={`${currentStep.title} app screenshot`}
                      width={300}
                      height={650}
                      className="screen-img"
                      priority
                    />
                  </div>
                  <div className="phone-indicator-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .walkthrough-tabs-bar {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 16px;
          margin-bottom: 24px;
          scrollbar-width: thin;
        }
        .step-tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.85rem;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .step-tab-btn:hover {
          border-color: var(--border-bright);
          color: var(--text-primary);
        }
        .step-tab-btn.active {
          background: var(--bg-card);
          border-color: var(--primary);
          color: var(--text-primary);
          box-shadow: 0 4px 18px var(--primary-glow);
        }
        .step-num-pill {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(155, 99, 255, 0.15);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .step-tab-btn.active .step-num-pill {
          background: var(--primary);
          color: #ffffff;
        }

        .walkthrough-stage {
          padding: 40px;
        }
        .walkthrough-tabs-bar {
          -webkit-overflow-scrolling: touch;
        }
        .step-tab-btn {
          flex-shrink: 0;
        }
        .walkthrough-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 40px;
        }
        .step-status-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .screenshot-theme-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .theme-switch-btn {
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
        }
        .step-info-col h3 {
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          margin-bottom: 8px;
        }
        .step-tagline {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
        }
        .step-desc {
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .key-points-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
          padding: 18px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
        }
        .key-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-primary);
          line-height: 1.45;
        }
        .metrics-row {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .metric-box {
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
        }
        .metric-label {
          display: block;
          font-size: 0.72rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .metric-value {
          display: block;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .step-controls {
          display: flex;
          gap: 14px;
        }
        .btn-nav-step {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        /* Phone Mockup */
        .step-preview-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .walkthrough-phone-frame {
          width: 270px;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.45));
        }
        .walkthrough-phone-bezel {
          background: var(--phone-frame);
          border-radius: 40px;
          padding: 9px;
          border: 2px solid var(--border-bright);
          position: relative;
        }
        .phone-island-top {
          width: 70px;
          height: 14px;
          background: var(--phone-notch);
          border-radius: 10px;
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }
        .screen-frame {
          border-radius: 32px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 19 / 40;
        }
        :global(.screen-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
        }
        .phone-indicator-bottom {
          width: 80px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        @media (max-width: 900px) {
          .walkthrough-grid {
            grid-template-columns: 1fr;
          }
          .walkthrough-stage {
            padding: 24px;
          }
          .step-preview-col {
            order: -1;
            margin-bottom: 20px;
          }
          .walkthrough-phone-frame {
            width: 230px;
          }
        }
        @media (max-width: 480px) {
          .walkthrough-stage {
            padding: 16px;
          }
          .walkthrough-phone-frame {
            width: min(220px, 62vw);
          }
          .walkthrough-tabs-bar {
            margin-inline: -4px;
            padding-inline: 4px;
          }
          .step-tab-btn {
            padding: 9px 12px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
