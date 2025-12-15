// pages/api/user.js
import crypto from "crypto";

const users = [
  {
    id: 1,
    username: "alice",
    passwordHash: crypto.createHash("md5").update("password").digest("hex"),
    flag: "FLAG{md5_is_n0t_cRypt0}"
  }
];

export default function handler(req, res) {
  const { id } = req.query;
  const user = users.find(u => u.id == id);
  if (!user) return res.status(404).json({ error: "User not found" });

  // Crypto failure: leaking hash
  res.json({
    id: user.id,
    username: user.username,
    passwordHash: user.passwordHash
  });
}