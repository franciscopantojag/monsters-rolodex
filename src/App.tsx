import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

const App = () => {
  const [searchField, setSearchField] = useState('');

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox setSearchField={setSearchField} placeholder="search for monsters" className="monsters-search-box" />
      <CardList searchField={searchField} />
    </div>
  );
};

export default App;
