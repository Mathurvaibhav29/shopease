import React from 'react';
import { collection, addDoc, getDocs, query, where, getFirestore } from "firebase/firestore";
import { app } from "./Firebase";


const fireStore = getFirestore(app);

export const products = [



  {
    id: 4, // Add a unique ID using nanoid
    Category: "Electronics",
    Product: "Mobile",
    Name: "Apple iPhone",
    Price: "200000",
    Specifications: {
      RAM: "12GB",
      Storage: "512GB"
    }
  },
  {
    id: 5, // Add a unique ID using nanoid
    Category: "Food",
    Product: "Coffee Powder",
    Name: "Jayanthi Filter Coffee Powder",
    Price: "500",
    Specifications: {
      Type:"Filter coffee",
      Weight:"500gms",
    }
  },
  {
    id: 6, // Add a unique ID using nanoid
    Category: "Shoes",
    Product: "Leather Shoes",
    Name: "Woodland Brown Leather shoes for office",
    Price: "2900",
    Specifications: {
      Material:"Leather",
      Size:"5/6/7/8/9",
      Colour:"Brown"
    }
  },
  {
    id: 7, // Add a unique ID using nanoid
    Category: "Shoes",
    Product: "Leather Shoes",
    Name: "Woodland Black Leather shoes for office",
    Price: "2900",
    Specifications: {
      Material:"Leather",
      Size:"5/6/7/8/9",
      Colour:"Black"
    }
  },
  {
    id: 8, // Add a unique ID using nanoid
    Category: "Shoes",
    Product: "Hiking Shoes",
    Name: "Woodland all terrain shoes",
    Price: "4900",
    Specifications: {
     
      Size:"5/6/7/8/9",
      Colour:"Brown"
    }
  },

  
];

// Function to check if a product already exists
const productExists = async (productId) => {
  const q = query(collection(fireStore, "products"), where("id", "==", productId));
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