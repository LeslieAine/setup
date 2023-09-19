import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';


function App() {
  return (
    <div className="App">
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render= {(isLoggedIn) => isLoggedIn ? 'leslie' : 'guest'}/> */}
      <Counter 
      render = {(count, incrementCount) => (
      <ClickCounterTwo count ={count} incrementCount= {incrementCount}/>
      ) }/>
      <Counter 
      render = {(count, incrementCount) => (
      <HoverCounterTwo count ={count} incrementCount= {incrementCount}/>
      ) }/>
    </div>
  );
}

export default App;
