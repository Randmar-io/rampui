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
  "Abstract Fantasy Background": "Abstract Scene",
  "Abstract Liminal Environment": "Abstract Scene",
  "Abstract Scene": "Abstract Scene",
  "Abstract Tunnel": "Abstract Scene",
  "Aircraft Hangar": "Realistic",
  "Airliner Hangar": "Realistic",
  "Animated Sunset": "Abstract Scene",
  "Art Deco Hall": "Realistic",
  "Art": "Realistic",
  "Bedroom-14": "Realistic",
  "Black Red Neon": "Abstract Scene",
  "Black Teal Neon Viz": "Abstract Scene",
  "Black and Yellow Neon Set": "Abstract Scene",
  "Blur Background": "Abstract Scene",
  "Brother": "Stylized/Cartoon Environment",
  "Cabin Bedroom": "Realistic",
  "Cartoon Factory": "Stylized/Cartoon Environment",
  "Cartoon Game Scene": "Stylized/Cartoon Environment",
  "Classic Luxury Swimming Pool": "Realistic",
  "Classic Pillered Set 3": "Realistic",
  "Classic Pillered Set": "Realistic",
  "Classic Red Set": "Realistic",
  "Coffee Shop": "Realistic",
  "Colorful Cube Columns": "Abstract Scene",
  "Cozy": "Realistic",
  "Creepy Hallway": "Fantasy/Fictional Setting",
  "Default": "General/Default Scene",
  "Diactum": "Abstract Scene",
  "Dock": "Realistic",
  "Elevate": "Brand-Specific",
  "Empty Warehouse": "Realistic",
  "Fashion Show": "Realistic",
  "Gold Podium": "Realistic",
  "Green Podium": "Realistic",
  "HP": "Brand-Specific",
  "Icebergs": "Nature/Outdoor Setting",
  "Interior Design -28": "Realistic",
  "Kitchen Counter": "Realistic",
  "Leafs": "Nature/Outdoor Setting",
  "Lexmark": "Brand-Specific",
  "MK Studio 12": "Realistic",
  "MK Studio Light": "Realistic",
  "Metal White Neon": "Abstract Scene",
  "Metal Yellow 01 Neon": "Abstract Scene",
  "Metal Yellow Neon": "Abstract Scene",
  "Modern Car Showroom": "Realistic",
  "Modern Empty Warehouse": "Realistic",
  "Modern Public Parking": "Realistic",
  "Moving Background": "Abstract Scene",
  "Museum Gallery": "Realistic",
  "Nebula Dreamscape": "Fantasy/Fictional Setting",
  "Night City": "Realistic",
  "Northern Lights": "Nature/Outdoor Setting",
  "Occult Dungeon": "Fantasy/Fictional Setting",
  "Office": "Realistic",
  "Palm Tree Island": "Nature/Outdoor Setting",
  "Promo Podium": "Realistic/Functional Setting",
  "Purple And White Neon": "Abstract Scene",
  "Realistic Old Warehouse": "Realistic",
  "Retail": "Realistic",
  "School Classroom": "Realistic",
  "School Hallway": "Realistic",
  "Sci Fi Abstract Art": "Fantasy/Fictional Setting",
  "Sci Fi Warehouse": "Fantasy/Fictional Setting",
  "Simpson": "Stylized/Cartoon Environment",
  "Space": "Fantasy/Fictional Setting",
  "Sponge Bob House": "Stylized/Cartoon Environment",
  "Stone Gazebo Greek": "Realistic",
  "Stylized Fir Forest in Snow": "Stylized/Cartoon Environment",
  "Stylized Kids Room": "Stylized/Cartoon Environment",
  "The House Of Lipsticks": "Stylized/Cartoon Environment",
  "Top of Clouds": "Fantasy/Fictional Setting",
  "Ultramodern Luxury Swimming Pool": "Realistic",
  "Warehouse with Docks": "Realistic",
  "White Hallway Room": "Realistic",
  "White": "Abstract Scene",
  "Wine Club": "Realistic",
  "Writing Desk": "Realistic/Functional Setting",
  "Xerox": "Brand-Specific"
};

export interface CategorizedScenes {
  [key: string]: Scene[];
}
