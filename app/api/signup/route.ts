import ConnectDB from "@/connect/connect";
import User from "@/model/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  await ConnectDB();
  const { firstName, lastName, email, password } = await req.json();

  console.log(firstName, lastName, email, password);

  const existUser = await User.findOne({ email });
  if (existUser) {
    return NextResponse.json({
      success: false,
      message: "user already exist",
    });
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  console.log(user);
  return NextResponse.json({
    success: true,
    message: "Registration successful",
  });
}
