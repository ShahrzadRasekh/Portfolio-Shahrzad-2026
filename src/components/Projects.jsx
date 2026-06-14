export default function Projects() {
  const projects = [
    {
      title: "Wahaj Gold",
      category: "Custom Coded Landing Page",
      image:
      "/images/wahajgold1.webp" ,
      link: "https://wahajgold.com",
      description:
        "Custom-coded landing page designed to strengthen brand positioning, build trust, and support lead generation for a precious metals company.",
    },
  
    {
      title: "Wahaj Gold Website",
      category: "WordPress Website & Hosting Setup",
      image: "/images/wahajstaging.webp",
      link: "https://staging.wahajgold.com",
      description:
        "WordPress website implementation including hosting setup, cPanel configuration, staging management, and launch preparation.",
    },

    {
      title: "Taj Signature",
      category: "Shopify E-commerce",
      image:
      "/images/taj3.webp",
      link: "https://tajsignature.com",
      description:
        "Luxury Shopify storefront designed to deliver a premium e-commerce experience and strong brand presentation.(Password:Taj321)",
    },

    {
      title: "SAM Precious Metals",
      category: "WordPress Corporate Website",
      image:
        "/images/sam1.webp",
      link: "https://sampreciousmetals.com",
      description:
        "Website management, content organization, and UX improvements for a leading precious metals (Gold and Silver) company.",
    },
  
    {
      title: "Twenty Seven Marketing",
      category: "Wix Agency Website",
      image:
        "/images/twentyseven2.webp",
      link: "https://www.twenty-sevenmarketing.com",
      description:
        "Marketing company's website focused on service presentation, credibility, and user-focused content structure.",
    },
  
    {
      title: "SAM PM Institute",
      category: "Educational Platform",
      image:
        "/images/saminst1.webp",
      link: "https://sampm.institute",
      description:
        "Educational platform supporting structured learning experiences and industry-focused content delivery.",
    },

  ];

  return (
    <section id="projects" className="projects">
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