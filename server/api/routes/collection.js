const express = require('express');
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware'
import CollectionController from '../controllers/collectionController'


router.get('/', authMiddleware, async (req, res, next) => {
    const collection = new CollectionController(req, res, next)
    return await collection.GetCollection()
})

router.post('/:id', authMiddleware, async (req, res, next) => {
    try {
        const collection = new CollectionController(req, res, next)
        return await collection.AddToCollection()
    }catch(err) {
        console.log(err)
    }
})


router.delete('/:id', authMiddleware, async (req, res, next) => {
    const collection = new CollectionController(req, res, next)
    return await collection.RemoveFromCollection()
})

export default router;