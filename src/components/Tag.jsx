import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#ffcccc" },
    CSS: { backgroundColor: "#ffccff" },
    JavaScript: { backgroundColor: "ffccff" },
    React: { backgroundColor: "#ffffcc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {selected ? `${tagName} X` : `${tagName}`}
    </button>
  );
};

export default Tag;
