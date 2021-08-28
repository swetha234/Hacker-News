import React from 'react';
 import { useSelector } from "react-redux";

const History = () => {
    const historyValue = useSelector((state) => state.simpleReducer.history);
    return (
        <ol>
            {historyValue.map((value, i) =><li key={i}> {value} </li> )}
        </ol>
    )
}

export default History
