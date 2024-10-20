import React from 'react';
import "antd/dist/antd.css";
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import getParams from './pages/paramlocation';
import getPath from './pages/pathlocation';



const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'  render={({ location, history }) => {
            const { query } = getParams(location);
            const { country,category }=getPath(location);
            return <MainPage query={query} history={history} country={country} category={category} />;
          }} />
      </Switch>
   
</div>
  );
}

export default App;