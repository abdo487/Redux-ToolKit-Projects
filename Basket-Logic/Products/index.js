import { Router } from 'express';
import Product from './Models.js';

const router = new Router();

async function initProducts(req, res) {
    try{
        let products = await Product.find();
        if (products.length === 0){
            products = [
                {
                    name: 'Product 1',
                    description: 'Description 1',
                    image: 'prod1.jpg',
                    price: 100,
                    stock: 10
                },
                {
                    name: 'Product 2',
                    description: 'Description 2',
                    image: 'prod2.jpg',
                    price: 200,
                    stock: 20
                },
                {
                    name: 'Product 3',
                    description: 'Description 3',
                    image: 'prod3.jpg',
                    price: 300,
                    stock: 30
                }
            ];
            products = await Product.insertMany(products);
        }
        res.status(200).send({ type: 'success', message: 'Products found', data: products });
    } catch (error) {
        res.status(500).send({ type: 'error', message: error.message });
    }
}

router.get('/init', initProducts);

router.get('/', async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).send({ type: 'success', message: 'Products found', data: products });
    } catch (error) {
        res.status(500).send({ type: 'error', message: error.message });
    }
});

export default router;