/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import style from './assets/style.module.scss'

const Search = ({
  value,
  handleSearch,
  setSearchValue,
  clearBtnLabel,
  clearSearchValue,
  searchPlaceholder,
}) => {
  const focusSearchField = (e) => {
    const { shiftKey, ctrlKey, keyCode } = e

    if (shiftKey && ctrlKey && keyCode === 83) {
      document.getElementById('search').focus()
    }

    if (shiftKey && ctrlKey && keyCode === 81) {
      clearSearchValue()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', focusSearchField)

    return () => window.removeEventListener('keydown', focusSearchField)
  }, [])

  return (
    <div className={style.flexRow}>
      <div className={style.container}>
        <input
          id="search"
          type="text"
          className={style.searchBar}
          value={value}
          onChange={setSearchValue}
          onKeyUp={handleSearch}
          placeholder={searchPlaceholder}
        />
        <button
          className={style.clearBtn}
          type="button"
          onClick={clearSearchValue}
        >
          {clearBtnLabel}
        </button>
      </div>
      <div className={style.tooltip}>
        ?
        <div className={style.tooltip__body}>
          <div className={`${style.tooltip__body__text} ${style['-header']}`}>
            Shortcuts
          </div>
          <div
            className={`${style.tooltip__body__text} ${style['-subheader']}`}
          >
            Focus search field
          </div>
          <div className={`${style.tooltip__body__text} ${style['-point']}`}>
            Ctrl + Shift + S
          </div>
          <div
            className={`${style.tooltip__body__text} ${style['-subheader']}`}
          >
            Clear search field
          </div>
          <div className={`${style.tooltip__body__text} ${style['-point']}`}>
            Ctrl + Shift + Q
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
