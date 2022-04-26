import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>
        Something is wrong. Back to{" "}
        <Link to="/">
          home
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
