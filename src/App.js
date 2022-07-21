
import './App.css';
import Home from './components/Home';

function App() {
  localStorage.clear();
  return (
    <>
    {/* <h>This is going to hand cricket site.</h>
    <p>This will include :-
      DONE----first toss : h or t
        if win choose bat or bowl
      
        then--
      buttons:- 1.inputs 1 2 3 4 5 6
                2.start next innings
      display score, target, required
      balls remaining
    </p> */}
    
  <Home/>
  </>
  );
}

export default App;
