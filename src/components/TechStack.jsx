const TechStack = () => {
  const techCategories = [
    {
      category: 'Programming',
      items: ['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'Tailwind CSS', 'Material UI']
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs']
    },
    {
      category: 'AI / ML',
      items: ['LLM APIs', 'Sentence Transformers', 'FAISS', 'YOLO', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Docker', 'Kubernetes (Basics)', 'GCP', 'Git', 'CI/CD']
    }
  ];

  return (
    <section id="tech" className="section-padding bg-neutral-900 light:bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-4 text-center scroll-animate">
          Tech Stack
        </h2>
        <p className="text-neutral-400 light:text-neutral-600 text-center mb-12 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {techCategories.map((category, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-bold text-neutral-100 light:text-neutral-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-neutral-800 light:bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-200 light:text-neutral-800 font-medium rounded-lg transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
