export default function CaseStudies() {
  const studies = [
    {
      title: "Wahaj Gold (Landing Page)",
      challenge:
        "Create a premium digital experience that reflects the luxury positioning of a precious metals brand.",
      solution:
        "Designed and developed a custom landing page focused on trust, visual storytelling, and lead generation.",
      role:
        "UX Strategy • Web Design • Development • Content Structure",
      platform:
        "React • GitHub • Vercel",
    },

    {
      title: "SAM Precious Metals",
    
      challenge:
        "Enhance the company's online presence and improve communication with B2B clients, investors, and partners.",
    
      solution:
        "Managed website structure, content updates, user experience improvements, and ongoing website optimization initiatives.",
    
      role:
        "Website Management | UX Optimization | Content Strategy",
    
      platform:
        "WordPress",
    },

    {
      title: "Taj Signature",
    
      challenge:
        "Develop a luxury e-commerce experience aligned with the brand's artistic and premium positioning.",
    
      solution:
        "Built and managed a Shopify storefront with a focus on elegant product presentation and customer experience.",
    
      role:
        "Store Design | UX Strategy | Content Structure",
    
      platform:
        "Shopify",
    },

    {
      title: "Wahaj Gold Website (Staging)",
    
      challenge:
        "Build and prepare the company's primary website before launch while establishing a reliable staging environment.",
    
      solution:
        "Implemented the WordPress website, configured hosting resources, managed cPanel setup, and prepared the platform for launch through a dedicated staging environment.",
    
      role:
        "WordPress Development | Hosting Setup | cPanel Configuration | Website Management",
    
      platform:
        "WordPress | Hosting | cPanel",
    },

    {
      title: "Twenty Seven Marketing",
    
      challenge:
        "Create a professional online presence that clearly communicates the agency's capabilities and services.",
    
      solution:
        "Designed and managed a Wix-based website focused on clarity, service presentation, and credibility.",
    
      role:
        "Website Design | UX Planning | Content Structure",
    
      platform:
        "Wix",
    },

    {
      title: "SAM PM Institute",
    
      challenge:
        "Create an educational platform that delivers industry knowledge through a structured and accessible online experience.",
    
      solution:
        "Supported website structure, content organization, and user experience improvements to make learning resources easier to access and navigate.",
    
      role:
        "Website Management | Content Organization | UX Planning",
    
      platform:
        "WordPress",
    },
  ];

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">

        <h2>Featured Case Studies</h2>

        {studies.map((study) => (
          <div className="case-study" key={study.title}>

            <h3>{study.title}</h3>

            <div className="case-grid">

              <div>
                <h4>Challenge</h4>
                <p>{study.challenge}</p>
              </div>

              <div>
                <h4>Solution</h4>
                <p>{study.solution}</p>
              </div>

              <div>
                <h4>My Role</h4>
                <p>{study.role}</p>
              </div>

              <div>
                <h4>Platform</h4>
                <p>{study.platform}</p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
