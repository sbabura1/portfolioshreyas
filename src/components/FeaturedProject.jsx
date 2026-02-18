const FeaturedProject = () => {
  const highlights = [
    'Reduced manual code review effort by 40%',
    'Achieved sub-500ms semantic similarity search using embeddings and FAISS',
    'Designed scalable REST APIs for code analysis workflows',
    'Integrated third-party LLM APIs with centralized error handling'
  ];

  const techStack = ['Spring Boot', 'LLM APIs', 'Sentence Transformers', 'FAISS', 'REST APIs'];

  return (
    <section className="section-padding bg-neutral-900 light:bg-neutral-50">
      <div className="container-custom">
        
        {/* Section Heading - Visible immediately, no animation */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 text-center">
            Featured Project
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-800 light:bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-700 light:border-neutral-200">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              
              <div className="space-y-6 scroll-animate-left">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-500 text-sm font-semibold rounded-full mb-4">
                    Featured Project
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-neutral-100 light:text-neutral-900 mb-3">
                    Developer Intelligence Agent
                  </h3>
                  <p className="text-xl text-neutral-400 light:text-neutral-600 font-medium">
                    AI-powered code understanding and analysis system
                  </p>
                </div>

                <p className="text-neutral-300 light:text-neutral-700 text-lg leading-relaxed">
                  A modular backend service designed to analyze multi-file codebases and provide intelligent, structured insights using semantic search and LLM pipelines.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-100 light:text-neutral-900 text-lg">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-300 light:text-neutral-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-100 light:text-neutral-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-700 light:bg-neutral-100 text-neutral-300 light:text-neutral-700 text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                 <a href="https://github.com/iamdheemanth/dev-intelligence-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              <div className="flex items-center justify-center scroll-animate-right">
                <div className="relative w-full">
                  <img
                    src="/dev.png"
                    alt="Developer Intelligence Agent"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full min-h-[300px] bg-gradient-to-br from-primary-600/10 via-neutral-700 to-primary-600/10 light:from-primary-100 light:via-neutral-100 light:to-primary-50 rounded-xl items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary-600/20 rounded-2xl mx-auto flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-neutral-400 light:text-neutral-600 font-medium">Dev Intelligence Agent</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;