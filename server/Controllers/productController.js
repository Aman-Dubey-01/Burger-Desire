const { hashPassword, comparePassword } = require("../helper/auth");
const Product = require("../models/products");


const getProduct = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        const products = await Product.find({});
        return res.json({ message: 'Products fetched successfully', products }); 
    } catch (error) {
        console.log(error); 
    }
}


const createProduct = async (req, res) => {
    try {
        const { Category, Name, Price, img } = req.body;
        if (!Name) {
            return res.json({ error: 'Name is required' })
        }
        if (!Price) {
            return res.json({ error: 'Price is required' })
        }
        if (!img) {
            return res.json({ error: 'img is required' })
        }
        if (!Category) {
            return res.json({ error: 'Category is required' })
        }
        const product = await Product.create({ Category, Name, Price, img  });
        return res.json({ message: 'Product created successfully', product });
    } catch (error) {
        console.log(error);
    }
}

// Fetch product by ID
const getProductById = async (req, res) => {
    try {
      const productId = req.params.productId;
  
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      return res.status(200).json({ message: 'Product fetched successfully', product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error fetching the product' });
    }
  };
  
  
module.exports = { getProduct, createProduct,getProductById };