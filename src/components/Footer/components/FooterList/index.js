import { v4 as uuidv4 } from "uuid";
import { list } from "../../../../../constants/footerList";

const FooterList = () => {
  const renderedList = () => {
    return list.map((section) => (
      <div key={uuidv4()}>
        <h2>{section.title}</h2>

        {section.items.map((item) => (
          <p key={uuidv4()}>{item}</p>
        ))}
      </div>
    ));
  };
  return <div>{renderedList()}</div>;
};

export default FooterList;
