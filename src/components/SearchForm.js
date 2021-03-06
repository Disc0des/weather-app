import React from "react";
import PropTypes from "prop-types";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input
        className="search-form_input"
        type="text"
        onChange={handleInputChange}
        value={searchText}
        placeholder="Search for a town/city"
      />
      <button className="search-form_button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
