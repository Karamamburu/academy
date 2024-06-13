function SearchComponent() {

    return (
        <div className="header__search">
        <input
          type="text"
          placeholder="Искать в Библиотеке стандартов"
          className="search__input"
          id="searchInput"
        />
        <button className="search__button" id="searchButton">
          <img src="./public/markup/images/icon_find.svg" alt="Иконка поиска" />
        </button>
        </div>
    )
}

export default SearchComponent