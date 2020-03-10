const { join } = require("path");
const { createReadStream } = require("fs");

module.exports = class Middleware {

    /**
     * Serves the index html on initial load
     * This is the default route, if no route matches, index file will be served
     * @static
     * @param {*} request
     * @param {*} response
     * @param {*} next
     */
    static async index(request, response, next) {
        try {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            createReadStream(join(__dirname, "../../../public/index.html")).pipe(response);
        } catch (error) {
            console.error(`index action failed with error - ${error.stack || error}`);
            this._notFound(request, response, next);
        }
    }

    /**
     * Serves all static files.
     * The route is matched with path in public folder
     * public folder is the distribution folder for react app
     * @static
     * @param {*} request
     * @param {*} response
     * @param {*} next
     */
    static async staticFiles(request, response, next) {
        try {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            createReadStream(join(__dirname, `../../..${request.url}`)).pipe(response);
        } catch (error) {
            console.error(`staticFiles action failed with error - ${error.stack || error}`);
            this._notFound(request, response, next);
        }
    }

    /**
     * Responds with 500 error for exceptions
     * This method is private and is called internally by other routes
     * @static
     * @param {*} request
     * @param {*} response
     */
    static async _notFound(request, response) {
        response.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        response.end("enhandled exception - 500");
    }

}