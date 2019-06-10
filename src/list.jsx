import React from 'react';

// ファイル名についている.jsxは、JavaScript内でhtmlが記述できる中々優秀な奴だよ。気になったら調べてみよう。
//(JS内でHTMLが記述できるからと言ってHTMLだけで構成されているわけではなくJSも普通に使われている？例としてthis.)
class ToDoList extends React.Component{//（classは名前の定義付けをするときに使う関数？）
   // 「reactコンポーネント」の機能を継承した、TodoListという名前の「class」を宣言しているよ
  constructor(props){ // このように記述することで、index.jsで記述したlistを「props」という形で受け取ることができるよ
    super(props);
    this.state = { // この「コンポーネント」で使用する「state」の初期値を宣言しているよ(this.~はHTMLというよりJS?)
      toDoList: props.toDoList,
      textTitle: '',
      textContent: '',
      textPri: ''
    };
    this.addToDo = this.addToDo.bind(this); // ここの2行はとりあえず気にしなくてok。気になるよーって人は「react es6 bind」で調べてみよう！
    this.deleteToDo = this.deleteToDo.bind(this);
   // this.back = this.backToDo.bind(this);
  }


  addToDo(){ // 追加ボタンが押されたときの処理を書いている「関数」だよ
    let list = this.state.toDoList.slice(); // この行の記述がわからなかったら、「代入」で調べてみよう！(数列などをいじるときは.sliceを付けて一度コピーをしたほうが良い）
    list.push({ title: this.state.textTitle, content: this.state.textContent, pri: this.state.textPri,}); // 「push」は「配列」を操作するためのものだよ。調べてみよう！
    list.sort((a, b) => {return (a.pri-b.pri)})
    this.setState({
      toDoList: list, 
      textTitle: '',
      textContent: '',
      pri:''
    }); // 「setState」は「react」さんに備わった特殊能力だよ。調べてみよう！(setState内でしか変更ができないものがある)
  //  
  }

  deleteToDo(i){ // 削除ボタンが押されたときの処理を書いている「関数」だよ
    let list = this.state.toDoList.slice();
    list.splice(i,1);//（iがあらわしているのが消したいリストの指定で1が表しているのは個数？1を5に変えたら削除ボタンを押したしたリストから下のリストが合計5個消えた）
     // 「splice」は「配列」を操作するためのものだよ。調べてみよう！
     // (.spliceはjs、古い要素を削除(破壊的な削除)しながら新しい要素を追加することで配列の内容を編集する),splice(配列の番号,個数,(新しく追加するもの))
    this.setState({toDoList: list});
  }

  render(){
    
    const domList = this.state.toDoList.map((m, i) =>{ // 「map」は「配列」を操作するためのものだよ。調べてみよう！(ここの記述が一番難しいかも...)                                                                                               
      return <li key={i}> {/*<li>は「html」さんの特殊能力だよ。何をするものかわからなかったら調べてみよう */ }
         <big><b>タイトル</b></big>：{m.title}<br/> {/*<br>も「html」さんの特殊能力だよ。 */}
         <big><b>内容</b></big>：{m.content}<br/>
         <big><b>優先度</b></big>：<big>{m.pri}</big><br/>
        <button onClick={() => this.deleteToDo(i)}>削除{i}</button> {/*<button>も「html」さんの特殊能力だよ。onClickという記述で、このボタンが押されたときの処理を追加できるよ*/}
      </li>;
  })

    
    return(
    <div> {/*</div><div>も「html」さんの特殊能力なんじゃ (divは単体では意味を持たず、<div>と</div>で挟まれたものを一つのブロックとしてまとめる役割をもつタグのこと？)*/}
        <div> 
            

          <big><b>タイトル</b></big>：<input type="text" value={this.state.textTitle} 
            onChange={e => this.setState({textTitle: e.target.value})}/> {/*<input>も「html」さんの特殊能力だよ。type, value, onChangeは全部<input>さんの特殊能力だから、わからなかったら調べてみよう */}

          <big><b>/内容</b></big>：<input type="text" value={this.state.textContent}
            onChange={e => this.setState({textContent: e.target.value})}/>
           
           <big><b>/優先度</b></big>：<big>1</big><input type = "radio" name = "p" value = '1' 
            onChange={e => this.setState({textPri: e.target.value})}/> 
                  <big>2</big><input type = "radio" name = "p" value = '2'
            onChange={e => this.setState({textPri: e.target.value})}/>
                  <big>3</big><input type = "radio" name = "p" value = '3'
            onChange={e => this.setState({textPri: e.target.value})}/>
              
        
        </div>
            <button onClick={this.addToDo}>追加</button>
            {/*<button onClick={this.resetToDo}>リセット</button>*/}
           
       <ul>{domList}</ul> {/*ここでさっき宣言したdomListを表示しているよ。あと<ul>も「html」さんの特殊能力なんじゃ */}
      </div>
    );
  }
}

export default ToDoList;