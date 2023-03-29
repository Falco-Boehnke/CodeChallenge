import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <header className="grid-stack">
        <div className="background__light--transparent">
          <h1>Willkommen</h1>
          <p>To this CodingChallenge Result</p>
        </div>
        <img src="hiding-the-pain.jpg" alt="Just smile" />
      </header>

      <section className="requirements">
        <ul className="requirement-list">
          <b>Goals</b>
          <li>create a Webpage, that shows a group of Checkboxes</li>
          <li>
            create a Checkbox, for the Selection and Deselecction of all the
            Checkboxes
          </li>
          <li>create a Script, which makes this Checkbox functional</li>
          <li>print out the current Selection on the Webpage</li>
        </ul>
        <ul className="requirement-list">
          <b>What you should take care of</b>

          <li>please use git Version Control for your project</li>
          <li>choose any Technology that you would like</li>
          <li>
            host the project either public or in private mode on a Platform like
            Github, Gitlab or Bitbucket
          </li>
        </ul>
      </section>

      <section className="checkbox-solution"></section>
    </main>
  );
}

export default App;
