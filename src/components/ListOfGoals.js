import React from "react";

const ListOfGoals = ({allGoals}) => {
    return (
      <ul>
        {allGoals.map((e,i)=>
        {
          return <li key={i}>
          <p>My goal is to {e.goal}, by {e.by}</p>
        </li>
        })}
      </ul>
    );
}

export default ListOfGoals;