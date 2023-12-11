import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/posts";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.savePost = this.savePost.bind(this);
    this.newPost = this.newPost.bind(this);

    this.state = {
      name: "",
      text: "",
      localPosts: [],

    };

    
  }
  
 


  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  savePost() {
    const { name, text } = this.state;
    console.log(this.state);
    console.log(this.props.posts);
    const { posts } = this.props;
    this.props
      .createPost(name, text)
      .then((data) => {
        console.log(data);
        this.setState({
          name: "",
          text: ""

        });
        console.log("Lista de posts actualizada:", posts);

      }
      ) 
      .catch((e) => {
        console.log(e);
      });
  }

  newPost() {
    this.setState({
      name: "",
      text: "",
    });
  }

  render() {
    return (
      <div className="container">
        
        <div className="col-md-8">
        <div className="row">
        <label htmlFor="title" className="col-form-label">
          Nombre
        </label>
        <div className="form-group col-md-3">
          <input
            type="text"
            id="name"
            required
            value={this.state.name}
            onChange={this.onChangeName}
            name="title"
            className="form-control"
          />
        </div>

        <label htmlFor="description" className="col-form-label">
          Descripción
        </label>
        <div className="form-group col-md-3">
          <input
            type="text"
            id="description"
            required
            value={this.state.text}
            onChange={this.onChangeText}
            name="description"
            className="form-control"
          />
        </div>

        <div className="form-group col-md-2">
          <button onClick={this.savePost} className="btn btn-success">
            Crear
          </button>
        </div>
      </div>
      </div>

    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts, // Asegúrate de que esto coincide con la estructura de tu estado de Redux
  };
};
export default connect(mapStateToProps, { createPost })(CreatePost);
