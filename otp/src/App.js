import logo from './logo.svg';
import './App.css';
import { Otp } from './Component/Otp';

function App() {
  return (
    <div className="App">
      <Otp otp_digit={5}/>
    </div>
  );
}

export default App;
