export default function Features() {
  const features = [
    {
      icon: "💻",
      title: "AI & Development",
      description: "Hands-on workshops on AI tools and skills",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: "🎯",
      title: "Ethics & Regulation",
      description: "Shaping fair AI policies for workers",
      color: "from-pink-500 to-purple-400",
    },
    {
      icon: "📊",
      title: "Marketing & Analytics",
      description: "Data-driven insights for union strategy",
      color: "from-blue-400 to-cyan-300",
    },
    {
      icon: "💼",
      title: "Financial Innovation",
      description: "AI-driven transformation in finance",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: "⚖️",
      title: "Worker Protection",
      description: "Legal frameworks for AI workplace rights",
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: "🚀",
      title: "Career Development",
      description: "Future-ready skills and career pathways",
      color: "from-blue-500 to-purple-400",
    },
  ];

  return (
    <section className="section-container">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-primary-purple/30 rounded-2xl p-8 border border-primary-blue/20 hover:border-primary-cyan/50 transition-all text-center group hover:transform hover:scale-105"
          >
            {/* Icon with gradient background */}
            <div
              className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-4xl transform group-hover:rotate-6 transition-transform`}
            >
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-white">
              {feature.title}
            </h3>

            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-primary-cyan to-primary-blue text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg">
          Explore Your Interest
        </button>
      </div>
    </section>
  );
}
