import "../App.css";

const Header = () => {
  return (
    <div
      id="header"
      className={
        localStorage.getItem("Theme") === "dark"
          ? "header-dark"
          : "header-light"
      }
    >
      <div id="header-left">
        <h1>ConductorJS</h1>
      </div>
      <div id="header-right">
        <button
          className={
            localStorage.getItem("Theme") === "dark"
              ? "header-btn-dark"
              : "header-btn-light"
          }
        >
          Sign Up
        </button>
        <button
          className={
            localStorage.getItem("Theme") === "dark"
              ? "header-btn-dark"
              : "header-btn-light"
          }
        >
          Login
        </button>
        <button
          className={
            localStorage.getItem("Theme") === "dark"
              ? "header-btn-dark"
              : "header-btn-light"
          }
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
