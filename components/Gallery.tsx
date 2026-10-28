'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { screenshotsData, ScreenshotItem } from '@/data/screenshots';
import { 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sun, 
  Moon, 
  Layers, 
  Check, 
  ExternalLink,
  Shield,
  Filter
} from 'lucide-react';

export function Gallery() {
  const [themeFilter, setThemeFilter] = useState<'all' | 'light' | 'dark'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    screenshotsData.forEach((s) => set.add(s.category));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered screenshots
  const filteredScreenshots = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return screenshotsData.filter((item) => {
      const matchTheme = themeFilter === 'all' || item.theme === themeFilter;
      const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchTheme && matchCategory && matchQuery;
    });
  }, [themeFilter, categoryFilter, searchQuery]);

  // Modal navigation handlers
  const openModal = (index: number) => {
    setActiveModalIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setActiveModalIndex(null);
    document.body.style.overflow = '';
  }, []);

  const nextModalItem = useCallback(() => {
    if (activeModalIndex === null || filteredScreenshots.length === 0) return;
    setActiveModalIndex((prev) => (prev! + 1) % filteredScreenshots.length);
  }, [activeModalIndex, filteredScreenshots.length]);

  const prevModalItem = useCallback(() => {
    if (activeModalIndex === null || filteredScreenshots.length === 0) return;
    setActiveModalIndex((prev) => (prev! - 1 + filteredScreenshots.length) % filteredScreenshots.length);
  }, [activeModalIndex, filteredScreenshots.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModalItem();
      if (e.key === 'ArrowLeft') prevModalItem();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, closeModal, nextModalItem, prevModalItem]);

  const activeItem = activeModalIndex !== null ? filteredScreenshots[activeModalIndex] : null;

  return (
    <section id="screens" className="section-py" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-purple">
              <Layers size={13} />
              Verified Application Archive
            </span>
          </div>
          <h2>
            Authentic mobile app <br />
            <span className="gradient-text-purple">screenshots & interfaces.</span>
          </h2>
          <p>
            Explore all 22 mobile screenshots from the RakshaX project repository. Filter by theme, search by capability, and inspect full high-resolution views.
          </p>
        </div>

        {/* Gallery Controls Bar */}
        <div className="glass-panel controls-panel">
          {/* Theme Filters */}
          <div className="filter-pill-group" role="group" aria-label="Filter by theme">
            <button
              onClick={() => setThemeFilter('all')}
              className={`pill-btn ${themeFilter === 'all' ? 'active' : ''}`}
              type="button"
            >
              All Themes (22)
            </button>
            <button
              onClick={() => setThemeFilter('dark')}
              className={`pill-btn ${themeFilter === 'dark' ? 'active' : ''}`}
              type="button"
            >
              <Moon size={13} />
              Dark Mode (11)
            </button>
            <button
              onClick={() => setThemeFilter('light')}
              className={`pill-btn ${themeFilter === 'light' ? 'active' : ''}`}
              type="button"
            >
              <Sun size={13} />
              Light Mode (11)
            </button>
          </div>

          {/* Search Box */}
          <div className="search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="search"
              placeholder="Search screens (e.g. SOS, contacts, login)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search app screenshots"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                aria-label="Clear search"
                type="button"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="category-chips-row">
          <span className="category-label">
            <Filter size={13} />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`cat-chip ${categoryFilter === cat ? 'active' : ''}`}
              type="button"
            >
              {cat === 'all' ? 'All Modules' : cat}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="results-bar">
          <span>Showing <strong>{filteredScreenshots.length}</strong> of {screenshotsData.length} screens</span>
          {(themeFilter !== 'all' || categoryFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setThemeFilter('all');
                setCategoryFilter('all');
                setSearchQuery('');
              }}
              className="reset-filters-link"
              type="button"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Grid of Screenshots */}
        {filteredScreenshots.length === 0 ? (
          <div className="glass-panel empty-state">
            <Shield size={36} style={{ color: 'var(--text-tertiary)', marginBottom: '12px' }} />
            <h3>No screens match your search</h3>
            <p>Try searching for different keywords like &quot;SOS&quot;, &quot;Contacts&quot;, &quot;OTP&quot;, or &quot;Privacy&quot;.</p>
            <button
              onClick={() => {
                setThemeFilter('all');
                setCategoryFilter('all');
                setSearchQuery('');
              }}
              className="btn btn-secondary"
              style={{ marginTop: '16px' }}
              type="button"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="gallery-grid">
            {filteredScreenshots.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal(index)}
                className="glass-panel screen-thumb-card"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(index);
                  }
                }}
                aria-label={`View ${item.title} (${item.theme} mode)`}
              >
                {/* Image Wrap */}
                <div className="thumb-image-wrap">
                  <Image
                    src={item.src}
                    alt={`${item.title} screenshot (${item.theme} mode)`}
                    width={260}
                    height={540}
                    loading="lazy"
                    className="thumb-image"
                  />
                  <div className="thumb-hover-overlay">
                    <span className="overlay-btn">
                      <Maximize2 size={16} />
                      Inspect Screen
                    </span>
                  </div>
                  {/* Theme Badge */}
                  <span className={`theme-badge-overlay ${item.theme}`}>
                    {item.theme === 'dark' ? <Moon size={10} /> : <Sun size={10} />}
                    {item.theme}
                  </span>
                </div>

                {/* Card Meta */}
                <div className="thumb-meta">
                  <div className="thumb-top-line">
                    <span className="thumb-category">{item.category}</span>
                    <span className="thumb-pill">{item.badge}</span>
                  </div>
                  <h4 className="thumb-title">{item.title}</h4>
                  <p className="thumb-summary">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox / Modal */}
        {activeItem && (
          <div
            className="lightbox-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} Lightbox Viewer`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="lightbox-close-btn"
              aria-label="Close modal"
              type="button"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevModalItem}
              className="lightbox-nav-btn prev"
              aria-label="Previous screen"
              type="button"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextModalItem}
              className="lightbox-nav-btn next"
              aria-label="Next screen"
              type="button"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Content Box */}
            <div className="lightbox-content-box glass-panel">
              <div className="lightbox-image-side">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  width={340}
                  height={720}
                  priority
                  className="lightbox-main-img"
                />
              </div>

              <div className="lightbox-info-side">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className={`badge-pill ${activeItem.theme === 'dark' ? 'badge-purple' : 'badge-cyan'}`}>
                    {activeItem.theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
                    {activeItem.theme.toUpperCase()} MODE
                  </span>
                  <span className="badge-pill" style={{ background: 'var(--bg-surface-raised)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>
                    {activeItem.category}
                  </span>
                </div>

                <h3>{activeItem.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {activeItem.description}
                </p>

                <div className="lightbox-features-box">
                  <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', fontWeight: 700, marginBottom: '10px' }}>
                    Key Screen Capabilities
                  </div>
                  {activeItem.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                      <Check size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="lightbox-tags-row">
                  {activeItem.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="lightbox-counter-footer">
                  <span>
                    Screen <strong>{activeModalIndex! + 1}</strong> of <strong>{filteredScreenshots.length}</strong>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    Tip: Use ← → keys to navigate, Esc to close
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .controls-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          margin-bottom: 16px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .filter-pill-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          transition: all 0.2s ease;
        }
        .pill-btn:hover {
          border-color: var(--border-bright);
          color: var(--text-primary);
        }
        .pill-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
          box-shadow: 0 2px 10px var(--primary-glow);
        }

        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          flex-grow: 1;
          max-width: 380px;
          min-width: 240px;
        }
        :global(.search-icon) {
          position: absolute;
          left: 14px;
          color: var(--text-tertiary);
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          padding: 10px 36px 10px 40px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .search-input:focus {
          border-color: var(--primary);
        }
        .clear-search-btn {
          position: absolute;
          right: 12px;
          color: var(--text-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Category Chips */
        .category-chips-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .category-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-right: 4px;
        }
        .cat-chip {
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .cat-chip:hover {
          color: var(--text-primary);
          border-color: var(--border-bright);
        }
        .cat-chip.active {
          background: var(--bg-surface-raised);
          border-color: var(--primary);
          color: var(--primary);
          font-weight: 700;
        }

        /* Results Bar */
        .results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-tertiary);
          margin-bottom: 24px;
        }
        .reset-filters-link {
          color: var(--primary);
          font-weight: 700;
          text-decoration: underline;
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .screen-thumb-card {
          padding: 12px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .screen-thumb-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-bright);
          box-shadow: var(--shadow-md);
        }
        .thumb-image-wrap {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #000;
          aspect-ratio: 9 / 18.5;
          margin-bottom: 14px;
        }
        :global(.thumb-image) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          display: block;
        }
        .thumb-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 20, 0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .screen-thumb-card:hover .thumb-hover-overlay {
          opacity: 1;
        }
        .overlay-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #0c0a14;
          font-size: 0.82rem;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }
        .theme-badge-overlay {
          position: absolute;
          top: 10px;
          right: 10px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .theme-badge-overlay.dark {
          background: rgba(10, 8, 20, 0.85);
          color: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .theme-badge-overlay.light {
          background: rgba(255, 255, 255, 0.9);
          color: #1e1b4b;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .thumb-meta {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .thumb-top-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        .thumb-category {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .thumb-pill {
          font-size: 0.68rem;
          color: var(--text-tertiary);
        }
        .thumb-title {
          font-size: 1rem;
          margin-bottom: 6px;
          color: var(--text-primary);
        }
        .thumb-summary {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .empty-state {
          padding: 60px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Lightbox Overlay */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(4, 3, 10, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 60px;
        }
        .lightbox-close-btn {
          position: absolute;
          top: 24px;
          right: 28px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.2s ease;
          z-index: 10;
        }
        .lightbox-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.08);
        }
        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.2s ease;
          z-index: 10;
        }
        .lightbox-nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.08);
        }
        .lightbox-nav-btn.prev {
          left: 20px;
        }
        .lightbox-nav-btn.next {
          right: 20px;
        }

        .lightbox-content-box {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          max-width: 900px;
          width: 100%;
          max-height: 88vh;
          overflow: hidden;
          background: var(--bg-surface);
          border: 1px solid var(--border-bright);
        }
        .lightbox-image-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #000000;
          overflow: hidden;
        }
        :global(.lightbox-main-img) {
          max-height: 74vh !important;
          width: auto !important;
          object-fit: contain !important;
          border-radius: var(--radius-md);
        }
        .lightbox-info-side {
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .lightbox-info-side h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        .lightbox-features-box {
          padding: 16px;
          border-radius: var(--radius-md);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }
        .lightbox-tags-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .tag-chip {
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: var(--bg-surface-raised);
          font-size: 0.72rem;
          color: var(--text-tertiary);
        }
        .lightbox-counter-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1100px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 820px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .lightbox-overlay {
            padding: 20px 10px;
          }
          .lightbox-content-box {
            grid-template-columns: 1fr;
            max-height: 92vh;
            overflow-y: auto;
          }
          .lightbox-image-side {
            padding: 16px;
          }
          :global(.lightbox-main-img) {
            max-height: 45vh !important;
          }
          .lightbox-info-side {
            padding: 20px;
          }
          .lightbox-nav-btn {
            width: 40px;
            height: 40px;
          }
          .lightbox-nav-btn.prev {
            left: 8px;
          }
          .lightbox-nav-btn.next {
            right: 8px;
          }
        }
        @media (max-width: 500px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
