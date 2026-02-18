const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-neutral-900 light:bg-neutral-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-12 text-center scroll-animate">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-neutral-600 light:border-neutral-300">
            <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0"></div>
            
            <div className="pb-12">
              <div className="bg-neutral-900 light:bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-100 light:text-neutral-900">
                      Software Engineering Intern
                    </h3>
                    <p className="text-lg text-primary-600 font-semibold mt-1">
                      L&T Technology Services
                    </p>
                  </div>
                  <span className="text-neutral-400 light:text-neutral-600 font-medium mt-2 md:mt-0">
                    Mar 2024 – May 2024
                  </span>
                </div>

                <ul className="space-y-3 text-neutral-300 light:text-neutral-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Built Angular-based frontend from wireframes for internal HR platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Implemented CRUD workflows integrated with REST APIs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Used Angular Material and modular services for component architecture</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Worked in Agile sprints with Git-based collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
