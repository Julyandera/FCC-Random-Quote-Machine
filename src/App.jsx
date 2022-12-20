import React, { Component } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./app.css";

const quoteAPI = 'https://api.quotable.io/random';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };

    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    fetch(quoteAPI)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        quote: response.content,
        author: response.author,
      });
    })
    .catch((error) => {
      console.error('Error: ' + error);
    });
  }

  newQuote = (event) => {
    event.preventDefault();
    fetch(quoteAPI)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        quote: response.content,
        author: response.author,
      });
    })
    .catch((error) => {
      console.error('Error: ' + error);
    });
  }

  render() {
    return (
      <div className="wrapper" id="quote-box">
        <div id="text">
          <i>
            <FaQuoteLeft />
          </i>
          <span> {this.state.quote}</span>
        </div>
        <div id="author">
          <p>-{this.state.author}</p>
        </div>
        <div className="buttons">
          <button className="button">
            <a id="tweet-quote" target='_blank' href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + this.state.quote + '"' + ' -' + this.state.author)}>
              <i>
                <FaTwitter color='black'/>
              </i>
            </a>
          </button>
          <button id="new-quote" className="button" onClick={this.newQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
