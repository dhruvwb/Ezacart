import React from "react";
import { TableData } from "../../data";
import { Tale } from "./Tale";

export const Table = () => {
  return (
    <div className="Box">
      {TableData.map((item) => (
        <Tale item={item} key={item.id} />
      ))}
    </div>
  );
};
