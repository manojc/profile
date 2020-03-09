const { createServer } = require("http");
const router = require("./routes");

module.exports = class App {

    static async init() {
        try {
            this.port = process.env.PORT || 8080;
            this.server = createServer((rq, rs) => router(rq, rs, (_rq, _rs) => { }))
                .listen(this.port, () => this._listenHandler());
            return this;
        } catch (error) {
            console.error(error.stack);
            process.exit();
        }
    }

    static _listenHandler() {
        this._catchExceptions();
        console.log(`profile service started on port ${this.port}`);
    }

    static _catchExceptions() {
        process
            .on("unhandledRejection", (reason, promise) => {
                console.error("unhandledRejection", reason.stack || reason);
                this._gracefulShutDown();
            })
            .on("uncaughtException", (error) => {
                console.error("uncaughtException", error.stack || error);
                this._gracefulShutDown();
            });
    }

    static _gracefulShutDown() {
        this.server.close((error) => {
            if (error) throw error;
            console.log("profile service shutdonw complete!");
        });
    }
}