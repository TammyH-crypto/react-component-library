import React from "react";

export default function NavBar() {
  return (
    <header className="nav">
      <h1 className="nav__logo"></h1>
      <nav className="nav__links">
        <a href="/">Actors</a>
        <a href="/">Movies</a>
        <a href="/">Reviews</a>
      </nav>
      <button className="nav__cta">Welcome</button>
    </header>
  );
}
