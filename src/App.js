import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
    participants: []
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Owl</h1>
        </header>
        <div className='App-list'>
          {store.participants.map(participant => (
            <Split
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
              session={participant.inSession}
              stage={participant.onStage}
            />
          ))}
        </div>
      </main>
    );
  }
}

function Split (props) {
  return <div className='split'>
           <h2>{props.id}</h2>
           <h3>{props.name}</h3>
           <img src={props.avatar} />
           <h3>{JSON.stringify(props.inSession)}</h3>
           <h3>{props.onStage}</h3>
  </div>
}

export default App;







