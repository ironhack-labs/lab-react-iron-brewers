function Search({query, setQuery}) {
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">

        </div>
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Type to search beers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
