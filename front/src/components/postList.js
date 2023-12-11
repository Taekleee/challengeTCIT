import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrievePosts,
  findPostsByName,
  deletePost,
} from "../actions/posts";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActivePost = this.setActivePost.bind(this);
    this.findByName = this.findByName.bind(this);
    this.deletePost = this.deletePost.bind(this);
    
    this.state = {
      currentPost: null,
      currentIndex: -1,
      searchName: "",
    };
  }

  componentDidMount() {
    this.props.retrievePosts();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  refreshData() {
    this.setState({
      currentPost: null,
      currentIndex: -1,
    });
  }

  setActivePost(post, index) {
    this.setState({
      currentPost: post,
      currentIndex: index,
    });
  }

  deletePost(name) {
    console.log(name);
    this.props
      .deletePost(name)
      .then((data) => {
        this.setState({
          name: "",
          text: "",
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByName() {
    this.refreshData();
    console.log("findByName")
    this.props.findPostsByName(this.state.searchName);
  }

  render() {
    const { searchName, currentIndex } = this.state;
    const { posts } = this.props;

    return (
      <div className="container">
        <div className="col-md-8">
        <div className="row">

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByName}
              >
                Search
              </button>
            </div>
          </div>

    
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Texto</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {console.log(posts)}
            {posts &&
              posts.map((post, index) => (
                <tr key={index} className={index === currentIndex ? "active" : ""}>
                  <td>{post.name}</td>
                  <td>{post.text}</td>
                  <td>
                    <button onClick={() => this.deletePost(post.name)}>Eliminar</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        </div>
      </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, {
  retrievePosts,
  findPostsByName,
  deletePost,
})(PostsList);
