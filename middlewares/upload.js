import multer from "multer";
import path from "path";
import { HttpError } from "../helpers/index.js";

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    const { _id } = req.user;
    const filename = `${_id}_${file.originalname}`;
    cb(null, filename);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};
const fileFilter = (req, file, cb) => {
  const extention = file.originalname.split(".").pop();
  console.log(extention);
  if (extention === "exe") {
    cb(HttpError(400, ".exe not allowed extension"));
  }
};

const upload = multer({
  storage,
  limits,
  //   fileFilter,
});

export default upload;
