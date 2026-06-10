export default function CaseStudies() {
  const studies = [
    {
      title: "Wahaj Gold",
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
        "Modernize the company's digital presence and improve communication with B2B clients.",
      solution:
        "Managed and optimized the corporate website, content structure, and user experience.",
      role:
        "Website Management • Content Strategy • UX Optimization",
      platform:
        "WordPress",
    },

    {
      title: "Taj Signature",
      challenge:
        "Create a luxury e-commerce experience aligned with a premium brand image.",
      solution:
        "Built and managed a Shopify store focused on elegant product presentation and user experience.",
      role:
        "Store Design • Content Structure • UX",
      platform:
        "Shopify",
    },

    {
      title: "Wahaj Gold Website (WordPress)",
    
      challenge:
        "Build the company's main website while preparing a scalable environment for future expansion and launch.",
    
      solution:
        "Implemented the WordPress website, configured hosting resources, organized the staging environment, and prepared the platform for launch.",
    
      role:
        "WordPress Development | Website Management | Hosting Setup | cPanel Configuration",
    
      platform:
        "WordPress | Hosting | cPanel",
    },


    {
      title: "SAM Precious Metals",
    
      challenge:
        "Strengthen the company's online presence and improve communication with B2B clients and investors.",
    
      solution:
        "Managed and optimized website structure, content organization, user experience, and ongoing website improvements.",
    
      role:
        "Website Management | UX Optimization | Content Strategy",
    
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
