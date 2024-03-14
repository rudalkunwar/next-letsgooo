// Import the express module
const express = require('express');

// Create an Express application instance
const app = express();
app.use(cors());


app.post('/add',(req,res)=>{
    res.json({
        success: true,
        data: 'hello'
      });
})


// Define the port
const PORT = process.env.PORT || 4000; // Use port 4000 instead of 3000

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});