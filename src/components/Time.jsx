import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Time = () => {
  const [ctime, setCtime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCtime(new Date()), 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className={"buttonBack"}>
            <Link className={"styledLink"} to="/">
              Home
            </Link>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white border-0">
              <img
                src={`https://source.unsplash.com/600x900/?nature,water`}
                className="card-img"
                alt="background"
              />
              <div className="card-img-overlay">
                <div className="bg-dark text-center bg-opacity-50 py-3">
                  <hr />
                  <h1 className={"fw-bolder mb-5"}>{ctime.toLocaleString()}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
