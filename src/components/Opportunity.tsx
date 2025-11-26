export default function Opportunity() {
  return (
    <section className="section-container">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        A Critical Window of <span className="gradient-text">Opportunity</span>
      </h2>

      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
        In the next 2 years we must adapt to AI or risk falling behind — change
        comes FAST
      </p>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column - Risks */}
        <div className="bg-blue-900/30 rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-2xl font-bold text-red-400 mb-6">
            Risks of Inaction
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Massive labour displacement and vulnerability
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Financial sector job insecurity rise
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Unequal transitions within a workplace
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Loss of competitive edge for SA industry
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column - Opportunities */}
        <div className="bg-blue-900/30 rounded-2xl p-8 border border-primary-cyan/30">
          <h3 className="text-2xl font-bold text-primary-cyan mb-6">
            Opportunities for Leadership
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-cyan mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Proactive skills and workforce upskilling
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-cyan mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Building a framework of ethical AI adoption
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-cyan mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Workers voice represented in a changing system
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-cyan mr-3 mt-1">▪</span>
              <span className="text-gray-300">
                Secure stable livelihoods amidst shifting tides
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
