import ScrollAnimation from "./ScrollAnimation";

export default function HumanSide() {
  return (
    <section id="about" className="section-container">
      {/* Section Title */}
      <ScrollAnimation>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Leading the <span className="gradient-text">Human Side of AI</span>
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Sasbo's Mission */}
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-light-blue/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold">Sasbo's Mission</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              As the largest financial sector union in South Africa, Sasbo
              represents over 75,000 workers navigating one of the most
              AI-disrupted industries in the country.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We cannot afford to stand idle while AI sweeps through our
              sector—our mandate is to ensure that workers aren't left behind
              but are instead equipped, empowered, and protected as change
              unfolds.
            </p>

            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                This Symposium reflects a singular vision:
              </span>{" "}
              to position Sasbo at the forefront of ethical, worker-focused AI
              transformation across South Africa's financial sector.
            </p>

            {/* CTA Button */}
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all border border-white/20">
              Learn More
            </button>
          </div>
        </ScrollAnimation>

        {/* Right: Visual placeholder */}
        <ScrollAnimation direction="right" delay={0.3}>
          <div className="bg-blue-900/50 rounded-2xl p-8 border border-primary-light-blue/30">
            <div className="aspect-video bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-xl font-bold">IDENTIFY</p>
                <p className="text-3xl font-bold my-2">STAKEHOLDERS</p>
                <p className="text-sm text-gray-200">
                  Building partnerships for AI transformation
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
