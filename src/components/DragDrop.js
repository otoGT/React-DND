import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://previews.123rf.com/images/supertrooper/supertrooper2003/supertrooper200300394/143524240-geometric-pixelated-mosaic-pattern-with-square-fragments-random-pixels-repeatble-low-resolution-effe.jpg",
  },
  {
    id: 2,
    url:
      "https://cdn.wallpapersafari.com/81/93/kXpmFL.jpg",
  },
  {
    id: 3,
    url:
      "https://cdn.wallpapersafari.com/72/78/7cBvIf.jpg",
  },
];
 
function QuestionPrompt() {
  
}

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  
  function QuestionPrompt() {
   
  }

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
