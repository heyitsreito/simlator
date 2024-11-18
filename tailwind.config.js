/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwindクラスを適用するファイルパス
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' }, // 画面右端から開始
          '100%': { transform: 'translateX(-100%)' }, // 画面左端まで移動
        },
      },
      animation: {
        slide: 'slide 10s linear infinite', // 10秒で無限ループ
      },
    },
  },
  plugins: [],
};
