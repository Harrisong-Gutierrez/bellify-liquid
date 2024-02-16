import PropTypes from "prop-types";
import FooterList from "./components/FooterList";
import Image from "next/image";
import { appsList, síguenosList } from "../../../constants/footerList";

function Footer() {
  return (
    <footer className="bg-primary Footer">
      <section>
        <h2>Apps</h2>
        <figure>
          <Image
            src={appsList[0].googleplayImg}
            width={appsList[0].width}
            height={appsList[0].height}
            alt={appsList[0].googleplayAlt}
          />
        </figure>
        <figure>
          <Image
            src={appsList[0].appstoreImg}
            width={appsList[0].width}
            height={appsList[0].height}
            alt={appsList[0].appstoreAlt}
          />
        </figure>
      </section>
      <div className="Footer-content">
        <FooterList />
      </div>
      <section>
        <h2>Síguenos</h2>
        <figure>
          <Image
            src={síguenosList[0].twitterImg}
            width={síguenosList[0].width}
            height={síguenosList[0].height}
            alt={síguenosList[0].twitterAlt}
          />
        </figure>
        <figure>
          <Image
            src={síguenosList[0].faceboockImg}
            width={síguenosList[0].width}
            height={síguenosList[0].height}
            alt={síguenosList[0].faceboockAlt}
          />
        </figure>
        <figure>
          <Image
            src={síguenosList[0].instagramImg}
            width={síguenosList[0].width}
            height={síguenosList[0].height}
            alt={síguenosList[0].instagramrAlt}
          />
        </figure>
      </section>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
