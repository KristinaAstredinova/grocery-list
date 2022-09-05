import './App.css';
import image from "./shopping.webp"
import foto from "./man.webp"
import { Grocery } from './Grocery';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={image} width = "250px" alt="shopping"/>
        </div>
        <div className='container'>
        <h1>Grocery List</h1>
        </div>
        <Grocery/>
        <div className='container'>
        <img src = {foto} width = "250px" alt = " man "/>
        </div>
    </div>
  );
}

export default App;
