import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.prevent.Default();
  };

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
