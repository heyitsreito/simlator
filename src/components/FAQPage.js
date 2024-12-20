import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQのデータ
const faqs = [
  { question: "マレーシアの大学は英語で授業を受けられますか？", answer: "はい、多くのマレーシアの大学では英語で授業が行われています。" },
  { question: "マレーシアの生活費はどのくらいですか？", answer: "マレーシアの生活費は比較的リーズナブルです。" },
  { question: "マレーシアは安全ですか？", answer: "マレーシアは東南アジアの中でも比較的安全な国です。" },
  { question: "アルバイトはできますか？", answer: "留学生ビザでのアルバイトは原則禁止されています。" },
  { question: "マレーシアの気候はどうですか？", answer: "マレーシアは熱帯気候で、年間を通じて高温多湿です。" }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // 開いているFAQのインデックスを管理

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">よくある質問</h2>
          <p className="mt-4 text-xl text-gray-600">マレーシア留学に関するよくある質問にお答えします</p>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index} // アクセシビリティ対応
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 ease-in-out" : "max-h-0"
                }`}
              >
                <div className="pb-4">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
