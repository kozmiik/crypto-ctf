import crypto from "crypto";

const USER = {
  username: "alice",
  passwordHash: crypto
    .createHash("md5")
    .update("password")
    .digest("hex"),
  flag: "FLAG{md5_is_n0t_cRypt0}"
};

export default function handler(req, res) {
  const { user, password } = req.query;

  if (!user || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  const attemptedHash = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  if (user === USER.username && attemptedHash === USER.passwordHash) {
    return res.json({ success: true, flag: USER.flag });
  }

  return res.status(401).json({ error: "Invalid credentials" });
}
