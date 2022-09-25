import React, {useState} from "react";

function CreateArea(props) {
const [newItem, setItem] = useState({title: "", content: ""}) //array for todo items, temporary state with items to be passed later on

  function handleChange(event){
    const {value, name} = event.target; //destructuring event.target to avoid lengthy references

    setItem(prevNote => {
      return {
        ...prevNote,
        [name]: value //spread operator is used but '[name]' only pertains to the existing on the object on 'newItem'. so '...prevNote' pertains to the object containing 'title' and 'content'
        //'[name]' may either be 'title' or 'content', and shall be updated with a new value 'value'
      };
    }); //setting current state with what is currently being entered
  }

  function submitNote(event){
    props.onAdd(newItem); //pass the newItem being constantly set on the previous block of codes setItem
    setItem({
      title: "",
      content: ""
    }); //reset and clear the items
    event.preventDefault(); //prevents the page from being refreshed on submit
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={newItem.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newItem.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
