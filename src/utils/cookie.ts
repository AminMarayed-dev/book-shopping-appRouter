

import { TypeUserCookie } from "@/app/(rootLayout)/single-product/hook/type";
import React from "react";

const getCookieData = (name: string) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));

  if (!cookieValue) {
    return null;
  }

  const cookieData = cookieValue.split("=")[1];
  const decodedCookie = decodeURIComponent(cookieData);

  try {
    const parsedData = JSON.parse(decodedCookie);
    return parsedData;
  } catch (error) {
    console.error("Error parsing cookie data:", error);
    return null;
  }
};

export default getCookieData;
