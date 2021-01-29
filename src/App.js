import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Search from './MainPage/Components/api/Search';
import Home from './MainPage/Home';

function App() {
  return (
   <> 
     <Router>
       <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/Search" component={Search} />
       </Switch>
     </Router>
   </>
  );
}

export default App;
