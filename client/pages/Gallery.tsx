import project1 from "./project1.jpeg";
import project2 from "./project2.jpeg";
import project3 from "./project3.jpeg";
import { Navigation } from "@/components/Navigation";
import { Camera } from "lucide-react";

export default function Gallery() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Site Gallery
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-4 text-slate-900">
            What's happening
            <br />
            <em className="italic text-orange-500">on the ground.</em>
          </h1>

          <div className="h-1 w-9 bg-orange-500 mb-6"></div>

          <p className="text-base leading-relaxed text-slate-700 max-w-2xl mb-12">
            Explore the latest updates and visual insights into our ongoing development work.
          </p>
  

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                caption: null,
                image: project2,
              },
              {
                caption: null,
                image: project3,
              },
              {
                caption: null,
                image: project1,
              },
              {
                caption: "Plot demarcation · April 2026",
                image: null,
              },
              {
                caption: "Site entrance area · April 2026",
                image: null,
              },
              {
                caption: "Earthwork in progress · April 2026",
                image: null,
              },
              {
                caption: "Perimeter view · April 2026",
                image: null,
              },
              {
                caption: "Access road from Ranihati–Amta Road · April 2026",
                image: null,
              },
              {
                caption: "Main entrance gateway · April 2026",
                image: null,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-900/20 to-amber-900/10 aspect-square rounded-sm flex flex-col items-center justify-center gap-4 relative group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Actual Image */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Placeholder (only if no image) */}
                {!item.image && (
                  <div className="flex flex-col items-center gap-2">
                    <Camera
                      size={40}
                      className="text-amber-900/30 group-hover:text-amber-900/50 transition-colors"
                    />
                    <span className="text-xs text-amber-900/40 uppercase tracking-widest text-center px-4">
                      Add Photo
                    </span>
                  </div>
                )}

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-3">
                  <p className="text-xs text-white/80">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-12">
            <p className="text-sm text-slate-700 leading-relaxed">
              Site photographs are updated regularly as construction progresses.
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
