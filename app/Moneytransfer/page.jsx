"use client";

import React from "react";
import SelectComponent from "../../components/SelectComponent";
import NumberComponent from "../../components/NumberComponent";
import Button from "../../components/Button";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
function Moneytransfer() {
  return (
    <div  className="bg-white flex flex-col justify-start items-center  h-screen">
      
      <SelectComponent aa={"حساب مبدا"} />
      <SelectComponent aa={"حساب مقصد"}  />
      <NumberComponent />
      <Button/>
    </div>
  );
}

export default Moneytransfer;
