import React from "react";
import Title from "../Title";
import aboutInfo from "../../images/aboutInfo.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutInfo}
              alt="about company"
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda hic eaque iure modi sequi impedit facilis quia non
              tempore. Quis perspiciatis officiis eum odit laboriosam expedita
              architecto maxime recusandae ratione.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda hic eaque iure modi sequi impedit facilis quia non
              tempore. Quis perspiciatis officiis eum odit laboriosam expedita
              architecto maxime recusandae ratione.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem", padding: "0.3rem 2rem" }}
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
