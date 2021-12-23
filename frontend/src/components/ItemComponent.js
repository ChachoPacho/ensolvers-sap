import '../App.css';
import { APIItems } from '../common/config';

function ItemComponent(items, Updater, EditItem) {

  const deleteItem = async (itemId) => {
    await new APIItems(0).deleteItem(itemId);
    Updater(e => !e);
  }

  const handleMarkItem = async (itemId, btn) => {
    new APIItems(0).modifyItem(itemId, { isMarked: btn.checked });
  }

  return (
    <>
      {
        items.map(item => (
          <div key={item.id} className="Element-item">
            <div className="Item-title">
              <input
                type="checkbox"
                defaultChecked={item.isMarked}
                onChange={(e) => handleMarkItem(item.id, e.target)}
              /> {item.title}
            </div>
            <div className="Item-link">
              <a className="App-link" onClick={() => EditItem(item)} >Edit</a>
              <a className="App-link" onClick={() => deleteItem(item.id)} >Remove</a>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ItemComponent;
