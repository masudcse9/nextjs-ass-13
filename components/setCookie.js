"use server";
import { cookies } from "next/headers";

export async function setCookie() {
  cookies().set("theme", "blue");
  cookies().set("language", "Bangla");
  cookies().set("language", "Next");
}