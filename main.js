'use strict';

var textArea = null;
var textLength = null;
var NonNewLine = null;
var NonAllSpace = null;
 
function countLength() {
  //テキストボックスの文字を取得
  let textValue = textArea.value;

  //チェックボックスの状態を取得
  let WithOutNL = NonNewLine.checked;
  let WithOutAS = NonAllSpace.checked;

  //チェックがあったら正規表現で改行を取り除く
  if(WithOutNL){
    textValue = textValue.replace(/\n/g, "");
  }
  if(WithOutAS){
    textValue = textValue.replace(/[\x20\u3000]/g, "");　//半角全角スペースを文字コード（16進数）で指定
  }

  //文字数を取得して表示する
  let n = textValue.length;
  textLength.innerHTML = n + " 文字";
}

window.onload = function() {
  textArea = document.getElementById("textArea");
  textLength = document.getElementById("textLength");
  NonNewLine = document.getElementById("NonNewLine");
  NonAllSpace = document.getElementById("NonAllSpace");

  textArea.addEventListener("keyup", countLength, false);

  NonNewLine.addEventListener("click", countLength, false);
  NonAllSpace.addEventListener("click", countLength, false);

  countLength();
}