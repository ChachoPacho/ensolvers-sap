import '../App.css';
import { useEffect, useState } from 'react';
import { APIFolder } from '../common/config';

function FolderComponent(folders, Updater, SelectFolder) {

  const deleteFolder = async (folderId) => {
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
              <a className="App-link" onClick={() => SelectFolder(folder)} >View items</a>
              <a className="App-link" onClick={() => deleteFolder(folder.id)} >Remove</a>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default FolderComponent;
