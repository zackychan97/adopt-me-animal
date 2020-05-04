import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown.js";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); // this is a react hook -- all hooks begin with use -- useState, useEffect, useMemo, etc.
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]); // Whenever this runs we want to update breeds w/ an empty array. Cause if we're requesting new breeds and there are already breeds we want them to go away.
    setBreed(""); // Whenever this runs it updates the text to an empty string so we don't have labrador cats

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // EVERYTHING else gets rendered first before a useEffect. Helps speed of loading website. It is asynchronous.

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
