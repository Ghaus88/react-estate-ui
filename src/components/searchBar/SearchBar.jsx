import { useState } from 'react';
import './searchBar.scss';
const types = ['Buy', 'Rent'];
function SearchBar() {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  const switchTypes = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key="type"
            onClick={() => switchTypes(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
      </form>
    </div>
  );
}

export default SearchBar;
