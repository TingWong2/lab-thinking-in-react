import { useState } from 'react';

function SearchBar(props) {
  const [firstLetter, setFristLetter] = useState('');

  const handleSelect = (e) => {
    setFristLetter(e.target.value);
    console.log('selected', e.target.value);
    props.filterProduct(e.target.value);
  };

  return (
    <div>
      <label htmlFor="Search"></label>
      <input
        className="searchBar"
        type="text"
        placeholder="enter your research"
        name="searchInput"
        value={firstLetter}
        onChange={handleSelect}
      />
    </div>
  );
}
export default SearchBar;
