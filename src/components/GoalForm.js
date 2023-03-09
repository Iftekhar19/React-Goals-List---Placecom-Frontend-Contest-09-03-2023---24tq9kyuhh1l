import React, { useState } from "react";

const GoalForm = ({setAllGoals}) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
    const onChangeHandler=(e)=>
    {
      const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const func=(e)=>
    {
      e.preventDefault();
      setAllGoals((old)=>
      {
       return[
        ...old,
        formData
       ]
      });
      setFormData({goal:"",by:""})

    }
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={func}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
            onChange={onChangeHandler}
          />
          <input 
          onChange={onChangeHandler}
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
          />
          <button type="submit">Add</button>
        </form>
      </>
    )
}

export default GoalForm;