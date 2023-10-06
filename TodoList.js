import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData([...listData, activity]);
    setActivity("");
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((ele, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }
  function removeAllActivity() {
    setlistData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        ></input>
        <button onClick={addActivity}>Add</button>
        {/* <p className="List-Heading">Here is your list item</p> */}
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position ">
                    <button onClick={() => removeActivity(i)}>
                      remove (-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        <button onClick={removeAllActivity}>remove all</button>
      </div>
    </>
  );
}

export default TodoList;
