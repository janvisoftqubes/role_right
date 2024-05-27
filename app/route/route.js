const express = require('express');
const router = express();

router.use('/api/user', require('../route/routes/userRoute'));

module.exports = router;