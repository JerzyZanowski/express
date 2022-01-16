const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('admin', { title: 'Admin' });
});

module.exports = router;


//metoda get - kiedy wpiszemy coś w przeglądakę
// metoda post - kiedy użyjemy formularza na stronie
