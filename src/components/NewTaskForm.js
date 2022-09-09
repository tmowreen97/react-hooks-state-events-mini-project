import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [useText, setText] = useState("");
  const [newItem, setNewItem]= useState('Code')

  function handleChangeName(event){
    setText(event.target.value)

  }
  function handleChangeCategory(event){
    setNewItem(event.target.value)

  }

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault()
        onTaskFormSubmit({ text: useText, category: newItem })
      }}
      className="new-task-form"
    >
      <label>
        Details
        <input value= {newItem.text} onChange = {handleChangeName} type="text" name="text" />
      </label>
      <label>
        Category
        <select value = {newItem.category} onChange={handleChangeCategory} name="category">
          {categories
						.filter((category) => category !== "All")

						.map((category, index) => (
							<option key={index}>{category}</option>
						))}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
