import React from "react";

const Input = ({ type, id }) => {
  return (
    <form>
      <div className="mb-3">
        <input type={type} id={id} className="" />
      </div>
      {/* <button type="submit" className="btn btn-primary">
        Submit
      </button> */}
    </form>
  );
};

export default Input;
