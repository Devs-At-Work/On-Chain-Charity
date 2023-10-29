import * as dotenv from 'dotenv';
dotenv.config();

import app from './server.js';

const PORT = process.env.PORT || 3001;

// console.log(config);
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)
// console.log(process.env.port)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
