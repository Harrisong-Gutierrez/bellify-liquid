import { v4 as uuidv4 } from "uuid";
import { list } from "../../../../../constants/footerList";
import Image from "next/image";

const FooterList = () => {
  const renderedList = () => {
    return list.map((section) => (
      <div className=" FooterList" key={uuidv4()}>
        <div className="FooterList-header">
          <h2 className="FooterList-title ">{section.title}</h2>
          <figure className="FooterList-Polígono">
            <Image
              alt="Polígono-paragraph"
              src="/Polígono.png"
              height={4}
              width={9}
            />
          </figure>
        </div>
        <div className="FooterList-texts">
          {section.items.map((item) => (
            <p className="FooterList-paragraph" key={uuidv4()}>
              {item}
            </p>
          ))}
        </div>
      </div>
    ));
  };
  return <div className="Footer-list">{renderedList()}</div>;
};

export default FooterList;
