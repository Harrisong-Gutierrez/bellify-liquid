import { v4 as uuidv4 } from "uuid";
import { list } from "../../../../../constants/footerList";

const FooterList = () => {
  const renderedList = () => {
    return list.map((section) => (
      <div className="dropdown" key={uuidv4()}>
        <h2 className="dropbtn">{section.title}</h2>
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
