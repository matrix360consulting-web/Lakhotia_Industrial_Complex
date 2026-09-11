import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import ProjectImage from "./theproject.jpeg";
import { Navigation } from "@/components/Navigation";
import { CheckCircle, Clock } from "lucide-react";

export default function Project() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navigation />

      {/* Header Section */}
  
  <section className="relative overflow-hidden pt-32 pb-0 border-t border-amber-900/20">
  
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            The Project
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-4 text-slate-900">
            Building it right.
            <br />
            <em className="italic text-orange-500">Phase by phase.</em>
          </h1>
          <div className="h-1 w-9 bg-orange-500 mb-6"></div>
          <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
            Phase 1 is actively underway at Mouza Jalabishwanathpur, Ranihati–Amta Road, Howrah. Here is exactly what is being built right now, what is planned for Phase 1 completion, and what comes next.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/35 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Phase 1 Active — Land Filling & Boundary Wall in Progress
            </span>
          </div>
        </div>
      </section>

      {/* Phase 1 Section */}
      <section className="bg-white border-t border-slate-900/10 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Phase 1
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-12 text-slate-900">
            Infrastructure <em className="italic text-orange-500">being built now.</em>
          </h2>

          {/* Phase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-slate-900/10 p-0.5 mb-12">
            {[
              {
                icon: "🟩",
                title: "Land Filling",
                desc: "All plots being filled and graded to road level — providing a stable, construction-ready base for industrial builds.",
                status: "● Currently in progress",
                active: true,
              },
              {
                icon: "🧱",
                title: "Perimeter Boundary Wall — 8 ft",
                desc: "8 ft boundary wall under active construction around the full site perimeter — demarcating and securing the campus.",
                status: "● Currently in progress",
                active: true,
              },
              {
                icon: "🛣️",
                title: "Main Road — 60 ft, Paver Block",
                desc: "60 ft paver block main road for full commercial vehicle movement including loaded trucks and multi-axle freight.",
                status: "○ Phase 1 — Planned",
                active: false,
              },
              {
                icon: "ꈨ",
                title: "Internal Roads — 40 ft Throughout",
                desc: "40 ft internal roads giving full campus circulation — connecting every plot to the main road and the site entrance.",
                status: "○ Phase 1 — Planned",
                active: false,
              },
              {
                icon: "💧",
                title: "Full Drainage System",
                desc: "Drainage channels alongside all internal roads — managing surface water effectively throughout the campus.",
                status: "○ Phase 1 — Planned",
                active: false,
              },
              {
                icon: "⚡",
                title: "Power Infrastructure",
                desc: "On-site sub-station providing utility access to the campus for industrial use.",
                status: "○ Phase 1 — Planned",
                active: false,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 flex gap-4">
                <div className={`w-10 h-10 flex items-center justify-center text-xl flex-shrink-0 rounded ${item.active ? "bg-orange-100" : "bg-amber-100"}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-700 mb-3">{item.desc}</p>
                  <span className={`text-xs font-bold uppercase tracking-wide ${item.active ? "text-orange-600" : "text-slate-500"}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <p className="text-sm text-slate-700 leading-relaxed italic">
              We encourage all prospective buyers to visit the site and assess the construction in person. Bring your architect or engineer. The Phase 1 items marked as 'planned' will be photographed and published on the Site Gallery page as they are completed, section by section.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 2 Section */}
      <section className="bg-amber-50 border-t border-amber-900/20 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="inline-flex items-center gap-2 bg-amber-200/30 border border-amber-400/30 px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
              Phase 2 — Follows Phase 1 Completion
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-slate-900">
            The ecosystem <em className="italic text-orange-500">that comes next.</em>
          </h2>

          {/* Phase 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-slate-900/10 p-0.5">
            {[
              {
                icon: "⚡",
                title: "Petrol Pump & EV Charging",
                desc: "On-campus fuel and EV charging for fleet operators.",
              },
              {
                icon: "🏨",
                title: "Premium and Mid-Budget Hotels",
                desc: "In-Complex accommodation and restaurant facilities",
              },
              {
                icon: "🏥",
                title: "Weighbridge, ATM & Medical",
                desc: "On-campus weighbridge, ATM, and medical support access.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700">{item.desc}</p>
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500 mt-4 block">
                  ○ Phase 2
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
    
  );
}
