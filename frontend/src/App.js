import './App.css';
import { useEffect, useState } from 'react';
import FolderComponent from './components/FolderComponent';
import { APIFolder } from './common/config';
import HeaderComponent from './components/HeaderComponent';

function App() {
  const [folder, setFolder] = useState(null);
  const [elementTitle, setElementTitle] = useState("");
  const [updateFolders, UpdateFolders] = useState(true);
  const [updateItems, UpdateItems] = useState(true);
  const [folderList, setFolderList] = useState([]);

  useEffect(async () => {
    if (window.location.hash) {

      return
    }

    const response = await APIFolder.getFolders();
    setFolderList(response);
  }, [updateFolders])

  const addElement = async () => {
    if (elementTitle) {

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
          <HeaderComponent folder={folder} SelectFolder={setFolder} />
        </div>
        <div className="Element-container">
          {
            (folder)
              ? ""
              : FolderComponent(folderList, UpdateFolders, setFolder)
          }
        </div>
        <div className="Element-appender">
          <input
            className="Appender-textInput"
            value={elementTitle}
            onChange={writeTitle}
            placeholder={"New " + (folder ? "Task" : "Folder")}
          />
          <button className="Appender-button" onClick={addElement}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
