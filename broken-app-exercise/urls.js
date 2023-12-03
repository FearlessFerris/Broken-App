// Part 2.) 
// Write a script url.js, that does the following:
/*
 - It's called on the command line like node urls.js FILENAME, and it reads the contents of FILENAME( each line of that file will be a URL )
 - For each URL, it will get that page ( a GET request to the URL ) and save the HTML in a new file 
 - For each URL, the output filename should be the hostname of the URL. For example, for the input URL http://yahoo.com/blah/blah, your 
   script should write the contents to a plain text file called yahoo.com
*/

const fs = require( 'fs' );
const axios = require( 'axios' ); 
const readline = require( 'readline' );
// const file = 'urls.txt';
const argv = process.argv;


const content = 'I am some new content being written in a file'


// async function processUrl(){
//     const fileStream = fs.createReadStream( file );
//     const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//     });

//     for await( const line of rl ){
//         console.log( line );
//         const res = await getUrlData( line );
//         console.log( res.data );
//     }
// }

// processUrl()


// http://postgresql.com
// http://foozlemcblargh.com
// https://nodejs.org/api/console.html


// async function getUrlData( url ){
//     try{
//         const res = await axios.get( url );
//         console.log( `This is the root response data: ${ res.data }` );
//         console.log( res.hostname );
//         return res
//     }
//     catch( error ){
//         console.log( error );
//     }
// }


function writeUrlFile(){
    fs.writeFile( `newFile.txt`, content, 'utf-8', function( error ){
        if( error ){
            console.log( error );
            process.exit ( 1 );
        }
        console.log( 'Writing is complete' );
    } )
    console.log( 'Writing new file...' )
}


writeUrlFile()




