import React from "react";

interface FullName {
  phoneNo: string;

}

export default function FormatPhone({ phoneNo }:FullName) {
  const result:string =
    phoneNo.substring(0, 3) +
    "-" +
    phoneNo.substring(3, 6) +
    "-" +
    phoneNo.substring(6);
  return <>{result}</>;
}
