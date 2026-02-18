const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-neutral-950 to-neutral-900 light:from-white light:to-neutral-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 light:text-neutral-900 leading-tight">
                Shreyas<br />
                <span className="gradient-text">Baburayanakoppal</span><br />
                Sunil
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-300 light:text-neutral-700 scroll-animate">
                Software Developer | Full-Stack & AI Applications
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-400 light:text-neutral-600 leading-relaxed max-w-xl">
                I build modern web applications and intelligent tools using full-stack technologies and AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>

            {/* Info Line */}
            <div className="pt-4 border-t border-neutral-700 light:border-neutral-200">
              <p className="text-neutral-400 light:text-neutral-600 font-medium">
                MS in Software Engineering @ Arizona State University · GPA 3.96
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-neutral-900/20 rounded-2xl blur-3xl"></div>
              <img
                src="/profile.png"
                alt="Shreyas Baburayanakoppal Sunil"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="hidden relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-neutral-700 to-neutral-800 light:from-neutral-200 light:to-neutral-300 rounded-2xl shadow-2xl items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-neutral-600 light:bg-neutral-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-neutral-300 light:text-neutral-600 font-medium">Profile Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
