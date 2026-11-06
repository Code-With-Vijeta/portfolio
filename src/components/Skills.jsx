import { motion } from "framer-motion";
const groups = [
  [
    "01",
    "Programming Languages",
    ["HTML", "CSS", "JavaScript"],
  ],
  ["02", "Libraries & Frameworks", ["React", "Bootstrap", "Tailwind CSS"]],
  ["03", "Tools & Platforms", ["Git", "GitHub", "VS Code", "Vercel", "Render"]],
];
export default function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">02 / MY EXPERTISE</span>
          <h2 className="section-title">
            Tools I use to <em>create.</em>
          </h2>
          <p className="muted">
            Technologies and tools I work with to build responsive, modern and
            user-friendly web experiences.
          </p>
        </div>
        <div className="skill-grid">
          {groups.map(([n, title, items], i) => (
            <motion.article
              className="skill-card"
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <small>{n}</small>
              <h3>{title}</h3>
              <div className="tags">
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
