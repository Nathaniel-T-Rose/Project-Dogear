import { useEffect, useState } from 'react'
import { TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate} from 'react-router-dom';
import '../styles/search.css';


const SearchBar = ({setTitle,setAuthor}) => {
    const [inputText, setInputText] = useState("");
    const [searchMode, setSearchMode] = useState('Title');
    const navigate = useNavigate();

    const handleSearch = () => {
        {setAuthor}('');
        {setTitle}('');
        console.log(((searchMode==='Title') ? setTitle : setAuthor),inputText);
        ((searchMode==='Title') ? setTitle : setAuthor)(inputText);
        navigate('/titles')    
    };

  return (
    <section className="search">
        <span className='search_label'> Already know what you're looking for?</span>
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
                label='Search'
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
