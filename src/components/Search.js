import React from "react";
import {
  setSearchValue,
  fetchData,
  saveHistory,
} from "../actions/simpleAction";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.simpleReducer.searchvalue);
  const results = useSelector((state) => state.simpleReducer.results);

  const onChangehandler = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const searchHackernews = (event) => {
    dispatch(fetchData(searchValue));
    dispatch(saveHistory(searchValue));
  };

  return (
    <>
      <div className="class1" style={headerStyle}>
        <h1>HACKER NEWS</h1>
        <h3>The most readable results on the web...!!!</h3>
        <input
          style={boxStyle}
          type="text"
          onChange={onChangehandler}
          placeholder="Search stories...."
        ></input>
        <div>
          <button style={buttonStyle} onClick={searchHackernews}>
          <Link
              to="/search"
              style={{ textDecoration: "none", color: "black" }}
            >
              Search
            </Link>
          </button>{" "}
          <button style={buttonStyle}>
            <Link
              to="/history"
              style={{ textDecoration: "none", color: "black" }}
            >
              History
            </Link>
          </button>
        </div>
      </div>

      <div className="class2">
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        ></p>

        {results && <SearchResults data={results} />}
      </div>
    </>
  );
};


//Styling
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "70px",
  fontFamily: "Helvetica",
  size: "35",
};
const boxStyle = {
  width: "40%",
  height: "30px",
  borderRadius: "20px 20px",
  fontFamily: "Helvetica",
  fontSize: "20px",
};

const buttonStyle = {
  marginTop: "30px",
  height: "30px",
  width: "8%",
  cursor: "pointer",
  borderRadius: "20px 20px",
  fontSize: "15px",
  fontFamily: "Helvetica",
};

export default Search;
