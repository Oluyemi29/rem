import User, { IUser } from "@/model/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import ConnectDB from "@/connect/connect";

export async function POST(req: Request) {
  await ConnectDB();
  const { email, password } = await req.json();

  const user = (await User.findOne({ email })) as IUser;
  if (!user) {
    return NextResponse.json({
      success: false,
      message: "user not found",
    });
  }
  console.log(user);

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return NextResponse.json({
      success: false,
      message: "incorrect password",
    });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: "7D" },
  );

  const cookie = await cookies();

  cookie.set("estate", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return NextResponse.json({
    success: true,
    message: "Login successful",
  });
}
