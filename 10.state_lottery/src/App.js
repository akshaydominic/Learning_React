import './App.css';
import Ball from './Ball'
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' maxNum={6} maxBalls={3}/>

    </div>
  );
}

export default App;
