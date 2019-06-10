import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ToDoList from './list';

const list = []; // ここでtodoの情報を補完するための「配列」というものを宣言しているよ

ReactDOM.render( // reactの機能を使って()内のものを画面上に表示させているよ
    <ToDoList toDoList={list}/>, // 表示させるものとして、list.jsxで書いた「reactコンポーネント」というものを指定してるよ
    　　　　　　　　　　　　　　　　// 更に、toDoList={list}という部分で、このreactコンポーネントにlistを渡しているよ
    document.getElementById('root')
);
serviceWorker.unregister();
