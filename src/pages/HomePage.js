import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero title="Find your dream home" max="true">
        <h3 className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h3>
        <Link className="main-link" to="/products">
          View Our Properties
        </Link>
      </Hero>
    </>
  );
}
