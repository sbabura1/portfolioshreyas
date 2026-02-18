const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'shreyasbs2604@gmail.com',
      href: 'mailto:shreyasbs2604@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/shreyas-sunil',
      href: 'https://linkedin.com/in/shreyas-sunil'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '(602) 814-4585',
      href: 'tel:+16028144585'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-900 light:bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-6 scroll-animate">
            Let's build something impactful.
          </h2>
          <p className="text-xl text-neutral-400 light:text-neutral-600 mb-12">
            I'm actively seeking Software Developer opportunities. Let's connect!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="bg-neutral-900 light:bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                      {contact.label}
                    </p>
                    <p className="text-neutral-100 light:text-neutral-900 font-medium break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-700 light:border-neutral-200">
            <a
              href="mailto:shreyasbs2604@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-lg font-semibold text-lg hover:bg-neutral-800 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
