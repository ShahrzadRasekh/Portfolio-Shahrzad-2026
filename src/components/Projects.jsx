export default function Projects() {
  const projects = [
    {
      title: "Wahaj Gold",
      category: "Custom Coded Landing Page",
      image:
      "/images/wahajgold1.webp" ,
      link: "https://wahajgold.com",
      description:
        "Designed and developed a premium landing page experience for a luxury precious metals brand.",
    },
  
    {
      title: "SAM Precious Metals",
      category: "WordPress Corporate Website",
      image:
        "/images/sam1.webp",
      link: "https://sampreciousmetals.com",
      description:
        "Corporate website focused on trust, credibility, and B2B lead generation.",
    },
  
    {
      title: "Taj Signature",
      category: "Shopify E-commerce",
      image:
      "/images/taj3.webp",
      link: "https://tajsignature.com",
      password: Taj321
      description:
        "Luxury Shopify store with a strong focus on premium customer experience.",
    },
  
    {
      title: "Twenty Seven Marketing",
      category: "Wix Agency Website",
      image:
        "/images/twentyseven2.webp",
      link: "https://www.twenty-sevenmarketing.com",
      description:
        "Marketing agency website built to communicate services and expertise clearly.",
    },
  
    {
      title: "SAM PM Institute",
      category: "Educational Platform",
      image:
        "/images/saminst1.webp",
      link: "https://sampm.institute",
      description:
        "Learning-focused platform designed to support precious metals education.",
    },

    {
      title: "Wahaj Gold Website",
      category: "WordPress Website & Hosting Setup",
      image: "/images/wahajstaging.webp",
      link: "https://staging.wahajgold.com",
      description:
        "WordPress website implementation including hosting setup, cPanel configuration, staging environment management, and launch preparation.",
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