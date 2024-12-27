// All the post routes
const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth/verifyToken.js')
const checkObjectID = require('../middleware/main/checkObjectID')
// Import controllers

const getAllPosts = require('../controllers/post/getAllPost.js')
const getPostById = require('../controllers/post/getPostById.js')
const updatePost = require('../controllers/post/updatePost.js')
const deletePost = require('../controllers/post/deletePost.js')
const likePost = require('../controllers/post/likeOrUnlikePost.js')
const addComment = require('../controllers/post/addComment.js')
const savePost = require('../controllers/post/savePost.js')
const createPost = require('../controllers/post/createPost.js')
const getAllComment = require('../controllers/post/getAllComment.js')

// Routes for posts
router.post('/create', verifyToken, createPost) // Create a new post
router.get('/all', getAllPosts) // Get all posts
router.get('/:id', checkObjectID, getPostById) // Get a specific post
router.patch('/update/:id', verifyToken, checkObjectID, updatePost) // Update a post
router.delete('/delete/:id', verifyToken, checkObjectID, deletePost) // Delete a post
router.post('/like/:id', verifyToken, checkObjectID, likePost) // Like or unlike a post
router.post('/save/:id', checkObjectID, savePost) // Save a post
router.get('/comments/:id', checkObjectID, getAllComment) // Get all comments for a post
router.post('/comment/:id', verifyToken, checkObjectID, addComment) // Add a comment to a post

module.exports = router
