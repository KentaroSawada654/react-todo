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

  //追加ボタンを押したときの処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; //スプレッド構文で配列の結合
    setIncompleteTodos(newTodos);
    SetTodoText("");
  };

  //削除ボタンを押したとき
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタンを押したとき
  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodos];
    newIncompleteTodo.splice(index, 1);
    setIncompleteTodos(newIncompleteTodo);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  //戻るボタンを押したとき
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          type="text"
          value={todoText}
          onChange={onChangeTodoText} //文字を入力したとき「todoText」ステーツを更新！
        />

        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            //配列incompleteTodosの数だけリストを作る。
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
