import mongoose from "mongoose";

const ConnectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB as string);
  console.log(conn.connection.host);
};

export default ConnectDB