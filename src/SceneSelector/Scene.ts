export interface Scene {
  Name: string;
  Scene: MediaFile;
  Thumbnail?: MediaFile;
  Preview?: MediaFile;
}

interface MediaFile {
  FileName: string;
  FileType: string;
  CreationDate: string;
  Description: string;
  ContentLength: number;
  ContentType: string;
}

export const categoryMapping: { [key: string]: string } = {
  "Cozy": "Default",
  "Office": "Default",
  "Art": "Default",
  "Dock": "Default",
  "Retail": "Default",
  "White": "Default",
  "3D Simpsons Home": "Randmar's Favorite"
};

export interface CategorizedScenes {
  [key: string]: Scene[];
}
