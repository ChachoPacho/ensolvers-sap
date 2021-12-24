import env from "./env"

export class API {
  static target = env.API;
  static folders = API.target + "/folders";

  static getFoldersApi(folderId) {
    return `${API.folders}/${folderId}`;
  }

  static async getElements(url) {
    const response = await fetch(url);
    return response.json();
  }

  static async createElement(url, data) {
    return await fetch(url, {
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

  static async getFolders() {
    return await API.getElements(APIFolder.folders);
  }

  static async getFolder(folderId) {
    return await API.getElements(API.getFoldersApi(folderId));
  }

  static async createFolder(title) {
    return await API.createElement(APIFolder.folders, { title });
  }

  static async deleteFolder(folderId) {
    return await API.deleteElement(API.getFoldersApi(folderId));
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

  async getItems() {
    return await API.getElements(this.api);
  }

  async getItem(itemId) {
    return await API.getElements(this.getItemsApi(itemId));
  }

  async createItem(title) {
    return await API.createElement(this.api, { title });
  }

  async deleteItem(itemId) {
    return await API.deleteElement(this.getItemsApi(itemId));
  }

  async modifyItem(itemId, data) {
    return await fetch(this.getItemsApi(itemId), {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}