import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "@mui/material";
import "../styling/Sidebar.css";
import AlgoText from "./AlgoText";

const Sidebar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const [max, setMax] = useState(70);

  const handleAlgorithm = (algo) => {
    dispatch({
      type: "UPDATE_ALGORITHM",
      algorithm: algo,
    });
  };

  const handleRange = (_range) => {
    let new_arr = [...myState.values];
    for (let i = 0; i < new_arr.length; i++)
      document.getElementById(i).style.transform = `translateX(${i * 11}px)`;

    dispatch({
      type: "UPDATE_RANGE",
      range: _range,
    });
    dispatch({
      type: "CHANGE_VALUES",
    });
  };

  const handleSpeed = (_speed) => {
    dispatch({
      type: "UPDATE_SPEED",
      speed: _speed,
    });
  };

  const handleWidth = () => {
    if (window.innerWidth > 1300) setMax(140);
    else if (window.innerWidth > 1200) setMax(60);
    else if (window.innerWidth > 1100) setMax(50);
    else if (window.innerWidth > 900) setMax(45);
    else if (window.innerWidth > 800) setMax(40);
    else if (window.innerWidth > 500) setMax(30);
    else setMax(20);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <label htmlFor="algo">Algorithm:</label>
        <select
          name="algo"
          id="algo"
          onChange={(e) => handleAlgorithm(e.target.value, e.target.algoText)}
          disabled={myState.play ? true : false}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>

      <div>
        <AlgoText />
      </div>

      <div className="sidebar__option">
        <label htmlFor="speed">Speed: </label>
        <select
          name="speed"
          defaultValue={100}
          id="speed"
          onChange={(e) => handleSpeed(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value={500}>Slow</option>
          <option value={200}>Medium</option>
          <option value={100}>Fast</option>
          <option value={20}>Super Fast</option>
          <option value={5}>Ultra Fast</option>
        </select>
      </div>

      <div className="sidebar__option">
        <label htmlFor="range">Count: </label>
        <Slider
          style={{ width: "180px" }}
          size="small"
          defaultValue={70}
          id="slider"
          min={10}
          className="slider"
          disabled={myState.play ? true : false}
          max={max}
          onChange={(e) => handleRange(e.target.value)}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

export default Sidebar;
