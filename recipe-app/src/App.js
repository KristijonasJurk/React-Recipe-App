import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = 'f0cf7372';
  const APP_KEY = '0388793d2296dc75bbbdc9d97131b383';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=canned&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hints);
    console.log(data.hints);
    // another way to write everything
    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // .then (repsonse => {
    // response.json...
  };

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.food.label}
          title={recipe.food.label}
          image={recipe.food.image}
          calories={recipe.food.nutrients.ENERC_KCAL} />
      ))}
    </div>
  );
};

export default App;


