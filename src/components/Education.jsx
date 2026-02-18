const Education = () => {
  const education = [
    {
      school: 'Arizona State University',
      degree: 'MS in Software Engineering',
      period: '2024 – 2026',
      gpa: '3.96',
      location: 'Tempe, Arizona',
      coursework: [
        'Advanced Data Structures and Algorithms',
        'Software Requirements',
        'Information Assurance and Security',
        'Forensic Computing',
        'Foundations of Software Engineering',
        'Software Verification/Validation/Testing',
        'Software Project/Process/Qual Mgt'
      ]
    },
    {
      school: 'Vidyavardhaka College of Engineering',
      degree: 'BE in Computer Science',
      period: '2020 – 2024',
      location: 'Mysore, India'
    }
  ];

  return (
    <section id="education" className="section-padding bg-neutral-900 light:bg-white">
      <div className="container-custom">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-12 text-center">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="scroll-animate bg-neutral-800 light:bg-white border border-neutral-700 light:border-neutral-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-100 light:text-neutral-900 mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-primary-500 font-semibold mb-1">
                    {edu.degree}
                  </p>
                  {edu.gpa && (
                    <p className="text-neutral-300 light:text-neutral-700 font-medium">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  <p className="text-neutral-400 light:text-neutral-600 mt-2">
                    {edu.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-neutral-700 light:bg-neutral-100 text-neutral-300 light:text-neutral-700 font-semibold rounded-lg">
                    {edu.period}
                  </span>
                </div>
              </div>

              {edu.coursework && (
                <div className="mt-6 pt-6 border-t border-neutral-700 light:border-neutral-200">
                  <h4 className="text-lg font-semibold text-neutral-100 light:text-neutral-900 mb-3">
                    Relevant Coursework:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex items-start"
                      >
                        <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-neutral-300 light:text-neutral-700">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
