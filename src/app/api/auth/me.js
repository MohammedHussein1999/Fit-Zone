// pages/api/auth/me.js
import jwt from "jsonwebtoken";
import axios from "axios";
import { parse } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { token } = parse(req.headers.cookie || "");

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const users = await axios.get(
      `http://localhost:3001/users?id=${decoded.userId}`
    );
    const user = users.data[0];

    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    // Respond with user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error("Me API Error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
