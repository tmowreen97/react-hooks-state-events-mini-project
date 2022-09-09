import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [task, setTask] = useState(TASKS)

  const [selectedCategory, setSelectedCategory] = useState('ALL')

  function addNewItem (newItem){
    setTask([...task, newItem])
  }

  function deletedItem(deletedItem){
    const updated = task.filter(item => item.text !== deletedItem)
    setTask(updated)
  }

  const itemDisplayed = task.filter((item) => { 
      if(selectedCategory==='All') return true

      return selectedCategory=== item.category
    }
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        onButton={selectedCategory} 
        selectedButton={setSelectedCategory} 
        categories={CATEGORIES}
      />
      <NewTaskForm 
        onTaskFormSubmit={addNewItem} 
        categories={CATEGORIES}
      />
      <TaskList 
        tasks={itemDisplayed} 
        currentTask={selectedCategory}
        deletedItem={deletedItem}
      />
    </div>
  );
}

export default App;
