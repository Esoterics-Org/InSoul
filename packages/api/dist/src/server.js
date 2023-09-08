"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const passport_1 = __importDefault(require("passport"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
dotenv_1.default.config();
const _utils_1 = require("./utils");
const Routes = __importStar(require("./routes"));
const Constants = __importStar(require("./global/constants"));
(0, _utils_1.initializePassport)();
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)({
    origin: "*",
    credentials: true,
}))
    .use((0, helmet_1.default)())
    .use((0, morgan_1.default)(process.env.NODE_ENV === "development" ? "dev" : "short"))
    .use((0, cookie_parser_1.default)())
    .use(express_1.default.urlencoded({ extended: true }))
    .use(express_1.default.json())
    .use((0, cookie_session_1.default)({
    maxAge: Constants.Auth.COOKIE_MAX_AGE,
    keys: [process.env.SECRET],
}))
    .use(passport_1.default.initialize())
    .use(passport_1.default.session());
const swaggerDoc = yamljs_1.default.load(Constants.Docs.DOCS_PATH);
app.use(`${Constants.Server.ROOT}/docs`, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "REST API Template",
}));
app.use(`${Constants.Server.ROOT}/auth`, Routes.authRouter);
app.listen(Constants.Server.PORT, () => {
    console.log(`Server Listening to Port ${Constants.Server.PORT}`);
});
//# sourceMappingURL=server.js.map