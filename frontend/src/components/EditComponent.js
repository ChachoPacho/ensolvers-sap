import '../App.css';

function EditComponent(addElement, goHome) {
  return (
    <div className="Appender-edit">
      <button className="Edit-button-l" onClick={addElement}>Save</button>
      <button className="Edit-button-r" onClick={goHome}>Cancel</button>
    </div>
  );
}

export default EditComponent;
