import '../App.css';
import { APIItems } from '../common/config';

function ItemComponent(folderId, items, Updater) {

  const deleteItem = async (itemId) => {
    await new APIItems(folderId).deleteItem(itemId);
    Updater(e => !e);
  }

  return (
    <>
      {
        items.map(item => (
          <div key={item.id} className="Element-item">
            <div className="Item-title">- {item.title}</div>
            <div className="Item-link">
              <a className="App-link" onClick={() => console.log(item)} >Edit</a>
              <a className="App-link" onClick={() => deleteItem(item.id)} >Remove</a>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ItemComponent;
