import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newItem, setItem] = useState({ title: "", content: "" }); //array for todo items, temporary state with items to be passed later on

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target; //destructuring event.target to avoid lengthy references

    setItem((prevNote) => {
      return {
        ...prevNote,
        [name]: value, //spread operator is used but '[name]' only pertains to the existing on the object on 'newItem'. so '...prevNote' pertains to the object containing 'title' and 'content'
        //'[name]' may either be 'title' or 'content', and shall be updated with a new value 'value'
      };
    }); //setting current state with what is currently being entered
  }

  function submitNote(event) {
    props.onAdd(newItem); //pass the newItem being constantly set on the previous block of codes setItem
    setItem({
      title: "",
      content: "",
    }); //reset and clear the items
    event.preventDefault(); //prevents the page from being refreshed on submit
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newItem.title}
        />}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={newItem.content}
        />
        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
