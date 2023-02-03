import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>ooops! it is a dead end</h1>
        <Link to="/" className="btn btn-warning">
          Home
        </Link>
      </div>
    </section>
  );
}

export default Error;
