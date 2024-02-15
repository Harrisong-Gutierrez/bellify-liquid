import React from "react";
import { list } from "../../../constants/footerList";

const FooterList = () => {
  const renderedList = () => {
    return list.map((section) => (
      <div>
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
