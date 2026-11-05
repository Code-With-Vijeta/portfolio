import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
export default function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <span className="eyebrow">05 / GET IN TOUCH</span>
        <div className="contact-heading">
          <h2>
            Have a project
            <br />
            in <em>mind?</em>
          </h2>
          <p>
            I'm open to freelance projects, collaborations and opportunities to
            build something meaningful. Let's connect.
          </p>
        </div>
        <a className="contact-button" href="mailto:codevijeta@gmail.com">
          Start a Conversation <ArrowUpRight />
        </a>
        <div className="contact-details">
          <a href="mailto:codevijeta@gmail.com">
            <Mail />
            codevijeta@gmail.com
          </a>
          <span>
            <MapPin />
            Rohtak, Haryana, India
          </span>
        </div>
      </div>
    </section>
  );
}
