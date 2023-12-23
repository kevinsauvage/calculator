import Eraser from "../icons/Eraser";
import Multiply from "../icons/Multiply";
import { keyboardItemType } from "../types";

export const keyboardItems: Array<keyboardItemType> = [
  { name: "C", styles: "bg-opacity-20", action: "CLEAR", payload: "" },
  {
    name: "/",
    styles: "bg-opacity-20",
    action: "ADD_OPERATION",
    payload: "/",
  },
  {
    name: <Multiply />,
    styles: "bg-opacity-20",
    action: "ADD_OPERATION",
    payload: "*",
  },
  {
    name: <Eraser />,
    styles: "bg-opacity-20",
    action: "DELETE",
    payload: "",
  },
  {
    name: "7",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "7",
  },
  {
    name: "8",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "8",
  },
  {
    name: "9",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "9",
  },
  {
    name: "-",
    styles: "bg-opacity-20",
    action: "ADD_OPERATION",
    payload: "-",
  },
  {
    name: "4",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "4",
  },
  {
    name: "5",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "5",
  },
  {
    name: "6",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "6",
  },
  {
    name: "+",
    styles: "row-span-2 bg-opacity-20",
    action: "ADD_OPERATION",
    payload: "+",
  },
  {
    name: "1",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "1",
  },
  {
    name: "2",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "2",
  },
  {
    name: "3",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "3",
  },

  {
    name: "0",
    styles: "bg-opacity-50",
    action: "ADD_NUMBER",
    payload: "0",
  },
  {
    name: ".",
    styles: "bg-opacity-50",
    action: "ADD_DECIMAL",
    payload: ".",
  },
  {
    name: "=",
    styles: "col-span-2 bg-opacity-20",
    action: "CALCULATE",
    payload: "",
  },
];
