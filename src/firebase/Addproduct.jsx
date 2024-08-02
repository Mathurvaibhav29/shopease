import React from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import { app } from "./Firebase";

const fireStore = getFirestore(app);
export const products = [
  {
    id: 1, // Add a unique ID using nanoid
    Category: "Books",
    Product: "Book",
    Name: "Why Bharat Matters",
    Price: "500",
    Image:
      "https://static.theprint.in/wp-content/uploads/2023/12/ANI-20231222201321.jpg",
    Author: "Dr S Jaishankar",
    Subject: "International Relations",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam sit facilis dolorum! Tempora nemo nobis a consequuntur voluptate, alias doloribus repudiandae perferendis quo quaerat, quia accusamus rem deserunt quam.",
  },
  {
    id: 2,
    Category: "Electronics",
    Product: "Laptop",
    Name: "Apple Macbook Air",
    Price: "90000",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg",
    RAM: "16GB",
    SSD: "512GB",
    Processor: "Apple",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam sit facilis dolorum! Tempora nemo nobis a consequuntur voluptate, alias doloribus repudiandae perferendis quo quaerat, quia accusamus rem deserunt quam.",
  },
  {
    id: 3,
    Category: "Electronics",
    Product: "Laptop",
    Name: "HP Pavallion 123",
    Price: "40000",
    RAM: "8GB",
    SSD: "512GB",
    Processor: "Intel",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQhjEgT0X6563JrnRyxJfhiWXu4QF7aas6g&s",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam sit facilis dolorum! Tempora nemo nobis a consequuntur voluptate, alias doloribus repudiandae perferendis quo quaerat, quia accusamus rem deserunt quam.",
  },
  {
    id: 4, // Add a unique ID using nanoid
    Category: "Electronics",
    Product: "Mobile",
    Name: "Samsung Galaxy",
    Price: "20000",
    RAM: "6GB",
    Storage: "128GB",
     Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam sit facilis dolorum! Tempora nemo nobis a consequuntur voluptate, alias doloribus repudiandae perferendis quo quaerat, quia accusamus rem deserunt quam.",
    Image:"https://www.jiomart.com/images/product/original/493664861/samsung-galaxy-m33-5g-128-gb-6-gb-ram-deep-ocean-blue-mobile-phone-digital-o493664861-p597816488-0-202301241446.jpeg?im=Resize=(420,420)"
  },
];
// Function to check if a product already exists
const productExists = async (productId) => {
  const q = query(
    collection(fireStore, "products"),
    where("id", "==", productId)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

// Function to add products to Firestore
const addProductsToFirestore = async () => {
  try {
    // Loop through each product and add it to Firestore if it doesn't already exist
    for (const product of products) {
      const exists = await productExists(product.id);
      if (!exists) {
        await addDoc(collection(fireStore, "products"), product);
        console.log(`Product "${product.Name}" added successfully!`);
      } else {
        console.log(`Product "${product.Name}" already exists.`);
      }
    }
  } catch (error) {
    console.error("Error adding products: ", error);
  }
};
function Addproduct() {
  return (
    <div>
      <button onClick={addProductsToFirestore}>Add Product</button>
    </div>
  );
}

export default Addproduct;
