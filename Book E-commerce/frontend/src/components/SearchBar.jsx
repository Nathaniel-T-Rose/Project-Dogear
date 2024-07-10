import { useEffect, useState } from 'react'
import { TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import '../styles/search.css';


const SearchBar = ({setTitle,setAuthor,nav}) => {
    const [inputText, setInputText] = useState("");
    const [searchMode, setSearchMode] = useState('Title');

    const handleSearch = () => {
        setAuthor('');
        setTitle('');
        console.log(((searchMode==='Title') ? setTitle : setAuthor),inputText);
        ((searchMode==='Title') ? setTitle : setAuthor)(inputText);
        nav('/titles')    
    };

  return (
    <section className="search">
        <div className='search_wrapper'>
            <div className='search_element'>
            <Select
                labelId='mode-select-label'
                id='mode-select'
                color='success'
                onChange={(e)=>setSearchMode(e.target.value)}
                value={searchMode}
                >
                <MenuItem value='Author'>Author</MenuItem>
                <MenuItem value='Title'>Title</MenuItem>
            </Select>
            </div>
            <TextField
                id="outlined-basic"
                onChange={(e)=>{setInputText(e.target.value)}}
                fullWidth
                label='Search for books by title or author'
                color='success'
            />
            <button className='search_submit' onClick={handleSearch} 
            >
                <SearchIcon />
            </button>
        </div>
      </section>
  )
}

export default SearchBar
