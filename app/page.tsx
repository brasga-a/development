// Built with Scaffold v0.1.5

"use client";

import { Github, Rocket, Twitter } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Pricing() {
  const router = useRouter();
  const [annual, setAnnual] = useState(true);
  const [plans, setPlans] = useState([{"annual":7,"features":["5 projects","1 GB storage","Email support"],"monthly":9,"name":"Starter"},{"annual":24,"features":["Unlimited projects","10 GB storage","Priority support","Custom domains"],"monthly":29,"name":"Pro"},{"annual":79,"features":["Everything in Pro","100 GB storage","24/7 phone support","SSO & SAML","Dedicated account manager"],"monthly":99,"name":"Enterprise"}]);
  const [faq, setFaq] = useState([{"answer":"Yes, you can upgrade or downgrade at any time.","question":"Can I switch plans later?"},{"answer":"Yes! Every plan comes with a 14-day free trial.","question":"Is there a free trial?"},{"answer":"We accept all major credit cards and PayPal.","question":"What payment methods do you accept?"}]);

  return (
    <div className="bg-[#ffffff] flex flex-col items-center w-full min-h-full">
      <nav className="px-[32px] py-[16px] flex flex-row items-center justify-between w-full max-w-[1200px]">
        <div className="flex flex-row gap-[8px] items-center">
          <Rocket className="text-[#2563eb]" size={24} />
          <h3 className="text-[#111827]">Acme</h3>
        </div>
        <div className="flex flex-row gap-[32px] items-center">
          <Link href="/">
            <p className="text-[#6b7280]">Home</p>
          </Link>
          <Link href="/docs">
            <p className="text-[#6b7280]">Docs</p>
          </Link>
          <button className="bg-[#2563eb] text-[#ffffff] px-[24px] py-[8px] rounded-[8px]" onClick={() => router.push('login')}>
            Sign In
          </button>
        </div>
      </nav>
      <div className="px-[32px] py-[64px] flex flex-col gap-[16px] items-center">
        <div className="bg-[#dbeafe] text-[#2563eb] px-[16px] py-[4px] rounded-[9999px]">
          <span>Simple, transparent pricing</span>
        </div>
        <h1 className="text-[#111827] text-center">Choose the right plan for you</h1>
        <p className="text-[#6b7280] text-center">Start free, then grow with your team. Cancel anytime.</p>
        <div className="py-[16px] flex flex-row gap-[8px] items-center">
          <p className="text-[#6b7280]">Monthly</p>
          <input type="checkbox" checked={annual} onChange={(e) => setAnnual(e.target.checked)} />
          <p className="text-[#6b7280]">Annual</p>
          <div className="bg-[#10b981] text-[#ffffff] px-[8px] py-[4px] rounded-[9999px]">
            <span>Save 20%</span>
          </div>
        </div>
      </div>
      <div className="px-[32px] py-[24px] flex flex-row gap-[32px] justify-center flex-wrap max-w-[1100px]">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-[#ffffff] p-[32px] flex flex-col gap-[24px] w-[320px] rounded-[16px] shadow-lg border-[1px] border-[#e5e7eb]">
            <h3 className="text-[#111827]">{plan.name}</h3>
            <div className="flex flex-row gap-[4px] items-end">
              {annual ? (
                <h2 className="text-[#111827]">{`$${plan.annual}`}</h2>
              ) : (
                <h2 className="text-[#111827]">{`$${plan.monthly}`}</h2>
              )}
              <span className="text-[#6b7280]">/month</span>
            </div>
            <button className="bg-[#2563eb] text-[#ffffff] py-[8px] w-full rounded-[8px] cursor-pointer">
              Get Started
            </button>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[#6b7280]">What&apos;s included:</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-[32px] py-[64px] flex flex-col gap-[32px] items-center w-full max-w-[700px]">
        <h2 className="text-[#111827]">Frequently Asked Questions</h2>
        {faq.map((item) => (
          <div key={item.question} className="p-[24px] flex flex-col gap-[8px] w-full rounded-[12px] border-[1px] border-[#e5e7eb]">
            <h5 className="text-[#111827]">{item.question}</h5>
            <p className="text-[#6b7280]">{item.answer}</p>
          </div>
        ))}
      </div>
      <footer className="px-[32px] py-[32px] flex flex-row items-center justify-between w-full max-w-[1200px] border-[1px] border-[#e5e7eb]">
        <span className="text-[#6b7280]">© 2026 Acme Inc.</span>
        <div className="flex flex-row gap-[24px]">
          <a href="https://twitter.com/acme" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-[#6b7280]" size={20} />
          </a>
          <a href="https://github.com/acme" target="_blank" rel="noopener noreferrer">
            <Github className="text-[#6b7280]" size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
