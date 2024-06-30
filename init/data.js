const demoListings = [
  {
    title: 'Cozy Cottage',
    description: 'A cozy cottage in the countryside.',
    image: 'https://images.unsplash.com/photo-1563306406-5368c96bda83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '150',
    location: 'Countryside',
    country: 'Country 1',
  },
  {
    title: 'Modern Apartment',
    description: 'A modern apartment in the city center.',
    image: 'https://images.unsplash.com/photo-1600585154844-7271b37ae3d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '200',
    location: 'City Center',
    country: 'Country 2',
  },
  {
    title: 'Beach House',
    description: 'A beautiful beach house with sea view.',
    image: 'https://images.unsplash.com/photo-1506773090266-d16b4b6c8d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '300',
    location: 'Seaside',
    country: 'Country 3',
  },
  {
    title: 'Mountain Cabin',
    description: 'A peaceful cabin in the mountains.',
    image: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '250',
    location: 'Mountains',
    country: 'Country 4',
  },
  {
    title: 'Luxury Villa',
    description: 'A luxury villa with a private pool.',
    image: 'https://images.unsplash.com/photo-1615154002657-a8f3f9a8e7ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '500',
    location: 'Suburbs',
    country: 'Country 5',
  },
  {
    title: 'Urban Loft',
    description: 'A stylish loft in the heart of downtown.',
    image: 'https://images.unsplash.com/photo-1554998176-546bfb2c93ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '350',
    location: 'Downtown',
    country: 'Country 6',
  },
  {
    title: 'Rustic Farmhouse',
    description: 'A rustic farmhouse with a large garden.',
    image: 'https://images.unsplash.com/photo-1504509558959-78168483028a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '175',
    location: 'Village',
    country: 'Country 7',
  },
  {
    title: 'Penthouse Suite',
    description: 'A luxurious penthouse suite with city views.',
    image: 'https://images.unsplash.com/photo-1600585154741-5f3c1590dcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '600',
    location: 'City Center',
    country: 'Country 8',
  },
  {
    title: 'Charming Bungalow',
    description: 'A charming bungalow near the beach.',
    image: 'https://images.unsplash.com/photo-1612124444175-e7e40e8372cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '275',
    location: 'Beachside',
    country: 'Country 9',
  },
  {
    title: 'Historic Manor',
    description: 'A historic manor with a grand interior.',
    image: 'https://images.unsplash.com/photo-1513546493317-0fdf8b9c31a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '450',
    location: 'Countryside',
    country: 'Country 10',
  },
  {
    title: 'Secluded Villa',
    description: 'A secluded villa with a private beach.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '700',
    location: 'Private Island',
    country: 'Country 11',
  },
  {
    title: 'Downtown Studio',
    description: 'A compact studio in the downtown area.',
    image: 'https://images.unsplash.com/photo-1591076482161-758d19cf7ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '150',
    location: 'Downtown',
    country: 'Country 12',
  },
  {
    title: 'Country Estate',
    description: 'A large country estate with extensive grounds.',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '800',
    location: 'Countryside',
    country: 'Country 13',
  },
  {
    title: 'City Condo',
    description: 'A modern condo in the city.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '400',
    location: 'City Center',
    country: 'Country 14',
  },
  {
    title: 'Suburban Home',
    description: 'A cozy suburban home with a garden.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '300',
    location: 'Suburbs',
    country: 'Country 15',
  },
  {
    title: 'Lakeside Cabin',
    description: 'A tranquil cabin by the lake.',
    image: 'https://images.unsplash.com/photo-1542317854-9f3e248198e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '350',
    location: 'Lakeside',
    country: 'Country 16',
  },
  {
    title: 'Desert Retreat',
    description: 'A serene retreat in the desert.',
    image: 'https://images.unsplash.com/photo-1582719478185-d6e63ecf62fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '275',
    location: 'Desert',
    country: 'Country 17',
  },
  {
    title: 'Tropical Bungalow',
    description: 'A tropical bungalow with a garden.',
    image: 'https://images.unsplash.com/photo-1554106776-cd54ba90bde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '375',
    location: 'Tropical Island',
    country: 'Country 18',
  },
  {
    title: 'Ski Chalet',
    description: 'A cozy chalet in a ski resort.',
    image: 'https://images.unsplash.com/photo-1502767089025-6572583495b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '600',
    location: 'Ski Resort',
    country: 'Country 19',
  },
  {
    title: 'Forest Cabin',
    description: 'A secluded cabin in the forest.',
    image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    price: '325',
    location: 'Forest',
    country: 'Country 20',
  }
];

module.exports = ({data: demoListings});