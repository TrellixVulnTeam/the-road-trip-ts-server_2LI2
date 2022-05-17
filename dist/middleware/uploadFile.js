"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
    fileFilter: (_req, file, cb) => {
        let ext = path_1.default.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            const error = new Error('File type is not supported');
            cb(error, false);
            return;
        }
        cb(null, true);
    }
});
exports.default = storage;
//# sourceMappingURL=uploadFile.js.map