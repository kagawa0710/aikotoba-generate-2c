"use client";

import React, { useState, useEffect } from "react";
// Update the import statement for Card, CardContent, CardHeader, CardTitle, Button, InputLabel, MenuItem, FormControl, Select, TextField, Alert, AlertTitle
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";

// Update the import statement for GlobalStyles from '@mui/styled-engine'
import { GlobalStyles } from "@mui/styled-engine";

// 100語の単語リスト（実際のアプリケーションではもっと多様な単語を用意します）
const words = [
  "空",
  "海",
  "山",
  "川",
  "森",
  "雨",
  "雪",
  "風",
  "雲",
  "星",
  "朝",
  "昼",
  "夜",
  "春",
  "夏",
  "秋",
  "冬",
  "光",
  "影",
  "月",
  "花",
  "木",
  "草",
  "葉",
  "実",
  "根",
  "枝",
  "幹",
  "種",
  "芽",
  "鳥",
  "魚",
  "虫",
  "獣",
  "犬",
  "猫",
  "馬",
  "牛",
  "羊",
  "鶏",
  "赤",
  "青",
  "黄",
  "緑",
  "白",
  "黒",
  "紫",
  "橙",
  "茶",
  "灰",
  "家",
  "部屋",
  "窓",
  "扉",
  "床",
  "壁",
  "天井",
  "屋根",
  "庭",
  "道",
  "本",
  "紙",
  "鉛筆",
  "消しゴム",
  "机",
  "椅子",
  "鞄",
  "時計",
  "電話",
  "コンピュータ",
  "歩く",
  "走る",
  "飛ぶ",
  "泳ぐ",
  "見る",
  "聞く",
  "話す",
  "考える",
  "笑う",
  "泣く",
  "食べる",
  "飲む",
  "眠る",
  "起きる",
  "座る",
  "立つ",
  "開ける",
  "閉める",
  "押す",
  "引く",
  "大きい",
  "小さい",
  "高い",
  "低い",
  "長い",
  "短い",
  "広い",
  "狭い",
  "速い",
  "遅い",
];

const particles = ["は", "が", "を", "に", "で", "と", "や", "の"];
const conjunctions = ["そして", "しかし", "それから", "だから", "また"];

// ジャンルリスト
const genres = ["日常", "自然", "仕事", "趣味", "ファンタジー"];

// phrasePasswordを生成する関数
const generatePhrasePassword = () => {
  const shuffled = [...words].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);

  let phrase = "";
  selected.forEach((word, index) => {
    if (index === 0) {
      phrase +=
        word + particles[Math.floor(Math.random() * particles.length)] + " ";
    } else if (index === selected.length - 1) {
      phrase += word + "する";
    } else {
      phrase +=
        word + particles[Math.floor(Math.random() * particles.length)] + " ";
      if (Math.random() < 0.5) {
        // 50%の確率で接続詞を挿入
        phrase +=
          conjunctions[Math.floor(Math.random() * conjunctions.length)] + " ";
      }
    }
  });

  return phrase;
};

const PasswordSharingApp = () => {
  const [phrasePasswords, setPhrasePasswords] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sharedWithPerson, setSharedWithPerson] = useState("");

  useEffect(() => {
    // 仮のデータをロード
    const now = new Date();
    const fiveMonthsAgo = new Date(now.setMonth(now.getMonth() - 5));
    setPhrasePasswords([
      {
        id: 1,
        genre: "日常",
        phrasePassword: generatePhrasePassword(),
        sharedWith: "田中さん",
        lastUpdated: fiveMonthsAgo,
      },
      {
        id: 2,
        genre: "自然",
        phrasePassword: generatePhrasePassword(),
        sharedWith: "佐藤さん",
        lastUpdated: new Date(),
      },
    ]);
  }, []);

  const handleCreatePassword = () => {
    if (selectedGenre === "" || sharedWithPerson === "") return;
    const newPassword = {
      id: phrasePasswords.length + 1,
      genre: selectedGenre,
      phrasePassword: generatePhrasePassword(),
      sharedWith: sharedWithPerson,
      lastUpdated: new Date(),
    };
    setPhrasePasswords([...phrasePasswords, newPassword]);
    setSelectedGenre("");
    setSharedWithPerson("");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4">
        言葉で遊び、絆で守る、合言葉生成アプリ
      </h1>

      <div className="mb-4 flex gap-2">
        <FormControl variant="outlined" className="w-[180px]">
          <InputLabel>ジャンルを選択</InputLabel>
          <Select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            label="ジャンルを選択"
          >
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          type="text"
          value={sharedWithPerson}
          onChange={(e) => setSharedWithPerson(e.target.value)}
          placeholder="誰と共有しますか？"
          className="flex-grow"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreatePassword}
        >
          新しい合言葉を作成
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">あなたの合言葉：</h2>
        {phrasePasswords.map((pass) => (
          <Card key={pass.id} className="mb-2">
            <CardHeader
              title={`${pass.genre} - ${pass.sharedWith}との合言葉`}
            />
            <CardContent>
              <p className="break-words mb-2">{pass.phrasePassword}</p>
              <p className="text-sm text-gray-600">
                最終更新: {pass.lastUpdated.toLocaleDateString()}
              </p>
              {(new Date() - pass.lastUpdated) / (1000 * 60 * 60 * 24 * 30) >=
                5 && (
                <Alert severity="error" className="mt-2">
                  <AlertTitle>更新が必要です</AlertTitle>
                  この合言葉は5ヶ月間更新されていません。セキュリティのため、新しい合言葉を生成することをおすすめします。
                </Alert>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PasswordSharingApp;
