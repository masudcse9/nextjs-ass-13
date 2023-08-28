"use client";
import React from "react";
import { setCookie } from "./setCookie";

const Button = () => {
  return (
    <div>
      <form action={setCookie}>
        <button
          class="w-40 rounded-full border-2 border-rose-600"
          type="submit"
        >
          Hello
        </button>
      </form>
    </div>
  );
};

export default Button;
