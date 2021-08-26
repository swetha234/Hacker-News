import React from 'react';

export const History = props => {
  return (
    <div>
      {/* {props.data.hits && props.data.hits.length ? ( */}
        <ol>
          <p style={{ fontFamily: 'Italic', fontSize: '20px' }}>
            List of past SearchResults 
          </p>
          {props.data.hits.map((hit, index) => {
            return (
              <li key={index} style={{ margin: '15px 0' }}>
                <div> </div>
              </li>
            );
          })}
        </ol>
    
      {/* )} */}
    </div>
  );
};
