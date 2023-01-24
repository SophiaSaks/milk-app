import './SearchBar.css';

function SearchBar() {

  return (
    <div className='SearchBar'>
         <form className="SearchBar__form">
          <input type="text" placeholder="Search" className="SearchBar__input" id='searchInput'  />
          <button className='SearchBar_btn'>Search</button>
        </form>

        <p>{}</p>
    
    </div>
  );
}

export default SearchBar;