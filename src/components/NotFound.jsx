import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>
        Что-то пошло не так. Вернуться на{" "}
        <Link to="/">
          главную
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
