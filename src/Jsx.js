import './App.css';
import Navbar from './Navbar';

function Jsx() {
  var tag = "react js-JSX for dynamic values.";
  var obj = [2,3,4,5,6];
  //var date1 = new Date();
  return (
    <div className="App">
      <div className="content">
        <h1>App component</h1>
        <p>{tag}</p>
        <p>{ obj[3] }</p>
        <Navbar/>
      </div>
    </div>
  );
}
export default Jsx;