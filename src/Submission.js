import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/colorGuesser/correctColor";
import { useEffect } from "react";

function random(n) {
  return Math.floor(Math.random() * n);
}

function getRandomSelection(array) {
  return array[random(array.length)];
}

function Submission() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors.value);
  const message = useSelector((state) => state.message.value);
  const correctColor = useSelector((state) => state.correctColor.value);

  useEffect(() => {
    const new_correct = getRandomSelection(colors);
    dispatch(changeColor(new_correct));
  }, [colors]);

  return (
    <div>
      <p>{correctColor}</p>
      <p>{message}</p>
    </div>
  );
}

export default Submission;
