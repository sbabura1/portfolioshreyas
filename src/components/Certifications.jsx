const Certifications = () => {
  const certifications = [
    {
      title: 'Edge Computing',
      issuer: 'NPTEL',
      date: 'Mar 2024',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS66S34760014630004987'
    },
    {
      title: 'Preparing for Google Cloud Certification: Cloud Engineer',
      issuer: 'Coursera',
      date: 'Dec 2022',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HN3CVCBB2U4G'
    },
    {
      title: 'Architecting with Google Compute Engine Specialization',
      issuer: 'Coursera',
      date: 'Dec 2022',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/43KWDYSS82PX'
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-neutral-900 light:bg-neutral-50">
      <div className="container-custom">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-12 text-center">
            Certifications
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="scroll-animate bg-neutral-800 light:bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-700 light:border-neutral-200 card-hover"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-100 light:text-neutral-900 mb-1">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-neutral-400 light:text-neutral-600">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 ml-4 inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors group"
                >
                  View Certificate
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default Certifications;
