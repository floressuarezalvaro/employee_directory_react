import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          gender="gender"
          type="text"
          className="form-control"
          placeholder="Type in the gender for you search"
          id="gender"
        />
        <datalist id="gender">
          {props.gender.map((gender) => (
            <option value={gender} key={gender} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
