import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Certificate } from '../../types';
import { CertificateModal } from '../common/CertificateModal';
import {
  Award,
  ShieldCheck,
  Download,
  ExternalLink,
  Printer,
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';

export const CertificatesView: React.FC = () => {
  const { certificates, user, setActiveView } = useApp();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Online QR Attestation</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Earned Certificates & Digital Badges
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Certificates earned upon achieving at least 75% in final course assessments. Each credential features a cryptographic SHA-256 hash, live QR verification, and PDF export.
          </p>
        </div>
      </div>

      {/* Quick Verification Portal CTA */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <span className="text-slate-300">
            Anyone (recruiters, universities, employers) can verify credentials via the public portal using the unique ID.
          </span>
        </div>
        <button
          onClick={() => setActiveView('verify-certificate')}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 flex-shrink-0 transition-all shadow-md shadow-cyan-500/20"
        >
          <span>Open Verification Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map(cert => (
          <div
            key={cert.id}
            className="rounded-3xl cosmic-card p-6 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4 relative group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                  {cert.certificateNumber}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    cert.status === 'Valid'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.courseTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{cert.description}</p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skillsAcquired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Issued: {cert.issueDate} • Grade: {cert.finalGradePercent}%</span>
              <button
                onClick={() => setSelectedCert(cert)}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-amber-500/20"
              >
                <span>View & Print</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
          onVerifyClick={() => setActiveView('verify-certificate')}
        />
      )}
    </div>
  );
};
