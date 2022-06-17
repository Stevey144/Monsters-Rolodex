import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';

const App = () =>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users') //native fetch api for javascript

    .then(response => response.json())
    .then((users) => setMonsters(users))      //monsters array (line 11) is assigned to users--> (which is the response from the api call)
  }, []);
 

 const onSearchChange = (event) =>{

    const searchFieldString  = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
   });

     setFilteredMonsters(newfilteredMonsters);
  },
  [monsters, searchField]);

  return(
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
       <SearchBox onChangeHandler={onSearchChange}
        placeholder='search Monsters!!'
        className='monsters-search-box'
        />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
