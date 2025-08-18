import multer from "multer";

// RAM-da file saxlayıb sonra göndərir
const storage = multer.memoryStorage();

export const upload = multer({ storage });
