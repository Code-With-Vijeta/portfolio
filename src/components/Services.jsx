import { Monitor, Smartphone, Palette, Code2 } from "lucide-react";
import { motion } from "framer-motion";
const data = [
  [
    "01",
    Monitor,
    "Website Development",
    "Modern, responsive websites built to represent your brand and work smoothly across devices.",
  ],
  [
    "02",
    Smartphone,
    "Responsive Design",
    "Layouts that adapt beautifully to desktops, tablets and mobile screens.",
  ],
  [
    "03",
    Palette,
    "UI Implementation",
    "Clean and user-friendly interfaces with attention to layout, typography and detail.",
  ],
  [
    "04",
    Code2,
    "React Development",
    "Reusable components and interactive frontend experiences using React.",
  ],
];
export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">04 / WHAT I DO</span>
          <h2 className="section-title">
            Turning ideas into <em>reality.</em>
          </h2>
        </div>
        <div className="service-grid">
          {data.map(([n, Icon, title, desc], i) => (
            <motion.article
              className="service-card"
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="service-top">
                <span>{n}</span>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
