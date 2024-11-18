import React from 'react';

const blogs = [
  {
    title: "マレーシア留学の魅力",
    description: "なぜマレーシアで留学をするべきか、コストと生活環境について詳しく解説。",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "ビザ申請のステップ",
    description: "マレーシア留学に必要なビザ申請手順をわかりやすくまとめました。",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "学生寮 vs 一人暮らし",
    description: "学生寮と一人暮らし、それぞれのメリットとデメリットを比較。",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "マレーシアでのアルバイト事情",
    description: "留学生が知っておくべきアルバイト規制とおすすめの仕事。",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "マレーシアの人気大学ランキング",
    description: "留学生に人気のあるマレーシアの大学をランキング形式で紹介。",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "IELTSの勉強法",
    description: "マレーシア留学に必要なIELTSスコアを達成するための勉強法。",
    image: "https://via.placeholder.com/300",
  },
];

export default function BlogPages() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900">{blog.title}</h2>
                <p className="mt-4 text-gray-600">{blog.description}</p>
                <a
                  href={`/blog/${index}`}
                  className="block mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                  もっと読む →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
