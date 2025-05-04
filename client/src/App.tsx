import "./App.css";
import Header from "./components/header.tsx";
import { useEffect } from "react";

function toggleCodeSnippet(item: string, btnId: string) {
  var curSelected = document.querySelector(".selected-btn");
  if (curSelected?.id != btnId) {
    curSelected?.classList.remove("selected-btn");
  }
  document.getElementById(btnId)?.classList.add("selected-btn");
  var codeSnippets = document.querySelectorAll(".cdsnippet");
  codeSnippets.forEach((snippet) => {
    if (snippet.classList.contains("shown")) {
      if (snippet.id != item) {
        snippet.classList.remove("shown");
        snippet.classList.add("hidden");
      }
    } else {
      if (snippet.id == item) {
        snippet.classList.remove("hidden");
        snippet.classList.add("shown");
      }
    }
  });
}

function App() {
  useEffect(() => {
    const isTheme = localStorage.getItem("Theme");
    if (!isTheme) {
      localStorage.setItem("Theme", "light");
    }
  }, []);

  const theme = localStorage.getItem("Theme");

  document.body.classList.add(theme === "dark" ? "dark-mode" : "light-mode");

  return (
    <>
      <Header></Header>
      <div id="main-page-sec">
        <div id="first-sec-left">
          <h1>ConductorJS</h1>
          <h3 className={theme === "dark" ? "text-dark-2" : "text-light-2"}>
            A JavaScript website to learn JavaScript
          </h3>
          <p>Create an account to start learning today!</p>
          <button
            id="first-sec-btn"
            className={
              theme === "dark"
                ? "bg-dark-2 text-dark-1"
                : "bg-light-2 text-dark-1"
            }
          >
            Sign Up
          </button>
        </div>
        <div id="first-sec-right">
          <div id="code-snippet-sec-main">
            <div id="code-snippet-btns">
              <button
                id="js-btn-main"
                className={
                  theme === "dark"
                    ? "code-dark selected-btn"
                    : "code-light selected-btn"
                }
                onClick={() => toggleCodeSnippet("js-snippet", "js-btn-main")}
              >
                JavaScript
              </button>
              <button
                id="react-btn-main"
                className={theme === "dark" ? "code-dark" : "code-light"}
                onClick={() =>
                  toggleCodeSnippet("react-snippet", "react-btn-main")
                }
              >
                React
              </button>
              <button
                id="node-btn-main"
                className={theme === "dark" ? "code-dark" : "code-light"}
                onClick={() =>
                  toggleCodeSnippet("node-snippet", "node-btn-main")
                }
              >
                NodeJS
              </button>
            </div>
            <pre
              id="main-sec-pre"
              className={theme === "dark" ? "code-dark" : "code-light"}
            >
              <code id="js-snippet" className="cdsnippet shown">
                {`
// Become a JavaScript Pro!

let x = 0;
console.log('x is ', x);
const testSec = document.getElementByID('test');
testSec.innerHTML = "JS 4 Life"
              `}
              </code>
              <code id="react-snippet" className="cdsnippet hidden">
                {`
// Master React!

import {useState, useEffect} from "react";

function App(){
  const [text, setText] = useState("I did not master React");

  useEffect(() => {
    setText("I mastered React 😎");
  }, [])

  return(<h1>{text}</h1>);
}
              `}
              </code>
              <code id="node-snippet" className="cdsnippet hidden">
                {`
// Node is cool

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node is easy!\\n');
});


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
