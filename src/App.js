import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
        <div className="question">
          <h1>Do you want to delete this picture?</h1>
          <button className="btn">No</button>
          <button className="btn">Yes</button>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
