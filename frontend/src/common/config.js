export class API {
  static target = "http://localhost:4000";
  static folders = API.target + "/folders";

  static getFoldersApi(folderId) {
    return `${API.folders}/${folderId}`;
  }

  static async getElements(url) {
    const response = await fetch(url);
    return response.json();
  }

  static createElement(url, data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  static deleteElement(url) {
    return fetch(url, { method: "DELETE" });
  }
}

export class APIFolder extends API {

  static getFolders() {
    return API.getElements(APIFolder.folders);
  }

  static getFolder(folderId) {
    return API.getElements(API.getFoldersApi(folderId));
  }

  static createFolder(title) {
    return API.createElement(APIFolder.folders, { title });
  }

  static deleteFolder(folderId) {
    return API.deleteElement(API.getFoldersApi(folderId));
  }

}

export class APIItems extends API {

  constructor(folderId) {
    super();
    this.api = `${API.getFoldersApi(folderId)}/items`;
  }

  getItemsApi(itemId) {
    return `${this.api}/${itemId}`;
  }

  getItems() {
    return API.getElements(this.api);
  }

  createItem(title) {
    return API.createElement(this.api, { title });
  }

  deleteItem(itemId) {
    return API.deleteElement(this.getItemsApi(itemId));
  }

  modifyItem(itemId, data) {
    return fetch(this.getItemsApi(itemId), {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}