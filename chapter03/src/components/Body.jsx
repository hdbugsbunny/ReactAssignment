import React from "react";
import QuesAns from "../common/QuesAns";
import { quesAnsData } from "../constants/quesAns";

const Body = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      {quesAnsData.map((ques) => (
        <QuesAns key={ques.quesAnsId} data={ques} />
      ))}
    </div>
  );
};

export default Body;
