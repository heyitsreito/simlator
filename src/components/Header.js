import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* ナビゲーションメニューを中央に配置 */}
        <nav className="flex-1 flex justify-center space-x-10">
          <a href="#simulator" className="text-base font-medium text-gray-500 hover:text-gray-900">
            大学シミュレーター
          </a>
          <a href="#plans" className="text-base font-medium text-gray-500 hover:text-gray-900">
            料金プラン
          </a>
          <a href="#why-malaysia" className="text-base font-medium text-gray-500 hover:text-gray-900">
            なぜマレーシア？
          </a>
          <a href="#faq" className="text-base font-medium text-gray-500 hover:text-gray-900">
            よくある質問
          </a>
        </nav>
        
        {/* 相談予約ボタンを右端に配置 */}
        <div className="flex-1 flex justify-end">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded">
            相談予約
          </button>
        </div>
      </div>
    </header>
  );
}
