export class API {
  static target = "http://localhost:4000";
  static folders = API.target + "/folders";

  static getFoldersApi(folderId) {
    return `${API.folders}/${folderId}`;
  }

  static getItemsApi(folderId, itemId) {
    let apiUrl = `${API.folders}/${folderId}/items`;

    if (itemId) {
      apiUrl += `/${itemId}`;
    }

    return apiUrl;
  }
}

export class APIFolder extends API {
  static async getFolders() {
    const response = await fetch(APIFolder.folders);
    return response.json();
  }

  static async createFolder(title) {
    return await fetch(APIFolder.folders, {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  static async deleteFolder(folderId) {
    return await fetch(API.getFoldersApi(folderId), {
      method: "DELETE"
    });
  }
}