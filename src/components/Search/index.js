/* eslint-disable react/prop-types */
import React from 'react'

const Search = ({
  value,
  handleSearch,
  setValue,
  //   searchBtnLabel,
  //   clearBtnLabel
  searchPlaceholder,
}) => {
  return (
    <div>
      <input
        id="search"
        type="text"
        value={value}
        onChange={setValue}
        onKeyUp={handleSearch}
        placeholder={searchPlaceholder}
      />
      {/* <button
        type="button"
        onClick={handleSearch}
      >
        {searchBtnLabel}
      </button> */}
    </div>
  )
}

export default Search
