import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-top">
        <span className="eyebrow">INDEPENDENT FRONTEND DEVELOPER</span>
        <span className="availability">
          <i />
          AVAILABLE FOR SELECT PROJECTS
        </span>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-intro">Hello, I'm Vijeta Nehra.</p>
        <h1>
          Building
          <br />
          <em>digital</em> experiences
          <br />
          with purpose<span className="period">.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            I design and develop thoughtful, responsive digital experiences that
            bring ideas to life through clean code and meaningful design.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              Explore My Work <ArrowUpRight size={17} />
            </a>
            <a className="text-btn" href="#about">
              More About Me <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
