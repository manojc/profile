const { createServer } = require("http");
const { createReadStream } = require("fs");
const { join } = require("path");
const handler = (type, error) => console.error(type, error.stack || error);
const server = createServer((request, response) => {
    console.log(`Incoming request - ${request.url}`);
    createReadStream(join(__dirname, "index.html")).pipe(response);
});
server.listen(parseInt(process.env.PORT), () => { console.log(`app started on port - ${process.env.PORT}`); });
process.on("unhandledRejection", (reason, promise) => handler("unhandledRejection", reason))
    .on("uncaughtException", (error) => handler("uncaughtException", error));