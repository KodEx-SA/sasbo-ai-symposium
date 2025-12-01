import ScrollAnimation from "./ScrollAnimation";
import TimeCapsuleGraphic from "./TimeCapsuleGraphic";

export default function TimeCapsule() {
  return (
    <section id="time-capsule" className="section-container">
      {/* Section Title */}
      <ScrollAnimation>
        <div className="text-center mb-16">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            The Paradox
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            The Time Capsule <span className="gradient-text">Moment</span>
          </h2>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Time Capsule Graphic */}
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-light-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl p-8 border border-primary-light-blue/30 backdrop-blur-sm overflow-hidden min-h-[400px]">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="relative h-full flex items-center justify-center">
                <TimeCapsuleGraphic />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Right: Content - Updated with brief copy */}
        <ScrollAnimation direction="right" delay={0.3}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text leading-tight">
              Artificial Intelligence finds unprecedented traction
            </h3>

            <div className="space-y-4">
              <div className="p-5 bg-blue-900/30 rounded-xl border-l-4 border-primary-cyan">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-white block mb-2">
                    AI IS REVOLUTIONIZING INDUSTRIES WORLDWIDE
                  </span>
                  Yet it remains in a{" "}
                  <span className="text-primary-cyan font-semibold">
                    time capsule
                  </span>{" "}
                  within the financial sector—immense potential exists, but
                  early-stage adoption means we're at a critical crossroads.
                </p>
              </div>

              <div className="p-5 bg-blue-900/30 rounded-xl border-l-4 border-primary-light-blue">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-white block mb-2">
                    THE CLOCK IS TICKING
                  </span>
                  By 2028, nearly 40% of jobs across diverse industries will be
                  transformed by AI integration. The window to shape this
                  transformation is{" "}
                  <span className="text-primary-cyan font-semibold">
                    closing fast
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mt-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-primary-light-blue/20 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">40%</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Jobs Transformed by 2028
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">NOW</div>
                  <div className="text-xs text-gray-400 mt-1">Time to Act</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
