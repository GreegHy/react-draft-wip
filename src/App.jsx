import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import List from './components/List';
import EventButton from './components/EventButton';

function App() {
  const itms = [
    {
      name: 'Hank',
      image: (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/220px-Nile_crocodile_head.jpg" />
      ),
    },
    {
      name: 'Dan',
      image: (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alligator_mississippiensis_-_Oasis_Park_-_13.jpg/220px-Alligator_mississippiensis_-_Oasis_Park_-_13.jpg" />
      ),
    },
  ];

function EventButton() {
    let [count, setCount] = useState(0);
  
    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }
    return (
      <div className="Counter">
      <h3>Do you like our animals? Please 'x' for yes and '-' for no</h3>
        <div>{count}</div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    );
  }

  return (
    <>    
    <div className="App">
      <List items={itms} />
    </div>
    <div className="EventButton">
    <EventButton />
</div>
    </>

  );
}

export default App;
