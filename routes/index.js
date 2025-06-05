const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res,next) {
  try {
  res.render("index", { 
    title: "ローカルライブラリへようこそ" ,
    book_count: 120,
      book_instance_count: 240,
      book_instance_available_count: 45,
      author_count: 60,
      genre_count: 15,
    });
  　} catch (err) {
    return next(err);
  }
});

module.exports = router;
