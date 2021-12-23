import './App.css';
import { useEffect, useState } from 'react';
import FolderComponent from './components/FolderComponent';
import { APIFolder, APIItems } from './common/config';
import HeaderComponent from './components/HeaderComponent';
import ItemComponent from './components/ItemComponent';

function App() {
  const [folder, setFolder] = useState(null);
  const [elementTitle, setElementTitle] = useState("");
  const [updateElements, UpdateElements] = useState(true);

  const [folderList, setFolderList] = useState([]);
  const [itemList, setitemList] = useState([]);

  useEffect(async () => {
    setElementTitle("");
    const hash = window.location.hash;

    if (hash) {
      const folderApi = await getFolderByHash(hash);
      const items = await new APIItems(folderApi.id).getItems();
      return setitemList(items);
    }

    const folders = await APIFolder.getFolders();
    setFolderList(folders);
  }, [updateElements])

  const getFolderByHash = async (hash) => {
    let folderApi = folder;
    hash = hash.replace("#", "");

    if (!folder) {
      folderApi = await APIFolder.getFolder(hash);

      setFolder(folderApi);
    }

    return folderApi;
  }

  const addElement = async () => {
    if (elementTitle) {

      if (folder) {
        await new APIItems(folder.id).createItem(elementTitle);
      } else {
        await APIFolder.createFolder(elementTitle);
      }

      setElementTitle("");
      UpdateElements(e => !e);
    }
  }

  const Navigate = async (folder) => {
    window.location.hash = (folder) ? folder.id : "";

    setFolder(folder);
    UpdateElements(e => !e);
  }

  const writeTitle = (e) => setElementTitle(e.target.value);

  return (
    <div className="App">
      <div className="container">
        <div className="Folder-section">
          <HeaderComponent folder={folder} SelectFolder={Navigate} />
        </div>
        <div className="Element-container">
          {
            (folder)
              ? ItemComponent(folder.id, itemList, UpdateElements)
              : FolderComponent(folderList, UpdateElements, Navigate)
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
