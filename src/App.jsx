import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, SetTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);

  //入力時の処理
  const onChangeTodoText = (event) => {
    SetTodoText(event.target.value); //<-これはreturnしなくてもよい。
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          type="text"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={console.log("ss")}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
