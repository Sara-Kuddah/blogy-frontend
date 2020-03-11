import React from 'react';
import './App.css';
import Articles from './articles/components/articles';
import apiURL from './apiConfig';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    console.log('My API URL ',apiURL)
  }
  setArticles = (articles) => {
    this.setState({ articles: articles });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Blogy!
          </p>
        </header>
        <Articles articles={this.state.articles}
                  setArticles={this.setArticles} />
      </div>
    );
  }
}
export default App;