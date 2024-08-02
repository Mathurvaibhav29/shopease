// Products.js
import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Import Box for styling
import Stack from "@mui/material/Stack";
import Navbar from "./Navbar";
import CartContext from "../context/CartContext";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      return b.Price - a.Price;
    });
    setProducts(sortedProducts);
  };

  const filterProducts = () => {
    const filteredProducts = products.filter(
      (product) => product.SSD === "512GB"
    );
    setProducts(filteredProducts);
  };
  return (
    <>
      <Navbar />
      <div className="p-2">
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={sortProducts}>
            Sort
          </Button>
          <Button variant="contained" onClick={filterProducts}>
            Filter
          </Button>
        </Stack>

        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <br />
              <Card sx={{ maxWidth: 345, margin: 2, marginBottom: 4 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.Image}
                  title={product.Name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.Description}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    INR {product.Price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </Button>
                  <Button size="small">Know More</Button>
                </CardActions>
              </Card>
            </React.Fragment>
          ))}
        </Box>
      </div>
    </>
  );
};


export default Products;
