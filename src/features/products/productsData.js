// src/features/products/productsData.js

// 1. IMPORT your images from the assets folder.
// Webpack will process these and give you the correct public path.
import monsteraImage from '../../assets/monstera-deliciosa.jpg';
import snakePlantImage from '../../assets/snake-plant.jpg';
import fiddleLeafImage from '../../assets/fiddle-leaf-fig.jpg';
import zzPlantImage from '../../assets/zz-plant.jpg';
import aloeVeraImage from '../../assets/aloe-vera.jpg';
import echeveriaImage from '../../assets/echeveria-lola.jpg';


// 2. USE the imported variables in your data structure.
export const productsData = [
  {
    category: 'Indoor Classics',
    items: [
      { id: 1, name: 'Monstera Deliciosa', price: 28, thumbnail: monsteraImage },
      { id: 2, name: 'Snake Plant', price: 20, thumbnail: snakePlantImage },
    ]
  },
  {
    category: 'Statement Plants',
    items: [
      { id: 3, name: 'Fiddle Leaf Fig', price: 55, thumbnail: fiddleLeafImage },
      { id: 4, name: 'ZZ Plant', price: 22, thumbnail: zzPlantImage },
    ]
  },
  {
    category: 'Succulents & Cacti',
    items: [
      { id: 5, name: 'Aloe Vera', price: 12, thumbnail: aloeVeraImage },
      { id: 6, name: 'Echeveria Lola', price: 9, thumbnail: echeveriaImage },
    ]
  }
];