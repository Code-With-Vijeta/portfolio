import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          VIJETA<span>.</span>
        </a>
        <p>Designed & developed with care by Vijeta Nehra.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Code-With-Vijeta"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight />
          </a>
          <a
            href="https://www.linkedin.com/in/vijeta-nehra-580aa32b3/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight />
          </a>
          <a href="mailto:codevijeta@gmail.com">
            Email <ArrowUpRight />
          </a>
        </div>
        <small>© {new Date().getFullYear()} Vijeta Nehra</small>
      </div>
    </footer>
  );
}
