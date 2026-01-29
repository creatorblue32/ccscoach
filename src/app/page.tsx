"use client";

import { useState } from "react";

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-medium text-zinc-900 tracking-tight">
              StudyCCS
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#features"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Log In
            </button>
            <button className="text-sm px-5 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-md hover:from-teal-700 hover:to-emerald-700 transition-all shadow-sm shadow-teal-500/20">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-5 h-5 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-100">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-zinc-600 py-1">
                Features
              </a>
              <a href="#pricing" className="text-sm text-zinc-600 py-1">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-zinc-600 py-1">
                FAQ
              </a>
              <div className="flex gap-4 pt-4 border-t border-zinc-100">
                <button className="text-sm text-zinc-600">Log In</button>
                <button className="text-sm px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-medium text-teal-700">
              Built by residents from NYU, Stanford & more
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
            Master Step 3 CCS
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              with confidence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Stop grinding through endless cases. Learn exactly what to order
            and when—maximize your score on any case.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg shadow-teal-500/25">
              Start Learning
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 text-zinc-600 text-sm font-medium rounded-lg border border-zinc-200 hover:border-teal-200 hover:bg-teal-50/50 transition-colors">
              See How It Works
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-zinc-500">
              <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>250+ Cases</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Pass Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Book Fund Eligible</span>
            </div>
          </div>
        </div>

        {/* Software Preview */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect behind the mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-emerald-400/20 to-cyan-400/20 blur-3xl -z-10 scale-110" />
          
          {/* Browser mockup */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-zinc-900/10 border border-zinc-200/80 overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 border-b border-zinc-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-md border border-zinc-200 text-xs text-zinc-400">
                  app.studyccs.com
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* App content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-56 bg-zinc-900 p-4 hidden md:block">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <span className="font-medium text-white text-sm">StudyCCS</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal-500/20 text-teal-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-sm">Practice Cases</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-zinc-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm">Core Method</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-zinc-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm">Analytics</span>
                  </div>
                </div>

                <div className="mt-8 p-3 rounded-lg bg-zinc-800">
                  <div className="text-xs text-zinc-500 mb-2">Your Progress</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full" />
                    </div>
                    <span className="text-xs text-teal-400 font-medium">75%</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-6 bg-zinc-50 min-h-[400px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-xs font-medium">Cardiology</span>
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-700 text-xs font-medium">High Yield</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">Case #47: Acute Chest Pain</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs text-zinc-500">Time Remaining</div>
                      <div className="text-lg font-mono font-semibold text-zinc-900">18:42</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Case content grid */}
                <div className="grid lg:grid-cols-2 gap-4">
                  {/* Patient info */}
                  <div className="bg-white rounded-xl p-5 border border-zinc-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-zinc-900">Patient Presentation</span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      45-year-old male presents to the ED with acute onset substernal chest pain radiating to left arm, associated with diaphoresis and nausea. Pain started 2 hours ago while climbing stairs.
                    </p>
                    <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-zinc-400 text-xs">BP</div>
                        <div className="font-medium text-zinc-900">158/94</div>
                      </div>
                      <div>
                        <div className="text-zinc-400 text-xs">HR</div>
                        <div className="font-medium text-zinc-900">98 bpm</div>
                      </div>
                      <div>
                        <div className="text-zinc-400 text-xs">SpO2</div>
                        <div className="font-medium text-zinc-900">96%</div>
                      </div>
                    </div>
                  </div>

                  {/* Guidance panel */}
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-5 text-white shadow-lg shadow-teal-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Smart Guidance</span>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed mb-4">
                      Think: ACS until proven otherwise. Your immediate priorities should be:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                        <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center text-xs font-medium">1</div>
                        <span className="text-sm">Order ECG immediately (within 10 min)</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                        <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center text-xs font-medium">2</div>
                        <span className="text-sm">Troponin, CBC, BMP, lipid panel</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                        <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center text-xs font-medium">3</div>
                        <span className="text-sm">Aspirin 325mg STAT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order input */}
                <div className="mt-4 bg-white rounded-xl p-4 border border-zinc-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-zinc-50 rounded-lg border border-zinc-200">
                      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-sm text-zinc-400">Type to search orders (e.g., &quot;ECG&quot;, &quot;troponin&quot;)...</span>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium rounded-lg shadow-md shadow-teal-500/20">
                      Submit Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stats cards */}
          <div className="absolute -left-4 top-1/4 bg-white rounded-xl p-4 shadow-xl shadow-zinc-900/10 border border-zinc-100 hidden xl:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-zinc-500">Pass Rate</div>
                <div className="font-semibold text-zinc-900">98.5%</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/3 bg-white rounded-xl p-4 shadow-xl shadow-zinc-900/10 border border-zinc-100 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-zinc-500">Students</div>
                <div className="font-semibold text-zinc-900">12,400+</div>
              </div>
            </div>
          </div>

          <div className="absolute right-16 -bottom-4 bg-white rounded-xl p-4 shadow-xl shadow-zinc-900/10 border border-zinc-100 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-zinc-500">Avg. Score Boost</div>
                <div className="font-semibold text-zinc-900">+23 pts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function Problem() {
  const problems = [
    {
      title: "Endless Case Practice",
      description:
        "You've done 50, 100, even 200 cases—but you still feel unprepared for unexpected scenarios.",
    },
    {
      title: "Guessing on Unfamiliar Cases",
      description:
        "When you hit a case you haven't seen, you freeze. What do you order first?",
    },
    {
      title: "Missing Easy Points",
      description:
        "Even when you get the diagnosis right, you're losing points on order sequencing.",
    },
  ];

  return (
    <section className="section-padding px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
            Traditional CCS prep is broken
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            Most students spend 40+ hours doing case after case, only to feel
            unprepared when test day throws them a curveball.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 border border-zinc-100 rounded-xl bg-white hover:shadow-lg hover:shadow-zinc-100 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center mb-6">
                <span className="text-sm font-semibold text-teal-700">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solution Section
function Solution() {
  const solutions = [
    {
      title: "Systematic Framework",
      description:
        "Learn the universal approach that works for any case—not memorizing scenarios.",
    },
    {
      title: "Exact Order Sequences",
      description:
        "Know precisely what to order and when. No more guessing which test comes first.",
    },
    {
      title: "Decision Triggers",
      description:
        "Understand the 'why' behind every action so you can adapt to variations.",
    },
    {
      title: "Score Maximization",
      description:
        "Capture maximum points with our structured approach, even on unfamiliar cases.",
    },
  ];

  return (
    <section className="section-padding px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
              The Solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
              Master the framework,
              <br />
              not just the cases
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-12">
              Our core method teaches systematic thinking that top
              scorers use. Practice with 250+ cases to reinforce—you&apos;ll
              know the approach for any case.
            </p>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Demo Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="space-y-5">
              {/* Case Header */}
              <div className="pb-5 border-b border-zinc-700/50">
                <p className="text-[10px] text-teal-400 uppercase tracking-widest mb-2">
                  Case Presentation
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  45-year-old male presents with acute chest pain radiating to
                  left arm, diaphoresis...
                </p>
              </div>

              {/* Thinking Section */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-4">
                <p className="text-[10px] text-amber-400 uppercase tracking-widest mb-2">
                  Clinical Thinking
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Acute coronary syndrome until proven otherwise.
                  <span className="text-zinc-500">
                    {" "}
                    Stabilize → Diagnose → Treat.
                  </span>
                </p>
              </div>

              {/* Order Sequence */}
              <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-lg p-4">
                <p className="text-[10px] text-teal-400 uppercase tracking-widest mb-3">
                  Optimal Order Sequence
                </p>
                <div className="space-y-2">
                  {[
                    "ECG (within 10 min)",
                    "Troponin, CBC, BMP",
                    "Aspirin 325mg",
                    "Nitroglycerin PRN",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="w-5 h-5 rounded bg-teal-500/20 flex items-center justify-center text-[10px] text-teal-400 font-medium">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Score */}
              <div className="pt-4 border-t border-zinc-700/50 flex justify-between items-center">
                <span className="text-xs text-zinc-500">Expected Score</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full" />
                  </div>
                  <span className="text-sm font-semibold text-teal-400">
                    95%+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Learn the Framework",
      description:
        "Complete our focused core method that teaches systematic CCS thinking.",
      time: "Quick start",
    },
    {
      number: "02",
      title: "Practice with Guidance",
      description:
        "Work through cases with real-time hints showing exactly what to order and why.",
      time: "Your pace",
    },
    {
      number: "03",
      title: "Build Confidence",
      description:
        "Test yourself in simulation mode and watch your scores climb consistently.",
      time: "Build mastery",
    },
    {
      number: "04",
      title: "Pass Your Exam",
      description:
        "Walk into Step 3 knowing you can handle any case they throw at you.",
      time: "Exam day",
    },
  ];

  return (
    <section className="section-padding px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
            A clear path to mastery
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-lg overflow-hidden">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8">
              <span className="text-3xl font-light text-teal-200 mb-6 block">
                  {step.number}
                </span>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {step.description}
              </p>
              <span className="text-xs text-zinc-400">{step.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      title: "250+ Real Cases",
      description:
        "Comprehensive coverage of all major CCS topics you'll encounter on exam day.",
    },
    {
      title: "Step-by-Step Guidance",
      description:
        "Every case includes exactly what to order and why—learn as you practice.",
    },
    {
      title: "Score Analytics",
      description:
        "Track your progress and identify weak areas with detailed performance insights.",
    },
    {
      title: "Realistic Timing",
      description:
        "Practice under real exam conditions with accurate time simulation.",
    },
    {
      title: "Unlimited Practice",
      description:
        "Retake any case as many times as you need until you've mastered it.",
    },
    {
      title: "Updated Content",
      description:
        "Cases regularly updated to reflect the latest USMLE guidelines.",
    },
  ];

  return (
    <section id="features" className="section-padding px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
            Everything you need
          </h2>
          <p className="text-zinc-500">
            Built by medical educators who understand what it takes to pass.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="font-medium text-zinc-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Social Proof - Schools
function Schools() {
  const schools = [
    "NYU Langone",
    "Stanford",
    "Johns Hopkins",
    "UCSF",
    "Mount Sinai",
    "Duke",
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50/30 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs text-teal-600 uppercase tracking-widest mb-10">
          Created by residents from leading institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {schools.map((school, index) => (
            <span
              key={index}
              className="text-sm font-medium text-zinc-400 hover:text-teal-600 transition-colors tracking-wide cursor-default"
            >
              {school}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      quote:
        "I went from dreading CCS cases to actually looking forward to them. The framework changed everything.",
      name: "Sarah M.",
      role: "IMG, Passed Step 3",
      image: "/testimonial1.jpg",
    },
    {
      quote:
        "The step-by-step guidance showed me exactly what I was doing wrong. Scored in the 90th percentile on CCS.",
      name: "James K.",
      role: "US MD, First Attempt Pass",
      image: "/testimonial2.jpg",
    },
    {
      quote:
        "Best investment I made for Step 3. The method is genius—I finally understood the logic behind orders.",
      name: "Priya R.",
      role: "DO Student, Matched IM",
      image: "/testimonial3.jpg",
    },
  ];

  return (
    <section className="section-padding px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
            Trusted by thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-zinc-100 rounded-xl bg-white hover:shadow-lg hover:shadow-zinc-100 transition-all group overflow-hidden">
              {/* Testimonial Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-white/90 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: "1 Month",
      price: "59",
      description: "Perfect for focused exam prep",
      features: [
        "Full core method",
        "All 250+ practice cases",
        "Step-by-step guidance",
        "Score tracking",
      ],
      popular: false,
    },
    {
      name: "3 Months",
      price: "79",
      description: "Most popular choice",
      features: [
        "Everything in 1 Month",
        "Extended practice time",
        "Performance analytics",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "1 Year",
      price: "119",
      description: "Best value for complete mastery",
      features: [
        "Everything in 3 Months",
        "Full year of access",
        "All future updates",
        "Lifetime case additions",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-500">
            One payment. No subscriptions. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 relative ${
                plan.popular
                  ? "bg-gradient-to-br from-zinc-900 to-zinc-800 text-white ring-2 ring-teal-500/50 shadow-xl shadow-teal-500/10"
                  : "border border-zinc-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="text-[10px] uppercase tracking-widest text-teal-400 mb-4 block">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-lg font-medium mb-1 ${
                  plan.popular ? "text-white" : "text-zinc-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span
                  className={`text-4xl font-semibold ${
                    plan.popular ? "text-white" : "text-zinc-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {" "}
                  one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-teal-400" : "text-teal-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-md shadow-teal-500/20"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6">
            <h3 className="font-medium text-zinc-900 mb-2">
              100% Money-Back Guarantee
            </h3>
            <p className="text-sm text-zinc-500">
              If you don&apos;t pass Step 3, we&apos;ll refund you completely.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="font-medium text-zinc-900 mb-2">
              Book Fund Eligible
            </h3>
            <p className="text-sm text-zinc-500">
              We&apos;ll provide documentation for your residency&apos;s
              education allowance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is this different from just doing practice cases?",
      answer:
        "Unlike traditional practice-only approaches, we teach you a systematic framework first. This means you understand the underlying logic, so you can handle any case—not just the ones you've memorized.",
    },
    {
      question: "How quickly can I learn the CCS framework?",
      answer:
        "Our core method teaches you the fundamental framework and thinking process efficiently. After that, practice reinforces what you've learned. Most students feel more confident after completing the framework than after dozens of practice cases alone.",
    },
    {
      question: "What if I don't pass?",
      answer:
        "We offer a 100% money-back guarantee. If you don't pass Step 3 after using our method, we'll refund you completely—no questions asked.",
    },
    {
      question: "Is this updated for the current Step 3 format?",
      answer:
        "Yes. Our cases and guidance are regularly updated to reflect the latest USMLE guidelines, testing patterns, and scoring criteria.",
    },
    {
      question: "Do I need to complete all 250+ cases?",
      answer:
        "No. Once you learn the framework, many cases follow similar patterns. We recommend focusing on variety rather than volume. Quality of understanding beats quantity.",
    },
    {
      question: "When should I start before my exam?",
      answer:
        "We recommend starting 2-4 weeks before your exam. Learn the framework early, then practice at your own pace.",
    },
  ];

  return (
    <section id="faq" className="section-padding px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-zinc-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-zinc-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-zinc-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-zinc-900 via-zinc-900 to-teal-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-2xl mx-auto text-center relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
          Ready to master CCS?
        </h2>
        <p className="text-zinc-400 mb-10">
          Join thousands of students who transformed their Step 3 performance.
        </p>
        <button className="px-8 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg shadow-teal-500/25">
          Get Started Now
        </button>
        <p className="text-xs text-zinc-500 mt-8">
          30-day money-back guarantee · Instant access · No subscription
        </p>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="text-sm font-medium text-zinc-900">
              StudyCCS
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-zinc-400">© 2026 StudyCCS</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Testimonials />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Schools />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
