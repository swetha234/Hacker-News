import React from "react";

const SearchResults = ({ data }) => {
  return (
    <div>
      <div className="class1"></div>
      <div className="class2">
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        ></p>

        <div>
          {data.hits && data.hits.length ? (
            <ol>
              <p style={{ fontFamily: "Italic", fontSize: "20px" }}>
                Here are the related search results
              </p>
              {data.hits.map((hit, index) => {
                return (
                  <li key={index} style={{ margin: "15px 0" }}>
                    <div>Title: {hit.title}</div>
                    <a
                      href={hit.url}
                      style={{ color: " #blue ", alignItems: "center" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Link
                    </a>
                  </li>
                );
              })}
            </ol>
          ) : (
            "No results found"
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
