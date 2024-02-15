import React from "react";
import { list } from "../../../constants/footerList";
import { v4 as uuidv4 } from "uuid";

const FooterList = () => {
  const renderedList = () => {
    return list.map((section) => (
      <div key={uuidv4()} className=".bg-primary">
        <h2>{section.title}</h2>
        {section.items.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    ));
  };
  return <div>{renderedList()}</div>;
};

export default FooterList;
