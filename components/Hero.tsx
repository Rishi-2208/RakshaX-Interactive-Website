'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Shield, Radio, Users, MapPin, Mic, ArrowUpRight, ChevronRight, Lock } from 'lucide-react';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: '40px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        className="ambient-glow ambient-glow-purple"
        style={{
          width: '520px',
          height: '520px',
          top: '-80px',
          left: '-140px',
        }}
      />
      <div
        className="ambient-glow ambient-glow-red"
        style={{
          width: '460px',
          height: '460px',
          top: '160px',
          right: '-120px',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Mission & Copy */}
          <div className="hero-content">
            {/* Challenge & Category Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span className="badge-pill badge-red">
                <span className="live-ping-dot" />
                Seva First Innovation Challenge
              </span>
              <span className="badge-pill badge-purple">
                <Shield size={13} />
                Android Emergency Safety Assistant
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ marginBottom: '22px' }}>
              Safety should be <br />
              <span className="gradient-text-purple">within reach.</span>
            </h1>

            {/* Tagline & Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '560px',
              }}
            >
              <strong>RakshaX</strong> is an Android emergency companion designed to bring instant one-tap SOS alerts, trusted contact dispatch, and location-aware protection into one accessible mobile experience.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="#screens" className="btn btn-primary">
                Explore App Screens
                <ArrowUpRight size={18} />
              </a>
              <a href="#walkthrough" className="btn btn-secondary">
                Interactive Walkthrough
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Trust Points */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-icon red">
                  <Radio size={16} />
                </div>
                <div>
                  <strong>Instant SOS</strong>
                  <span>Single-tap alert loop</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon purple">
                  <Users size={16} />
                </div>
                <div>
                  <strong>Trusted Circle</strong>
                  <span>SMS & Email routing</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon cyan">
                  <Mic size={16} />
                </div>
                <div>
                  <strong>Jarvis Assistant</strong>
                  <span>Voice safety triggers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup with Real App Screenshot */}
          <div className="hero-visual">
            {/* Concentric Ambient Rings */}
            <div className="orbit-ring ring-1" />
            <div className="orbit-ring ring-2" />

            {/* Floating Top Telemetry Badge */}
            <div className="floating-badge badge-top-right glass-panel">
              <div className="badge-icon-box pulse-red">
                <Radio size={18} color="#ff384c" />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  Emergency Action
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  One-Tap SOS Dispatch
                </div>
              </div>
            </div>

            {/* Realistic Mobile Device Frame */}
            <div className="phone-device-wrap">
              <div className="phone-bezel">
                <div className="phone-camera-island" />
                <div className="phone-screen-container">
                  <Image
                    src={theme === 'light' ? '/images/screenshots/light/Dashboard-Light-_.jpg' : '/images/screenshots/dark/Dashboard-Dark-_.jpg'}
                    alt="RakshaX Emergency SOS Dashboard Screenshot"
                    width={320}
                    height={680}
                    priority
                    className="phone-screen-image"
                  />
                </div>
                <div className="phone-home-indicator" />
              </div>
            </div>

            {/* Floating Bottom Telemetry Badge */}
            <div className="floating-badge badge-bottom-left glass-panel">
              <div className="badge-icon-box pulse-purple">
                <MapPin size={18} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  Live Location
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  GPS via SMS & Email
                </div>
              </div>
            </div>

            {/* Floating Privacy Pill */}
            <div className="floating-badge badge-bottom-right glass-panel">
              <div className="badge-icon-box">
                <Lock size={16} color="var(--accent-emerald)" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>
                  SOS-Only Tracking
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                  100% Private
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 40px;
          min-height: calc(100vh - var(--nav-height) - 100px);
        }
        .hero-content {
          max-width: 620px;
        }
        .live-ping-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-red);
          box-shadow: 0 0 10px var(--accent-red);
          display: inline-block;
          animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .hero-highlights {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .highlight-item strong {
          display: block;
          font-size: 0.9rem;
          color: var(--text-primary);
        }
        .highlight-item span {
          display: block;
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }
        .highlight-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .highlight-icon.red {
          background: var(--accent-red-soft);
          color: var(--accent-red);
          border: 1px solid rgba(255, 56, 76, 0.25);
        }
        .highlight-icon.purple {
          background: rgba(155, 99, 255, 0.12);
          color: var(--primary);
          border: 1px solid rgba(155, 99, 255, 0.25);
        }
        .highlight-icon.cyan {
          background: rgba(56, 189, 248, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        /* Hero Visual Phone Device */
        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 580px;
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed var(--border-bright);
          pointer-events: none;
          opacity: 0.4;
        }
        .ring-1 {
          width: 440px;
          height: 440px;
        }
        .ring-2 {
          width: 580px;
          height: 580px;
          opacity: 0.2;
        }
        .phone-device-wrap {
          position: relative;
          z-index: 2;
          width: 290px;
          filter: drop-shadow(0 28px 48px rgba(0, 0, 0, 0.45));
          transition: transform 0.3s ease;
        }
        .phone-device-wrap:hover {
          transform: translateY(-4px) scale(1.01);
        }
        .phone-bezel {
          background: var(--phone-frame);
          border-radius: 44px;
          padding: 10px;
          border: 2px solid var(--border-bright);
          position: relative;
          box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.15);
        }
        .phone-camera-island {
          width: 80px;
          height: 16px;
          background: var(--phone-notch);
          border-radius: 12px;
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }
        .phone-screen-container {
          position: relative;
          border-radius: 34px;
          overflow: hidden;
          background: #000000;
          aspect-ratio: 19 / 40;
        }
        :global(.phone-screen-image) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
        }
        .phone-home-indicator {
          width: 90px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }
        .badge-top-right {
          top: 30px;
          right: -20px;
        }
        .badge-bottom-left {
          bottom: 40px;
          left: -30px;
        }
        .badge-bottom-right {
          bottom: -15px;
          right: 20px;
        }
        .badge-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pulse-red {
          box-shadow: 0 0 16px var(--accent-red-glow);
        }
        .pulse-purple {
          box-shadow: 0 0 16px var(--primary-glow);
        }

        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }
          .hero-content {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-highlights {
            justify-content: center;
          }
          .badge-top-right {
            right: 10px;
            top: 10px;
          }
          .badge-bottom-left {
            left: 10px;
            bottom: 20px;
          }
          .badge-bottom-right {
            display: none;
          }
          .ring-1, .ring-2 {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .phone-device-wrap {
            width: 250px;
          }
          .floating-badge {
            padding: 8px 12px;
            gap: 8px;
          }
          .badge-top-right {
            right: -5px;
            top: 5px;
          }
          .badge-bottom-left {
            left: -5px;
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}
