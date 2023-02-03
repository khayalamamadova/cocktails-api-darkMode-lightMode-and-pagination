import React, { useEffect, useState } from "react";
import Cocktail from "../Cocktail/Cocktail";
import Loading from "../Loading/Loading";
import { useGlobalContext } from "../../context";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  const [page, setPage] = useState(0);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    if (loading) return;
    setDrinks(cocktails[page]);
  }, [loading, page]);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails matched your search</h2>;
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > cocktails.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = cocktails.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => setPage(index);
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {drinks.map((item) => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
      {!loading && (
        <div className="btn-container">
          <button className="btn btn-danger" onClick={prevPage}>
            prev
          </button>
          {cocktails.map((item, index) => {
            return (
              <button
                key={index}
                className={`btn btn-success mx-1 ${
                  index === page ? "btn-warning" : null
                } `}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="btn btn-danger" onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </section>
  );
}

export default CocktailList;
