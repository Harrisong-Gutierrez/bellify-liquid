import { v4 as uuidv4 } from "uuid";
import { list } from "../../../../../constants/footerList";
import Image from "next/image";

const FooterList = () => {
  const renderedList = () => {
    return list.map((section) => (
      <div className="dropdown FooterList" key={uuidv4()}>
       <div className="FooterList-header">
       <h2 className="FooterList-title dropbtn">{section.title}</h2>
       <figure>
        <Image src="/Polígono.png" height={4} width={9} />
       </figure>
       </div>
        <div className="dropdown-content">
          {section.items.map((item) => (
            <p key={uuidv4()}>{item}</p>
          ))}
        </div>
      </div>
    ));
  };
  return <div className="Footer-list">{renderedList()}</div>;
};

export default FooterList;
