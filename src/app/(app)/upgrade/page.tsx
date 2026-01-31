"use client";

import { useState } from "react";
import Link from "next/link";

type PlanDuration = "1-month" | "3-months" | "1-year";

const plans: Record<PlanDuration, { name: string; price: string; description: string; perMonth: string }> = {
  "1-month": {
    name: "1 Month",
    price: "59",
    description: "Perfect for focused exam prep",
    perMonth: "$59/month",
  },
  "3-months": {
    name: "3 Months",
    price: "79",
    description: "Most popular choice",
    perMonth: "$26/month",
  },
  "1-year": {
    name: "1 Year",
    price: "119",
    description: "Best value for complete mastery",
    perMonth: "$10/month",
  },
};

const features = [
  "Full core method curriculum",
  "All 250+ practice cases",
  "Step-by-step guidance on every case",
  "Detailed score analytics",
  "Performance tracking dashboard",
  "Unlimited practice attempts",
  "All future case updates",
  "Priority email support",
];

export default function UpgradePage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanDuration>("3-months");
  const [processing, setProcessing] = useState(false);

  const handleUpgrade = async () => {
    setProcessing(true);
    // TODO: Integrate with Stripe or payment provider
    // For now, just simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);
    alert("Payment integration coming soon!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-4">
          <svg
            className="w-4 h-4 text-teal-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium text-teal-700">
            Upgrade to Pro
          </span>
        </div>
        <h1 className="text-3xl font-semibold text-zinc-900 mb-3">
          Unlock your full potential
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto">
          Get access to all 250+ cases, step-by-step guidance, and advanced
          analytics to master CCS with confidence.
        </p>
      </div>

      {/* Plan Selection */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {(Object.keys(plans) as PlanDuration[]).map((planKey) => {
          const plan = plans[planKey];
          const isSelected = selectedPlan === planKey;
          const isPopular = planKey === "3-months";

          return (
            <button
              key={planKey}
              onClick={() => setSelectedPlan(planKey)}
              className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? "border-teal-500 bg-teal-50/50"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              {isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-zinc-900">{plan.name}</p>
                  <p className="text-xs text-zinc-500">{plan.description}</p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-teal-500 bg-teal-500" : "border-zinc-300"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-zinc-900">
                  ${plan.price}
                </span>
                <span className="text-sm text-zinc-500">one-time</span>
              </div>
              <p className="text-xs text-teal-600 mt-1">{plan.perMonth}</p>
            </button>
          );
        })}
      </div>

      {/* Features List */}
      <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-8">
        <h2 className="font-semibold text-zinc-900 mb-4">
          Everything included in Pro:
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
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
              <span className="text-sm text-zinc-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-white mb-2">
            Ready to upgrade?
          </h3>
          <p className="text-sm text-zinc-400 mb-6">
            Join thousands of students who&apos;ve passed Step 3 with our method.
            100% money-back guarantee if you don&apos;t pass.
          </p>

          <button
            onClick={handleUpgrade}
            disabled={processing}
            className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              `Upgrade for $${plans[selectedPlan].price}`
            )}
          </button>

          <div className="flex items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure checkout
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Money-back guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 text-center">
        <p className="text-sm text-zinc-500 mb-4">Trusted by residents from:</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["NYU Langone", "Stanford", "Johns Hopkins", "UCSF", "Duke"].map(
            (school) => (
              <span
                key={school}
                className="text-sm font-medium text-zinc-400"
              >
                {school}
              </span>
            )
          )}
        </div>
      </div>

      {/* FAQ Link */}
      <div className="mt-8 text-center">
        <p className="text-sm text-zinc-500">
          Have questions?{" "}
          <Link href="/#faq" className="text-teal-600 hover:text-teal-700">
            Check our FAQ
          </Link>{" "}
          or{" "}
          <a href="mailto:support@studyccs.com" className="text-teal-600 hover:text-teal-700">
            contact support
          </a>
        </p>
      </div>
    </div>
  );
}
