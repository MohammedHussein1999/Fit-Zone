// pages/api/auth/register.js
import axios from "axios";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  console.log(req);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, password } = req.body;

  // Basic validationnpm i --save-dev @types/cookie
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Check if user already exists
    const existingUsers = await axios.get(
      `http://localhost:3001/users?email=${email}`
    );
    if (existingUsers.data.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await axios.post("http://localhost:3001/users", {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // Respond with the created user (excluding password)
    const { password: _, ...userWithoutPassword } = user.data;
    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
