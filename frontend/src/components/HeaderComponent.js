import '../App.css';

function ExtraDirectory(title) {
  return (
    <>
      <div className="Decorator-separator">{'>'}</div> {title}
    </>
  );
}

function HeaderComponent({ folder, SelectFolder }) {

  const goHome = () => SelectFolder(null);

  return (
    <>
      <a className="Folder-link" onClick={goHome}>Folders</a>
      {
        folder
          ? ExtraDirectory(folder.title)
          : ""
      }
    </>
  );
}

export default HeaderComponent;
