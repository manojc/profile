const { join } = require("path");
const { createReadStream } = require("fs");

module.exports = class Middleware {

    static async index(request, response) {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        console.log("dispatching response");
        createReadStream(join(__dirname, "../index.html")).pipe(response);
        console.log("dispatched response");
    }

    static async notFound(request, response) {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        console.log("dispatching response");
        response.end("requested page not found -404");
        console.log("dispatched response");
    }

}