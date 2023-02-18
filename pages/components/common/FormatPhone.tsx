import React from "react";

export default function FormatPhone({ phoneNo }) {
  const result =
    phoneNo.substring(0, 3) +
    "-" +
    phoneNo.substring(3, 6) +
    "-" +
    phoneNo.substring(6);
  return <>{result}</>;
}
