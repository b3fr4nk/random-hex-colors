import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addColor } from "./features/colorGuesser/colorSlice";
import { clearColors } from "./features/colorGuesser/colorSlice";
import { setMessage } from "./features/colorGuesser/messageSlice";

function random(n) {
  return Math.floor(Math.random() * n);
}

function getRandomHex() {
  const hexChars = "0123456789ABCDEF";
  return hexChars[random(hexChars.length)];
}

function generateHexColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += getRandomHex();
  }
  return color;
}

function ColorBox() {
  const [color, setColor] = useState("#000000");
  const correctColor = useSelector((state) => state.correctColor.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const new_color = generateHexColor();
    setColor(new_color);
    dispatch(addColor(new_color));
    return () => {
      dispatch(clearColors());
    };
  }, []);

  return (
    <button
      style={{ backgroundColor: color, width: 100, height: 100 }}
      onClick={(e) => {
        if (color === correctColor) {
          dispatch(setMessage("Correct!"));
        } else {
          dispatch(setMessage("Incorrect!"));
        }
        // clearColors();
      }}
    />
  );
}

export default ColorBox;
