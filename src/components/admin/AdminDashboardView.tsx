import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Course, CourseCategory } from '../../types';
import {
  Shield,
  BookOpen,
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
  Plus,
  Building2,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

export const AdminDashboardView: React.FC = () => {
  const {
    courses,
    universities,
    certificates,
    addNewCourse,
    updateCourse,
    verifyUniversityData,
    revokeCertificate,
    switchRole
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'universities' | 'certificates'>('overview');

  // Add Course Modal State
  const [addCourseModalOpen, setAddCourseModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newCategory, setNewCategory] = useState<CourseCategory>('Programming');
  const [newLevel, setNewLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [newTagline, setNewTagline] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const course: Course = {
      id: `course-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: newCategory,
      level: newLevel,
      tagline: newTagline || 'Enterprise course curriculum.',
      description: newDescription || 'In-depth hands-on technology course.',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
      iconName: 'BookOpen',
      modulesCount: 3,
      lessonsCount: 9,
      durationHours: 18,
      rating: 5.0,
      enrolledStudentsCount: 1,
      passingScorePercent: 75,
      published: true,
      prerequisites: ['Basic computational logic'],
      learningOutcomes: ['Master course core principles', 'Build practical capstones'],
      modules: [
        {
          id: `mod-${Date.now()}-1`,
          title: 'Module 1: Foundations',
          description: 'Initial fundamentals and orientation.',
          lessons: [
            {
              id: `les-${Date.now()}-1`,
              title: '1.1 Getting Started',
              durationMinutes: 20,
              type: 'concept',
              summary: 'Welcome and foundational syntax breakdown.',
              content: 'Course content goes here. Administrators can modify content via the portal.',
              codeSnippet: '// Initial sample code\nconsole.log("Welcome to new course!");'
            }
          ]
        }
      ]
    };

    addNewCourse(course);
    setAddCourseModalOpen(false);
    setNewTitle('');
    setNewTagline('');
    setNewDescription('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative rounded-3xl cosmic-card p-6 sm:p-8 border border-purple-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Platform Administrative Center</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Platform Administration & Quality Control
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Manage courses dynamically, audit real-world university data source citations, inspect issued certificates, and analyze platform engagement.
            </p>
          </div>

          <button
            onClick={() => switchRole('student')}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-semibold text-slate-300 transition-all"
          >
            Exit to Student View
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'overview' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'text-slate-400 hover:text-white'
          }`}
        >
          Analytics & Metrics
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'courses' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'text-slate-400 hover:text-white'
          }`}
        >
          Courses Manager ({courses.length})
        </button>
        <button
          onClick={() => setActiveTab('universities')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'universities' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'text-slate-400 hover:text-white'
          }`}
        >
          University Sources & Verifications ({universities.length})
        </button>
        <button
          onClick={() => setActiveTab('certificates')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'certificates' ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' : 'text-slate-400 hover:text-white'
          }`}
        >
          Certificate Audits ({certificates.length})
        </button>
      </div>

      {activeTab === 'overview' && (
        /* Analytics Metrics */
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Registered Students</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">42,850</p>
              <span className="text-[11px] text-emerald-400 font-semibold">+14% this month</span>
            </div>
            <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Course Enrollments</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">89,420</p>
              <span className="text-[11px] text-cyan-300 font-semibold">92.4% satisfaction</span>
            </div>
            <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Certificates Issued</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">14,210</p>
              <span className="text-[11px] text-amber-300 font-semibold">100% Cryptographic QR verified</span>
            </div>
            <div className="p-5 rounded-2xl cosmic-card border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Avg Mock Score</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">84.2%</p>
              <span className="text-[11px] text-slate-400 font-medium">Across all technical screens</span>
            </div>
          </div>

          {/* Popular Categories Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Most Popular Technical Tracks</h3>
              <div className="space-y-3">
                {[
                  { name: 'Data Analytics & Power BI', count: '18,900 students', pct: 88 },
                  { name: 'Python Programming Masterclass', count: '14,200 students', pct: 76 },
                  { name: 'SQL & Database Architecture', count: '12,450 students', pct: 68 },
                  { name: 'Full-Stack React & Node.js', count: '9,800 students', pct: 54 },
                  { name: 'German for Study Abroad (A1-B2)', count: '8,400 students', pct: 46 }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between text-slate-300 font-medium">
                      <span>{item.name}</span>
                      <span className="text-slate-500 font-mono">{item.count}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl cosmic-card p-6 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Top Master's Search Destinations</h3>
              <div className="space-y-3">
                {[
                  { country: 'Germany (TUM, RWTH Aachen)', share: '44% of searches', flag: '🇩🇪' },
                  { country: 'United States (Stanford, CMU, MIT)', share: '26% of searches', flag: '🇺🇸' },
                  { country: 'Netherlands (TU Delft)', share: '14% of searches', flag: '🇳🇱' },
                  { country: 'United Kingdom (Oxford, Imperial)', share: '10% of searches', flag: '🇬🇧' },
                  { country: 'Canada (Univ of Toronto)', share: '6% of searches', flag: '🇨🇦' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{item.flag}</span>
                      <span className="text-slate-200 font-semibold">{item.country}</span>
                    </div>
                    <span className="text-purple-300 font-mono font-medium">{item.share}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'courses' && (
        /* Course Management */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Dynamic Course Catalog</h3>
            <button
              onClick={() => setAddCourseModalOpen(true)}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/20"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Course</span>
            </button>
          </div>

          <div className="divide-y divide-slate-800 rounded-2xl cosmic-card border border-slate-800 overflow-hidden">
            {courses.map(course => (
              <div key={course.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white text-sm">{course.title}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-purple-300 border border-slate-800 text-[10px] font-mono">
                      {course.category}
                    </span>
                    <span className="text-slate-500">• {course.level}</span>
                  </div>
                  <p className="text-slate-400 line-clamp-1">{course.tagline}</p>
                </div>

                <div className="flex items-center space-x-3 self-end sm:self-auto">
                  <span className="font-mono text-slate-400">
                    {course.modules.length} Modules • {course.durationHours}h
                  </span>
                  <button
                    onClick={() => updateCourse({ ...course, published: !course.published })}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      course.published
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {course.published ? 'Published' : 'Draft'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'universities' && (
        /* University Data Sources & Verification */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">External Academic Data Verification Audit</h3>
              <p className="text-xs text-slate-400">
                Ensure zero hallucinated/fake university criteria by reviewing direct official citation sources.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {universities.map(uni => (
              <div
                key={uni.id}
                className="p-4 rounded-2xl cosmic-card border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{uni.flag}</span>
                    <strong className="text-white text-sm">{uni.universityName}</strong>
                    <span className="text-slate-400">({uni.programName})</span>
                  </div>
                  <p className="text-slate-400">
                    Source: <span className="text-cyan-300 font-mono">{uni.source}</span> • Last Verified:{' '}
                    <strong className="text-slate-300">{uni.lastVerifiedDate}</strong>
                  </p>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                  <a
                    href={uni.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 hover:text-white"
                  >
                    <span>Check Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => verifyUniversityData(uni.id)}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Mark Verified</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'certificates' && (
        /* Certificate Audits & Revocation */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Issued Credentials Ledger</h3>
            <span className="text-xs text-slate-400">{certificates.length} Registered</span>
          </div>

          <div className="divide-y divide-slate-800 rounded-2xl cosmic-card border border-slate-800 overflow-hidden">
            {certificates.map(cert => (
              <div key={cert.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-cyan-400">{cert.certificateNumber}</span>
                    <span className="font-bold text-white">{cert.studentName}</span>
                    <span className="text-slate-400">• {cert.courseTitle}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">Hash: {cert.verificationHash}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <span
                    className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                      cert.status === 'Valid'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {cert.status}
                  </span>

                  {cert.status === 'Valid' && (
                    <button
                      onClick={() => revokeCertificate(cert.id)}
                      className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold hover:bg-rose-500/30"
                    >
                      Revoke
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Course Modal */}
      {addCourseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <form
            onSubmit={handleCreateCourse}
            className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-6 space-y-4 shadow-2xl"
          >
            <h3 className="text-base font-bold text-white">Create New Curriculum Course</h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Course Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Rust Systems Programming"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value as CourseCategory)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="Programming">Programming</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data">Data</option>
                    <option value="Databases">Databases</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Tools & Technologies">Tools & Technologies</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Level</label>
                  <select
                    value={newLevel}
                    onChange={e => setNewLevel(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">Tagline</label>
                <input
                  type="text"
                  value={newTagline}
                  onChange={e => setNewTagline(e.target.value)}
                  placeholder="Short compelling description"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">Full Description</label>
                <textarea
                  value={newDescription}
                  onChange={e => setNewDescription(e.target.value)}
                  placeholder="Detailed course overview..."
                  className="w-full h-24 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={() => setAddCourseModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-600/30"
              >
                Publish Course
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
