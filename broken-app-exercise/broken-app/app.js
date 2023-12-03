// const express = require('express');
// let axios = require('axios');
// var app = express();

// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });

// app.listen(3000);



const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());



app.get('/:usernames', async (req, res, next) => {
  try {
    const usernames = req.params.usernames.split(',');

    const results = await Promise.all(
      usernames.map(async (username) => {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log( response.data )
        return response.data;
      })
    );
    const out = results.map((r) => ({ name: r.name, bio: r.bio }));
    res.json(out);
  } catch (err) {
    next(err);
  }
});



app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});








// Practice Express Syntax
// // Import or Require Express from node_modules directory 
// const express = require( 'express' );

// // Execute Express as a function and store the return value in app
// const app = express();

// // Create a basic Route Route 
// app.get( '/', function( req, res ){
//   return res.send( 'I am the root route ~ Yay Me' );
// });

// // Want to name your callback function? Don't use an async function just use a regular one
// // Of course you could also create a stand alone function and pass the function into the route  
// app.post( '/airplane', function airplane( req, res ){
//   console.log( 'You are sending a POST request!!!' );
//   res.send( 'I am posting an Airplane!!!' ); 
// });

// // Start a Server 
// app.listen( 3000, function(){
//   console.log( 'Server starting on port 3000' );
// });









