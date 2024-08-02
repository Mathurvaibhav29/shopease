import React, { useContext } from 'react'
import Navbar from "./Navbar"
import CartContext from '../context/CartContext'
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Import Box for styling

function Cart() {
const {cart,removeFromCart,resetCart}=useContext(CartContext)
console.log(cart.length)
  return (
    <div>
        <Navbar/>
      <div className='p-2'>
      
      <ul>
        <Box display="grid" flexWrap="wrap" justifyContent="space-around"> 
        {cart.length === 0 ? (
          <li>No items in cart</li>
        ) : (
        
          cart.map((item) => (
            <li key={item.id}>
                   <Card sx={{ maxWidth: 345, margin: 2, marginBottom: 4 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.Image}
                  title={item.Name}
                />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.Name}
                  </Typography>
              
                  
                </CardContent>
                {item.Name} - ₹{item.Price} ({item.quantity})
                <br />
                <Button variant='contained' onClick={() => removeFromCart(item.id)}>Remove</Button>
                </Card>
              
         
            </li>
          ))
        
        )}
       
        </Box>
      </ul>
      
    </div>
        
    {cart.length >= 0 && <button onClick={resetCart}>RESET</button>}
        
      
    </div>
  )
}

export default Cart
