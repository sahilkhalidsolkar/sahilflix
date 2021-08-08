import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import FloatingMenu from './components/FloatingMenu';
import Search from './components/Search';
import FullMoviePage from './components/FullMoviePage';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#333633');

  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/favourites" /> */}
          <Route exact path="/fullpage" component={FullMoviePage} />
        </Switch>


        <FloatingMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
