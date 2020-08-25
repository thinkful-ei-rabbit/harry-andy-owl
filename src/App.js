import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static defaultProps = {
    participants: []
  };

  render() {
    const { store } = this.props
    const onStage = store.participants.filter(participant => participant.onStage);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Owl</h1>
        </header>
        <div className='App-list'>
          {store.participants.map(participant => (
            <Split
              key={participant.id}
              id={participant.id}
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
           <img src={props.avatar} alt='avatar'/>
           <div>
           <h3>{'In Session' + JSON.stringify(props.session)}</h3>
           <h3>{'On Stage' + JSON.stringify(props.stage)}</h3>
           </div>
        </div>

        
}

  // store.participants.filter(part => part.onStage===true)
  // .map( part => <Split name=(part.name)/> )



export default App;







