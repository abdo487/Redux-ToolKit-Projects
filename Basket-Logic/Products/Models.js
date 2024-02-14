import mongoose from "mongoose";

const { Models, model, Schema } = mongoose;

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Product = model("Product", schema) || Models.Product;

export default Product;