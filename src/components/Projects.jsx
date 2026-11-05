import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const projects = [
  [
    "01",
    "Tescon Engineers",
    "Freelance Project",
    "Designed and developed a responsive web application using React and Tailwind CSS for a freelance client.",
    ["React", "Tailwind CSS"],
    "https://tescon.vercel.app/",
  ],
  [
    "02",
    "Vibe Circle",
    "Social Connection Platform",
    "A social platform with user sign-up, profile creation, curated events and interactive user experiences.",
    ["React", "Tailwind CSS", "Vercel"],
    "https://vibe-circle.vercel.app/",
  ],
  [
    "03",
    "Delici",
    "Modern Restaurant Website",
    "Responsive restaurant website with Home, Menu, Offers, Booking and Contact pages, plus authentication and data management.",
    ["React", "Tailwind CSS", "MongoDB"],
    "https://delici-restaurant.vercel.app/",
  ],
  [
    "04",
    "Oxygen Gym",
    "Fitness Website",
    "A modern gym website with a bold visual style and responsive sections for a fitness brand.",
    ["React", "Tailwind CSS"],
    "https://oxygen-gym-eta.vercel.app/",
  ],
];
export default function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">03 / SELECTED WORK</span>
          <h2 className="section-title">
            Projects that <em>speak.</em>
          </h2>
          <p className="muted">
            A selection of websites and applications I've worked on, combining
            thoughtful design with functional development.
          </p>
        </div>
        <div className="project-list">
          {projects.map(([n, name, type, desc, tags, url], i) => (
            <motion.article
              className="project-row"
              key={n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <span className="project-no">{n}</span>
              <div>
                <small className="eyebrow">{type}</small>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="tags">
                  {tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <a
                className="project-link"
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${name}`}
              >
                <ArrowUpRight />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
