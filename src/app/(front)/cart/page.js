"use client";
import set from "@/api/set";
export default function Cart() {
  console.log(set.postdata + `?a=maxcoderGetCompanies`);
  return <div>Cart 2 {set.postdata + `?a=maxcoderGetCompanies`}</div>;
}
