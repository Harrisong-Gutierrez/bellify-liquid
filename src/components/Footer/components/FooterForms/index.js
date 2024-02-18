import Input from "@/components/Input";
import Image from "next/image";
import { iconsList } from "../../../../../constants/footerList";

const FooterForms = ({ title }) => {
  return (
    <div className="Footer-form">
      <div>
        <h2>{title}</h2>
        <Input type="text" id="firstId" />
        <Input type="text" id="secondId" />
      </div>
      <div className="Footer-icons">
        <figure>
          <Image
            src={iconsList[0].visaLogo}
            width={iconsList[0].width}
            height={iconsList[0].height}
            alt={iconsList[0].visaAlt}
          />
        </figure>
        <figure>
          <Image
            src={iconsList[0].maestrocardLogo}
            width={iconsList[0].width}
            height={iconsList[0].height}
            alt={iconsList[0].visaAlt}
          />
        </figure>
        <figure>
          <Image
            src={iconsList[0].maestroLogo}
            width={iconsList[0].width}
            height={iconsList[0].height}
            alt={iconsList[0].visaAlt}
          />
        </figure>
        <figure>
          <Image
            src={iconsList[0].americanexpressLogo}
            width={iconsList[0].width}
            height={iconsList[0].height}
            alt={iconsList[0].visaAlt}
          />
        </figure>
      </div>
    </div>
  );
};

export default FooterForms;
