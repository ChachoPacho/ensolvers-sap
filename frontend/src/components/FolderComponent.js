import '../App.css';
import { useEffect, useState } from 'react';
import { APIFolder } from '../common/config';

function FolderComponent(handleUpdate, Updater) {
  const [folders, setFolders] = useState([]);

  useEffect(async () => {
    const response = await APIFolder.getFolders();
    setFolders(response);
  }, [handleUpdate])

  const deleteElement = async (folderId) => {
    await APIFolder.deleteFolder(folderId);
    Updater(e => !e);
  }

  return (
    <>
      {
        folders.map(folder => (
          <div key={folder.id} className="Element-item">
            <div className="Item-title">- {folder.title}</div>
            <div className="Item-link">
              <a className="App-link">View items</a>
              <a className="App-link" onClick={() => deleteElement(folder.id)} >Remove</a>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default FolderComponent;
