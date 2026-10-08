import React, { useRef } from 'react';
import { Certificate } from '../../types';
import { X, Download, Printer, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
  onVerifyClick?: (certId: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose, onVerifyClick }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Certificate of Completion</h3>
              <p className="text-xs font-mono text-cyan-400">{certificate.certificateNumber}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas / Container */}
        <div className="p-6 sm:p-10 bg-slate-950 flex justify-center">
          <div
            ref={certificateRef}
            className="w-full max-w-3xl aspect-[1.414/1] rounded-2xl p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden shadow-2xl bg-[#090d18] border-8 border-double border-amber-500/40 text-slate-100"
          >
            {/* Background Guilloche / Watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06)_0%,rgba(147,51,234,0.04)_50%,transparent_100%)] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

            {/* Header / Brand */}
            <div className="relative text-center z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BUILD YOURSELF ACADEMIC DISTINCTION</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 bg-clip-text text-transparent font-serif">
                Certificate of Mastery
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-widest font-mono">
                Official Credential Verification
              </p>
            </div>

            {/* Body */}
            <div className="relative text-center my-6 z-10 space-y-4">
              <p className="text-xs text-slate-400 italic">This is proudly presented to</p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight border-b border-slate-800 pb-3 max-w-lg mx-auto">
                {certificate.studentName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                {certificate.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {certificate.skillsAcquired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] bg-slate-900 border border-slate-700/80 text-cyan-300 font-mono"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with QR Code, Signatures & Credential Details */}
            <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-end justify-between">
              {/* Left: Verification QR & ID */}
              <div className="flex items-center space-x-3">
                <div className="p-1 rounded-lg bg-white shadow-md">
                  <img
                    src={certificate.qrCodeUrl}
                    alt="QR Verification"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
                <div className="text-left space-y-0.5">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Credential ID</p>
                  <p className="text-xs font-mono font-bold text-cyan-300">{certificate.certificateNumber}</p>
                  <p className="text-[10px] text-slate-400">Date: {certificate.issueDate}</p>
                  <div className="flex items-center space-x-1 text-[10px] text-emerald-400 font-medium pt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Cryptographically Verified</span>
                  </div>
                </div>
              </div>

              {/* Middle: Gold Seal Emblem */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-amber-400/80 bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-amber-900 bg-slate-950 flex flex-col items-center justify-center">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-[8px] font-bold text-amber-300 uppercase">Seal</span>
                  </div>
                </div>
              </div>

              {/* Right: Signature */}
              <div className="text-right space-y-1">
                <p className="text-lg font-serif italic text-amber-200">Evelyn Vance</p>
                <div className="w-36 h-0.5 bg-slate-700 ml-auto" />
                <p className="text-xs font-semibold text-slate-300">{certificate.authorizedSignatory}</p>
                <p className="text-[10px] text-slate-500">{certificate.issuingPlatform}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Verification Link */}
        <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>
            Public Verification Hash: <span className="font-mono text-slate-300">{certificate.verificationHash}</span>
          </p>
          {onVerifyClick && (
            <button
              onClick={() => {
                onClose();
                onVerifyClick(certificate.certificateNumber);
              }}
              className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              <span>Verify in Public Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
