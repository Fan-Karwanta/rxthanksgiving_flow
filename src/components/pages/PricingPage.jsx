import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import Button from "../Button";
import { CheckIcon, ZapIcon, LayersIcon, UsersIcon } from "../Icons";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individuals getting started with digital networking",
      monthlyPrice: 0,
      yearlyPrice: 0,
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "1 NFC Profile",
        "Basic profile templates",
        "QR code generation",
        "Up to 100 profile views/month",
        "Email support",
        "Basic analytics",
      ],
      limitations: [
        "Limited customization",
        "NexTap branding on profile",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      description: "For professionals who want to make a lasting impression",
      monthlyPrice: 9.99,
      yearlyPrice: 99,
      color: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "5 NFC Profiles",
        "All 5 profile modes",
        "Custom branding & colors",
        "Unlimited profile views",
        "Priority support",
        "Advanced analytics dashboard",
        "Custom domain support",
        "Lead capture forms",
        "CRM integrations",
        "Remove NexTap branding",
      ],
      limitations: [],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For teams and organizations with advanced needs",
      monthlyPrice: null,
      yearlyPrice: null,
      color: "from-orange-500 to-red-500",
      popular: false,
      features: [
        "Unlimited NFC Profiles",
        "Team management dashboard",
        "Bulk profile creation",
        "SSO & advanced security",
        "Dedicated account manager",
        "Custom integrations",
        "API access",
        "White-label solution",
        "SLA guarantee",
        "On-premise deployment option",
      ],
      limitations: [],
    },
  ];

  const faqs = [
    {
      question: "What is NexTap?",
      answer: "NexTap is an NFC-powered digital business card platform that lets you share your professional profile instantly with a simple tap. No apps required for recipients.",
    },
    {
      question: "Do I need to buy NFC cards separately?",
      answer: "NexTap works with any NFC-enabled card, sticker, or device. You can purchase NFC products from us or use your own. We also provide QR codes as an alternative.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remaining billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe.",
    },
    {
      question: "Is there a free trial for Professional?",
      answer: "Yes! Professional plan comes with a 14-day free trial. No credit card required to start.",
    },
    {
      question: "How does the profile view limit work?",
      answer: "Profile views are counted each time someone views your NexTap profile. Starter plan includes 100 views/month, while Professional and Enterprise have unlimited views.",
    },
  ];

  const getPrice = (plan) => {
    if (plan.monthlyPrice === null) return "Custom";
    if (plan.monthlyPrice === 0) return "Free";
    return billingCycle === "monthly" ? plan.monthlyPrice : (plan.yearlyPrice / 12).toFixed(2);
  };

  const getSavings = (plan) => {
    if (plan.monthlyPrice === null || plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    const savings = ((monthlyCost - yearlyCost) / monthlyCost * 100).toFixed(0);
    return savings;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="pricing-hero"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-12">
            <h1 className="h1 mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2">
              Choose the perfect plan for your networking needs. Start free, upgrade when you're ready.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`body-2 transition-colors ${billingCycle === "monthly" ? "text-n-1" : "text-n-4"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className="relative w-16 h-8 bg-n-6 rounded-full transition-colors hover:bg-n-5"
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-color-1 to-color-5 rounded-full transition-all duration-300 ${
                    billingCycle === "yearly" ? "left-9" : "left-1"
                  }`}
                />
              </button>
              <span className={`body-2 transition-colors ${billingCycle === "yearly" ? "text-n-1" : "text-n-4"}`}>
                Yearly
              </span>
              {billingCycle === "yearly" && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                  Save up to 17%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 bg-n-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? "border-color-1 shadow-lg shadow-color-1/20"
                    : "border-n-6 hover:border-n-5"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-color-1 to-color-5 rounded-full">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Most Popular</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                    {plan.id === "starter" && <ZapIcon className="w-6 h-6 text-white" />}
                    {plan.id === "professional" && <LayersIcon className="w-6 h-6 text-white" />}
                    {plan.id === "enterprise" && <UsersIcon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="h4 mb-2">{plan.name}</h3>
                  <p className="body-2 text-n-3 min-h-[3rem]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    {plan.monthlyPrice !== null ? (
                      <>
                        <span className="text-n-3">$</span>
                        <span className="text-5xl font-bold">{getPrice(plan)}</span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-n-3">/month</span>
                        )}
                      </>
                    ) : (
                      <span className="text-4xl font-bold">Custom</span>
                    )}
                  </div>
                  {billingCycle === "yearly" && getSavings(plan) && (
                    <p className="mt-2 text-sm text-green-400">
                      Save {getSavings(plan)}% with yearly billing
                    </p>
                  )}
                  {billingCycle === "yearly" && plan.yearlyPrice && (
                    <p className="text-sm text-n-4">
                      ${plan.yearlyPrice} billed annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  href={plan.monthlyPrice === null ? "/contact" : "/signup"}
                  white={plan.popular}
                  className="w-full mb-8"
                >
                  {plan.monthlyPrice === null ? "Contact Sales" : plan.monthlyPrice === 0 ? "Get Started Free" : "Start Free Trial"}
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-n-2 uppercase tracking-wider">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="body-2 text-n-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.limitations.length > 0 && (
                    <ul className="space-y-3 pt-4 border-t border-n-6">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-5 h-5 flex items-center justify-center text-n-4 flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </span>
                          <span className="body-2 text-n-4">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Comparison */}
      <Section className="py-20 bg-n-8" id="comparison">
        <div className="container">
          <h2 className="h2 text-center mb-4">Compare Plans</h2>
          <p className="body-1 text-n-3 text-center mb-12 max-w-2xl mx-auto">
            See all features side by side to find the perfect fit
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-n-6">
                  <th className="text-left py-4 px-4 text-n-2 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-n-2 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-n-2 font-semibold">
                    <span className="text-color-1">Professional</span>
                  </th>
                  <th className="text-center py-4 px-4 text-n-2 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "NFC Profiles", starter: "1", pro: "5", enterprise: "Unlimited" },
                  { feature: "Profile Modes", starter: "2", pro: "All 5", enterprise: "All 5 + Custom" },
                  { feature: "Profile Views", starter: "100/month", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "QR Code Generation", starter: true, pro: true, enterprise: true },
                  { feature: "Custom Branding", starter: false, pro: true, enterprise: true },
                  { feature: "Analytics Dashboard", starter: "Basic", pro: "Advanced", enterprise: "Enterprise" },
                  { feature: "Lead Capture", starter: false, pro: true, enterprise: true },
                  { feature: "CRM Integration", starter: false, pro: true, enterprise: true },
                  { feature: "API Access", starter: false, pro: false, enterprise: true },
                  { feature: "Team Management", starter: false, pro: false, enterprise: true },
                  { feature: "White Label", starter: false, pro: false, enterprise: true },
                  { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-n-6/50 hover:bg-n-7/30 transition-colors">
                    <td className="py-4 px-4 text-n-2">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-n-5">—</span>
                        )
                      ) : (
                        <span className="text-n-3">{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-color-1/5">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-n-5">—</span>
                        )
                      ) : (
                        <span className="text-n-1 font-medium">{row.pro}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-n-5">—</span>
                        )
                      ) : (
                        <span className="text-n-3">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20" id="faq">
        <div className="container">
          <h2 className="h2 text-center mb-4">Frequently Asked Questions</h2>
          <p className="body-1 text-n-3 text-center mb-12 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 bg-n-7 rounded-2xl border border-n-6 hover:border-n-5 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-n-1 list-none">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-n-3 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 body-2 text-n-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Ready to Transform Your Networking?</h2>
            <p className="body-1 text-n-3 mb-8">
              Join thousands of professionals who've upgraded to NexTap. Start free, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/signup" white>
                Get Started Free
              </Button>
              <Button href="/contact">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Back to Home */}
      <div className="py-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-n-3 hover:text-n-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;
