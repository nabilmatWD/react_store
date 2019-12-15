import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpg";
import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase" style={{ marginBottom: "2rem" }}>
          Page not found
        </h2>
        <Link to="/" className="main-link">
          Return Home
        </Link>
      </Hero>
    </>
  );
}
