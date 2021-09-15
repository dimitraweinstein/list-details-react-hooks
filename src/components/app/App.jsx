import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RickAndMortyList from '../../containers/RickAndMortyList';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/:id">
          <RickAndMortyDetailList />  
        </Route> */}
        <Route path="/">
          <RickAndMortyList />  
        </Route>
      </Switch>
    </BrowserRouter>
    
    
  );
}
