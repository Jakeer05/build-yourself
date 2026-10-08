import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ResumeData } from '../../types';
import {
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Printer,
  Sparkles,
  Share2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const PortfolioResumeView: React.FC = () => {
  const { user, certificates, projects } = useApp();
  const [activeTab, setActiveTab] = useState<'resume' | 'portfolio'>('resume');

  // Resume form state
  const [resume, setResume] = useState<ResumeData>({
    fullName: user.name,
    title: 'Data Analyst & Software Developer',
    email: user.email,
    phone: '+91 98765 43210',
    location: 'Bangalore, India (Open to Germany Relocation)',
    linkedin: 'linkedin.com/in/jakeerp',
    github: 'github.com/jakeerp',
    summary:
      'Detail-oriented Data Analyst and Software Developer proficient in Python, SQL, Power BI, and relational schema optimization. Certified in Python Programming & Enterprise SQL with a proven track record of architecting automated billing pipelines and executive dashboards.',
    skills: [
      { category: 'Programming & Scripting', list: ['Python 3.12', 'JavaScript', 'TypeScript', 'SQL', 'Bash'] },
      { category: 'Data & Analytics', list: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'Star Schema', 'DAX', 'ETL'] },
      { category: 'Databases & Tools', list: ['PostgreSQL', 'Docker', 'Git', 'GitHub Actions', 'Linux'] }
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'National Institute of Technology',
        year: '2021 - 2025',
        grade: 'GPA: 8.6 / 10.0'
      }
    ],
    experience: [
      {
        role: 'Data Analytics & Software Intern',
        company: 'NovaTech Solutions',
        period: 'Jun 2024 - Dec 2024',
        bullets: [
          'Engineered automated ETL data extraction pipelines in Python, decreasing report generation latency by 35%.',
          'Designed dimensional Star Schema models and DAX measures across 100,000+ sales transactions in Power BI.',
          'Collaborated with cross-functional product stakeholders to establish executive KPI dashboards.'
        ]
      }
    ],
    projects: [
      {
        name: 'Enterprise Automated Billing & Invoicing Engine',
        tech: 'Python, OOP, Pytest, JSON',
        link: 'github.com/jakeerp/billing-engine',
        description:
          'Engineered a modular Python billing engine supporting tiered discounts, progressive taxation, and stock validation with 96% unit test coverage.'
      },
      {
        name: 'Omnichannel Retail Performance Dashboard',
        tech: 'Power BI, SQL, Star Schema, DAX',
        link: 'github.com/jakeerp/retail-analytics',
        description:
          'Constructed an end-to-end business intelligence dashboard analyzing customer churn, cohort retention, and regional profitability metrics.'
      }
    ],
    certifications: [
      'Build Yourself Certified: Python Programming Masterclass (EDU-2026-PY-000184)',
      'Build Yourself Certified: SQL & Relational Database Mastery (EDU-2026-SQL-000092)'
    ]
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Career Acceleration Tools</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            ATS Resume Builder & Developer Portfolio
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Generate an ATS-optimized, recruiter-approved technical resume directly linked to your verified credentials and create a live public developer portfolio URL.
          </p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('resume')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'resume'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ATS Resume View
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'portfolio'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Public Portfolio
          </button>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Export PDF</span>
        </button>
      </div>

      {activeTab === 'resume' ? (
        /* ATS Resume Sheet Layout */
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl text-slate-200 space-y-6 font-sans">
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">{resume.fullName}</h2>
            <p className="text-sm font-semibold text-cyan-400">{resume.title}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1 font-mono">
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{resume.email}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{resume.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>{resume.linkedin}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Github className="w-3.5 h-3.5" />
                <span>{resume.github}</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-extrabold text-cyan-300 tracking-wider border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">{resume.summary}</p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-extrabold text-cyan-300 tracking-wider border-b border-slate-800 pb-1">
              Technical Core Competencies
            </h3>
            <div className="space-y-1 text-xs">
              {resume.skills.map((s, idx) => (
                <div key={idx} className="flex">
                  <span className="w-48 font-bold text-white flex-shrink-0">{s.category}:</span>
                  <span className="text-slate-300">{s.list.join(' • ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-cyan-300 tracking-wider border-b border-slate-800 pb-1">
              Work & Practical Experience
            </h3>
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>{exp.role} — <span className="text-cyan-300">{exp.company}</span></span>
                  <span className="font-mono text-slate-400 font-normal">{exp.period}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-300">
                  {exp.bullets.map((b, bidx) => (
                    <li key={bidx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-cyan-300 tracking-wider border-b border-slate-800 pb-1">
              Featured Capstone Projects
            </h3>
            {resume.projects.map((proj, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>{proj.name}</span>
                  <span className="font-mono text-cyan-400 text-[11px] font-normal">[{proj.tech}]</span>
                </div>
                <p className="text-slate-300">{proj.description}</p>
              </div>
            ))}
          </div>

          {/* Verified Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-extrabold text-cyan-300 tracking-wider border-b border-slate-800 pb-1">
              Verified Certifications & Credentials
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300">
              {resume.certifications.map((cert, idx) => (
                <li key={idx} className="font-medium text-emerald-300">{cert}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-extrabold text-cyan-300 tracking-wider border-b border-slate-800 pb-1">
              Education
            </h3>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs text-white">
                <div>
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-slate-400">{edu.institution} • {edu.grade}</p>
                </div>
                <span className="font-mono text-slate-400">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Live Developer Public Portfolio */
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Shareable Link Banner */}
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-cyan-300">
              <Share2 className="w-4 h-4" />
              <span>Public Shareable URL: <strong className="text-white font-mono">https://buildyourself.org/portfolio/jakeerp</strong></span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Live</span>
          </div>

          {/* Portfolio Hero */}
          <div className="rounded-3xl cosmic-card p-8 border border-slate-800 text-center space-y-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-cyan-500/40 shadow-xl"
            />
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-white">{user.name}</h2>
              <p className="text-sm font-semibold text-cyan-300">{resume.title}</p>
              <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed pt-1">
                {resume.summary}
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4 pt-2">
              <a
                href={`https://${resume.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`https://${resume.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Verified Certificates Showcase */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Verified Academic Credentials ({certificates.length})</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map(cert => (
                <div key={cert.id} className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">{cert.certificateNumber}</span>
                  <h4 className="text-sm font-bold text-white">{cert.courseTitle}</h4>
                  <p className="text-xs text-slate-400">{cert.description}</p>
                  <div className="pt-2 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                    <span>Grade: {cert.finalGradePercent}%</span>
                    <span className="flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
