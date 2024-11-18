import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* ナビゲーションメニュー */}
          <nav className="flex-1 flex justify-center space-x-10">
            <Link to="/simulator" className="text-base font-medium text-gray-500 hover:text-gray-900">
              大学シミュレーター
            </Link>
            <Link to="/plans" className="text-base font-medium text-gray-500 hover:text-gray-900">
              料金プラン
            </Link>
            <Link to="/why-malaysia" className="text-base font-medium text-gray-500 hover:text-gray-900">
              なぜマレーシア？
            </Link>
            <Link to="/faq" className="text-base font-medium text-gray-500 hover:text-gray-900">
              よくある質問
            </Link>
            <Link to="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </Link>
          </nav>

          {/* 相談予約ボタン */}
          <div className="flex-1 flex justify-end">
            <a
              href="https://calendar.app.google/2CEuHcGPiMgrNE4w5" // Google Calendarのリンク
              target="_blank" // 新しいタブで開く
              rel="noopener noreferrer" // セキュリティ対策
              className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-200 cursor-pointer"
            >
              無料相談
            </a>
          </div>
        </div>
      </header>

      {/* スライドアニメーションセクション */}
      <div className="bg-red-500 text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-slide">
          海外不正送金を謳うエージェントには注意
        </div>
      </div>
    </div>
  );
}
