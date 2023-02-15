import mongoose from "mongoose";
import { swamp, faker } from "fongus";

const userSchema = new mongoose.Schema({
  name: String,
  city: String,
  age: Number,
});

const User = mongoose.model("users", userSchema);

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    "mongodb+srv://alicia:alicia@cluster0.ok7cjmg.mongodb.net/?retryWrites=true&w=majority"
  );
  //   await User.insertMany([
  //     { name: "Gilbert", age: 5, city: "Stockholm" },
  //     { name: "Adam", age: 19, city: "Stockholm" },
  //     { name: "Emma", age: 12, city: "Kalmar" },
  //     { name: "Fredrik", age: 45, city: "Malmö" },
  //     { name: "Mia", age: 29, city: "Göteborg" },
  //   ]);
  //   await swamp({
  //     count: 5,
  //     fields: {
  //       name: faker.name.firstName,
  //       city: faker.address.city,
  //       age: faker.random.numeric,
  //     },
  //     path: User,
  //   });

  const users = await User.find().sort({ name: "asc" });
  console.log(users);

  //   const users = await User.find({ age: { $gt: 18 } });
  //   console.log(users);

  //   await User.updateOne({ name: "Gilbert" }, { $set: { city: "Malmö" } });
  //   console.log(users);
}

main();
