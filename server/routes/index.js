const Router = require("router");
const Middleware = require("./middleware");

const router = Router();

// router.use([logger.initContext]);

router.get("/favicon.ico", (rq, rs, n) => rs.end());
router.get("/public/**", Middleware.staticFiles);
router.route("**").all(Middleware.index);

module.exports = router;