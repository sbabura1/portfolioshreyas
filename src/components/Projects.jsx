const Projects = () => {
  const projects = [
    {
  title: 'Developer Intelligence Agent',
  description: 'AI-powered code assistant that reduces code review iterations by 40% and improves search performance to sub-1000ms with vector embeddings.',
  tech: ['Python', 'Flask', 'ChromaDB', 'LangChain', 'Supabase', 'React'],
  github: 'https://github.com/iamdheemanth/dev-intelligence-agent',
  featured: true
},
    {
      title: 'Dhvani Vihaara',
      description: 'AI-powered Kannada learning platform for specially-abled children. Improved engagement by 40% using multimodal AI integration.',
      tech: ['Web Speech API', 'Gemini AI', 'Google TTS', 'DALL·E'],
      github: 'https://github.com/sbabura1'
    },
    {
      title: 'AI Email Reply Extension',
      description: 'Chrome extension generating context-aware email replies. Improved productivity by 55%.',
      tech: ['Spring Boot', 'React', 'Gemini API'],
      github: 'https://github.com/sbabura1/AIEmailReply'
    },
    {
      title: 'Agile Sprint Simulator',
      description: 'Interactive Scrum board simulation with sprint analytics. Improved sprint tracking efficiency by 35%.',
      tech: ['React', 'REST APIs'],
      github: 'https://github.com/SER-515/group-22'
    },
    {
      title: 'Lyric',
      description: 'Music-inspired programming language built using ANTLR and Python. Designed custom grammar and parser architecture.',
      tech: ['ANTLR', 'Python', 'Compiler Design'],
      github: 'https://github.com/dphaldes/SER502-Lyric-Team6'
    },
    {
      title: 'Collision Detection Using YOLO',
      description: 'Real-time accident detection model with 92% accuracy. Optimized inference using ONNX Runtime.',
      tech: ['YOLO', 'ONNX Runtime', 'Computer Vision'],
      github: 'https://github.com/sbabura1'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-neutral-900 light:bg-white">
      <div className="container-custom">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-4 text-center">
            Projects
          </h2>
          <p className="text-neutral-400 light:text-neutral-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`scroll-animate delay-${(index % 3 + 1) * 100} bg-neutral-800 light:bg-white border border-neutral-700 light:border-neutral-200 rounded-xl p-6 card-hover group`}
            >
              <div className="space-y-4">
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-primary-600/10 text-primary-500 text-xs font-semibold rounded-full mb-2">
                    Featured
                  </span>
                )}
                
                <h3 className="text-xl font-bold text-neutral-100 light:text-neutral-900 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 light:text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-neutral-700 light:bg-neutral-100 text-neutral-300 light:text-neutral-700 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neutral-100 light:text-neutral-900 hover:text-primary-500 light:hover:text-primary-600 font-medium transition-colors group/link"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                  <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
