import './App.css';
import { useEffect, useState } from 'react';
import FolderComponent from './components/FolderComponent';
import { APIFolder, APIItems } from './common/config';
import HeaderComponent from './components/HeaderComponent';
import ItemComponent from './components/ItemComponent';
import EditComponent from './components/EditComponent';

function App() {
  const [folder, setFolder] = useState(null);
  const [elementTitle, setElementTitle] = useState("");
  const [updateElements, UpdateElements] = useState(true);

  const [folderList, setFolderList] = useState([]);
  const [itemList, setitemList] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(async () => {
    setElementTitle("");
    setEditItem(null);
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
    if (folder) return folder;

    hash = hash.replace("#", "");

    if (hash.includes("edit")) {
      let itemId;
      [hash, itemId] = hash.replace("edit-", "").split("-");

      const itemApi = await new APIItems(hash).getItem(itemId);

      setElementTitle(itemApi.title);
      setEditItem(itemApi);
    }

    const folderApi = await APIFolder.getFolder(hash);

    setFolder(folderApi);

    return folderApi;
  }

  const addElement = async () => {
    if (elementTitle) {

      if (folder) {
        const api = new APIItems(folder.id);

        if (editItem) {
          await api.modifyItem(editItem.id, { title: elementTitle })
          return StopEditing()
        }

        await api.createItem(elementTitle);
      } else {
        await APIFolder.createFolder(elementTitle);
      }

      UpdateElements(e => !e);
    }
  }

  const Navigate = async (folder) => {
    window.location.hash = (folder) ? folder.id : "";

    setFolder(folder);
    UpdateElements(e => !e);
  }

  const StopEditing = () => {
    window.location.hash = folder.id;
    UpdateElements(e => !e);
  }

  const StartEditing = (item) => {
    window.location.hash = `${folder.id}-edit-${item.id}`;
    setElementTitle(item.title);
    setEditItem(item);
  }

  const writeTitle = (e) => setElementTitle(e.target.value);

  return (
    <div className="App">
      <div className="container">
        <div className="Folder-section">
          <HeaderComponent
            folder={folder}
            editMode={editItem}
            SelectFolder={Navigate}
          />
        </div>
        <div className="Element-container">
          {
            (folder)
              ? (editItem)
                ? ""
                : ItemComponent(itemList, UpdateElements, StartEditing)
              : FolderComponent(folderList, UpdateElements, Navigate)
          }
        </div>
        <div className={"Element-appender" + ((editItem) ? "-edit" : "")}>
          <input
            className="Appender-textInput"
            value={elementTitle}
            onChange={writeTitle}
            placeholder={
              (editItem)
                ? editItem.title
                : "New " + (folder ? "Task" : "Folder")
            }
          />
          {
            (editItem)
              ? EditComponent(addElement, StopEditing)
              : <button
                className="Appender-button"
                onClick={addElement}
              >Add</button>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
