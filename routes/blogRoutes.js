const express = require('express');
const {
  blogIndex,
  blogDetails,
  blogCreateGet,
  blogCreatePost,
  blogDelete,
} = require('../controllers/blogController');

const router = express.Router();

// All Blogs
router.get('/', blogIndex);
router.post('/', blogCreatePost);
router.get('/create', blogCreateGet);
router.get('/:id', blogDetails);
router.delete('/:id', blogDelete);

module.exports = router;
