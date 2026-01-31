"use client";

const modules = [
  {
    id: 1,
    title: "Introduction to CCS",
    description: "Understanding the exam format and scoring system",
    duration: "15 min",
    status: "coming_soon",
  },
  {
    id: 2,
    title: "The Universal Framework",
    description: "A systematic approach that works for any case",
    duration: "25 min",
    status: "coming_soon",
  },
  {
    id: 3,
    title: "Order Timing & Sequencing",
    description: "When to order what and why timing matters",
    duration: "20 min",
    status: "coming_soon",
  },
  {
    id: 4,
    title: "Clinical Decision Triggers",
    description: "Key findings that should change your approach",
    duration: "30 min",
    status: "coming_soon",
  },
  {
    id: 5,
    title: "Scoring Optimization",
    description: "Maximizing points on every case",
    duration: "20 min",
    status: "coming_soon",
  },
];

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-teal-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-zinc-200/60 px-8 py-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-zinc-900 tracking-tight">
                Core Method
              </h1>
              <p className="text-sm text-zinc-500">
                Master the systematic framework for any CCS case
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 max-w-4xl">
        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">
                Coming Soon
              </h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                We&apos;re putting the finishing touches on our core method curriculum. 
                This comprehensive guide will teach you the systematic thinking that top scorers use. 
                Check back soon!
              </p>
            </div>
          </div>
        </div>

        {/* Module Preview */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Curriculum Preview
          </h2>
        </div>

        <div className="space-y-3">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="bg-white rounded-xl border border-zinc-200 p-5 opacity-75"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium text-zinc-900">
                      {module.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-zinc-100 text-zinc-500 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500">
                    {module.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">
            Want to be notified when it&apos;s ready?
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-md mx-auto">
            We&apos;ll send you an email as soon as the core method curriculum is available.
          </p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg shadow-teal-500/20">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
