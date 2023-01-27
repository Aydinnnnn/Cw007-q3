"use strict";
const obj = {
  name: "ali",
  family: "rahmani",
};
const turnStr = function (obj) {
  let arr = [];
  for (let key in obj) {
    let str = "";
    str += key;
    str += "@@";
    str += obj[key];
    arr.push(str);
  }
  console.log(arr);
  return arr.join("&&");
};
// console.log(typeof turnStr(obj));

const turnObj = function (string) {
  let result = {};
  let arr = string.split("&&");
  for (let item of arr) {
    let arrTem = item.split("@@");
    // console.log(arrTem);
    result[arrTem[0]] = arrTem[1];
  }
  return result;
};
// console.log(typeof turnObj(turnStr(obj)));
const mainFunc = function (check) {
  if (typeof check === "string") {
    return turnObj(check);
  } else if (typeof check === "object") {
    return turnStr(check);
  }
};
console.log(mainFunc(mainFunc(obj)));
