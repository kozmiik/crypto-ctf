// pages/api/secret.js
import crypto from "crypto";

const KEY = "hardcodedkey1234"; // crypto failure

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    "aes-128-ecb",
    Buffer.from(KEY),
    null
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export default function handler(req, res) {
  const secret = encrypt("FLAG{encRypti0n_w1thout_iv_i5_brok3n}");
  res.json({ ciphertext: secret });
}
