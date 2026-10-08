import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { StarBackground } from './components/common/StarBackground';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { GlobalAiAssistant } from './components/ai/GlobalAiAssistant';

// Views
import { DashboardView } from './components/dashboard/DashboardView';
import { CoursesView } from './components/courses/CoursesView';
import { CoursePlayer } from './components/courses/CoursePlayer';
import { RoadmapsView } from './components/roadmaps/RoadmapsView';
import { LanguagesView } from './components/languages/LanguagesView';
import { LanguagePlayer } from './components/languages/LanguagePlayer';
import { MockTestsView } from './components/mocktests/MockTestsView';
import { MockInterviewView } from './components/interview/MockInterviewView';
import { MastersRoadmapView } from './components/masters/MastersRoadmapView';
import { UniversitySearchView } from './components/masters/UniversitySearchView';
import { ProjectsView } from './components/projects/ProjectsView';
import { CertificatesView } from './components/certificates/CertificatesView';
import { CertificateVerificationView } from './components/certificates/CertificateVerificationView';
import { PortfolioResumeView } from './components/career/PortfolioResumeView';
import { AdminDashboardView } from './components/admin/AdminDashboardView';
import { AiTutorView } from './components/ai/AiTutorView';
import { ResourcesExplorerView } from './components/resources/ResourcesExplorerView';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Sparkles, Shield, Heart } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeView, setActiveView, user } = useApp();

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Starfield & Galaxy Background */}
      <StarBackground />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Global Command+K Search Modal */}
      <GlobalSearchModal />

      {/* Main View Router */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <ErrorBoundary fallbackTitle="View Display Error" onReset={() => setActiveView('dashboard')}>
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'courses' && <CoursesView />}
          {activeView === 'course-player' && <CoursePlayer />}
          {activeView === 'roadmaps' && <RoadmapsView />}
          {activeView === 'languages' && <LanguagesView />}
          {activeView === 'language-player' && <LanguagePlayer />}
          {activeView === 'mock-tests' && <MockTestsView />}
          {activeView === 'mock-interview' && <MockInterviewView />}
          {activeView === 'masters' && <MastersRoadmapView />}
          {activeView === 'universities' && <UniversitySearchView />}
          {activeView === 'projects' && <ProjectsView />}
          {activeView === 'certificates' && <CertificatesView />}
          {activeView === 'verify-certificate' && <CertificateVerificationView />}
          {activeView === 'resume-portfolio' && <PortfolioResumeView />}
          {activeView === 'admin' && <AdminDashboardView />}
          {activeView === 'ai-tutor' && <AiTutorView />}
          {activeView === 'resources' && <ResourcesExplorerView />}
        </ErrorBoundary>
      </main>

      {/* Floating Global AI Assistant */}
      <GlobalAiAssistant />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#070a12]/90 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-600 to-violet-600 text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-tight text-white">Build Yourself</span>
                <p className="text-[11px] text-slate-400">Learn. Practice. Build. Certify. Grow.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <button onClick={() => setActiveView('courses')} className="hover:text-cyan-300 transition-colors">
                Courses
              </button>
              <button onClick={() => setActiveView('roadmaps')} className="hover:text-cyan-300 transition-colors">
                Roadmaps
              </button>
              <button onClick={() => setActiveView('languages')} className="hover:text-cyan-300 transition-colors">
                Languages
              </button>
              <button onClick={() => setActiveView('universities')} className="hover:text-cyan-300 transition-colors">
                Universities
              </button>
              <button onClick={() => setActiveView('verify-certificate')} className="hover:text-cyan-300 transition-colors">
                Verify Credential
              </button>
              <button onClick={() => setActiveView('ai-tutor')} className="hover:text-cyan-300 transition-colors">
                Ask AI Tutor
              </button>
              <button onClick={() => setActiveView('resources')} className="hover:text-cyan-300 transition-colors">
                Resources Hub
              </button>
              <button onClick={() => setActiveView('admin')} className="hover:text-purple-300 transition-colors">
                Admin Center
              </button>
            </div>

            <div className="text-xs text-slate-500 text-center md:text-right">
              <p>© 2026 Build Yourself. Built with integrity & precision.</p>
              <p className="text-[10px] text-slate-600">Official data citations strictly verified.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
