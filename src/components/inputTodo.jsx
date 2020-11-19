import React, { useState } from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        type="text"
        value={todoText}
        onChange={onChange} //文字を入力したとき「todoText」ステーツを更新！
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
