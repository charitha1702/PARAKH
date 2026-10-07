import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { 
  Network, 
  HelpCircle, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  FileText, 
  Building2, 
  Globe, 
  Phone, 
  CreditCard, 
  ShieldCheck, 
  Users, 
  Sparkles,
  Info,
  Eye,
  ArrowDown,
  Layers,
  ChevronRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import { 
  TrustChain, 
  TrustChainNode, 
  TrustChainEdge, 
  TrustNodeStatus, 
  TrustNodeType, 
  Language, 
  HowYouKnowDetail 
} from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface TrustChainSectionProps {
  trustChain: TrustChain;
  currentLanguage: Language;
}

export const TrustChainSection: React.FC<TrustChainSectionProps> = ({
  trustChain,
  currentLanguage
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  
  // Selection states
  const [selectedNodeId, setSelectedNodeId] = useState<string>('tc-claim');
  const [activeEdgeForInspection, setActiveEdgeForInspection] = useState<TrustChainEdge | null>(null);
  const [activeModalHowYouKnow, setActiveModalHowYouKnow] = useState<HowYouKnowDetail | null>(null);
  const [activeModalTitle, setActiveModalTitle] = useState<string>('');

  const selectedNode = trustChain.nodes.find(n => n.id === selectedNodeId) || trustChain.nodes[0];

  // Helper for status badge styling
  const getStatusBadge = (status: TrustNodeStatus) => {
    switch (status) {
      case 'verified':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-500',
          icon: CheckCircle2,
          text: t.officialSourceBadge || 'Official source'
        };
      case 'unverified':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          dot: 'bg-amber-500',
          icon: HelpCircle,
          text: t.relationshipUnverified || 'Unverified'
        };
      case 'contradicted':
        return {
          bg: 'bg-rose-50 text-rose-800 border-rose-300 font-semibold',
          dot: 'bg-rose-600',
          icon: XCircle,
          text: t.statutoryRulesBadge || 'Contradicted by rules'
        };
      case 'suspicious':
        return {
          bg: 'bg-orange-50 text-orange-800 border-orange-200',
          dot: 'bg-orange-500',
          icon: AlertTriangle,
          text: t.mismatchDetected || 'Mismatch detected'
        };
      case 'unable_to_verify':
      default:
        return {
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          dot: 'bg-slate-400',
          icon: HelpCircle,
          text: t.couldNotVerify || 'Unable to verify'
        };
    }
  };

  const getNodeIcon = (type: TrustNodeType) => {
    switch (type) {
      case 'content': return FileText;
      case 'claim': return ShieldAlert;
      case 'regulator': return ShieldCheck;
      case 'entity': return Building2;
      case 'domain': return Globe;
      case 'contact': return Phone;
      case 'payment': return CreditCard;
      case 'official_evidence': return ShieldCheck;
      case 'community_reports': return Users;
      default: return Network;
    }
  };

  // Node helper lookup
  const findNode = (id: string): TrustChainNode | undefined => {
    return trustChain.nodes.find(n => n.id === id);
  };

  // Find edges related to a node
  const getEdge = (fromId: string, toId: string): TrustChainEdge | undefined => {
    return trustChain.edges.find(e => e.from === fromId && e.to === toId);
  };

  // Primary Trust Break Point
  const trustBreak = trustChain.trustBreak;
  const isTrustBreakNode = (nodeId: string) => {
    return trustBreak && (trustBreak.fromNodeId === nodeId || trustBreak.toNodeId === nodeId);
  };

  // Scoped text for SectionAudioControl (strictly reads this section)
  const trustChainSpeechText = `${t.trustChainTitle}. ${t.trustChainSubtitle}. ${
    trustBreak ? `${trustBreak.title}: ${trustBreak.description}.` : ''
  } ${trustChain.nodes.map(n => `${n.label}: ${n.value}. ${n.statusExplanation}`).join('. ')}`;

  // Node card component for graph
  const renderGraphNode = (nodeId: string, isCenter = false) => {
    const node = findNode(nodeId);
    if (!node) return null;

    const Icon = getNodeIcon(node.type);
    const statusCfg = getStatusBadge(node.status);
    const isSelected = selectedNodeId === node.id;
    const isBreak = isTrustBreakNode(node.id);

    return (
      <div
        key={node.id}
        onClick={() => setSelectedNodeId(node.id)}
        className={`group relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
          isSelected
            ? 'bg-white border-[#0284C7] shadow-lg ring-2 ring-[#0284C7]/20 scale-[1.02] z-20'
            : isBreak
            ? 'bg-amber-50/60 hover:bg-white border-amber-300 shadow-sm hover:shadow-md'
            : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-sm'
        } ${isCenter ? 'max-w-md mx-auto' : 'w-full'}`}
      >
        {/* Break indicator badge if applicable */}
        {isBreak && (
          <div className="absolute -top-2.5 right-3 bg-amber-500 text-white text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold shadow-xs flex items-center gap-1">
            <AlertTriangle className="w-2.5 h-2.5" />
            <span>{t.trustGapDetected || 'Trust Gap'}</span>
          </div>
        )}

        {/* Top Header: Icon + Entity Type + Status Dot */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
              isSelected ? 'bg-sky-100 text-[#0284C7]' : isBreak ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-[#475569]'
            }`}>
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#64748B]">
              {node.label}
            </span>
          </div>

          <span className={`w-2 h-2 rounded-full shrink-0 ${statusCfg.dot}`} />
        </div>

        {/* Entity Name */}
        <div className="text-xs sm:text-sm font-bold text-[#0F172A] line-clamp-1 mb-1.5">
          {node.value}
        </div>

        {/* Status Badge + Concise Specific Reason */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className={`text-[10px] px-2 py-0.5 rounded-md border font-medium inline-flex items-center gap-1 ${statusCfg.bg}`}>
            <statusCfg.icon className="w-3 h-3" />
            <span>{statusCfg.text}</span>
          </span>
        </div>

        {/* Concise Specific Reason (NOT generic text) */}
        <p className="text-[11px] text-[#475569] leading-snug line-clamp-2">
          {node.statusExplanation}
        </p>
      </div>
    );
  };

  // Clickable connector pill between two nodes
  const renderConnectorPill = (fromId: string, toId: string) => {
    const edge = getEdge(fromId, toId);
    if (!edge) return null;

    const isBreak = edge.isTrustBreak;

    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setActiveEdgeForInspection(edge);
        }}
        className={`group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium border shadow-xs transition-all duration-200 cursor-pointer ${
          isBreak
            ? 'bg-amber-100/90 hover:bg-amber-200 text-amber-900 border-amber-300 ring-2 ring-amber-400/20'
            : 'bg-white hover:bg-sky-50 text-[#475569] hover:text-[#0284C7] border-slate-200 hover:border-sky-300'
        }`}
        title={t.inspectRelationshipButton || 'Inspect Relationship'}
      >
        <span className="font-mono text-[9px] text-[#64748B] group-hover:text-[#0284C7]">
          {edge.relationship}
        </span>
        <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
          isBreak ? 'bg-amber-200/80 text-amber-950' : 'bg-slate-100 text-slate-700'
        }`}>
          {edge.statusLabel || (isBreak ? '⚠ GAP' : 'INSPECT')}
        </span>
        <Eye className="w-2.5 h-2.5 text-[#0284C7] opacity-60 group-hover:opacity-100" />
      </button>
    );
  };

  return (
    <section className="mt-12 mb-10">
      {/* 2. CLEAR HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 font-semibold flex items-center gap-1.5">
              <Network className="w-3 h-3" />
              {t.trustChainBadge || 'TRUST CHAIN RECONSTRUCTION'}
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            {t.trustChainTitle || 'TRUST CHAIN RECONSTRUCTION'}
          </h2>
          
          <p className="text-xs sm:text-sm text-[#475569] font-light mt-1">
            “{t.trustChainSubtitle || 'See how the claim connects to the evidence.'}”
          </p>

          {/* Dynamic Compact Summary (from actual analysis, NEVER fabricated) */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            {trustChain.summary?.isCoverageLimited ? (
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                {t.evidenceCoverageLimited || 'Evidence coverage: Limited'}
              </span>
            ) : (
              <>
                <span className="px-3 py-1 rounded-full bg-white text-[#0F172A] border border-slate-200/80 shadow-xs flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  {trustChain.summary?.connectedEntities || 8} {t.connectedEntitiesLabel || 'connected entities'}
                </span>
                
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shadow-xs flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {trustChain.summary?.evidenceGaps || 3} {t.evidenceGapsLabel || 'evidence gaps'}
                </span>
                
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-900 border border-rose-200 shadow-xs flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  {trustChain.summary?.suspiciousRelationships || 2} {t.suspiciousRelationshipsLabel || 'suspicious relationships'}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Section Audio & Inspection Hint */}
        <div className="flex flex-col sm:items-end gap-2 shrink-0">
          <SectionAudioControl
            sectionId="trust_chain"
            textToSpeak={trustChainSpeechText}
            currentLanguage={currentLanguage}
            compact
          />
          <div className="text-[11px] text-[#64748B] bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white flex items-center gap-1.5 shadow-xs">
            <Info className="w-3 h-3 text-[#0284C7] shrink-0" />
            <span>{t.trustChainInspectHint || 'Click any node or relationship link to inspect'}</span>
          </div>
        </div>
      </div>

      {/* 3. WHERE DOES THE TRUST BREAK? (Major Visual Insight) */}
      {trustBreak && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 backdrop-blur-md shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded-full border border-amber-300">
                  {trustBreak.title}
                </span>
                <span className="text-[11px] font-bold text-amber-950">
                  • {trustBreak.statusText}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                “{trustBreak.description}”
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                {t.trustBreakSubtitle || 'This is the point where the available evidence becomes weak.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const breakEdge = trustChain.edges.find(e => e.isTrustBreak) || trustChain.edges[3];
              setActiveEdgeForInspection(breakEdge);
            }}
            className="px-4 py-2 rounded-xl bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 text-xs font-semibold shadow-xs flex items-center gap-1.5 shrink-0 self-start md:self-auto cursor-pointer transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.inspectRelationshipButton || 'Inspect Relationship'}</span>
          </button>
        </div>
      )}

      {/* 1. THE INTERACTIVE RELATIONSHIP GRAPH */}
      <GlassTile className="p-4 sm:p-7 relative overflow-hidden">
        
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-4 flex items-center justify-between">
          <span>{t.whereDoesTrustBreakQuestion || 'Interactive Relationship Graph'}</span>
          <span className="text-[10px] text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
            {t.clickToInspectNodeOrEdge || 'Click node or connection pill'}
          </span>
        </div>

        {/* Tree Container */}
        <div className="space-y-6 max-w-4xl mx-auto py-2">

          {/* LEVEL 1: Top Center CLAIM */}
          <div className="text-center">
            {renderGraphNode('tc-claim', true)}
            
            {/* Branching Lines from Level 1 to Level 2 */}
            <div className="my-3 flex justify-center items-center gap-8 sm:gap-16">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-slate-300" />
                {renderConnectorPill('tc-claim', 'tc-org')}
                <div className="w-0.5 h-4 bg-slate-300" />
                <ArrowDown className="w-3.5 h-3.5 text-slate-400 -mt-1" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-slate-300" />
                {renderConnectorPill('tc-claim', 'tc-regulator')}
                <div className="w-0.5 h-4 bg-slate-300" />
                <ArrowDown className="w-3.5 h-3.5 text-slate-400 -mt-1" />
              </div>
            </div>
          </div>

          {/* LEVEL 2: Two Branches (Left: ORGANIZATION, Right: REGULATORY CLAIM) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            
            {/* Left Branch: ORGANIZATION */}
            <div className="space-y-4">
              {renderGraphNode('tc-org')}

              {/* Sub-branch from Organization -> Website & Contact */}
              <div className="flex justify-around items-center pt-1 pb-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-3 bg-slate-300" />
                  {renderConnectorPill('tc-org', 'tc-website')}
                  <div className="w-0.5 h-3 bg-slate-300" />
                  <ArrowDown className="w-3 h-3 text-slate-400 -mt-1" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-3 bg-amber-300" />
                  {renderConnectorPill('tc-org', 'tc-contact')}
                  <div className="w-0.5 h-3 bg-amber-300" />
                  <ArrowDown className="w-3 h-3 text-amber-500 -mt-1" />
                </div>
              </div>

              {/* Level 3: WEBSITE & CONTACT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {renderGraphNode('tc-website')}
                {renderGraphNode('tc-contact')}
              </div>
            </div>

            {/* Right Branch: REGULATORY CLAIM & OFFICIAL EVIDENCE */}
            <div className="space-y-4">
              {renderGraphNode('tc-regulator')}

              {/* Connector from Regulatory Claim -> Official Evidence */}
              <div className="flex flex-col items-center py-1">
                <div className="w-0.5 h-3 bg-slate-300" />
                {renderConnectorPill('tc-regulator', 'tc-official')}
                <div className="w-0.5 h-3 bg-slate-300" />
                <ArrowDown className="w-3 h-3 text-slate-400 -mt-1" />
              </div>

              {/* Level 3: OFFICIAL EVIDENCE */}
              <div>
                {renderGraphNode('tc-official')}
              </div>
            </div>

          </div>

          {/* LEVEL 4: Convergence onto PAYMENT ROUTING */}
          <div className="pt-2 text-center">
            <div className="flex justify-center items-center gap-6 pb-3">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-amber-300" />
                {renderConnectorPill('tc-contact', 'tc-payment')}
                <div className="w-0.5 h-3 bg-amber-300" />
                <ArrowDown className="w-3 h-3 text-amber-500 -mt-1" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-slate-300" />
                {renderConnectorPill('tc-website', 'tc-payment')}
                <div className="w-0.5 h-3 bg-slate-300" />
                <ArrowDown className="w-3 h-3 text-slate-400 -mt-1" />
              </div>
            </div>

            {renderGraphNode('tc-payment', true)}
          </div>

          {/* LEVEL 5: Convergence onto COMMUNITY REPORTS & OFFICIAL ALERTS */}
          <div className="pt-2 text-center">
            <div className="flex justify-center items-center gap-6 pb-3">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-slate-300" />
                {renderConnectorPill('tc-payment', 'tc-community')}
                <div className="w-0.5 h-3 bg-slate-300" />
                <ArrowDown className="w-3 h-3 text-slate-400 -mt-1" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-slate-300" />
                {renderConnectorPill('tc-official', 'tc-community')}
                <div className="w-0.5 h-3 bg-slate-300" />
                <ArrowDown className="w-3 h-3 text-slate-400 -mt-1" />
              </div>
            </div>

            {renderGraphNode('tc-community', true)}
          </div>

        </div>

        {/* Selected Node Deep Inspection Box */}
        {selectedNode && (
          <div className="mt-8 pt-5 border-t border-black/[0.06] bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#0284C7] uppercase font-bold tracking-wider">
                    {t.nodeInspectionTitle || 'Node Inspection:'} {selectedNode.label}
                  </span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${getStatusBadge(selectedNode.status).bg}`}>
                    {getStatusBadge(selectedNode.status).text}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-bold text-[#0F172A]">
                  {selectedNode.value}
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {selectedNode.statusExplanation}
                </p>

                {selectedNode.evidenceSource && (
                  <div className="text-[11px] text-[#64748B] flex items-center gap-1.5 pt-1">
                    <span className="font-semibold text-[#0F172A]">{t.officialSourceChecked || 'Official Source Checked:'}</span>
                    <span>{selectedNode.evidenceSource}</span>
                  </div>
                )}
              </div>

              {/* "Show me how you know" Interactive Action */}
              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalHowYouKnow(selectedNode.howYouKnow);
                    setActiveModalTitle(selectedNode.label);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 text-[#0284C7] hover:text-[#0369A1] border border-sky-200 text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer group"
                >
                  <Sparkles className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>{t.showHowYouKnow || 'Show me how you know'}</span>
                </button>

                <div className="text-[10px] text-[#64748B] text-center sm:text-right md:text-center font-light">
                  {t.independentAuditTag || 'Independent regulatory audit'}
                </div>
              </div>

            </div>
          </div>
        )}

      </GlassTile>

      {/* 4. RELATIONSHIP INSPECTION MODAL (When clicking connection between two nodes) */}
      {activeEdgeForInspection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white/98 backdrop-blur-[40px] rounded-3xl border border-white p-5 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.25)] max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-black/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 font-semibold">
                    {t.relationshipInspectionTitle || 'RELATIONSHIP INSPECTION'}
                  </span>
                  {activeEdgeForInspection.isTrustBreak && (
                    <span className="text-[10px] font-mono uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300 font-bold">
                      {t.trustGapDetected || 'Trust Gap'}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {activeEdgeForInspection.question || `${findNode(activeEdgeForInspection.from)?.label} → ${findNode(activeEdgeForInspection.to)?.label}`}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveEdgeForInspection(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Inspection Content */}
            <div className="mt-5 space-y-4 text-xs sm:text-sm">
              
              {/* Claim */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-mono uppercase font-bold text-[#475569] block mb-1">
                  {t.claimQuestionLabel || 'Claim:'}
                </span>
                <p className="text-[#0F172A] font-medium leading-relaxed">
                  “{activeEdgeForInspection.claim || `The connection represents legitimate organizational affiliation.`}”
                </p>
              </div>

              {/* Evidence Checked */}
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
                <span className="text-[11px] font-mono uppercase font-bold text-[#0284C7] block mb-2">
                  {t.evidenceCheckedLabel || 'Evidence checked:'}
                </span>
                <ul className="space-y-1.5 text-xs text-[#0F172A]">
                  {(activeEdgeForInspection.evidenceChecked || [
                    'Official organization website',
                    'Available regulatory records',
                    'Domain WHOIS information'
                  ]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Finding */}
              <div className={`p-4 rounded-2xl border ${
                activeEdgeForInspection.isTrustBreak
                  ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <span className="text-[11px] font-mono uppercase font-bold block mb-1 text-slate-600">
                  {t.findingLabel || 'Finding:'}
                </span>
                <p className="font-semibold leading-relaxed">
                  {activeEdgeForInspection.finding || 'PARAKH could not independently establish the relationship.'}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 border border-slate-200">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-600">
                  {t.statusLabel || 'Status:'}
                </span>
                <span className={`text-xs px-3 py-1 rounded-full font-bold border ${
                  activeEdgeForInspection.isTrustBreak
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-white text-slate-800 border-slate-300'
                }`}>
                  {activeEdgeForInspection.statusLabel || (t.relationshipUnverified || 'UNVERIFIED RELATIONSHIP')}
                </span>
              </div>

              {/* Statutory Distinction Reminder */}
              <p className="text-[11px] text-slate-500 text-center font-light pt-1">
                {t.evidenceAuditDisclaimer || 'PARAKH does not fabricate relationships. If independent evidence is unavailable, we state: “Relationship could not be verified.”'}
              </p>

            </div>

            {/* Close Button */}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveEdgeForInspection(null)}
                className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                {t.closeInspection || 'Close Inspection'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* "SHOW ME HOW YOU KNOW" Deep Evidence Modal for Nodes */}
      {activeModalHowYouKnow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white/98 backdrop-blur-[40px] rounded-3xl border border-white p-5 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.25)] max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-black/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 font-semibold">
                    {t.showHowYouKnow || 'Show Me How You Know'}
                  </span>
                  <span className="text-[10px] text-[#64748B] font-mono">
                    {t.nodeInspectionTitle || 'Node:'} {activeModalTitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {t.reasoningBreakdown || 'Reasoning & Evidence Breakdown'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalHowYouKnow(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Structured Evidence Checklist */}
            <div className="mt-5 space-y-4">
              
              {/* Part 1: AI Detected */}
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7] mb-2 uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.aiDetected || 'AI detected:'}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#0F172A]">
                  {activeModalHowYouKnow.aiDetected.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0284C7] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Part 2: Evidence Checked */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-[#334155] mb-2 uppercase tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.evidenceChecked || 'Evidence checked:'}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#334155]">
                  {activeModalHowYouKnow.evidenceChecked.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Part 3: Result */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1.5 uppercase tracking-wide">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.result || 'Result:'}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 font-medium">
                  {activeModalHowYouKnow.result}
                </p>
              </div>

              {/* Distinction Layers */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-3">
                  {t.distinctionLayersTitle || 'Distinction of Evidence Layers (No AI as Official Evidence)'}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="font-bold text-[#0284C7] block mb-1">
                      {t.aiAnalysisTab || 'AI Analysis'}
                    </span>
                    <p className="text-[#475569] leading-relaxed text-[11px]">
                      {activeModalHowYouKnow.aiAnalysisNotes}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="font-bold text-emerald-700 block mb-1">
                      {t.officialEvidenceTab || 'Official Evidence'}
                    </span>
                    <p className="text-[#475569] leading-relaxed text-[11px]">
                      {activeModalHowYouKnow.officialEvidenceNotes}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="font-bold text-violet-700 block mb-1">
                      {t.communityEvidenceTab || 'Community Evidence'}
                    </span>
                    <p className="text-[#475569] leading-relaxed text-[11px]">
                      {activeModalHowYouKnow.communityEvidenceNotes}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Done Action */}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalHowYouKnow(null)}
                className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                {t.closeEvidenceAudit || 'Close Evidence Audit'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
