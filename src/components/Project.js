import React from "react";
import "../imgset.css";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8 w-350 h-200">
        <img
          className="rounded-2xl Item-img"
          width="350"
          height="200"
          src={item.image}
          alt=""
        />
      </div>
      <p className="capitalize text-green-500 text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
    </div>
  );
};

export default Project;
