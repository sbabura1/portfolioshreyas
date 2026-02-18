const About = () => {
  return (
    <section id="about" className="section-padding bg-neutral-900 light:bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 light:text-neutral-900 mb-12 text-center scroll-animate">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-neutral-300 light:text-neutral-700 leading-relaxed">
            <p>
              I'm a Software Engineering graduate student at Arizona State University with experience building full-stack applications and AI-powered tools.
            </p>
            
            <p>
              I enjoy developing clean, responsive frontends and scalable backend services using technologies like React, Spring Boot, Node.js, and Python.
            </p>
            
            <p>
              I've worked on projects ranging from AI-based learning platforms to intelligent code analysis systems, focusing on writing maintainable code and delivering practical solutions.
            </p>
            
            <p className="font-semibold text-neutral-100 light:text-neutral-900">
              I'm currently seeking Software Developer roles where I can contribute to building reliable and user-focused applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
