export default function Expertise() {
  const skills = [
    "WordPress",
    "Shopify",
    "Wix",
    "React",
    "Landing Pages",
    "SEO",
    "UX Strategy",
    "Wireframing",
    "Content Strategy",
    "Digital Marketing",
    "Conversion Optimization",
    "Website Management",
  ];

  return (
    <section id="expertise" className="expertise">

      <div className="container">

        <h2>Core Expertise</h2>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
