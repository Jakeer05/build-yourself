import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Certificate } from '../../types';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Award,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const CertificateVerificationView: React.FC = () => {
  const { certificates } = useApp();
  const [lookupQuery, setLookupQuery] = useState<string>('EDU-2026-PY-000184');
  const [verificationResult, setVerificationResult] = useState<Certificate | null | 'NOT_FOUND'>(
    certificates[0] || null
  );

  const handleVerify = () => {
    const q = lookupQuery.trim().toUpperCase();
    const found = certificates.find(c => c.certificateNumber.toUpperCase() === q);
    if (found) {
      setVerificationResult(found);
    } else {
      setVerificationResult('NOT_FOUND');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Public Trust & Integrity Engine</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Verify Build Yourself Academic Credentials
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Enter any official Build Yourself Certificate ID to instantly check its authenticity, issue timestamp, verified skill proficiencies, and cryptographic checksum.
        </p>
      </div>

      {/* Verification Lookup Bar */}
      <div className="rounded-2xl cosmic-card p-4 border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={lookupQuery}
              onChange={e => setLookupQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleVerify()}
              placeholder="e.g. EDU-2026-PY-000184"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <button
            onClick={handleVerify}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md shadow-cyan-500/20"
          >
            <span>Verify Credential</span>
          </button>
        </div>
      </div>

      {/* Quick sample IDs */}
      <div className="flex items-center justify-center space-x-2 text-xs text-slate-400">
        <span>Try sample IDs:</span>
        <button
          onClick={() => {
            setLookupQuery('EDU-2026-PY-000184');
            const found = certificates.find(c => c.certificateNumber === 'EDU-2026-PY-000184');
            setVerificationResult(found || null);
          }}
          className="font-mono text-cyan-400 hover:underline"
        >
          EDU-2026-PY-000184
        </button>
        <span>•</span>
        <button
          onClick={() => {
            setLookupQuery('EDU-2026-SQL-000092');
            const found = certificates.find(c => c.certificateNumber === 'EDU-2026-SQL-000092');
            setVerificationResult(found || null);
          }}
          className="font-mono text-cyan-400 hover:underline"
        >
          EDU-2026-SQL-000092
        </button>
      </div>

      {/* Verification Result Display */}
      {verificationResult === 'NOT_FOUND' ? (
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-rose-500/30 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
            <XCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Certificate Not Found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            No active record found matching ID "{lookupQuery}". Please ensure exact formatting or contact the issuing student for the direct link.
          </p>
        </div>
      ) : verificationResult ? (
        <div className="rounded-3xl cosmic-card p-6 sm:p-8 border border-emerald-500/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2.5 rounded-2xl ${
                  verificationResult.status === 'Valid'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}
              >
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-white">Status:</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      verificationResult.status === 'Valid'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {verificationResult.status} Authentic
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">{verificationResult.certificateNumber}</p>
              </div>
            </div>

            <div className="text-right text-xs text-slate-400">
              <p>Issue Date: <strong className="text-white">{verificationResult.issueDate}</strong></p>
              <p>Assessment Grade: <strong className="text-emerald-400">{verificationResult.finalGradePercent}%</strong></p>
            </div>
          </div>

          {/* Record Details */}
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Student Name
                </span>
                <p className="text-base font-bold text-white">{verificationResult.studentName}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Course & Track
                </span>
                <p className="text-base font-bold text-cyan-300">{verificationResult.courseTitle}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Verified Skills & Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {verificationResult.skillsAcquired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-300"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Issuing Authority & Cryptographic Hash
              </span>
              <p className="text-slate-300">{verificationResult.issuingPlatform} • {verificationResult.authorizedSignatory}</p>
              <p className="font-mono text-[10px] text-slate-500 break-all pt-1">
                SHA-256 Hash: {verificationResult.verificationHash}
              </p>
            </div>
          </div>

          {/* Compliance Disclaimer Notice (Requirement 22) */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              This certificate affirms successful completion of technical coursework, coding exercises, and milestone evaluations on Build Yourself. It does not represent university credit or government accreditation unless explicitly partnered.
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
