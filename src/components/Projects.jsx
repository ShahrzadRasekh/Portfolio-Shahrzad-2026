export default function Projects() {
  const projects = [
    {
      title: "Wahaj Gold",
      category: "Custom Coded Landing Page",
      image:
      "/images/wahajgold1.webp" ,
      link: "https://wahajgold.com",
      description:
        "Designed and developed a custom-coded landing page for a precious metals brand, focused on premium positioning, trust-building, and lead generation through clear messaging and modern user experience principles.",
    },
  
    {
      title: "SAM Precious Metals",
      category: "WordPress Corporate Website",
      image:
        "/images/sam1.webp",
      link: "https://sampreciousmetals.com",
      description:
        "Supported the ongoing development and management of the company's digital presence through website optimization, content organization, and user experience improvements. Focused on creating a professional and informative platform that effectively communicates the company's services, expertise, and industry credibility to clients and investors.",
    },
  
    {
      title: "Taj Signature",
      category: "Shopify E-commerce",
      image:
      "/images/taj3.webp",
      link: "https://tajsignature.com",
      description:
        "Developed and managed a luxury e-commerce experience focused on premium product presentation, brand storytelling, and customer engagement. Organized content and user flows to create a seamless shopping experience aligned with the brand's high-end positioning.(Password; Taj321)",
    },
  
    {
      title: "Twenty Seven Marketing",
      category: "Wix Agency Website",
      image:
        "/images/twentyseven2.webp",
      link: "https://www.twenty-sevenmarketing.com",
      description:
        "Designed and managed the agency's website to clearly communicate services, expertise, and brand positioning. Structured content and user journeys to help potential clients understand the agency's capabilities while maintaining a professional and engaging digital experience.",
    },
  
    {
      title: "SAM PM Institute",
      category: "Educational Platform",
      image:
        "/images/saminst1.webp",
      link: "https://sampm.institute",
      description:
        "LContributed to the development and management of an educational platform focused on precious metals and industry knowledge. Organized content structure and user experience to make learning resources accessible, engaging, and easy to navigate for professionals and learners alike.",
    },

    {
      title: "Wahaj Gold Website",
      category: "WordPress Website & Hosting Setup",
      image: "/images/wahajstaging.webp",
      link: "https://staging.wahajgold.com",
      description:
        "Implemented and managed the WordPress website, including hosting setup, cPanel configuration, staging environment management, content organization, and launch preparation to support future business growth.",
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.title}
            >
              <img
                src={project.image}
                alt={project.title}
              />

<div className="project-content">

<p>{project.category}</p>

<h3>{project.title}</h3>

<span className="project-description">
  {project.description}
</span>

</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}