function Portfolio() {
  const projects = [
    {
      title: "Corporate Business Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698"
    },
    {
      title: "Mobile Business App",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312"
    },
    {
      title: "Custom ERP System",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1581092918367-1c3b5c33c2d8"
    }
  ]

  return (
    <section className="section portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio