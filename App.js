//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

//function App() {
 // return (
  //  <div className="App">
  //    <header className="App-header">
   //     <img src={logo} className="App-logo" alt="logo" />
   //     <p>
   //       Edit <code>src/App.js</code> and save to reload.
   //     </p>
   //     <a
    //      className="App-link"
     //     href="https://reactjs.org"
      //    target="_blank"
     //     rel="noopener noreferrer"
     //   >
     //     Learn React
    //    </a>
    //  </header>
  //  </div>
//  );
//}

//export default App;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate individual with diverse skills.',
        imgSrc: 'https://example.com/avatar.jpg',
        profession: 'Software Developer',
      },
      show: false,
      mountTime: new Date(),
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate(); // Update component to re-render and show the updated time
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Person" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;