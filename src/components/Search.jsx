import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



function Search( {onSearch} ) {


  const [input, setInput] = useState('')

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            onSearch(e.target.value)
          }}
        />
      </div>
    </div>
  );
}

export default Search;
