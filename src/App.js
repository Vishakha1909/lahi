import './App.css';
import img from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={img} className="logo" alt="" height="100px"></img>

          <div className="title">Lend-A-Hand-India</div>
          <div className = "form"></div>
          <form className="schedule" name="forms" id="forms">
            <label>Teacher Name: </label>
            <input type = "text"></input><br></br>
            <label>Class: </label>
            <input type = "number"></input><br></br>
            <label>Upload file(only if you haven't before): </label><br></br>
            <input id="upload" className = "upload" type="file" accept = ".xlsx,.xls"/>
            <br></br>
            <label>Date of Meeting: </label>
            <input type="date" className="Meeting" required></input><br></br>
            <label>Time of Meeting: </label>
            <input type="time" className="Meeting" required></input><br></br>
            <button className="" type="button">Submit</button>
          </form>
      </header>
    </div>
  );
}

export default App;
