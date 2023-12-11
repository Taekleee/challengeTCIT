import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreatePost from "./components/createPost";
import PostsList from "./components/postList";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Challenge
              </Link>
            </li>
          </div>
        </nav>
        <div className="containerb" align="center">
          <PostsList></PostsList>
          <CreatePost></CreatePost>
        </div>
      </Router>
    );
  }
}

export default App;
