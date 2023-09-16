import React, { useState } from 'react';

function Directions() {
  const [toLocation, setToLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    // Perform any search operation based on the 'to' and 'from' locations
    // ...

    // Set the hard-coded search result
    const hardCodedResult = 'In order to see the detail route go to Routes/FR1. ';
    setSearchResult(hardCodedResult);
  };

  return (
    <div>
      <input
        type="text"
        value={toLocation}
        onChange={e => setToLocation(e.target.value)}
        placeholder="To Location"
      />
      <input
        type="text"
        value={fromLocation}
        onChange={e => setFromLocation(e.target.value)}
        placeholder="From Location"
      />
      <button onClick={handleSearch}>Search</button>

      {searchResult && <p>Search Result: {searchResult}</p>}
    </div>
  );
}

export default Directions;
