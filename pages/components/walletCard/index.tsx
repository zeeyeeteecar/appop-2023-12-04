import React from "react";
import { jsPDF } from "jspdf";

export default function WalletCard() {
  const doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf"); // will save the file in the current working directory

  return <div>const doc = new jsPDF;</div>;
}
