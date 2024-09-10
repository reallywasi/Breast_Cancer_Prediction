import { NextResponse } from "next/server";

export default async function apiHandler(req, res) {
  try {
    // Your logic goes here
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });  // This should work fine within a function
  }
}
