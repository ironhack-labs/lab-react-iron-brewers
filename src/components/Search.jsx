
function Search({ setSearchParams, searchParams }) {
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          value={searchParams}
          type="text"
          className="form-control search-bar"
          onChange={(e) => {
            console.log(searchParams);
            setSearchParams(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
