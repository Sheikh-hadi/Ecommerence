const productList = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Wireless Bluetooth Headphones",
    price: 49.99,
    description:
      "Comfortable and high-quality sound wireless headphones with Bluetooth connectivity.",
    categoryId: 1,
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/t-shirt-1280362_1280.jpg",
    title: "Men's Casual Shirt",
    price: 25.0,
    description:
      "A comfortable and stylish men's casual shirt, perfect for everyday wear.",
    categoryId: 2,
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2017/11/29/08/32/tv-2982321_1280.jpg",
    title: "Smart LED TV",
    price: 299.99,
    description:
      "A sleek, high-definition smart LED TV with built-in streaming capabilities.",
    categoryId: 1,
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2016/03/27/21/35/summer-dress-1280216_1280.jpg",
    title: "Women's Summer Dress",
    price: 15.0,
    description:
      "Lightweight and stylish summer dress, perfect for warm weather.",
    categoryId: 2,
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2020/05/28/03/25/air-fryer-5225090_1280.jpg",
    title: "Air Fryer",
    price: 89.99,
    description:
      "A versatile air fryer that allows you to enjoy crispy, fried food with less oil.",
    categoryId: 3,
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2020/01/06/19/48/book-4740471_1280.jpg",
    title: "Mystery Novel",
    price: 9.99,
    description:
      "A gripping mystery novel that will keep you on the edge of your seat.",
    categoryId: 4,
  },
  {
    id: 7,
    img: "https://cdn.pixabay.com/photo/2017/09/13/11/43/cosmetics-2743490_1280.jpg",
    title: "Moisturizing Lotion",
    price: 14.99,
    description:
      "Nourishing and hydrating moisturizing lotion for healthy skin.",
    categoryId: 5,
  },
  {
    id: 8,
    img: "https://cdn.pixabay.com/photo/2015/03/26/09/43/tent-691329_1280.jpg",
    title: "Camping Tent",
    price: 79.99,
    description:
      "Durable and spacious camping tent, ideal for outdoor adventures.",
    categoryId: 6,
  },
  {
    id: 9,
    img: "https://cdn.pixabay.com/photo/2017/03/16/22/09/board-game-2150327_1280.jpg",
    title: "Board Game",
    price: 19.99,
    description: "Fun and engaging board game for family and friends.",
    categoryId: 7,
  },
  {
    id: 10,
    img: "https://cdn.pixabay.com/photo/2018/08/03/14/29/vacuum-cleaner-3582002_1280.jpg",
    title: "Car Vacuum Cleaner",
    price: 199.99,
    description:
      "Compact and powerful vacuum cleaner designed for car interiors.",
    categoryId: 8,
  },
  {
    id: 11,
    img: "https://cdn.pixabay.com/photo/2015/09/18/16/31/office-943920_1280.jpg",
    title: "Office Desk Chair",
    price: 119.99,
    description:
      "Ergonomic office desk chair with adjustable height and lumbar support.",
    categoryId: 1,
  },
  {
    id: 12,
    img: "https://cdn.pixabay.com/photo/2017/08/30/08/53/laptop-2694544_1280.jpg",
    title: "Gaming Laptop",
    price: 1499.99,
    description:
      "High-performance gaming laptop with the latest graphics card and processor.",
    categoryId: 1,
  },
  {
    id: 13,
    img: "https://cdn.pixabay.com/photo/2018/06/05/14/58/dress-ways-3451102_1280.jpg",
    title: "Evening Gown",
    price: 89.99,
    description:
      "Elegant evening gown for formal events and special occasions.",
    categoryId: 2,
  },
  {
    id: 14,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/bags-1232367_1280.jpg",
    title: "Leather Handbag",
    price: 119.99,
    description:
      "Stylish and durable leather handbag with ample storage space.",
    categoryId: 2,
  },
  {
    id: 15,
    img: "https://cdn.pixabay.com/photo/2017/08/30/08/53/laptop-2694544_1280.jpg",
    title: "Bluetooth Speaker",
    price: 29.99,
    description:
      "Portable Bluetooth speaker with high-quality sound and long battery life.",
    categoryId: 1,
  },
  {
    id: 16,
    img: "https://cdn.pixabay.com/photo/2017/09/16/07/16/juice-2751026_1280.jpg",
    title: "Juicer",
    price: 49.99,
    description:
      "Efficient juicer for making fresh and healthy juices at home.",
    categoryId: 3,
  },
  {
    id: 17,
    img: "https://cdn.pixabay.com/photo/2017/08/30/08/53/laptop-2694544_1280.jpg",
    title: "Digital Camera",
    price: 299.99,
    description:
      "High-resolution digital camera with various shooting modes and features.",
    categoryId: 1,
  },
  {
    id: 18,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/bags-1232367_1280.jpg",
    title: "Canvas Backpack",
    price: 39.99,
    description:
      "Durable canvas backpack with multiple compartments and adjustable straps.",
    categoryId: 2,
  },
  {
    id: 19,
    img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/teddy-bear-820564_1280.jpg",
    title: "Plush Teddy Bear",
    price: 19.99,
    description:
      "Soft and cuddly plush teddy bear, perfect for children and collectors.",
    categoryId: 7,
  },
  {
    id: 20,
    img: "https://cdn.pixabay.com/photo/2015/05/31/08/50/plant-791849_1280.jpg",
    title: "Potted Plant",
    price: 12.99,
    description:
      "Beautiful potted plant that adds a touch of greenery to any space.",
    categoryId: 8,
  },
  {
    id: 21,
    img: "https://cdn.pixabay.com/photo/2017/11/28/03/51/bed-2989823_1280.jpg",
    title: "Memory Foam Pillow",
    price: 34.99,
    description:
      "Comfortable memory foam pillow that conforms to your head and neck.",
    categoryId: 3,
  },
  {
    id: 22,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Luxury Fountain Pen",
    price: 59.99,
    description:
      "Elegant fountain pen with a smooth writing experience and a stylish design.",
    categoryId: 4,
  },
  {
    id: 23,
    img: "https://cdn.pixabay.com/photo/2016/11/29/05/12/coffee-1867211_1280.jpg",
    title: "Coffee Maker",
    price: 39.99,
    description:
      "Easy-to-use coffee maker that brews your favorite coffee in minutes.",
    categoryId: 3,
  },
  {
    id: 24,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/bags-1232367_1280.jpg",
    title: "Sports Water Bottle",
    price: 12.99,
    description:
      "Durable water bottle designed for sports and outdoor activities.",
    categoryId: 2,
  },
  {
    id: 25,
    img: "https://cdn.pixabay.com/photo/2016/11/29/05/12/coffee-1867211_1280.jpg",
    title: "Electric Kettle",
    price: 29.99,
    description:
      "Fast and efficient electric kettle for boiling water quickly.",
    categoryId: 3,
  },
  {
    id: 26,
    img: "https://cdn.pixabay.com/photo/2017/08/30/08/53/laptop-2694544_1280.jpg",
    title: "Wireless Mouse",
    price: 19.99,
    description:
      "Ergonomic wireless mouse with customizable buttons and precision tracking.",
    categoryId: 1,
  },
  {
    id: 27,
    img: "https://cdn.pixabay.com/photo/2017/09/16/07/16/juice-2751026_1280.jpg",
    title: "Blender",
    price: 39.99,
    description: "High-speed blender for smoothies, soups, and sauces.",
    categoryId: 3,
  },
  {
    id: 28,
    img: "https://cdn.pixabay.com/photo/2017/11/28/03/51/bed-2989823_1280.jpg",
    title: "Weighted Blanket",
    price: 79.99,
    description:
      "Cozy weighted blanket designed to improve sleep and relaxation.",
    categoryId: 3,
  },
  {
    id: 29,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Notebook",
    price: 9.99,
    description: "Classic notebook with lined pages for notes and journaling.",
    categoryId: 4,
  },
  {
    id: 30,
    img: "https://cdn.pixabay.com/photo/2016/05/06/15/12/camera-1372970_1280.jpg",
    title: "Tripod Stand",
    price: 24.99,
    description:
      "Adjustable tripod stand for stable photography and video recording.",
    categoryId: 1,
  },
  {
    id: 31,
    img: "https://cdn.pixabay.com/photo/2017/08/30/08/53/laptop-2694544_1280.jpg",
    title: "Fitness Tracker",
    price: 49.99,
    description:
      "Wearable fitness tracker that monitors your activity and health metrics.",
    categoryId: 1,
  },
  {
    id: 32,
    img: "https://cdn.pixabay.com/photo/2015/03/26/09/43/tent-691329_1280.jpg",
    title: "Sleeping Bag",
    price: 49.99,
    description:
      "Comfortable and warm sleeping bag for camping and outdoor use.",
    categoryId: 6,
  },
  {
    id: 33,
    img: "https://cdn.pixabay.com/photo/2017/11/28/03/51/bed-2989823_1280.jpg",
    title: "Mattress Topper",
    price: 99.99,
    description:
      "Comfortable mattress topper that adds extra cushioning to your bed.",
    categoryId: 3,
  },
  {
    id: 34,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Desk Organizer",
    price: 19.99,
    description:
      "Practical desk organizer for keeping your office supplies neat and accessible.",
    categoryId: 1,
  },
  {
    id: 35,
    img: "https://cdn.pixabay.com/photo/2017/09/16/07/16/juice-2751026_1280.jpg",
    title: "Espresso Machine",
    price: 129.99,
    description:
      "High-quality espresso machine for brewing professional-grade coffee at home.",
    categoryId: 3,
  },
  {
    id: 36,
    img: "https://cdn.pixabay.com/photo/2016/05/05/16/11/bag-1376575_1280.jpg",
    title: "Travel Luggage",
    price: 89.99,
    description:
      "Durable and spacious travel luggage with multiple compartments.",
    categoryId: 8,
  },
  {
    id: 37,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Noise-Cancelling Headphones",
    price: 129.99,
    description:
      "Advanced noise-cancelling headphones for an immersive listening experience.",
    categoryId: 1,
  },
  {
    id: 38,
    img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/t-shirt-1280362_1280.jpg",
    title: "Graphic T-Shirt",
    price: 22.0,
    description: "Trendy graphic t-shirt with a unique design.",
    categoryId: 2,
  },
  {
    id: 39,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Desk Lamp",
    price: 34.99,
    description: "Adjustable desk lamp with LED lighting and touch controls.",
    categoryId: 1,
  },
  {
    id: 40,
    img: "https://cdn.pixabay.com/photo/2017/09/13/11/43/cosmetics-2743490_1280.jpg",
    title: "Face Serum",
    price: 29.99,
    description: "Revitalizing face serum with anti-aging properties.",
    categoryId: 5,
  },
  {
    id: 41,
    img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/teddy-bear-820564_1280.jpg",
    title: "Kids' Toy Car",
    price: 29.99,
    description: "Colorful and durable toy car for children.",
    categoryId: 7,
  },
  {
    id: 42,
    img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/teddy-bear-820564_1280.jpg",
    title: "Portable Fan",
    price: 19.99,
    description: "Compact and portable fan, ideal for hot days.",
    categoryId: 8,
  },
  {
    id: 43,
    img: "https://cdn.pixabay.com/photo/2016/03/27/21/35/summer-dress-1280216_1280.jpg",
    title: "Beach Hat",
    price: 14.99,
    description: "Wide-brimmed beach hat to protect you from the sun.",
    categoryId: 2,
  },
  {
    id: 44,
    img: "https://cdn.pixabay.com/photo/2016/03/27/22/22/t-shirt-1280362_1280.jpg",
    title: "Hoodie Sweatshirt",
    price: 39.99,
    description: "Cozy hoodie sweatshirt with a comfortable fit.",
    categoryId: 2,
  },
  {
    id: 45,
    img: "https://cdn.pixabay.com/photo/2016/03/27/21/35/summer-dress-1280216_1280.jpg",
    title: "Summer Sandals",
    price: 24.99,
    description: "Comfortable and stylish sandals for summer.",
    categoryId: 2,
  },
  {
    id: 46,
    img: "https://cdn.pixabay.com/photo/2020/03/13/10/16/smartphone-4933815_1280.jpg",
    title: "Smartphone Case",
    price: 14.99,
    description: "Protective case for your smartphone with a sleek design.",
    categoryId: 1,
  },
  {
    id: 47,
    img: "https://cdn.pixabay.com/photo/2015/11/11/20/28/wristwatch-1043880_1280.jpg",
    title: "Classic Wristwatch",
    price: 149.99,
    description:
      "Elegant wristwatch with a timeless design and reliable timekeeping.",
    categoryId: 1,
  },
  {
    id: 48,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Gaming Headset",
    price: 89.99,
    description:
      "High-performance gaming headset with surround sound and a noise-cancelling microphone.",
    categoryId: 1,
  },
  {
    id: 49,
    img: "https://cdn.pixabay.com/photo/2016/03/27/21/35/summer-dress-1280216_1280.jpg",
    title: "Summer Sunglasses",
    price: 19.99,
    description: "Stylish sunglasses with UV protection for sunny days.",
    categoryId: 2,
  },
  {
    id: 50,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Wall Clock",
    price: 34.99,
    description:
      "Elegant wall clock that adds a touch of sophistication to any room.",
    categoryId: 1,
  },
  {
    id: 51,
    img: "https://cdn.pixabay.com/photo/2020/03/13/10/16/smartphone-4933815_1280.jpg",
    title: "Phone Charger",
    price: 9.99,
    description: "Fast-charging phone charger compatible with most devices.",
    categoryId: 1,
  },
  {
    id: 52,
    img: "https://cdn.pixabay.com/photo/2016/03/27/21/35/summer-dress-1280216_1280.jpg",
    title: "Denim Jacket",
    price: 59.99,
    description:
      "Classic denim jacket with a timeless design and versatile style.",
    categoryId: 2,
  },
  {
    id: 53,
    img: "https://cdn.pixabay.com/photo/2017/03/16/22/09/board-game-2150327_1280.jpg",
    title: "Puzzle Game",
    price: 22.99,
    description: "Challenging and fun puzzle game for hours of entertainment.",
    categoryId: 7,
  },
  {
    id: 54,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Magnetic Whiteboard",
    price: 49.99,
    description:
      "Versatile magnetic whiteboard for notes, reminders, and presentations.",
    categoryId: 1,
  },
  {
    id: 55,
    img: "https://cdn.pixabay.com/photo/2017/11/28/03/51/bed-2989823_1280.jpg",
    title: "Bedside Table",
    price: 79.99,
    description:
      "Elegant bedside table with ample storage space and a stylish design.",
    categoryId: 3,
  },
  {
    id: 56,
    img: "https://cdn.pixabay.com/photo/2015/03/26/09/43/tent-691329_1280.jpg",
    title: "Hiking Boots",
    price: 89.99,
    description: "Durable and comfortable hiking boots for outdoor adventures.",
    categoryId: 6,
  },
  {
    id: 57,
    img: "https://cdn.pixabay.com/photo/2017/03/16/22/09/board-game-2150327_1280.jpg",
    title: "Card Game",
    price: 14.99,
    description: "Fun and engaging card game for family and friends.",
    categoryId: 7,
  },
  {
    id: 58,
    img: "https://cdn.pixabay.com/photo/2017/08/30/08/53/laptop-2694544_1280.jpg",
    title: "Portable Hard Drive",
    price: 89.99,
    description:
      "External hard drive with large storage capacity for your files.",
    categoryId: 1,
  },
  {
    id: 59,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Office Chair Mat",
    price: 34.99,
    description:
      "Protective office chair mat for smooth rolling and floor protection.",
    categoryId: 1,
  },
  {
    id: 60,
    img: "https://cdn.pixabay.com/photo/2016/11/29/05/12/coffee-1867211_1280.jpg",
    title: "Coffee Grinder",
    price: 24.99,
    description: "Manual coffee grinder for fresh and flavorful coffee beans.",
    categoryId: 3,
  },
  {
    id: 61,
    img: "https://cdn.pixabay.com/photo/2016/09/15/12/22/pen-1673365_1280.jpg",
    title: "Planner Notebook",
    price: 19.99,
    description:
      "Organizational planner notebook with monthly and weekly layouts.",
    categoryId: 4,
  },
  {
    id: 62,
    img: "https://cdn.pixabay.com/photo/2017/09/13/11/43/cosmetics-2743490_1280.jpg",
    title: "Eye Cream",
    price: 22.99,
    description:
      "Rejuvenating eye cream for reducing dark circles and puffiness.",
    categoryId: 5,
  },
  {
    id: 63,
    img: "https://cdn.pixabay.com/photo/2020/01/06/19/48/book-4740471_1280.jpg",
    title: "Cookbook",
    price: 29.99,
    description: "Delicious recipes and cooking tips for home chefs.",
    categoryId: 4,
  },
  {
    id: 64,
    img: "https://cdn.pixabay.com/photo/2017/11/28/03/51/bed-2989823_1280.jpg",
    title: "Bed Linen Set",
    price: 59.99,
    description: "Soft and comfortable bed linen set for a good night's sleep.",
    categoryId: 3,
  },
  {
    id: 65,
    img: "https://cdn.pixabay.com/photo/2016/05/05/16/11/bag-1376575_1280.jpg",
    title: "Travel Pillow",
    price: 24.99,
    description:
      "Comfortable travel pillow for support and relaxation on the go.",
    categoryId: 8,
  },
  {
    id: 66,
    img: "https://cdn.pixabay.com/photo/2017/03/16/22/09/board-game-2150327_1280.jpg",
    title: "Chess Set",
    price: 34.99,
    description: "Classic chess set with wooden pieces and a stylish board.",
    categoryId: 7,
  },
  {
    id: 67,
    img: "https://cdn.pixabay.com/photo/2016/11/29/05/12/coffee-1867211_1280.jpg",
    title: "French Press",
    price: 19.99,
    description: "Manual French press for brewing rich and flavorful coffee.",
    categoryId: 3,
  },
  {
    id: 68,
    img: "https://cdn.pixabay.com/photo/2015/03/26/09/43/tent-691329_1280.jpg",
    title: "Outdoor Blanket",
    price: 29.99,
    description: "Cozy outdoor blanket for picnics and camping trips.",
    categoryId: 6,
  },
  {
    id: 69,
    img: "https://cdn.pixabay.com/photo/2017/03/16/22/09/board-game-2150327_1280.jpg",
    title: "Strategy Game",
    price: 27.99,
    description:
      "Engaging strategy game with complex rules and rewarding gameplay.",
    categoryId: 7,
  },
  {
    id: 70,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Fitness Headphones",
    price: 59.99,
    description:
      "Sweat-resistant headphones designed for workouts and running.",
    categoryId: 1,
  },
  {
    id: 71,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Earbuds",
    price: 29.99,
    description: "Compact and convenient earbuds with high-quality sound.",
    categoryId: 1,
  },
  {
    id: 72,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Bluetooth Earbuds",
    price: 79.99,
    description:
      "Wireless Bluetooth earbuds with a sleek design and great sound quality.",
    categoryId: 1,
  },
  {
    id: 73,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Over-Ear Headphones",
    price: 89.99,
    description:
      "Comfortable over-ear headphones with noise-cancelling features.",
    categoryId: 1,
  },
  {
    id: 74,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Sports Headphones",
    price: 69.99,
    description:
      "Durable sports headphones with secure fit and water resistance.",
    categoryId: 1,
  },
  {
    id: 75,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Wireless Earbuds",
    price: 99.99,
    description:
      "High-quality wireless earbuds with touch controls and long battery life.",
    categoryId: 1,
  },
  {
    id: 76,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Noise-Cancelling Earbuds",
    price: 119.99,
    description:
      "Advanced noise-cancelling earbuds for a superior audio experience.",
    categoryId: 1,
  },
  {
    id: 77,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "High-Fidelity Headphones",
    price: 149.99,
    description:
      "Premium high-fidelity headphones with exceptional sound quality.",
    categoryId: 1,
  },
  {
    id: 78,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Noise-Cancelling Headset",
    price: 129.99,
    description:
      "Headset with noise-cancelling technology and built-in microphone.",
    categoryId: 1,
  },
  {
    id: 79,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Wireless Gaming Headset",
    price: 159.99,
    description:
      "Wireless gaming headset with surround sound and a noise-cancelling microphone.",
    categoryId: 1,
  },
  {
    id: 80,
    img: "https://cdn.pixabay.com/photo/2017/08/06/07/59/headphones-2597427_1280.jpg",
    title: "Studio Headphones",
    price: 199.99,
    description:
      "Professional studio headphones with accurate sound reproduction.",
    categoryId: 1,
  },
];

export default productList;
