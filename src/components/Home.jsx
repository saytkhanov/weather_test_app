import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={"centerBlock"}>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-3" role="group" aria-label="First group">
          <Link to={"/weather"}>
            <button className={"btn btn-primary"}>Weather</button>
          </Link>
        </div>
        <div className="btn-group" role="group" aria-label="First group">
            <Link to={"/time"}>
              <button className={"btn btn-primary"}>Time</button>
            </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
