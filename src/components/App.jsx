import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items, setItems] = useState([]); //main array of todo items
 

  function newItem(item){
    setItems((allTodo)=> {
      return [...allTodo, item]
    }) //the item being used here is from the newItem state from CreateArea.jsx
    //spread operator being used to appened 'item' to the current list of items 'allTodo' 
  }

  function deleteItem(id){
    setItems(items.filter((notes, index) => {return index !==id}))
    //update items array with items.filter
    //.filter is a .map function that filters items that satisfy the condition
    //so the items being filtered here is the item with the 'id' passed as a prop from Note.jsx (actually from this file, items.map and passed as a prop to Note.jsx )
    //'index !== id' basically means only return items without this id, technically deleting it
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={newItem} /> 
      {/* passing a function as a prop to CreateArea.jsx */}
      {items.map((noteItem, index) => {
        return (
          <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteItem}/>
        )
        {/* passing key, id, title, content, and a function deleteItem as props for Note.jsx */}
      })}
      <Footer />
    </div>
  );
}

export default App;
