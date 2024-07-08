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
 " Cozy": "Default",
  "Office": "Default",
  "Art": "Default",
  "Dock": "Default",
  "Retail": "Default",
  "White": "Default",
  "Interior Office": "Office & Workspace",
  "Coffee Bar": "Office & Workspace",
  "Work Desk": "Office & Workspace",
  "Office Hallway": "Office & Workspace",
  "Empty Office": "Office & Workspace",
  "Waiting Area Neutral": "Office & Workspace",
  "Waiting Area Yellow": "Office & Workspace",
  "Empty Loft": "Home & Living",
  "Studio Apartment": "Home & Living",
  "Home Exterior": "Home & Living",
  "Home Interior": "Home & Living",
  "Minialist Home": "Home & Living",
  "Home Attic": "Home & Living",
  "Modern Kitchen": "Home & Living",
  "Modern Living Area": "Home & Living",
  "Night Night Corner Cafe": "Retail & Display",
  "Organic Coffee Bar": "Retail & Display",
  "Store Wait Area": "Retail & Display",
  "Studio Display": "Retail & Display",
  "Blush Display": "Retail & Display",
  "Luxury Store": "Retail & Display",
  "Yellow Display": "Retail & Display",
  "Mint Display": "Retail & Display",
  "Purple Display": "Retail & Display",
  "3D Yoga Studio": "Retail & Display",
  "Cafe Interior": "Retail & Display",
  "Warehouse Dock": "Industrial & Warehouse",
  "Modern Garage": "Industrial & Warehouse",
  "Stone Display": "Industrial & Warehouse",
  "Red Tech Display": "Industrial & Warehouse",
  "Industrial Daytime": "Industrial & Warehouse",
  "Parking Lot": "Industrial & Warehouse",
  "Packages": "Industrial & Warehouse",
  "Industrial Hallway": "Industrial & Warehouse",
  "Industrial Space": "Industrial & Warehouse",
  "Kids Classroom": "Education & Training",
  "Soft Classroom": "Education & Training",
  "School Hallway": "Education & Training",
  "Wooden Dock": "Miscellaneous & Specialty",
  "Detective Desk": "Miscellaneous & Specialty",
  "Small Island": "Miscellaneous & Specialty",
  "3D Simpsons Home": "Miscellaneous & Specialty",
  "Luxury Display": "Miscellaneous & Specialty",
  "Rockwall Showroom": "Miscellaneous & Specialty",
  "Modern Showroom": "Miscellaneous & Specialty",
  "Tori Gate": "Miscellaneous & Specialty",
  "Abstract Design": "Showcase",
  "Winter House In Middle Of Forest": "Outdoor",
  "Basketball Stadium Beast": "Miscellaneous & Specialty",
  "Mockup": "Showcase",
  "Modern Loft Apartment": "Home & Living",
  "Planetarium": "Miscellaneous & Specialty",
  "Serum lighting": "Showcase",
  "Window Placement": "Showcase",
  "Liminal Pool": "Home & Living",
  "Luxury Interior House": "Home & Living",
  "Gold Podium": "Showcase",
  "Toy Libray": "Miscellaneous & Specialty",
  "Isometric Church": "Miscellaneous & Specialty",
  "Cutting Edge": "Showcase",
  "Duck Hunt": "Miscellaneous & Specialty",
};

export interface CategorizedScenes {
  [key: string]: Scene[];
}