import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./results";
import ThemeContext from "./ThemeContext";
const SearchParams = () => {
  const [location, setLoction] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, SatAnimals] = useDropdown("animals", "dog", ANIMALS);
  const [breed, Breeddeopdown, setBreed] = useDropdown("breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme,setTheme] = useContext(ThemeContext);
  async function requestdpets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestdpets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            placeholder="fayom"
            value={location}
            onChange={(e) => setLoction(e.target.value)}
          />
        </label>
        <SatAnimals />
        <Breeddeopdown />
<label htmlFor="theme">
  theme
  <select
  value={theme}
  onBlur={e=>setTheme(e.target.value)}
  onChange={e=>setTheme(e.target.value)}
  >
    <option value="peru">peru</option>
    <option value="darkblue">darkblue</option>
    <option value="mediumorchid">mediumorchid</option>
    <option value="chartreuse">chartreuse</option>
  </select>
</label>
        <button style={{ background: theme }}>submit</button>
      </form>
      <Results pets={pets} />
     
    </div>
  );
};
export default SearchParams;
