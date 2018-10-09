import React, { Component } from 'react';
import './App.css';
import tale from './tale';

class App extends Component {
  constructor() {
    super();
    this.items = tale();
    this.state = {
      current: 0,
      story: []
    };
  }

  handleClick = (_e, c) => {
    if (c) {
      this.setState({ ...c.state(this.state) });
    } else {
      const story = [...this.state.story, this.items[this.state.current].text(this.state)];
      this.setState({ story  });
    }
    this.setState({ current: this.state.current + 1 });
  };

  story = () => this.state.story.map(s => <p><i>{s}</i></p>);

  current() {
    if (this.state.current === this.items.length) {
      return <p className="App-intro">The end.</p>;
    }
    const item = this.items[this.state.current];
    const text = item.text(this.state);
    let button;
    if (item.choices) {
      button = item.choices(this.state).map(c => (
        <button onClick={e => this.handleClick(e, c)} key={c.text(this.state)}>
          {c.text(this.state)}
          {c.img ? <span>{c.img()}</span> : <span />}
        </button>
      ));
    } else {
      button = <button onClick={this.handleClick}>Next</button>;
    }
    return (
      <div>
        <p className="App-intro">{text}</p>
        {button}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fairy tale</h1>
        </header>
        {this.story()}
        {this.current()}
      </div>
    );
  }
}

export default App;
