'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, Shield, ChevronRight } from 'lucide-react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'var(--bg-glass)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border-subtle)'
          : '1px solid transparent',
      }}
    >
      <div className="container" style={{ height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Link */}
        <Link
          href="#top"
          onClick={closeMenu}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          aria-label="RakshaX Home"
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderRadius: '12px',
              background: 'var(--bg-surface-raised)',
              border: '1px solid var(--border-bright)',
              boxShadow: 'var(--shadow-sm)',
              padding: '4px',
            }}
          >
            <Image
              src="/images/logo/rakshax-shield.svg"
              alt="RakshaX Shield Logo"
              width={34}
              height={34}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
              }}
            >
              Raksha<span style={{ color: 'var(--accent-red)' }}>X</span>
            </span>
            <span
              className="brand-tagline"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
              }}
            >
              Always Ready, Always Protected
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#walkthrough" className="nav-link">Walkthrough</a>
          <a href="#screens" className="nav-link">App Screens</a>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#impact" className="nav-link">Impact</a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={17} style={{ color: '#f59e0b' }} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={17} style={{ color: 'var(--primary)' }} />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-actions">
          <button
            onClick={toggleTheme}
            className="theme-icon-only-btn"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: 'var(--primary)' }} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--shadow-lg)',
          }}
          className="mobile-drawer"
        >
          <a href="#about" onClick={closeMenu} className="mobile-link">About RakshaX</a>
          <a href="#features" onClick={closeMenu} className="mobile-link">Core Features</a>
          <a href="#walkthrough" onClick={closeMenu} className="mobile-link">Interactive Walkthrough</a>
          <a href="#screens" onClick={closeMenu} className="mobile-link">Application Gallery</a>
          <a href="#technology" onClick={closeMenu} className="mobile-link">Technical Architecture</a>
          <a href="#impact" onClick={closeMenu} className="mobile-link">Social Impact</a>

          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Color Scheme</span>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              type="button"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={16} style={{ color: '#f59e0b' }} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={16} style={{ color: 'var(--primary)' }} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-actions {
            display: none !important;
          }
        }
        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .theme-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.82rem;
          font-weight: 700;
          transition: all 0.2s ease;
        }
        .theme-toggle-btn:hover {
          background: var(--bg-surface-raised);
          border-color: var(--border-bright);
        }
        .theme-icon-only-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
        }
        .hamburger-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
        }
        .mobile-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 10px 0;
        }
        .mobile-drawer {
          max-height: calc(100dvh - var(--nav-height));
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 520px) {
          .brand-tagline {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
