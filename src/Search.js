import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="row">
        <div className="col-12 mb-4">
          <input
            type="search"
            placeholder="Search city"
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button type="button" className="form-control">
            Current
          </button>
        </div>
        <div className="col-6">
          <input type="submit" value="Search 🔍 " className="form-control" />
        </div>
      </div>
    </form>
  );
}
