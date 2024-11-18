import { Check } from 'lucide-react';

const plans = [
  {
    name: "ベーシック (単発）",
    price: "5,000",
    features: [
      "大学選びのアドバイス",
      "出願書類の確認",
      "基本的な留学相談",
    ],
  },
  {
    name: "スタンダード",
    price: "20,000",
    features: [
      "大学選びのアドバイス",
      "出願書類の作成支援",
      "ビザ申請サポート",
      "住居探しのアドバイス",
    ],
  },
  {
    name: "プレミアム",
    price: "50,000",
    features: [
      "大学選びのアドバイス",
      "出願書類の作成支援",
      "ビザ申請代行",
    ],
  },
];

export default function PricePlans() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">料金プラン</h2>
          <p className="mt-4 text-xl text-gray-600">あなたのニーズに合わせて選べる3つのプラン</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm transition-transform duration-200 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">¥{plan.price}</p>
                <p className="mt-1 text-sm text-gray-500">初回相談料込み</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
