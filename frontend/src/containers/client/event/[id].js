import React from "react";
import { useParams } from "react-router-dom";
import SingleEvent from "../../../components/event.component/SingleEvent";

const Event = () => {
  const { id } = useParams();
  return (
    <div>
      <SingleEvent id={id} />
    </div>
  );
};

export default Event;
