import ScrollAnimation from "./ScrollAnimation";

export default function TimeCapsule() {
  return (
    <section className="section-container">
      {/* Section Title */}
      <ScrollAnimation>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          The Time Capsule <span className="gradient-text">Moment</span>
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Image placeholder */}
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="bg-blue-900/50 rounded-2xl p-8 border border-primary-light-blue/30">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-xl font-bold">AI Symposium</p>
                <p className="text-sm text-gray-300">Time Capsule Visual</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Right: Content */}
        <ScrollAnimation direction="right" delay={0.3}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">
              Artificial Intelligence finds unprecedented traction
            </h3>

            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">WHY WE REMEMBER:</span>{" "}
              2024-25 is the era that will go down in history as humanity's
              pivotal AI awakening – comparable to the printing press or
              internet revolution.
            </p>

            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">PREDICTION:</span> By
              2028, it is estimated that nearly 40% of jobs across diverse
              industries will be transformed by AI integration.
            </p>

            {/* Mouse/Device placeholder */}
            <div className="mt-8 bg-white/5 rounded-xl p-6 border border-primary-light-blue/20">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🖱️</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
