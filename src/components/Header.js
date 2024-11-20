import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // ナビゲーションリンクのデータ
  const navLinks = [
    { to: '/simulator', label: '大学シミュレーター' },
    { to: '/plans', label: '料金プラン' },
    { to: '/why-malaysia', label: 'なぜマレーシア？' },
    { to: '/faq', label: 'よくある質問' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <div>
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* ナビゲーションメニュー */}
          <nav className="flex-1 flex justify-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 相談予約ボタン */}
          <div className="flex-1 flex justify-end">
            <a
              href="https://calendar.app.google/2CEuHcGPiMgrNE4w5"
              target="_blank"
              rel="noopener noreferrer"
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
