import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { ArrowRight, Check, Sparkles, MessageSquare, Image as ImageIcon, Globe, BookOpen } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

export interface UserProfile {
  name: string;
  email: string;
  language: Language;
  primaryUse?: string;
}

interface AuthFlowProps {
  initialMode?: 'login' | 'signup';
  onAuthenticated: (user: UserProfile) => void;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onBackToLanding: () => void;
}

export const AuthFlow: React.FC<AuthFlowProps> = ({
  initialMode = 'login',
  onAuthenticated,
  currentLanguage,
  onLanguageChange,
  onBackToLanding
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [mode, setMode] = useState<'login' | 'signup' | 'onboarding'>(initialMode);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(currentLanguage);

  // Onboarding state
  const [onboardingStep, setOnboardingStep] = useState<1 | 2 | 3>(1);
  const [selectedUsage, setSelectedUsage] = useState<string>('Check messages');

  const languages: Array<{ code: Language; label: string; sub: string }> = [
    { code: 'en', label: 'English', sub: 'English' },
    { code: 'hi', label: 'हिन्दी', sub: 'Hindi' },
    { code: 'kn', label: 'ಕನ್ನಡ', sub: 'Kannada' },
    { code: 'te', label: 'తెలుగు', sub: 'Telugu' }
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: UserProfile = {
      name: loginEmail.split('@')[0] || 'Investor',
      email: loginEmail || 'citizen@bharat.in',
      language: currentLanguage
    };
    onAuthenticated(user);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLanguageChange(selectedLanguage);
    setMode('onboarding');
    setOnboardingStep(1);
  };

  const handleGoogleAuth = () => {
    const user: UserProfile = {
      name: 'Google Verified Citizen',
      email: 'citizen.verified@gmail.com',
      language: currentLanguage
    };
    onAuthenticated(user);
  };

  const finishOnboarding = () => {
    const user: UserProfile = {
      name: signupName || 'Citizen of Bharat',
      email: signupEmail || 'citizen@bharat.in',
      language: selectedLanguage,
      primaryUse: selectedUsage
    };
    onAuthenticated(user);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 relative">
      
      {/* Back button */}
      <button
        onClick={onBackToLanding}
        className="absolute top-4 left-6 text-xs text-[#475569] hover:text-[#0F172A] transition-colors flex items-center gap-1.5 py-1 font-light cursor-pointer"
      >
        <span>← {t.authBackToOverview}</span>
      </button>

      {/* LOGIN VIEW */}
      {mode === 'login' && (
        <GlassTile variant="elevated" glow className="max-w-md w-full p-8 sm:p-10 space-y-7 shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
          
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white border border-white flex items-center justify-center shadow-[0_4px_16px_rgba(2,132,199,0.3)]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0284C7] stroke-[2.2]" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" d="M7 6h6a3.5 3.5 0 010 7H7V18" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-light text-[#0F172A] tracking-tight">
              {t.loginWelcomeTitle}
            </h2>
            <p className="text-xs text-[#475569] font-light">
              {t.loginWelcomeSubtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-[#475569] block font-light">{t.emailLabel}</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white/80 border border-white rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 transition-all font-light shadow-sm"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <label className="text-[#475569] font-light">{t.passwordLabel}</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); }} className="text-[#0284C7] hover:text-[#0369A1] transition-colors">
                  {t.forgotPasswordLink}
                </a>
              </div>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/80 border border-white rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 transition-all shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_28px_rgba(2,132,199,0.35)] transition-all cursor-pointer shadow-md mt-2"
            >
              {t.loginContinueButton}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-[#0F172A]/10" />
            <span className="absolute px-3 bg-white/80 text-[11px] text-[#475569] font-mono">
              {t.orDivider}
            </span>
          </div>

          {/* Continue with Google */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="w-full py-3 rounded-2xl text-xs sm:text-sm font-medium text-[#0F172A] bg-white hover:bg-white border border-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{t.continueWithGoogle}</span>
          </button>

          {/* Switch to Signup */}
          <div className="pt-2 text-center text-xs text-[#475569]">
            <span>{t.newToParakh} </span>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className="text-[#0284C7] hover:text-[#0369A1] font-semibold transition-colors cursor-pointer"
            >
              {t.createAccountLink}
            </button>
          </div>

        </GlassTile>
      )}

      {/* SIGNUP VIEW */}
      {mode === 'signup' && (
        <GlassTile variant="elevated" glow className="max-w-md w-full p-8 sm:p-10 space-y-6 shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
          
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl font-light text-[#0F172A] tracking-tight">
              {t.createAccountTitle}
            </h2>
            <p className="text-xs text-[#475569] font-light">
              {t.createAccountSubtitle}
            </p>
          </div>

          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-[#475569] block font-light">{t.fullNameLabel}</label>
              <input
                type="text"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                placeholder="Ramesh Kumar"
                className="w-full bg-white/80 border border-white rounded-2xl px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 transition-all font-light shadow-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#475569] block font-light">{t.emailLabel}</label>
              <input
                type="email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="ramesh@example.com"
                className="w-full bg-white/80 border border-white rounded-2xl px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 transition-all font-light shadow-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#475569] block font-light">{t.passwordLabel}</label>
              <input
                type="password"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/80 border border-white rounded-2xl px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/50 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 transition-all shadow-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#475569] block font-light">{t.preferredLanguageLabel}</label>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      onLanguageChange(lang.code);
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedLanguage === lang.code
                        ? 'bg-sky-50 border-sky-300 text-sky-950 shadow-sm font-semibold'
                        : 'bg-white/60 border-white/80 text-[#0F172A] hover:bg-white'
                    }`}
                  >
                    <div className="text-xs">{lang.label}</div>
                    <div className="text-[10px] text-[#475569]">{lang.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_28px_rgba(2,132,199,0.35)] transition-all cursor-pointer shadow-md mt-2"
            >
              {t.loginContinueButton}
            </button>
          </form>

          {/* Privacy statement */}
          <div className="p-3 rounded-2xl bg-white/60 border border-white text-[11px] text-[#475569] leading-relaxed text-center font-light">
            {t.signupPrivacyNotice}
          </div>

          {/* Switch to Login */}
          <div className="text-center text-xs text-[#475569]">
            <span>{t.alreadyHaveAccount} </span>
            <button
              type="button"
              onClick={() => setMode('login')}
              className="text-[#0284C7] hover:text-[#0369A1] font-semibold transition-colors cursor-pointer"
            >
              {t.loginLink}
            </button>
          </div>

        </GlassTile>
      )}

      {/* ONBOARDING SEQUENCE */}
      {mode === 'onboarding' && (
        <GlassTile variant="elevated" glow className="max-w-lg w-full p-8 sm:p-10 space-y-8 shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
          
          {/* Progress dots */}
          <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/10">
            <span className="text-xs font-mono text-[#0284C7] font-semibold">
              {t.onboardingStepPrefix} 0{onboardingStep} {t.onboardingStepOf} 03
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map(step => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-all ${
                    onboardingStep === step
                      ? 'w-6 bg-[#0284C7]'
                      : onboardingStep > step
                      ? 'bg-emerald-500'
                      : 'bg-black/15'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Language comfort */}
          {onboardingStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-light text-[#0F172A] tracking-tight">
                  {t.onboardingStep1Title}
                </h3>
                <p className="text-xs text-[#475569] font-light">
                  {t.onboardingStep1Desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {languages.map(lang => (
                  <GlassTile
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? 'surface' : 'subtle'}
                    interactive
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      onLanguageChange(lang.code);
                    }}
                    className={`p-5 text-left cursor-pointer ${
                      selectedLanguage === lang.code ? 'border-[#0284C7] bg-sky-50 shadow-sm' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base font-semibold text-[#0F172A]">{lang.label}</span>
                      {selectedLanguage === lang.code && (
                        <Check className="w-4 h-4 text-[#0284C7]" />
                      )}
                    </div>
                    <span className="text-xs text-[#475569] font-light">{lang.sub}</span>
                  </GlassTile>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOnboardingStep(2)}
                  className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-md transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{t.continueButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Usage goals */}
          {onboardingStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-light text-[#0F172A] tracking-tight">
                  {t.onboardingStep2Title}
                </h3>
                <p className="text-xs text-[#475569] font-light">
                  {t.onboardingStep2Desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: t.onboardingUsageOption1Title, desc: t.onboardingUsageOption1Desc, icon: MessageSquare },
                  { title: t.onboardingUsageOption2Title, desc: t.onboardingUsageOption2Desc, icon: ImageIcon },
                  { title: t.onboardingUsageOption3Title, desc: t.onboardingUsageOption3Desc, icon: Globe },
                  { title: t.onboardingUsageOption4Title, desc: t.onboardingUsageOption4Desc, icon: BookOpen }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const isChosen = selectedUsage === item.title;
                  return (
                    <GlassTile
                      key={idx}
                      variant={isChosen ? 'surface' : 'subtle'}
                      interactive
                      onClick={() => setSelectedUsage(item.title)}
                      className={`p-4 text-left cursor-pointer ${
                        isChosen ? 'border-[#0284C7] bg-sky-50 shadow-sm' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-[#0284C7] mb-2 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-semibold text-[#0F172A]">{item.title}</div>
                      <div className="text-[11px] text-[#475569] font-light mt-0.5">{item.desc}</div>
                    </GlassTile>
                  );
                })}
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setOnboardingStep(1)}
                  className="text-xs text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  {t.backButton}
                </button>
                <button
                  type="button"
                  onClick={() => setOnboardingStep(3)}
                  className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-md transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{t.continueButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Ready confirmation */}
          {onboardingStep === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0284C7] shadow-sm">
                <Sparkles className="w-8 h-8 text-[#0284C7]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-light text-[#0F172A] tracking-tight">
                  {t.onboardingStep3Title}
                </h3>
                <p className="text-sm text-[#475569] max-w-sm mx-auto font-light leading-relaxed">
                  {t.onboardingStep3Desc}
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={finishOnboarding}
                  className="w-full py-4 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_30px_rgba(2,132,199,0.35)] transition-all cursor-pointer shadow-md"
                >
                  {t.enterParakhButton}
                </button>
              </div>
            </div>
          )}

        </GlassTile>
      )}

    </div>
  );
};
