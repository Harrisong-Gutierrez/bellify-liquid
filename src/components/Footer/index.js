import PropTypes from "prop-types";
import FooterList from "./components/FooterList";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-primary Footer">
      <section>
        <h2>Apps</h2>
        <figure>
          <Image />
        </figure>
        <figure>
          <Image />
        </figure>
      </section>
      <div className="Footer-content">
        <FooterList />
      </div>
      <section>
        <h2>Síguenos</h2>
        <figure>
          <Image />
        </figure>
        <figure>
          <Image />
        </figure>
      </section>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
