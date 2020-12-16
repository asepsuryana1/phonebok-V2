import logo from './logo.svg';
import './App.css';
import UserBox from './components/UserBox';


function App() {
  return (
    <div className="dS">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="asa">
          <h1> <i className="fa fa-address-book"></i> Phones Book</h1>
          <UserBox />
        </div>
      </div>
    </div>

  );
}

export default App;
