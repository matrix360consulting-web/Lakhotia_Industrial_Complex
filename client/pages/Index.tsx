import ConnectivityMap from "./connectivity-map.png";
import { Navigation } from "@/components/Navigation";
import {
  MessageCircle,
  MapPin,
  Zap,
  Truck,
  Home,
  Lightbulb,
  MapIcon,
  Building,
  Factory,
  Warehouse,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <Navigation />

      {/* Hero Banner - Edge to Edge */}
      <section
        id="home"
        className="w-screen h-screen mt-16 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white"
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F137966a6da914b47a16bcd89b41ca84c%2F4c8630d55e5d47bf85ed8187c98e20a6?format=webp&width=1200&height=1600"
            alt="Lakhotia Industrial Complex — Ranihati–Amta Road, Howrah"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-amber-50/95 from-0% via-amber-50/75 via-40% to-amber-50/15 to-100%"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center pl-8 sm:pl-16 md:pl-20 max-w-2xl">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/35 px-4 py-2 rounded-full mb-6 group">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Now Open for Early-Stage Enquiries
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black leading-none text-slate-900 mb-0">
              Viksit Bengal
            </h1>

            {/* Subtitle */}
            <span
              className="font-serif text-lg sm:text-2xl md:text-4xl font-normal italic block mb-6"
              style={{ color: "rgba(204, 85, 20, 1)" }}
            >
              Dawn of a new Industrial Era.
            </span>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 max-w-md leading-relaxed mb-6">
              Bengal is now witnessing a change. Industrial momentum is building
              across the eastern corridor — and right here on Ranihati–Amta
              Road, Howrah, a new industrial complex is being built for the
              businesses ready to be part of it.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-semibold px-3 py-1.5 border border-slate-900/20 text-slate-700 bg-white/60">
                SME Manufacturing
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 border border-slate-900/20 text-slate-700 bg-white/60">
                Warehousing
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 border border-slate-900/20 text-slate-700 bg-white/60">
                Logistics
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 border border-slate-900/20 text-slate-700 bg-white/60">
                Freehold
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center justify-center gap-2 px-6 h-12 bg-orange-500 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-600 transition-colors cursor-pointer"
              >
                <MessageCircle size={18} />
                Free Consultation
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center justify-center gap-2 px-6 h-12 bg-slate-900 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <MapPin size={18} />
                Book a Site Visit Today
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700/60">
          <span className="text-xs uppercase tracking-widest font-semibold"></span>
          <div className="w-0.5 h-10 bg-orange-500 animate-pulse"></div>
        </div>
      </section>

      {/* Marquee */}
      <div
        className="bg-orange-500 h-11 flex items-center overflow-hidden"
        style={{ paddingTop: "8px", justifyContent: "flex-start" }}
      >
        <div className="flex gap-6 whitespace-nowrap animate-scroll text-white text-xs font-bold uppercase tracking-widest">
          <span className="flex items-center gap-3">
            Freehold Ownership{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            60 ft Main Roads{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            40 ft Internal Roads{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            360° Business Solutions{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            NH-6 Corridor ~8 km{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            Phase 1 Active{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          {/* Repeat for seamless loop */}
          <span className="flex items-center gap-3">
            Freehold Ownership{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            60 ft Main Roads{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
          <span className="flex items-center gap-3">
            40 ft Internal Roads{" "}
            <span className="w-1 h-1 rounded-full bg-white/50"></span>
          </span>
        </div>
      </div>

      {/* Opportunity Section */}
      <section
        id="project"
        className="bg-amber-50/50 border-t border-amber-900/20 py-24"
        style={{ marginTop: "-1px" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                The Eastern India Opportunity
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
                Bengal is ready.
                <br />
                <em className="italic text-orange-500">Are you?</em>
              </h2>
              <div className="h-1 w-9 bg-orange-500 mb-6"></div>
              <p className="text-base leading-relaxed text-slate-700 mb-6">
                Bengal is now witnessing a change. Industrial momentum is
                building across eastern India, with growing focus on
                manufacturing, logistics, and infrastructure development
                creating real opportunities for businesses that are ready to
                move.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                The state is attracting fresh investment across sectors — from
                FMCG and packaging to engineering, pharma, and logistics. Supply
                chains are shifting eastward. Infrastructure is expanding. For
                businesses that have been waiting for the right time and the
                right address, that moment is now.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0.5 bg-slate-900/10 p-0.5 mt-12">
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    41.8M
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Sq ft industrial stock, Kolkata belt
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    ~8 km
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    From NH-6, primary freight corridor
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    360°
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Support — from plot to production
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Points */}
            <div className="space-y-0">
              {[
                {
                  icon: Factory,
                  title: "Industrial momentum building",
                  desc: "A growing focus on MSME development, manufacturing investment, and eastern India's industrial potential is creating on-ground impact.",
                },
                {
                  icon: Truck,
                  title: "Logistics and warehousing surge",
                  desc: "As e-commerce, FMCG, and organised retail expand into eastern markets, demand for warehousing is growing sharply.",
                },
                {
                  icon: Warehouse,
                  title: "SME sector expansion",
                  desc: "Small and medium enterprises are actively seeking owned industrial space — away from congested legacy clusters.",
                },
                {
                  icon: MapIcon,
                  title: "Corridor connectivity advantage",
                  desc: "The corridor sits at the intersection of NH-6 and NH-16 access routes — giving businesses reach into both eastern market and national network.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 py-6 border-b border-slate-900/10"
                >
                  <div className="w-11 h-11 flex-shrink-0 bg-orange-100 border border-orange-500/20 flex items-center justify-center text-orange-500 mt-0.5">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Quote */}
              <div className="mt-8 p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500">
                <p className="font-serif text-xl italic leading-relaxed text-slate-900 mb-3">
                  "The eastern region is moving. Businesses that secure their
                  industrial address early will be the ones positioned best for
                  what's being built here over the next decade."
                </p>
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-900">Aditya Lakhotia</strong> ·
                  Director, Lakhotia Industrial Complex
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="gallery"
        className="bg-white border-t border-slate-900/10 py-24"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Industries Growing in Bengal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              What's moving here.
              <br />
              <em className="italic text-orange-500">What could move you.</em>
            </h2>
            <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
              The Howrah–Uluberia–Ranihati corridor is home to a range of active
              industries. Here's what's growing in the neighbourhood.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-slate-900/10 p-0.5 mb-8">
            {[
              {
                title: "FMCG & Consumer Goods",
                desc: "National and regional brands are expanding eastern India operations.",
              },
              {
                title: "Plastics & Packaging",
                desc: "Highest-demand industrial segment in the belt.",
              },
              {
                title: "Light Engineering",
                desc: "Machine shops and fabricators well-suited to this corridor.",
              },
              {
                title: "Pharmaceuticals",
                desc: "Small-scale and mid-tier manufacturers seeking clean spaces.",
              },
              {
                title: "Logistics & 3PL",
                desc: "Regional distributors need truck-ready, owned addresses.",
              },
              {
                title: "Agro-Processing",
                desc: "Natural fit for this corridor, close to food parks.",
              },
              {
                title: "Electrical & Electronics",
                desc: "Cable, switchgear, LED producers seeking industrial land.",
              },
              {
                title: "Textiles & Garments",
                desc: "Processing units and ready-made operations seeking bases.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 hover:shadow-lg hover:border-t-4 hover:border-orange-500 transition-all cursor-default"
              >
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-white max-w-md">
              Not sure which plot size is right for your business?{" "}
              <em className="italic">Let's figure it out together.</em>
            </h3>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 h-12 bg-white text-orange-600 font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-50 transition-colors cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="knowledge"
        className="bg-orange-50 border-t border-orange-900/20 py-24"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              What Makes Us Different
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              Not just land.
              <br />
              <em className="italic text-orange-500">
                360° of everything you need.
              </em>
            </h2>
            <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
              Most industrial parks sell you a plot and leave you to figure out
              the rest. Lakhotia doesn't work that way.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-orange-500/20 p-0.5">
            {[
              {
                num: "01",
                title: "Customised Plot Solutions",
                desc: "Plots from 1 bigha to 6+ bigha, customised to match exactly what your operation needs.",
                tag: "1–6+ Bigha",
              },
              {
                num: "02",
                title: "Free Business Advisory",
                desc: "Help you understand what size plot you need and what the next steps are. This is complimentary.",
                tag: "No charge",
              },
              {
                num: "03",
                title: "Technical Consultancy",
                desc: "Connect you with technical specialists and build-out partners who understand factory construction.",
                tag: "Post-purchase",
              },
              {
                num: "04",
                title: "Liaison & Approval Support",
                desc: "Navigate approvals, licences, utilities connections, and compliance support for regulatory requirements.",
                tag: "End-to-end",
              },
              {
                num: "05",
                title: "State-of-the-Art Infrastructure",
                desc: "Planned 60 ft main roads, 40 ft internal roads, full drainage, road lighting and power supply.",
                tag: "Phase 1",
              },
              {
                num: "06",
                title: "Complete Ecosystem",
                desc: "Phase 2 brings on-site fuel, EV charging, hotels, weighbridge, ATM, and medical access.",
                tag: "Planned",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 hover:border-t-4 hover:border-orange-500 hover:shadow-lg transition-all cursor-default"
              >
                <div className="font-serif text-5xl font-black text-orange-500 opacity-15 mb-4 leading-none">
                  {item.num}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 mb-4">
                  {item.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-wide text-orange-600 border-b-2 border-orange-600">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Options */}
      <section className="bg-amber-50 border-t border-amber-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Plot Options
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
              Find the footprint
              <br />
              <em className="italic text-orange-500">your operation needs.</em>
            </h2>
            <div className="h-1 w-9 bg-orange-500 mb-6"></div>
            <p className="text-base leading-relaxed text-slate-700">
              From a 1-bigha SME factory to a 6+ bigha custom campus — we work
              with you to identify the right plot format for your industry.
            </p>
          </div>

          {/* Plot Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-slate-900/10 p-0.5 mb-12">
            {[
              {
                type: "Standard Industrial",
                size: "1–3",
                unit: "Bigha",
                uses: [
                  "SME factory unit",
                  "Fabrication workshop",
                  "Packaging production",
                  "Light engineering",
                ],
                featured: false,
              },
              {
                type: "Large Industrial",
                size: "3–6",
                unit: "Bigha",
                uses: [
                  "Warehouse & distribution",
                  "Large manufacturing",
                  "3PL logistics",
                  "Multi-bay operations",
                ],
                featured: true,
              },
              {
                type: "Corner Plot",
                size: "2–4",
                unit: "Bigha",
                uses: [
                  "High-visibility factory",
                  "Dual road frontage",
                  "Convenient access",
                  "Showroom + production",
                ],
                featured: false,
              },
              {
                type: "Custom / Combined",
                size: "6+",
                unit: "Bigha on request",
                uses: [
                  "Campus-style development",
                  "Multi-unit complex",
                  "Large-scale manufacturing",
                  "Long-term growth",
                ],
                featured: false,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 relative transition-all ${
                  item.featured
                    ? "border-t-4 border-orange-500 shadow-lg"
                    : "hover:border-t-4 hover:border-orange-500"
                }`}
              >
                {item.featured && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Most Requested
                  </div>
                )}
                <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
                  {item.type}
                </div>
                <div className="font-serif text-5xl font-black text-slate-900 leading-none">
                  {item.size}
                </div>
                <div className="text-xs text-slate-600 mt-1 mb-4">
                  {item.unit}
                </div>
                <div className="border-t border-slate-900/10 pt-4">
                  {item.uses.map((use, i) => (
                    <div key={i} className="text-sm text-slate-700 mb-2">
                      › {use}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-sm text-slate-700 mb-6">
              Not sure what size you need? Book a free consultation and we'll
              work it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 h-12 bg-orange-500 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-600 transition-colors cursor-pointer"
              >
                Free Consultation
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 h-12 border-2 border-orange-500 text-orange-600 font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                Request Plot Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-amber-50/50 border-t border-amber-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Lakhotia Group
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
                Who we are
                <br />
                and what we're{" "}
                <em className="italic text-orange-500">building.</em>
              </h2>
              <div className="h-1 w-9 bg-orange-500 mb-6"></div>
              <p className="text-base leading-relaxed text-slate-700 mb-6">
                Lakhotia Industrial Complex is part of the 40 year old Lakhotia
                Group. The dream started taking shape in 2022 with the key
                objective of building an organised, infrastructure-led
                industrial complex in the Howrah belt. Not fragmented land
                plots, but a complete ecosystem where SME manufacturers and
                warehouse operators can grow.
              </p>
              <p className="text-base leading-relaxed text-slate-700 mb-6">
                Our approach is simple: Plan properly. Build in phases. Be
                honest about what is ready and what is coming. And support every
                buyer—not just until they sign the agreement, but until their
                factory or warehouse is running.
              </p>
              <p className="text-sm text-slate-600">
                Lakhotia Industrial Complex is a registered company in Howrah,
                West Bengal. CIN: U68200WB2017PTC219104. The project site is
                currently in active Phase 1 development.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-0.5 bg-slate-900/10 p-0.5 mt-12">
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    2022
                  </div>
                  <div className="text-xs text-slate-600 mt-2">
                    Development commences
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    Ph.1
                  </div>
                  <div className="text-xs text-slate-600 mt-2">
                    Active development now
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    360°
                  </div>
                  <div className="text-xs text-slate-600 mt-2">
                    End-to-end buyer support
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="font-serif text-3xl font-bold text-orange-500">
                    Free
                  </div>
                  <div className="text-xs text-slate-600 mt-2">
                    Industrial consultation
                  </div>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="aspect-square rounded-sm overflow-hidden shadow-lg">
              <img
                src="/Complex_Isometric_2.png"
                alt="Lakhotia Industrial Complex"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white border-t border-slate-900/10 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Location & Connectivity
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
                Strategically placed.
                <br />
                <em className="italic text-orange-500">
                  Right in the corridor.
                </em>
              </h2>
              <div className="h-1 w-9 bg-orange-500 mb-6"></div>
              <p className="text-base leading-relaxed text-slate-700 mb-8">
                The campus sits on Ranihati–Amta Road, Mouza Jalabishwanathpur,
                Howrah — with strong access to both national freight corridors
                and the Kolkata metropolitan area.
              </p>

              {/* Distances */}
              <div className="space-y-0 bg-slate-900/10 p-0.5">
                {[
                  { label: "NH-6", distance: "~8 km", time: "~15 min" },
                  { label: "NH-16", distance: "~12 km", time: "~20 min" },
                  {
                    label: "Howrah Railway Station",
                    distance: "~18 km",
                    time: "~35 min",
                  },
                  {
                    label: "Kolkata Port Trust",
                    distance: "~22 km",
                    time: "~40 min",
                  },
                  { label: "Uluberia Hub", distance: "~6 km", time: "~12 min" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 flex-shrink-0 bg-orange-100 border border-orange-500/20 flex items-center justify-center text-orange-600">
                      <MapPin size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 text-sm">
                        {item.label}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif font-bold text-orange-600">
                        {item.distance}
                      </div>
                      <div className="text-xs text-slate-600">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Google Map */}
            <div>
              <div className="bg-white aspect-square rounded-sm flex items-center justify-center mb-4 border border-slate-200 overflow-hidden">
                <img
                  src={ConnectivityMap}
                  alt="Location & Connectivity Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-amber-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Lakhotia Industrial Complex
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ranihati–Amta Road, Mouza Jalabishwanathpur
                  <br />
                  Howrah, West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="relative overflow-hidden py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
      >
        {/* Background decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white/5"></div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">
            Take the Next Step
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
            Start with a conversation.
            <br />
            <em className="italic text-amber-100">Not a commitment.</em>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Visit the site, talk to our team, review the documents, bring your
            advisor — all before you decide anything.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8 items-stretch">
            {[
              {
                title: "Book a Free Consultation",
                desc: "Talk to us about your industry, your space requirements, and what kind of plot would work best.",
              },
              {
                title: "Book a Site Visit Today",
                desc: "Come and see the land filling and boundary wall construction in progress.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/15 backdrop-blur-sm p-8 rounded text-left flex flex-col h-full"
              >
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 mb-6">{item.desc}</p>
                <a
                  href={
                    idx === 0
                      ? "/contact#free-consultation"
                      : "/contact#site-visit"
                  }
                  className="mt-auto w-full px-6 h-12 bg-white text-orange-600 font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-50 transition-colors cursor-pointer flex items-center justify-center"
                >
                  {idx === 0 ? "Start Here" : "Schedule a Visit"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
           <div>
  <img
    src="/logo.png"
    alt="Lakhotia Group"
    className="h-20 w-auto mb-4"
  />
              <p className="text-xs text-white/40 leading-relaxed">
                A well planned and organised, infrastructure-led industrial
                campus in active development on Ranihati–Amta Road, Howrah, West
                Bengal.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                Navigate
              </h5>
              <ul className="space-y-2 text-xs text-white/40">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    The Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Site Gallery
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                Contact
              </h5>
              <ul className="space-y-3 text-xs text-white/40">
                <li>+91 6293 696009</li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    info@lakhotiaindustrialcomplex.com
                  </a>
                </li>
                <li>www.lakhotiaindustrialcomplex.com</li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
                Site Address
              </h5>
              <p className="text-xs text-white/40 leading-relaxed">
                Lakhotia Industrial Complex
                <br />
                Ranihati–Amta Road
                <br />
                Mouza Jalabishwanathpur
                <br />
                Howrah, West Bengal
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs text-white/20">
              © 2026 Lakhotia Industrial Complex Private Limited · CIN:
              U68200WB2017PTC219104
            </p>
            <p className="text-xs text-white/20">
              Site developed by Matrix360.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
