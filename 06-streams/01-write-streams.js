const fs = require('fs');
const path = require('path')

const fileStream = fs.createWriteStream(path.join(__dirname, 'bigfile.txt'));

for( i =0; i <100000; i++){
    fileStream.write((i+1)+'hello world writing through buffer');
}

//fileStream.close();
