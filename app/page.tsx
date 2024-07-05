"use client";

import React, { useState, useEffect } from "react";

const Aikotobar = () => {
  const firstWords = [
    "夜の",
    "ただただ",
    "終わりを告げる",
    "秋を彩る",
    "声が大きい",
    "先のとがった",
    "不老不死の",
    "黒き疾風の",
    "こちらを見る",
    "大昔の",
    "バズった",
    "チリとなった",
    "空前絶後の",
    "難しく考えすぎる",
    "なぜか",
    "持ち手のない",
    "悟りを開く",
    "暗闇に包まれた",
    "絶体絶命の",
    "嬉しそうな",
    "投げられた",
    "ぶん投げられた",
    "最初で最後の",
    "最小の",
    "常識外れの",
    "世界に一つだけの",
    "奥が深い",
    "変に",
    "助けを求める",
    "虹色の",
    "夢も希望もない",
    "天国のような",
    "素晴らしい",
    "初心者向けの",
    "何とか生き延びた",
    "善い行いをした",
    "親孝行をした",
    "親孝行をしなかった",
    "先日逮捕された",
    "思い出し笑いをした",
    "注目を集めた",
    "世間から叩かれた",
    "アンチコメントだらけの",
    "二度と消えない",
    "時間を無駄にする",
    "金儲けが好きな",
    "世界のための",
    "そこそこ",
    "最近",
    "管理者である",
  ];
  const secondWords = [
    "最強の",
    "惨めな",
    "考える",
    "始まりの",
    "最大の",
    "美しい",
    "白い",
    "とても小さな",
    "灰色の",
    "剝がれた",
    "盗られた",
    "幼い",
    "悪賢い",
    "ゴム製の",
    "最高な",
    "汚れた",
    "縮んだ",
    "曲がった",
    "おかしい",
    "悟りを開く",
    "折れた",
    "ヤバい",
    "勇者の",
    "巨大な",
    "挟まれた",
    "抜け出せない",
    "六千円する",
    "永遠の",
    "数学好きな",
    "百年後の",
    "薄い",
    "緑色の",
    "瑠璃色の",
    "謎の",
    "うるさい",
    "かわいそうな",
    "笑顔の",
    "怒った",
    "悲しみの",
    "おもしろい",
    "面白おかしい",
    "やらかした",
    "有名な",
    "無名な",
    "流行りの",
    "弱い",
    "残酷な",
    "残念な",
    "すごい",
    "偉い",
  ];
  const thirdWords = [
    "不死鳥",
    "紅葉",
    "親友",
    "ウグイス",
    "防寒着",
    "葉脈",
    "万年筆",
    "羊皮紙",
    "石ころ",
    "世界",
    "ポスター",
    "財布",
    "幼稚園児",
    "大人",
    "木",
    "クジャク",
    "退会ボタン",
    "ピンポン玉",
    "宇宙",
    "ロケット",
    "神",
    "カッターナイフ",
    "映画",
    "米粒",
    "話",
    "サル",
    "ゾウ",
    "レモン",
    "ペット",
    "惑星",
    "定規",
    "英雄",
    "木箱",
    "鉄橋",
    "目覚まし時計",
    "学校",
    "病院",
    "カレンダー",
    "鉛筆削り器",
    "スプーン",
    "ハンドル",
    "ゴルフボール",
    "板",
    "浮き輪",
    "ポット",
    "蛍光灯",
    "茶柱",
    "岩",
    "剣",
    "孫の手",
    "生卵",
    "ぬいぐるみ",
    "ギャグ",
    "マウスポインタ",
    "椅子",
    "カーテン",
    "コンサート",
    "アプリ",
    "スマホ",
    "時計",
    "納税者",
    "立方体",
    "直角三角形",
    "レーザービーム",
    "珊瑚礁",
    "つばめ",
    "スズメ",
    "カモメ",
    "広告",
    "冠",
  ];
  const fourthWords = [
    "とその真実",
    "に隠された秘密",
    "の誕生",
    "の滅亡",
    "の結末",
    "の五秒後",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const fifthWords = ["を見てしまった", "", "", "", "", ""];

  const [result, setResult] = useState("");
  const [kinds, setKinds] = useState(0);

  const arrayRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateResult = () => {
    setResult(
      arrayRandom(firstWords) +
        arrayRandom(secondWords) +
        arrayRandom(thirdWords) +
        arrayRandom(fourthWords) +
        arrayRandom(fifthWords)
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    document.getElementById("copy").innerText = "コピーしました！";
    setTimeout(
      () => (document.getElementById("copy").innerText = "コピー"),
      1000
    );
  };

  useEffect(() => {
    setKinds(
      firstWords.length *
        secondWords.length *
        thirdWords.length *
        (fourthWords.length - 8) *
        (fifthWords.length - 4)
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">Aikotobar</h1>
      <p className="text-lg mb-4">合言葉を自動生成してくれるツールです</p>
      <p className="text-lg mb-4">
        Aikotobarでは{" "}
        <span id="kinds" className="font-bold">
          {kinds}
        </span>{" "}
        通りの合言葉を作成できます
      </p>
      <p className="mb-4">
        <button
          id="btn"
          onClick={generateResult}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          作成
        </button>
      </p>
      <div id="result-div" className="mb-4 p-4 bg-white rounded shadow-lg">
        <p id="result" className="text-xl">
          {result ? result : "ここに合言葉が生成されます"}
        </p>
      </div>
      <p>
        <button
          id="copy"
          onClick={copyToClipboard}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          コピー
        </button>
      </p>
    </div>
  );
};

export default Aikotobar;
