import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";

export default function Knowledge() {
  const [activeTab, setActiveTab] = useState("k1");

  const tabs = [
    { id: "k1", label: "Understanding Land Categories" },
    { id: "k2", label: "The Purchase Process" },
    { id: "k3", label: "Documents to Check" },
    { id: "k4", label: "Approvals & Licences" },
    { id: "k5", label: "Building Regulations" },
    { id: "k6", label: "FAQs" },
  ];

  const content: Record<string, React.ReactNode> = {
    k1: (
      <div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
          Understanding Land Categories in West Bengal
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          Industrial land in West Bengal is classified under specific land-use categories that determine what can be built on it and how. Before purchasing any plot, it is important to verify that the land has been formally converted or approved for industrial use.
        </p>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Key land-use categories</h4>
        <ul className="space-y-2 mb-6">
          <li className="text-sm text-slate-700 pl-5 relative">
            <span className="absolute left-0 text-orange-600 font-bold">•</span>
            <strong>Agricultural land (K-1, K-2):</strong> Land that has not been converted for industrial or commercial use. You cannot legally set up a factory or warehouse on agricultural land without conversion.
          </li>
          <li className="text-sm text-slate-700 pl-5 relative">
            <span className="absolute left-0 text-orange-600 font-bold">•</span>
            <strong>Converted industrial land:</strong> Land that has received formal approval from the relevant authority (BL&LRO or municipal authority) to be used for industrial purposes. This is what Lakhotia plots are.
          </li>
          <li className="text-sm text-slate-700 pl-5 relative">
            <span className="absolute left-0 text-orange-600 font-bold">•</span>
            <strong>Land within industrial parks / WBIIDC estates:</strong> Government-allotted industrial land under specific park frameworks. Different rules apply.
          </li>
        </ul>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
          <p className="text-sm text-slate-700">
            <strong>Lakhotia Industrial Complex:</strong> Plots at Lakhotia are on industrially classified land. The industrial land-use approval / conversion order is available on request before any purchase decision.
          </p>
        </div>
      </div>
    ),
    k2: (
      <div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
          The Purchase Process — Step by Step
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Buying an industrial plot is a process, not a single event. Here is what you should expect from enquiry to possession.
        </p>
        {[
          {
            step: "Step 1",
            title: "Initial consultation",
            desc: "Before anything else, speak to our team about your requirement — industry type, operation scale, plot size, utilities needed. This helps us recommend the right plot format. This is free, with no obligation.",
          },
          {
            step: "Step 2",
            title: "Site visit",
            desc: "Visit the site. Walk the plots. Assess the access, the neighbourhood, and the infrastructure in progress. Bring your engineer or architect if needed. We strongly encourage this before any booking is made.",
          },
          {
            step: "Step 3",
            title: "Document review",
            desc: "We provide the land title, industrial land-use approval, layout plan, and company registration documents for your review. You and your legal advisor should review these independently before proceeding.",
          },
          {
            step: "Step 4",
            title: "Booking and agreement",
            desc: "A booking amount confirms your plot. A formal sale agreement is then executed. The payment schedule is confirmed at this stage.",
          },
          {
            step: "Step 5",
            title: "Registration",
            desc: "The registered sale deed is executed at the sub-registrar's office. At this point, legal ownership formally transfers to you.",
          },
          {
            step: "Step 6",
            title: "Possession and build-out",
            desc: "After registration, you take possession of the plot. Our technical consultancy team is available to assist with build-out planning, approval support, and connecting you to appropriate design-build partners.",
          },
        ].map((item) => (
          <div key={item.step} className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              {item.step} — {item.title}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6">
          <p className="text-sm text-slate-700 italic">
            The entire process typically takes 4–12 weeks depending on documentation readiness and legal review timelines. We recommend starting your legal review early.
          </p>
        </div>
      </div>
    ),
    k3: (
      <div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
          Documents You Should Ask For and Review
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Before committing to any industrial land purchase, verify the following. A legitimate developer will have all of these available for your review.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            { title: "Land Title / Ownership Deed", desc: "Confirms that the seller has legal title to the land being sold." },
            { title: "Mutation / Record of Rights (RoR)", desc: "The official record showing land ownership in government records. Ask for the updated RoR (Khatian)." },
            { title: "Industrial Land-Use Conversion Order", desc: "Confirms that the land has been approved for industrial use. Critical — do not skip this." },
            { title: "Layout / Site Plan (Approved)", desc: "The sanctioned layout showing plot boundaries, roads, and internal layout." },
            { title: "Encumbrance Certificate", desc: "Confirms that the land is free of mortgages, charges, or legal disputes." },
            { title: "Company Registration Certificate", desc: "Verifies that the developer is a registered legal entity." },
            { title: "RERA Registration (if applicable)", desc: "Check whether the project is registered under RERA. Requirements vary by state and project type." },
          ].map((item, idx) => (
            <li key={idx} className="text-sm text-slate-700 pl-5 relative">
              <span className="absolute left-0 text-orange-600 font-bold">•</span>
              <strong>{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
          <p className="text-sm text-slate-700">
            <strong>Lakhotia Industrial Complex:</strong> Makes available: land title, industrial land-use approval, layout plan, and company registration certificate. Request any of these before making any decision — this is your right as a buyer.
          </p>
        </div>
      </div>
    ),
    k4: (
      <div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
          Approvals & Licences After Purchase
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Owning an industrial plot is the first step. Setting up a business on it requires a separate set of approvals and licences, depending on your industry type.
        </p>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Factory-related approvals</h4>
        <ul className="space-y-1 mb-6 text-sm text-slate-700 pl-5">
          <li>• Factory Licence under the Factories Act</li>
          <li>• Building plan sanction from the relevant local authority</li>
          <li>• Fire NOC from the West Bengal Fire Services</li>
          <li>• Consent to Establish and Consent to Operate from WBPCB</li>
        </ul>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Utility connections</h4>
        <ul className="space-y-1 mb-6 text-sm text-slate-700 pl-5">
          <li>• Electricity connection from WBSEDCL or industrial feeder</li>
          <li>• Water connection from local body</li>
        </ul>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Business registration</h4>
        <ul className="space-y-1 mb-6 text-sm text-slate-700 pl-5">
          <li>• Udyam Registration (MSME) — recommended for SME units</li>
          <li>• GST registration</li>
          <li>• Trade Licence from the local municipality</li>
        </ul>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
          <p className="text-sm text-slate-700">
            <strong>Lakhotia's liaison support</strong> helps you navigate the approval process. We have experience working through these requirements in the Howrah belt and can guide you to the right offices and timelines.
          </p>
        </div>
      </div>
    ),
    k5: (
      <div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
          Building Regulations for Industrial Construction
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Once you own your plot and are ready to build, construction must comply with applicable building regulations. These vary depending on the local body governing the area.
        </p>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Setbacks and ground coverage</h4>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Industrial plots typically have mandatory setbacks from plot boundaries (front, side, rear) and a maximum permitted ground coverage ratio. Your architect will design within these parameters.
        </p>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Building height</h4>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Maximum permitted building height depends on plot size and local regulations. For standard industrial warehouses, typical permissible heights are in the range of 9–18 metres, subject to approval.
        </p>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Structural standards</h4>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Industrial buildings are subject to structural safety standards. PEB (Pre-Engineered Building) construction is common for warehouses and factories and is typically faster and more cost-effective.
        </p>
        <h4 className="font-semibold text-slate-900 mt-6 mb-3">Fire safety</h4>
        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          Buildings above a certain area threshold require fire safety compliance including fire exits, fire hydrant systems, and sprinklers depending on occupancy type.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
          <p className="text-sm text-slate-700">
            Our <strong>technical consultancy team</strong> can connect you with an industrial architect and structural engineer experienced in this corridor. This is offered as part of our post-purchase support.
          </p>
        </div>
      </div>
    ),
    k6: (
      <div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
          Frequently Asked Questions
        </h3>
        {[
          {
            q: "Can I build a factory immediately after purchasing?",
            a: "After plot registration, and after Phase 1 infrastructure (roads, drainage, utilities) is operational, you can begin construction subject to applicable building byelaws and relevant approvals. Our team will assist you through this process.",
          },
          {
            q: "Is the land freehold or leasehold?",
            a: "All Lakhotia plots are sold on a freehold basis. You own the land outright. A registered sale deed is executed at the sub-registrar's office, transferring legal title to you.",
          },
          {
            q: "What industries are permitted?",
            a: "The site is suitable for non-polluting and light-polluting industrial uses — manufacturing, warehousing, logistics, light engineering, plastics, packaging, food processing, and similar. Heavy or hazardous industry may require additional environmental clearances.",
          },
          {
            q: "What is the current price per bigha?",
            a: "Pricing is confirmed directly with our team based on plot size, location within the campus, and current availability. We do not publish a fixed price card publicly as terms may vary. Contact us for the current rate sheet.",
          },
          {
            q: "Can I visit before deciding?",
            a: "Absolutely — and we strongly encourage it. Contact us to schedule a site visit at a time that suits you. You are welcome to bring your architect, engineer, or legal advisor.",
          },
          {
            q: "Is there a payment plan available?",
            a: "Payment structure is discussed as part of the booking process. Speak to our team for current commercial terms.",
          },
        ].map((item, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-2">{item.q}</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Knowledge Centre
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-4 text-slate-900">
            Before you buy,
            <br />
            <em className="italic text-orange-500">know what you're buying.</em>
          </h1>
          <div className="h-1 w-9 bg-orange-500 mb-6"></div>
          <p className="text-base leading-relaxed text-slate-700 max-w-2xl mb-12">
            Industrial land purchase involves more steps than most buyers expect. We've put together an honest guide to the process — so you go in informed, not surprised.
          </p>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-sm sticky top-24">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 text-sm font-medium border-b border-slate-200 transition-all last:border-b-0 ${
                      activeTab === tab.id
                        ? "bg-orange-500 text-white border-l-4 border-l-orange-500"
                        : "bg-white text-slate-700 hover:bg-orange-50 border-l-4 border-l-transparent"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-slate-200 rounded-sm p-8">
                {content[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
