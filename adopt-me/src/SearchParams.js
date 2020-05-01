import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); // this is a react hook -- all hooks begin with use -- useState, useEffect, useMemo, etc.

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)} // takes an event,
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
