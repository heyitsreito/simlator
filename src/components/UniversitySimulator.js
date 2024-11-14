import { useState } from 'react';

const universities = [
  { name: "マラヤ大学", minIELTS: 6.5 },
  { name: "マレーシア科学大学", minIELTS: 6.0 },
  { name: "プトラ大学", minIELTS: 5.5 },
  { name: "テイラーズ大学", minIELTS: 6.0 },
  { name: "サンウェイ大学", minIELTS: 6.5 },
  { name: "モナシュ大学マレーシア", minIELTS: 6.5 },
  { name: "ヘルプ大学", minIELTS: 5.5 },
  { name: "アジア太平洋工科大学", minIELTS: 6.0 },
  { name: "UCSI大学", minIELTS: 6.0 },
  { name: "管理科学大学", minIELTS: 5.5 },
  { name: "SEGi大学", minIELTS: 5.5 },
  { name: "ノッティンガム大学マレーシア", minIELTS: 6.5 },
  { name: "ハリオット・ワット大学マレーシア", minIELTS: 6.0 },
  { name: "リンカーン大学", minIELTS: 5.5 },
  { name: "メーシャ大学", minIELTS: 5.5 },
  { name: "トゥンク・アブドゥル・ラーマン大学", minIELTS: 5.5 },
  { name: "スウィンバーン大学サラワク", minIELTS: 6.0 },
  { name: "ムルタニ大学", minIELTS: 5.0 },
  { name: "ソフトウェアエンジニアリング大学", minIELTS: 6.5 },
  { name: "ライフサイエンス大学", minIELTS: 6.0 }
];

export default function UniversitySimulator() {
  const [ieltsScore, setIeltsScore] = useState('');
  const [results, setResults] = useState([]);

  const handleSimulate = () => {
    const ielts = parseFloat(ieltsScore);
    const eligibleUniversities = universities.filter(
      (uni) => ielts >= uni.minIELTS
    );
    setResults(eligibleUniversities);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">大学シミュレーター</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="ielts" className="block text-gray-700">IELTSスコア</label>
          <select
            id="ielts"
            value={ieltsScore}
            onChange={(e) => setIeltsScore(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">スコアを選択</option>
            {[4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((score) => (
              <option key={score} value={score}>{score}</option>
            ))}
          </select>
        </div>
        <button onClick={handleSimulate} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          シミュレート
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center mb-4">入学可能な大学：</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            {results.map((uni, index) => (
              <div
                key={index}
                className="border rounded p-4 text-center w-full bg-gray-100"
              >
                {uni.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
