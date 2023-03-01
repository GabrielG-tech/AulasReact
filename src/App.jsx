import './App.css'
import React, { Component } from 'react';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.setState({
        posts: data
      });
    } catch(error) {
      this.setState({
        error
      });
    }
  }
  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Erro ao obter dados da API: {error.message}</p>
    }

    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;