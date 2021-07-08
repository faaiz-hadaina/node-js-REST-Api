const express = require("express")
const router = express.Router()

//Getting all
router.get("/", (req, res) => {
    res.send('Hello world')
})
//Getting one
router.get("/:id", (req, res) => {
//res.send('Hello world')
})
//Creating one 
router.post("/", (req, res) => {

})
//Updating one
router.patch("/", (req, res) => {

})
//Deleting one
router.get("/", (req, res) => {

})
module.exports = router