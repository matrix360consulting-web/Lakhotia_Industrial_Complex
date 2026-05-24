import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { MessageCircle, Mail, Globe, MapPin, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);

const websiteAnswers: Record<string, string> = {
  location: "The project is located at Ranihati-Amta Road, Howrah, West Bengal.",

  price:
    "Please leave your mobile number and our team will connect with you regarding pricing.",

  plots:
    "Industrial plots are available for warehousing, logistics, SME manufacturing and freehold usage.",

  contact:
    "You can call or WhatsApp on +91 6293696009.",

  default:
    "Thank you for connecting with us. Please leave your mobile number and our team will connect with you.",
};
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    business: "",
    industry: "",
    requirement: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("consultation");
  const [chatInput, setChatInput] = useState("");
  const [chatStep, setChatStep] = useState("name");
const [userName, setUserName] = useState("");
const [userMobile, setUserMobile] = useState("");
const [messages, setMessages] = useState(() => {
  const saved = localStorage.getItem("chatHistory");

  return saved
    ? JSON.parse(saved)
    : [
        {
          type: "bot",
          text:"👋 Welcome to Lakhotia Industrial Complex. Can I have your name?",
        },
      ];
});

useEffect(() => {
  localStorage.setItem("chatHistory", JSON.stringify(messages));
}, [messages]);

  const handleSubmit = async () => {
  
  console.log("BUTTON CLICKED");

  if (!formData.name || !formData.mobile) {
    console.log("FIELDS EMPTY");
    return;
  }

  console.log("SENDING DATA", formData);

  const { data, error } = await supabase
    .from("consultations")
    .insert([formData])
    .select();

  console.log("SUPABASE RESPONSE:", data);
  console.log("SUPABASE ERROR:", error);

  if (!error) {
    setIsSubmitted(true);

    setFormData({
      name: "",
      mobile: "",
      business: "",
      industry: "",
      requirement: "",
    });
  }
};
const handleChat = async () => {
  if (!chatInput.trim()) return;

  const userMessage = {
    type: "user",
    text: chatInput,
  };

  setMessages((prev) => [...prev, userMessage]);
  // STEP 1 → NAME
if (chatStep === "name") {
  setUserName(chatInput);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "Can you share your mobile number?",
      },
    ]);
  }, 500);

  setChatStep("mobile");
  setChatInput("");
  return;
}

// STEP 2 → MOBILE
if (chatStep === "mobile") {
  if (!/^[0-9]{10}$/.test(chatInput)) {
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "Please enter a valid 10-digit mobile number.",
      },
    ]);

    return;
  }

  setUserMobile(chatInput);

  // SAVE TO SUPABASE
  await supabase.from("chat_leads").insert([
    {
      name: userName,
      mobile: chatInput,
    },
  ]);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: `Thank you ${userName}! How can I help you today?`,
      },
    ]);
  }, 500);

  setChatStep("chat");
  setChatInput("");
  return;
}

  let botReply = "";

const lower = chatInput.toLowerCase();

if (lower.includes("price") || lower.includes("cost")) {
  botReply =
    "Pricing depends on plot size and location. Please share your requirement and our team will assist you.";
} else if (lower.includes("location")) {
  botReply =
    "The project is located at Ranihati-Amta Road, Howrah, West Bengal.";
} else if (lower.includes("visit")) {
  botReply =
    "You can book a site visit directly from this page using the form.";
} else if (lower.includes("plot")) {
  botReply =
    "We offer industrial plots suitable for warehousing, logistics and manufacturing.";
}else if (/^[0-9]{10}$/.test(chatInput)) {
  botReply =
    "Thank you! Our team will contact you shortly.";

  console.log("Saved Number:", chatInput);
} else {
  botReply =
    "Thank you for connecting with us. Please leave your mobile number and our team will connect with you.";
}

  

  if (lower.includes("visit")) {
    botReply =
      "You can book a site visit directly from this page using the form.";
  }

  if (lower.includes("plot")) {
    botReply =
      "We offer industrial plots suitable for warehousing, logistics and manufacturing.";
  }

  setMessages([
    ...messages,
    userMessage,
    {
      type: "bot",
      text: botReply,
    },
  ]);

  setChatInput("");
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
            Whether you want to understand what's available, see the site in
            person, or get a free industrial consultation — we're here. Reach
            out by form, call, or WhatsApp.
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
                  Book Free Consultation
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
                      Tell us what you're looking to do. We'll help you
                      understand what kind of plot you need, what size makes
                      sense for your operation, what the costs look like, and
                      what the next steps are. No charge. No obligation.
                    </p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <input
                          type="tel"
                          placeholder="Mobile"
                          value={formData.mobile}
                          onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value })
                          }
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Business / Company Name"
                        value={formData.business}
                        onChange={(e) =>
                          setFormData({ ...formData, business: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Industry / Business Type"
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      />
                      <textarea
                        placeholder="Tell us about your requirement"
                        rows={4}
                        value={formData.requirement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requirement: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      />

                      <button
                        onClick={handleSubmit}
                        disabled={!formData.name || !formData.mobile}
                        className={`w-full py-4 rounded font-bold text-white transition ${
                          formData.name && formData.mobile
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                      >
                        BOOK MY FREE CONSULTATION
                      </button>
                      {isSubmitted && (
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
                      Come and see the land filling and boundary wall
                      construction in progress. You are welcome to bring your
                      architect, engineer, or business advisor. We'll walk
                      through the site and answer every question you have.
                    </p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
  type="text"
  placeholder="Your Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
/>
                        <input
  type="tel"
  placeholder="Mobile / WhatsApp"
  value={formData.mobile}
  onChange={(e) =>
    setFormData({ ...formData, mobile: e.target.value })
  }
  className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="date"
                          className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500 text-slate-600"
                        />
                        <select className="px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500">
                          <option value="">Preferred Time</option>
                          <option>11 am - 1 pm</option>
                          <option>2 pm - 4 pm</option>
                        </select>
                      </div>
                      <textarea
                        placeholder="Tell us about your requirement"
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-orange-500"
                      ></textarea>
                      <button
  onClick={handleSubmit}
  disabled={!formData.name || !formData.mobile}
  className={`w-full py-4 rounded text-sm font-semibold tracking-wide transition-colors ${
    formData.name && formData.mobile
      ? "bg-orange-500 hover:bg-orange-600 text-white"
      : "bg-gray-400 cursor-not-allowed text-white"
  }`}
>
  BOOK MY SITE VISIT
</button>
                      {isSubmitted && (
                        <p className="text-xs text-green-600 bg-green-50 border border-green-200 p-3 rounded">
                          ✓ Submitted — we'll confirm your visit within 24
                          hours.
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
                        <p className="text-xs text-slate-600">
                          Call or WhatsApp
                        </p>
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
                        <p className="text-xs text-slate-600">
                          Email enquiries
                        </p>
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
                        <p className="text-xs text-slate-600">
                          Howrah, West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Map */}

                {/* Card 3 - Company Info */}
                <div className="bg-white p-6 text-xs text-slate-600 leading-relaxed">
                  <p className="font-semibold text-slate-900 mb-2">
                    Company Details
                  </p>
                  <p className="mb-2">
                    <strong>Lakhotia Industrial Complex Private Limited</strong>
                  </p>
                  <p className="mb-2">CIN: U68200WB2022PTC219104</p>
                  <p>Established: 2022 · Development Commences</p>
                  <div className="mt-4 p-3 bg-orange-50 border-l-2 border-orange-500 text-xs italic">
                    Nothing on this website constitutes a legal offer or
                    contractual commitment. All infrastructure descriptions
                    reflect current or planned status. Purchasers are advised to
                    independently review all documents before proceeding.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
<FloatingButtons />
      {/* Chatbot */}
<div className="fixed bottom-40 right-6 z-50">
  {!isChatOpen ? (
    <button
      onClick={() => setIsChatOpen(true)}
      className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl"
    >
      <MessageCircle size={28} />
    </button>
  ) : (
    <div className="w-96 bg-white rounded-2xl shadow-2xl border overflow-hidden">
      <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold">Chat with us</h3>

        <button onClick={() => setIsChatOpen(false)}>
          <X size={18} />
        </button>
      </div>

      <div className="p-4 h-[500px] flex flex-col">

  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`p-3 rounded-xl text-sm max-w-[85%] ${
          msg.type === "user"
            ? "bg-orange-500 text-white ml-auto"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        {msg.text}
      </div>
    ))}
  </div>

  <div className="flex gap-2">
    <input
      type="text"
      value={chatInput}
      onChange={(e) => setChatInput(e.target.value)}
      placeholder="Ask something..."
      className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
    />

    <button
      onClick={handleChat}
      className="bg-orange-500 text-white px-4 rounded-lg"
    >
      Send
    </button>
  </div>

</div>
    </div>
  )}
</div>
    </div>
  );
}
