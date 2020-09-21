import React from "react";

import "./Header.css";

export default function Header() {
  let headerData = {
    date: "Tuesday 10:10",
  };
  return (
    <h1>
      Last updated: <span>{headerData.date}</span>
    </h1>
  );
}
