import '../App.css';

function ExtraDirectory(title, goHome) {
  return (
    <>
      <a className="App-link" onClick={goHome}>Folders</a>
      <div className="Decorator-separator">{'>'}</div> {title}
    </>
  );
}

function HeaderComponent({ folder, SelectFolder }) {

  const goHome = () => SelectFolder(null);

  return (
    <>
      {
        folder
          ? ExtraDirectory(folder.title, goHome)
          : <a className="Folder-link" >Folders</a>
      }
    </>
  );
}

export default HeaderComponent;
