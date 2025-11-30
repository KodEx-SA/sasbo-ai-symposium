import ScrollAnimation from "./ScrollAnimation";

export default function TimeCapsule() {
  return (
    <section id="time-capsule" className="section-container">
      {/* Section Title */}
      <ScrollAnimation>
        <div className="text-center mb-16">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            Historical Context
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            The Time Capsule <span className="gradient-text">Moment</span>
          </h2>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Visual Card */}
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-light-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl p-8 border border-primary-light-blue/30 backdrop-blur-sm overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="relative aspect-video bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Icon replacement with shape */}
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                    <div className="w-12 h-12 border-4 border-white rounded-lg" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      AI Symposium
                    </p>
                    <p className="text-sm text-blue-100 mt-2">
                      2026 Time Capsule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Right: Content */}
        <ScrollAnimation direction="right" delay={0.3}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text leading-tight">
              Artificial Intelligence finds unprecedented traction
            </h3>

            <div className="space-y-4">
              <div className="p-5 bg-blue-900/30 rounded-xl border-l-4 border-primary-cyan">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-white block mb-2">
                    WHY WE REMEMBER
                  </span>
                  2024-25 marks humanity's pivotal AI awakening—a transformation
                  comparable to the printing press or internet revolution. This
                  era will be studied for generations as the moment work
                  fundamentally changed.
                </p>
              </div>

              <div className="p-5 bg-blue-900/30 rounded-xl border-l-4 border-primary-light-blue">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-white block mb-2">
                    PREDICTION
                  </span>
                  By 2028, it is estimated that nearly 40% of jobs across
                  diverse industries will be transformed by AI integration,
                  reshaping the very nature of employment.
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
                  <div className="text-3xl font-bold gradient-text">2024</div>
                  <div className="text-xs text-gray-400 mt-1">
                    The Awakening Year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
