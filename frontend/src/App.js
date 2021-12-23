import './App.css';
import { useState } from 'react';
import FolderComponent from './components/FolderComponent';
import { APIFolder } from './common/config';

function App() {
  const [folder, setFolder] = useState("");
  const [elementTitle, setElementTitle] = useState("");
  const [updateFolders, UpdateFolders] = useState(true);
  const [updateItems, UpdateItems] = useState(true);

  const addElement = async () => {
    if (elementTitle) {
      console.log(elementTitle, folder);

      if (folder) {
        UpdateItems(e => !e);

        return
      }

      await APIFolder.createFolder(elementTitle);

      setElementTitle("");
      UpdateFolders(e => !e);
    }
  }

  const writeTitle = (e) => setElementTitle(e.target.value);

  return (
    <div className="App">
      <div className="container">
        <div className="Folder-section">
          <a className="Folder-link">Folders</a>
          {(folder) ? " > " + folder : ""}
        </div>
        <div className="Element-container">
          {
            (folder)
              ? folder
              : FolderComponent(updateFolders, UpdateFolders)
          }
        </div>
        <div className="Element-appender">
          <input className="Appender-textInput" value={elementTitle} onChange={writeTitle} placeholder={"New " + (folder ? "Task" : "Folder")} />
          <button className="Appender-button" onClick={addElement}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
