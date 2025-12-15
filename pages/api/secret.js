import crypto from "crypto";


const SECRET_KEY = "hardcodedkey1234"; // 16 bytes → AES-128

const PLAINTEXT = "FLAG{ecb_m0de_l3aks_patt3rns}";

export default function handler(req, res) {
  // AES-128-ECB → no IV
  const cipher = crypto.createCipheriv(
    "aes-128-ecb",
    Buffer.from(SECRET_KEY),
    null
  );

  let encrypted = cipher.update(PLAINTEXT, "utf8", "hex");
  encrypted += cipher.final("hex");

  res.status(200).json({
    ciphertext: encrypted,
    encryption: "AES-128-ECB",
    SECRET_KEY: "[REDACTED]"
  });
}
