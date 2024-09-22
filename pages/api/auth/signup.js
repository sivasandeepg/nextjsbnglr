import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  await dbConnect();

  const { email, password, role } = req.body;

  if (!email || !password || !role) return res.status(400).json({ message: 'Missing fields' });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword, role });

  await newUser.save();
  res.status(201).json({ message: 'User created successfully' });
}
 