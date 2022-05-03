const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream("./docs/text.txt", { highWaterMark: 8 });
const writeStream = fs.createWriteStream("./docs/new-text.txt", {
  highWaterMark: 8,
});
const compressStream = zlib.createGzip();


const hanleError = () => {
	console.log('Error');
	readStream.destroy();
	writeStream.end('Finish with error...')
}
readStream
	.on('error', hanleError)
	.pipe(compressStream)
	.pipe(writeStream)
	.on('error', hanleError);
