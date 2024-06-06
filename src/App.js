
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './404Notfound';
//import backgroundimg from './background_react.jpeg';

function App() { // root component
  return (
    <div className='bg' style={{
      backgroundImage:"url(background_react.jpg)",
    }}>
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">  {/* "/Home" or "/" route or address */}
              <Home/> 
            </Route>

            <Route path="/create">  {/* "/Home" or "/" route or address */}
              <Create/>
            </Route>

            <Route path="/blogs/:id">  {/* "/Home" or "/" route or address */}
              <BlogDetails/>
            </Route>

            <Route path='*'>          {/* '*' for any cannot found URL or Catch any other Route */}
              <NotFound />
            </Route>

          </Switch> 
        </div>
      </div>
    </Router>
    </div>
  );
}
export default App;
