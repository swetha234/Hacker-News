import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const History = () => {
  const historyValue = useSelector((state) => state.simpleReducer.history);

  return (
    <>
      <div className="class1" style={headerStyle}>
        <h1>Search History</h1>
        <div>
          <button style={buttonStyle}>
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "black" }}
            >
              Back To Search
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

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ol>
              <p
                style={{
                  fontFamily: "Italic",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "rgb(51 51 51)"
                }}
              >
                History
              </p>

              {historyValue.map((value, i) => (
                <li style={searchHistory} key={i}>
                  {" "}
                  {value}{" "}
                </li>
              ))}
            </ol>
          </div>
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

const buttonStyle = {
  marginTop: "30px",
  height: "30px",
  width: "8%",
  borderRadius: "20px 20px",
  fontSize: "15px",
  cursor: "pointer",
  fontFamily: "Helvetica",
};

const searchHistory = {
  marginTop: "30px",
};
export default History;
