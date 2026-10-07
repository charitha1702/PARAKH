/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AuthFlow, UserProfile } from './components/AuthFlow';
import { InputSection } from './components/InputSection';
import { AnalysisAnimation } from './components/AnalysisAnimation';
import { ResultSection } from './components/ResultSection';
import { LearnSection } from './components/LearnSection';
import { OfficialRegistriesSection } from './components/OfficialRegistriesSection';
import { AboutSection } from './components/AboutSection';
import { PrivacyModal } from './components/PrivacyModal';
import { Footer } from './components/Footer';
import { AtmosphericGlassEnvironment } from './components/AtmosphericGlassEnvironment';

import { Language, InputType, AnalysisResult } from './types/analysis';
import { performVerification } from './services/analysis';
import { SpeechService } from './services/speechService';

const LANGUAGE_STORAGE_KEY = 'parakh_preferred_language';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const savedUser = localStorage.getItem('parakh_user_profile');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [authMode, setAuthMode] = useState<'none' | 'login' | 'signup'>('none');
  
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      const validLangs: Language[] = ['en', 'hi', 'kn', 'te', 'ta', 'ml', 'mr', 'bn', 'gu', 'pa', 'or', 'ur'];
      if (saved && validLangs.includes(saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  // Dynamic RTL support for Urdu and document dir attribute
  useEffect(() => {
    if (currentLanguage === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

  const [simpleMode, setSimpleMode] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'landing' | 'home' | 'learn' | 'official' | 'about'>('landing');
  const [analysisStatus, setAnalysisStatus] = useState<'idle' | 'analyzing' | 'result'>('idle');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Stop speech when view or language changes
  useEffect(() => {
    SpeechService.stop();
    setIsSpeaking(false);
  }, [currentView, currentLanguage]);

  // Persist language selection immediately
  const handleLanguageChange = async (lang: Language) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      if (currentUser) {
        const updated = { ...currentUser, language: lang };
        setCurrentUser(updated);
        localStorage.setItem('parakh_user_profile', JSON.stringify(updated));
      }
    } catch {
      // ignore
    }

    // If a result is currently active, immediately re-verify in the new language
    if (analysisResult && analysisResult.originalContent) {
      try {
        const recomputed = await performVerification(analysisResult.originalContent, analysisResult.inputType, lang);
        setAnalysisResult(recomputed);
      } catch (err) {
        console.error('Error re-verifying in new language:', err);
      }
    }
  };

  // Handle successful authentication
  const handleAuthenticated = (user: UserProfile) => {
    setCurrentUser(user);
    handleLanguageChange(user.language);
    try {
      localStorage.setItem('parakh_user_profile', JSON.stringify(user));
    } catch {
      // ignore
    }
    setAuthMode('none');
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('parakh_user_profile');
    } catch {
      // ignore
    }
    setCurrentView('landing');
    setAnalysisStatus('idle');
    setAnalysisResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Analysis submission
  const handleAnalyze = async (content: string, type: InputType) => {
    setAnalysisStatus('analyzing');
    SpeechService.stop();
    setIsSpeaking(false);

    try {
      const result = await performVerification(content, type, currentLanguage);
      setAnalysisResult(result);
    } catch (err) {
      console.error('Verification failure:', err);
    }
  };

  // Called when AnalysisAnimation finishes
  const handleAnimationComplete = () => {
    setAnalysisStatus('result');
    setTimeout(() => {
      const el = document.getElementById('parakh-result-view');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Reset to clean input
  const handleReset = () => {
    SpeechService.stop();
    setIsSpeaking(false);
    setAnalysisStatus('idle');
    setAnalysisResult(null);
    setCurrentView(currentUser ? 'home' : 'landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Speech Playback for vernacular summary
  const handleToggleSpeaking = () => {
    if (isSpeaking) {
      SpeechService.stop();
      setIsSpeaking(false);
    } else if (analysisResult) {
      const vernacular = analysisResult.vernacularExplanations[currentLanguage] || analysisResult.vernacularExplanations.en;
      const textToSpeak = simpleMode ? vernacular.simple : vernacular.audioScript;

      const started = SpeechService.speak(textToSpeak, currentLanguage, () => {
        setIsSpeaking(false);
      });
      if (started) {
        setIsSpeaking(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#24313A] flex flex-col relative selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* 3-LAYER ATMOSPHERIC SOFT GLASS ENVIRONMENT */}
      <AtmosphericGlassEnvironment />

      {/* Top Bar Navigation */}
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        simpleMode={simpleMode}
        onToggleSimpleMode={() => setSimpleMode(prev => !prev)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavClick={(target) => {
          if (target === 'verify') {
            setCurrentView(currentUser ? 'home' : 'landing');
          } else {
            setCurrentView(target);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isSpeaking={isSpeaking}
        onStopSpeaking={() => {
          SpeechService.stop();
          setIsSpeaking(false);
        }}
        currentUser={currentUser}
        onOpenAuth={() => setAuthMode('login')}
        onLogout={handleLogout}
      />

      {/* Main Experience Router */}
      <main className="flex-1 w-full">
        
        {/* Authentication Flow (Login, Signup, Onboarding) */}
        {authMode !== 'none' ? (
          <AuthFlow
            initialMode={authMode === 'login' ? 'login' : 'signup'}
            onAuthenticated={handleAuthenticated}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
            onBackToLanding={() => setAuthMode('none')}
          />
        ) : (
          <>
            {/* 1. LANDING PAGE (When unauthenticated) */}
            {currentView === 'landing' && !currentUser && (
              <HeroSection
                currentLanguage={currentLanguage}
                onGetStarted={() => setAuthMode('signup')}
                onSeeHowItWorks={() => {
                  setCurrentView('learn');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* 2. PARAKH HOME & VERIFICATION WORKSPACE (When authenticated or entering verification) */}
            {(currentView === 'home' || (currentView === 'landing' && currentUser)) && (
              <>
                {analysisStatus === 'idle' && (
                  <InputSection
                    currentLanguage={currentLanguage}
                    onAnalyze={handleAnalyze}
                    isLoading={false}
                  />
                )}

                {analysisStatus === 'analyzing' && (
                  <AnalysisAnimation
                    currentLanguage={currentLanguage}
                    onComplete={handleAnimationComplete}
                  />
                )}

                {analysisStatus === 'result' && analysisResult && (
                  <ResultSection
                    analysis={analysisResult}
                    currentLanguage={currentLanguage}
                    onLanguageChange={handleLanguageChange}
                    simpleMode={simpleMode}
                    onToggleSimpleMode={() => setSimpleMode(prev => !prev)}
                    onReset={handleReset}
                    onOpenOfficialSources={() => {
                      setCurrentView('official');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    isSpeaking={isSpeaking}
                    onToggleSpeaking={handleToggleSpeaking}
                  />
                )}
              </>
            )}

            {/* 3. LEARN SECTION */}
            {currentView === 'learn' && (
              <LearnSection
                currentLanguage={currentLanguage}
                onBackToVerification={() => {
                  setCurrentView(currentUser ? 'home' : 'landing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* 4. OFFICIAL REGISTRIES & HELPLINES */}
            {currentView === 'official' && (
              <OfficialRegistriesSection
                currentLanguage={currentLanguage}
                onBackToVerification={() => {
                  setCurrentView(currentUser ? 'home' : 'landing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* 5. ABOUT SECTION */}
            {currentView === 'about' && (
              <AboutSection
                currentLanguage={currentLanguage}
                onBackToVerification={() => {
                  setCurrentView(currentUser ? 'home' : 'landing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </>
        )}

      </main>

      {/* Privacy Guarantee Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        onClearSession={() => {
          handleReset();
        }}
        currentLanguage={currentLanguage}
      />

      {/* Quiet Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onNavClick={(target) => {
          if (target === 'verify') {
            setCurrentView(currentUser ? 'home' : 'landing');
          } else {
            setCurrentView(target);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

    </div>
  );
}
