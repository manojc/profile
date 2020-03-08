const { createServer } = require("http");
const { createReadStream } = require("fs");
const { join } = require("path");
const handler = (type, error) => console.error(type, error.stack || error);
const server = createServer((request, response) => {
    console.log(`incoming request - ${require.url}`);
    createReadStream(join(__dirname, "index.html")).pipe(response);
});
server.listen(8080, () => { console.log(`app started on port - 8080`); });
process.on("unhandledRejection", (reason, promise) => handler("unhandledRejection", reason))
    .on("uncaughtException", (error) => handler("uncaughtException", error));