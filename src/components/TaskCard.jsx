import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import Trash from "../assets/trash.png";

const TaskCard = () => {
  return (
    <div className="task_card">
      <p className="task_text"> this is sample text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="task_delete">
          <img
            src={Trash}
            className="delete_icon"
            alt="picture of trash can"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
