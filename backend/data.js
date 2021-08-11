import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Tharushi",
      email: "tharushi@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Hasindu",
      email: "hasindu@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: "Samsung Refrigerator",
      category: "Electronic",
      image: "/images/p1.jpg",
      price: 80000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "2",
      name: "Samsung Smart TV",
      category: "Electronic",
      image: "/images/p2.jpg",
      price: 280000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "3",
      name: "Panasonic Iron",
      category: "Electronic",
      image: "/images/p3.jpeg",
      price: 8000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "4",
      name: "Sony Home Theatre System",
      category: "Electronic",
      image: "/images/p4.jpg",
      price: 49000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "5",
      name: "MacBook Pro M1 Chip",
      category: "Electronic",
      image: "/images/p5.jpg",
      price: 385000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "6",
      name: "Panasonic Radio",
      category: "Electronic",
      image: "/images/p6.jpg",
      price: 7500,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "7",
      name: "IPhone 12 pro max",
      category: "Electronic",
      image: "/images/p7.jpg",
      price: 315000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "8",
      name: "Samsung A72",
      category: "Electronic",
      image: "/images/p8.jpg",
      price: 80000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "9",
      name: "KDK Table fan",
      category: "Electronic",
      image: "/images/p9.jpg",
      price: 8000,
      countInStock: 10,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
    {
      _id: "10",
      name: "KDK Ceiling Fan",
      category: "Electronic",
      image: "/images/p10.jpg",
      price: 13000,
      countInStock: 0,
      brand: "Samsung",
      rating: "4.5",
      numReviews: "10",
      description: "high quality product",
    },
  ],
};

export default data;
