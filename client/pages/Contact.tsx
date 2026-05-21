import { Navigation } from "@/components/Navigation";
import { MessageCircle, Mail, Globe, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("consultation");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (type: string) => {
    setSubmitted(type);
    setTimeout(() => setSubmitted(null), 3000);
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <Navigation />

      <section id="contact" className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Contact & Enquiry
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-4 text-slate-900">
            Let's start with
            <br />
            <em className="italic text-orange-500">a conversation.</em>
          </h1>
          <div className="h-1 w-9 bg-orange-500 mb-6"></div>
          <p className="text-base leading-relaxed text-slate-700 max-w-2xl mb-12">
            Whether you want to understand what's available, see the site in person, or get a free industrial consultation — we're here. Reach out by form, call, or WhatsApp.
          </p>

          {/* Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Forms */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-0.5 bg-slate-900/10 p-0.5 mb-0.5">
                <button
                  onClick={() => setActiveTab("consultation")}
                  className={`flex-1 px-6 py-3 text-xs font-bold uppercase tracking-wide transition-all rounded-none ${
                    activeTab === "consultation"
                      ? "bg-orange-500 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Book a Free Consultation
                </button>
                <button
                  onClick={() => setActiveTab("visit")}
                  className={`flex-1 px-6 py-3 text-xs font-bold uppercase tracking-wide transition-all rounded-none ${
                    activeTab === "visit"
                      ? "bg-orange-500 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Book a Site Visit
                </button>
              </div>

              {/* Content */}
              <div className="bg-white border border-slate-200 p-8">
                {activeTab === "consultation" && (
                  <div id="free-consultation">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                      Free Industrial Consultation
                    </h3>
                    <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                      Tell us what you're looking to do. We'll help you understand what kind of plot you need, what size makes sense for your operation, what the costs look like, and what the next steps are. No charge. No obligation.
                    </p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                        />
                        <input
                          type="tel"
                          placeholder="Mobile"
                          className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Business / Company Name"
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Industry / Business Type"
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      />
                      <textarea
                        placeholder="Tell us about your requirement"
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      ></textarea>
                      <button
                        onClick={() => handleSubmit("consultation")}
                        className="w-full bg-orange-500 text-white py-3 font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-600 transition-colors"
                      >
                        Book My Free Consultation
                      </button>
                      {submitted === "consultation" && (
                        <p className="text-xs text-green-600 bg-green-50 border border-green-200 p-3 rounded">
                          ✓ Submitted — we'll be in touch within 24 hours.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "visit" && (
                  <div id="site-visit">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                      Book a Site Visit
                    </h3>
       
                    <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                      Come and see the land filling and boundary wall construction in progress. You are welcome to bring your architect, engineer, or business advisor. We'll walk through the site and answer every question you have.
                    </p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                        />
                        <input
                          type="tel"
                          placeholder="Mobile / WhatsApp"
                          className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
  type="date"
  className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500 text-slate-600"
/>
                        <select className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500">
                          <option value="">Preffered Time</option>
                          <option>11 am - 1 pm</option>
                          <option>2 pm - 4 pm</option>
                          
                        </select>
                      </div>
                      <textarea
                        placeholder="Tell us about your requirement"
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      ></textarea>
                      <a
  href="https://calendly.com/lakhotiaindustrial/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded text-sm tracking-wide transition-colors text-center"
>
  BOOK MY SITE VISIT
</a>
                      {submitted === "visit" && (
                        <p className="text-xs text-green-600 bg-green-50 border border-green-200 p-3 rounded">
                          ✓ Submitted — we'll confirm your visit within 24 hours.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-0.5 bg-slate-900/10 p-0.5">
                {/* Card 1 */}
                <div className="bg-white p-6">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">
                    Direct Contact
                  </h5>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded text-orange-600 flex-shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          +91 6293 696009, +91 6293 696008
                        </p>
                        <p className="text-xs text-slate-600">Call or WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded text-orange-600 flex-shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          info@lakhotiaindustrialcomplex.com
                        </p>
                        <p className="text-xs text-slate-600">Email enquiries</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded text-orange-600 flex-shrink-0">
                        <Globe size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          www.lakhotiaindustrialcomplex.com
                        </p>
                        <p className="text-xs text-slate-600">Website</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded text-orange-600 flex-shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Ranihati–Amta Road
                        </p>
                        <p className="text-xs text-slate-600">Howrah, West Bengal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Map */}
                <div className="bg-white overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29466.7!2d87.9570!3d22.5340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf3a9e5c6e4f5%3A0x1!2sRanihati-Amta%20Road%20Howrah!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lakhotia Location Map"
                  ></iframe>
                </div>

                {/* Card 3 - Company Info */}
                <div className="bg-white p-6 text-xs text-slate-600 leading-relaxed">
                  <p className="font-semibold text-slate-900 mb-2">Company Details</p>
                  <p className="mb-2">
                    <strong>Lakhotia Industrial Complex Private Limited</strong>
                  </p>
                  <p className="mb-2">CIN: U68200WB2022PTC219104</p>
                  <p>Established: 2022 · Development Commences</p>
                  <div className="mt-4 p-3 bg-orange-50 border-l-2 border-orange-500 text-xs italic">
                    Nothing on this website constitutes a legal offer or contractual commitment. All infrastructure descriptions reflect current or planned status. Purchasers are advised to independently review all documents before proceeding.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
