// app.js
const express = require('express');
const app = express();
const port = 3000;

//Route get
// app.get('/',(req, res) => {
//     res.send('Hello, Get request!');
// });

//Middleware untuk parsing body request
app.use(express.json());

//Route POST
app.post('/submit',(req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
});
// servinh atatic file
app.use(express.static('public'));

app.listen(port, () =>{
    console.log('Server running at http://localhost3000/');
})
 
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

// app.get('/text',(req, res) => {
//     res.send('ini adalah response text.');
// })

// app.get('/html', (req, res) => {
//     res.send('<h1>ini adalah response html</h1>');
// });

// app.get(/json, (req, res) => {
//    res.json({message: 'ini adalah response JSON'});
// )};
