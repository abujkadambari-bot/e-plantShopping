import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400', description: 'Purifies indoor air and is easy to maintain.', cost: 15 },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400', description: 'A beautiful plant that helps improve air quality.', cost: 20 },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400', description: 'A resilient plant perfect for indoor spaces.', cost: 12 },
      { name: 'Areca Palm', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400', description: 'Adds a tropical touch to your home.', cost: 25 },
      { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', description: 'A leafy plant that brightens any room.', cost: 22 },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400', description: 'A lush green plant for a refreshing atmosphere.', cost: 18 }
    ]
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400', description: 'Known for its calming fragrance.', cost: 18 },
      { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400', description: 'Produces delicate, fragrant flowers.', cost: 16 },
      { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400', description: 'An aromatic herb for your home and kitchen.', cost: 10 },
      { name: 'Mint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400', description: 'Fresh-smelling leaves with many uses.', cost: 8 },
      { name: 'Gardenia', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400', description: 'Features fragrant and elegant flowers.', cost: 24 },
      { name: 'Lemon Balm', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400', description: 'A refreshing herb with a lemony scent.', cost: 12 }
    ]
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Citronella', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400', description: 'Popular for its citrus-like aroma.', cost: 14 },
      { name: 'Marigold', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400', description: 'Bright flowers that add color to gardens.', cost: 9 },
      { name: 'Basil', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400', description: 'A useful culinary herb with a strong aroma.', cost: 8 },
      { name: 'Lemongrass', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400', description: 'A fragrant grass used in cooking and gardens.', cost: 13 },
      { name: 'Catnip', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400', description: 'An aromatic herb suitable for garden spaces.', cost: 11 },
      { name: 'Chrysanthemum', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400', description: 'A colorful flowering plant for your garden.', cost: 17 }
    ]
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', description: 'A succulent widely grown in home gardens.', cost: 12 },
      { name: 'Tulsi', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400', description: 'A traditional herb popular in Indian households.', cost: 9 },
      { name: 'Neem', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400', description: 'A traditional tree valued for its many uses.', cost: 20 },
      { name: 'Turmeric Plant', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400', description: 'A tropical plant known for its rhizomes.', cost: 14 },
      { name: 'Ginger Plant', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400', description: 'A useful plant for growing fresh ginger.', cost: 13 },
      { name: 'Gotu Kola', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400', description: 'A small leafy herb traditionally used in wellness.', cost: 16 }
    ]
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', description: 'A hardy houseplant that needs little attention.', cost: 22 },
      { name: 'Pothos', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400', description: 'A trailing plant suitable for shelves and hanging pots.', cost: 14 },
      { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400', description: 'A compact succulent that is easy to care for.', cost: 11 },
      { name: 'Cactus', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', description: 'A drought-tolerant plant for sunny spaces.', cost: 8 },
      { name: 'Aloe Succulent', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', description: 'A decorative succulent requiring limited watering.', cost: 10 },
      { name: 'Chinese Evergreen', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400', description: 'A leafy indoor plant that adapts to many spaces.', cost: 19 }
    ]
  }
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true
    }));
  };

  const getCartQuantity = (productName) => {
    const item = cartItems.find((item) => item.name === productName);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2 className="navbar-title" onClick={onHomeClick}>
          Paradise Nursery
        </h2>

        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={() => setShowCart(false)}>Plants</button>
          <button onClick={() => setShowCart(true)}>
            🛒 Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </nav>

      {showCart ? (
        <CartItem />
      ) : (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div className="plant-category" key={category.category}>
              <h1>{category.category}</h1>

              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div
                    className="product-card"
                    key={`${plant.name}-${plantIndex}`}
                  >
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />

                    <div className="product-title">{plant.name}</div>

                    <div className="product-description">
                      {plant.description}
                    </div>

                    <div className="product-cost">${plant.cost}</div>

                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={Boolean(addedToCart[plant.name])}
                    >
                      {addedToCart[plant.name]
                        ? `Added (${getCartQuantity(plant.name)})`
                        : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;