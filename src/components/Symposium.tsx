export default function Symposium() {
  const conversations = [
    {
      number: "01",
      title: "AI & Job Displacement",
      description:
        "What jobs are most at risk? How do we transition workers smoothly? What skills will remain relevant in an AI-powered workplace? How do we prevent large-scale job losses that devastate families and communities?",
    },
    {
      number: "02",
      title: "Reskilling & Upskilling",
      description:
        "What training programs should unions champion? How do we ensure accessible, effective reskilling for all workers? What partnerships with educators and tech firms can we forge? Who pays for reskilling: employers, government, or workers themselves?",
    },
    {
      number: "03",
      title: "Ethics & Regulation",
      description:
        "How do we ensure AI is deployed fairly and transparently? What role should unions play in shaping AI policy? How do we protect workers from biased or exploitative AI systems? What does 'ethical AI' mean in practice, not just theory?",
    },
    {
      number: "04",
      title: "Collective Bargaining in the AI Era",
      description:
        "How can unions negotiate protections in AI-driven workplaces? What new rights do workers need as AI becomes ubiquitous? How do we secure fair wages when productivity is automated? What does a new social contract look like?",
    },
    {
      number: "05",
      title: "Mental Health & Worker Well-being",
      description:
        "How do we address the anxiety and stress of AI-driven change? What support systems should unions provide for workers facing displacement? How do we maintain dignity and purpose in work? What does well-being mean in an automated future?",
    },
    {
      number: "06",
      title: "The Future of Work",
      description:
        "What will the workplace look like in 2030? How do we shape a future where technology serves humanity? What role will unions play in the age of AI? How do we ensure prosperity is shared, not concentrated?",
    },
  ];

  return (
    <section className="section-container">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Sasbo AI Symposium:{" "}
        <span className="gradient-text">The Future is Now</span>
      </h2>

      <p className="text-center text-gray-300 mb-4 max-w-4xl mx-auto">
        The 2026 Sasbo AI Symposium brings together{" "}
        <span className="font-semibold text-white">
          labour leaders, financial experts, policymakers, technologists, and
          academics
        </span>{" "}
        to confront the AI transformation head-on—with both URGENCY and VISION.
      </p>

      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-sm">
        This isn't just about survival; it's about leadership, ensuring that as
        AI reshapes finance, workers aren't casualties—they're architects of
        change.
      </p>

      {/* Conversation Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
        {conversations.map((conv, index) => (
          <div
            key={index}
            className="bg-primary-purple/40 rounded-xl p-6 border border-primary-blue/20 hover:border-primary-cyan/50 transition-all hover:transform hover:scale-105"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-primary-cyan font-bold text-lg">
                CONVERSATION {conv.number}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white">{conv.title}</h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {conv.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section with robots */}
      <div className="relative max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-primary-blue/30">
          <div className="flex items-center justify-between flex-wrap gap-8">
            {/* Left robot */}
            <div className="text-6xl">🤖</div>

            {/* Center text */}
            <div className="flex-1 text-center">
              <p className="text-gray-300 mb-4">
                <span className="font-bold text-white">
                  LET'S NOT BE SPECTATORS: WE'LL BE LEADERS, ADVOCATES,
                  VISIONARIES AND PIONEERS
                </span>
              </p>
              <p className="text-sm text-gray-400">
                The 2026 AI Symposium is the pivotal moment we look back on and
                say:{" "}
                <span className="italic">"This is when we chose to lead."</span>
              </p>
              <p className="text-xs text-gray-500 mt-4">
                Because the future won't wait—and neither will we.
              </p>
            </div>

            {/* Right robot */}
            <div className="text-6xl">🤖</div>
          </div>
        </div>
      </div>
    </section>
  );
}
