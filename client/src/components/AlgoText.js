import React from "react";
import { useSelector } from "react-redux";
import "../styling/Sidebar.css";

const AlgoText = () => {
  const myState = useSelector((state) => state.updateProps);
  let algo = myState.algorithm;
  let best;
  let worst;
  let spaceComplexity;

  function BubbleCode() {
    return (
      <div className="sidebar__code">
        <pre className="pre">
          <code className="code">
            {`
function bubbleSort(arr) {

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j] 
        arr[j] = arr[j + 1] 
        arr[j + 1] = temp
      }
    }
  }
  return arr;
  }`}
          </code>
        </pre>
      </div>
    );
  }

  function MergeCode() {
    return (
      <div className="sidebar__code">
        <pre className="pre">
          <code className="code">
            {`
function mergeSort(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right];
}`}
          </code>
        </pre>
      </div>
    );
  }

  function InsertionCode() {
    return (
      <div className="sidebar__code">
        <pre className="pre">
          <code className="code">
            {`
function insertionSort(arr) {
  let n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i-1; 
      while ((j > -1) && (current < arr[j])) {
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = current;
    }
  return arr;
}`}
          </code>
        </pre>
      </div>
    );
  }

  function SelectionCode() {
    return (
      <div className="sidebar__code">
        <pre className="pre">
          <code className="code">
            {`
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}`}
          </code>
        </pre>
      </div>
    );
  }

  function QuickCode() {
    return (
      <div className="sidebar__code">
        <pre className="pre">
          <code className="code">
            {`
function partition(arr, start, end) {
    const pV = arr[end];
    let pI = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pV) {
            [arr[i], arr[pI]] = [arr[pI], arr[i]];
            pI++;
        }
    }
    [arr[pI], arr[end]] = [arr[end], arr[pI]];
    return pI;
}

function quickSortRecursive(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
    return arr;
}
`}
          </code>
        </pre>
      </div>
    );
  }

  switch (algo) {
    case "bubble":
      best = "Ω(n)";
      worst = "O(n^2)";
      spaceComplexity = "O(1)";
      break;
    case "merge":
      best = "Ω(n log(n))";
      worst = "O(n log(n))";
      spaceComplexity = "O(n)";
      break;
    case "insertion":
      best = "Ω(n)";
      worst = "O(n^2)";
      spaceComplexity = "O(1)";
      break;
    case "selection":
      best = "Ω(n^2)";
      worst = "O(n^2)";
      spaceComplexity = "O(1)";
      break;
    case "quick":
      best = "Ω(n log(n))";
      worst = "O(n log(n))";
      spaceComplexity = "O(log(n))";
      break;
  }

  return (
    <div>
      <div>
        <div className="sidebar__option">
          <label>Time Complexity:</label>
          <div>
            <p>Best:</p>
            <p>{best}</p>
          </div>
          <div>
            <p>Worst:</p>
            <p>{worst}</p>
          </div>
        </div>
        <div className="sidebar__option">
          <label>Space Complexity:</label>
          <p>{spaceComplexity}</p>
        </div>
        <div>
          {algo == "bubble" ? (
            <BubbleCode />
          ) : algo == "merge" ? (
            <MergeCode />
          ) : algo == "insertion" ? (
            <InsertionCode />
          ) : algo == "selection" ? (
            <SelectionCode />
          ) : algo == "quick" ? (
            <QuickCode />
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgoText;
