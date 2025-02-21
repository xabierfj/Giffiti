import React from 'react';
import './App.css';
import { Link, Route } from 'wouter';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import StaticContext from './context/StaticContext';
import Detail from './pages/Detail';

export default function App() {
  return (
    <StaticContext.Provider value={{Name:'Yeah perdonden kamehameha'}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img alt='Logo' className="App-logo" src='/logo_transparent.png'/>
          </Link>
          <Route 
            component={Home}
            path='/'
          />
          <Route
            component={SearchResults} 
            path='/search/:keyword'
          /> 
          <Route
            component={Detail}
            path={'/gif/:id'}
          />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

