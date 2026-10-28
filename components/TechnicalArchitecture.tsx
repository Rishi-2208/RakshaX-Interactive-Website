'use client';

import React, { useState } from 'react';
import { 
  Smartphone, 
  ShieldAlert, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Radio, 
  Database, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  Info 
} from 'lucide-react';

interface ArchNode {
  id: string;
  layer: string;
  title: string;
  icon: any;
  iconColor: string;
  summary: string;
  verifiedDetails: string[];
}

export function TechnicalArchitecture() {
  const [activeNodeId, setActiveNodeId] = useState<string>('sos-engine');

  const nodes: ArchNode[] = [
    {
      id: 'ui-layer',
      layer: 'Layer 01 — Client UI',
      title: 'Android Native Interface',
      icon: Smartphone,
      iconColor: 'var(--primary)',
      summary: 'High-contrast mobile UI engineered for stress scenarios with instantaneous navigation and adaptive day/night theme.',
      verifiedDetails: [
        'Dedicated Android application views for SOS, Contacts, Help, and Privacy',
        'High contrast light and dark modes tailored for daylight and night visibility',
        'One-touch responsive interaction with immediate visual haptic/color cues'
      ]
    },
    {
      id: 'permission-subsystem',
      layer: 'Layer 02 — Android OS Permissions',
      title: 'Scoped Device Permissions',
      icon: Lock,
      iconColor: 'var(--accent-red)',
      summary: 'Transparent, least-privilege permission model adhering strictly to Android safety guidelines.',
      verifiedDetails: [
        'Location (GPS): Queried strictly when SOS button is tapped',
        'SMS Telephony: Used only to broadcast emergency text messages',
        'Contacts: Used to save emergency phone numbers and recipient emails',
        'Microphone: Enables the Jarvis voice safety command listener'
      ]
    },
    {
      id: 'sos-engine',
      layer: 'Layer 03 — Core Orchestrator',
      title: 'Emergency SOS Broadcast Engine',
      icon: Radio,
      iconColor: 'var(--accent-red)',
      summary: 'The central trigger coordinating simultaneous SMS dispatch, email broadcast, and periodic background tracking.',
      verifiedDetails: [
        'Single-tap trigger immediately gathers current GPS latitude/longitude',
        'Parallel dispatch to all pre-saved emergency contacts',
        'Activates recurring background alarm to update coordinates every 15-20 min',
        'Jarvis Voice Assistant active state monitoring'
      ]
    },
    {
      id: 'dispatch-channels',
      layer: 'Layer 04 — Dual Delivery Channels',
      title: 'SMS & Email Communication Bus',
      icon: MessageSquare,
      iconColor: 'var(--accent-cyan)',
      summary: 'Redundant multi-channel transmission ensuring messages reach contacts even in varying network environments.',
      verifiedDetails: [
        'SMS Channel: High-priority immediate text notification to recipient phones',
        'Email Channel: Detailed emergency dispatch with clickable Google Maps URL',
        'Zero dependencies on third-party commercial tracking servers'
      ]
    },
    {
      id: 'background-cycle',
      layer: 'Layer 05 — Persistence & Safety Cycle',
      title: '15-20 Min Background Trail',
      icon: Cpu,
      iconColor: 'var(--accent-emerald)',
      summary: 'Automated periodic safety pulse continuing to send location coordinates until emergency resolution.',
      verifiedDetails: [
        'Scheduled background updates running every 15 to 20 minutes',
        'Prevents location loss if the user is moving or unable to speak',
        'Automatically halts as soon as the user cancels the SOS event'
      ]
    }
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <section id="technology" className="section-py" style={{ background: 'var(--bg-surface-raised)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-purple">
              <Cpu size={13} />
              Verified Architecture
            </span>
          </div>
          <h2>
            Technical architecture & <br />
            <span className="gradient-text-purple">data flow diagram.</span>
          </h2>
          <p>
            Representing the verified Android subsystems, device permission gates, and dual-channel dispatch pipelines documented in the project records.
          </p>
        </div>

        {/* Architecture Layout */}
        <div className="arch-interactive-wrapper">
          {/* Left Diagram / Node Flow */}
          <div className="glass-panel arch-flow-col">
            <div className="flow-header">
              <span className="flow-dots">
                <i style={{ background: '#ff384c' }} />
                <i style={{ background: '#a855f7' }} />
                <i style={{ background: '#10b981' }} />
              </span>
              <span>RAKSHAX // ANDROID EMERGENCY PIPELINE</span>
            </div>

            <div className="nodes-stack">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                const isSelected = node.id === activeNodeId;

                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => setActiveNodeId(node.id)}
                      className={`arch-node-box ${isSelected ? 'active' : ''}`}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="node-num">0{index + 1}</div>
                      <div
                        className="node-icon-box"
                        style={{
                          background: `color-mix(in srgb, ${node.iconColor} 15%, transparent)`,
                          color: node.iconColor,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="node-text">
                        <span className="node-layer-name">{node.layer}</span>
                        <strong>{node.title}</strong>
                      </div>
                      <div className="node-arrow">→</div>
                    </div>

                    {index < nodes.length - 1 && (
                      <div className="node-connector">
                        <div className="connector-line" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Inspector Panel */}
          <div className="glass-panel arch-inspector-col">
            <div className="inspector-badge">
              <Info size={14} />
              <span>Module Inspector</span>
            </div>

            <span className="inspector-layer">{activeNode.layer}</span>
            <h3>{activeNode.title}</h3>
            <p className="inspector-summary">{activeNode.summary}</p>

            <div className="inspector-spec-box">
              <div className="spec-heading">Verified Technical Specifications</div>
              {activeNode.verifiedDetails.map((item, idx) => (
                <div key={idx} className="spec-item">
                  <CheckCircle2 size={16} style={{ color: activeNode.iconColor, flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="tech-stack-tags">
              <span className="tech-tag">Android SDK</span>
              <span className="tech-tag">LocationProvider</span>
              <span className="tech-tag">SmsManager</span>
              <span className="tech-tag">Jarvis Voice Engine</span>
              <span className="tech-tag">Background Alarm</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .arch-interactive-wrapper {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 30px;
          align-items: start;
        }
        .arch-flow-col {
          padding: 24px;
        }
        .flow-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 20px;
        }
        .flow-dots {
          display: flex;
          gap: 5px;
        }
        .flow-dots i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .nodes-stack {
          display: flex;
          flex-direction: column;
        }
        .arch-node-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .arch-node-box:hover {
          border-color: var(--border-bright);
          transform: translateX(4px);
        }
        .arch-node-box.active {
          background: var(--bg-surface-raised);
          border-color: var(--primary);
          box-shadow: 0 4px 20px var(--primary-glow);
        }
        .node-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-tertiary);
        }
        .node-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-text {
          flex-grow: 1;
        }
        .node-layer-name {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .node-text strong {
          display: block;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .node-arrow {
          font-size: 1.1rem;
          color: var(--text-tertiary);
          transition: transform 0.2s ease;
        }
        .arch-node-box.active .node-arrow {
          color: var(--primary);
          transform: translateX(3px);
        }

        .node-connector {
          display: flex;
          justify-content: center;
          padding: 6px 0;
        }
        .connector-line {
          width: 2px;
          height: 16px;
          background: var(--border-bright);
        }

        /* Right Inspector Panel */
        .arch-inspector-col {
          padding: 34px 28px;
        }
        .inspector-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: var(--bg-surface-raised);
          border: 1px solid var(--border-subtle);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .inspector-layer {
          display: block;
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .arch-inspector-col h3 {
          font-size: 1.45rem;
          margin-bottom: 12px;
        }
        .inspector-summary {
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 22px;
        }
        .inspector-spec-box {
          padding: 18px;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }
        .spec-heading {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-tertiary);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .spec-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-primary);
          line-height: 1.45;
          margin-bottom: 10px;
        }
        .spec-item:last-child {
          margin-bottom: 0;
        }
        .tech-stack-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tech-tag {
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .arch-interactive-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
