import { GraduationCap, Award, ArrowUpRight } from "lucide-react";
export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">01 / ABOUT ME</span>
          <h2 className="section-title">
            A little about <em>who I am.</em>
          </h2>
        </div>
        <div className="about-grid">
          <div>
            <p className="about-lead">
              I'm <strong>Vijeta Nehra</strong>, a Frontend Developer passionate
              about creating meaningful digital experiences.
            </p>
            <p className="muted about-copy">
              I create responsive, user-friendly web interfaces using modern
              technologies. My focus is on clean design, performance, and
              intuitive user experiences. I enjoy learning new technologies and
              turning ideas into functional, visually appealing websites.
            </p>
            <a className="text-link" href="mailto:codevijeta@gmail.com">
              Let's work together <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="detail-stack">
            <article className="detail-card">
              <GraduationCap />
              <div>
                <span className="eyebrow">EDUCATION</span>
                <h3>Bachelor's Degree</h3>
                <p>Maharshi Dayanand University</p>
                <small>2023 — Present</small>
              </div>
            </article>
            <article className="detail-card">
              <Award />
              <div>
                <span className="eyebrow">CERTIFICATIONS</span>
                <h3>Certificates</h3>
                <p>HackerRank & Advanced Tech Lab</p>
                <small>CSS · Python · React · Full Stack</small>
              </div>
            </article>
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="education-row">
            <div>
              <b>Bachelor's — Computer Science</b>
              <p>Maharshi Dayanand University</p>
            </div>
            <span>2023 — Present</span>
          </div>
          <div className="education-row">
            <div>
              <b>Senior Secondary — Non Medical</b>
              <p>Central Board of Secondary Education · GPA: 8.22</p>
            </div>
            <span>2022 — 2023</span>
          </div>
          <div className="education-row">
            <div>
              <b>Secondary Education</b>
              <p>Central Board of Secondary Education · GPA: 6.12</p>
            </div>
            <span>2020 — 2021</span>
          </div>
        </div>
        <div className="education">
          <h3>Certifications</h3>
          <div className="tags">
            <span>CSS — HackerRank</span>
            <span>Python — HackerRank</span>
            <span>React — HackerRank</span>
            <span>Full Stack Development + Python — Advanced Tech Lab</span>
          </div>
        </div>
      </div>
    </section>
  );
}
