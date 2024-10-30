import { useState } from "react";

function Search() {

  const [items, setItems] = useState([]); 
  const [query, setQuery] = useState("");

  const filteredItems = items.filter(item => {
    item.toLowerCase().includes(query.toLowerCase())
  } )

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input 
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;
