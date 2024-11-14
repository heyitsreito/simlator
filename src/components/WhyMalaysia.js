import { GraduationCap, DollarSign, Globe, Users, Sun } from 'lucide-react'

const reasons = [
  {
    icon: GraduationCap,
    title: "質の高い教育",
    description: "世界ランキング上位の大学が多数あり、英語で授業を受けられます。",
  },
  {
    icon: DollarSign,
    title: "リーズナブルな費用",
    description: "欧米と比べて学費や生活費が安く、コストパフォーマンスに優れています。",
  },
  {
    icon: Globe,
    title: "多文化環境",
    description: "多民族国家であり、様々な文化や言語に触れることができます。",
  },
  {
    icon: Users,
    title: "フレンドリーな人々",
    description: "マレーシア人は親切で温かく、留学生を歓迎してくれます。",
  },
  {
    icon: Sun,
    title: "快適な気候",
    description: "年中温暖な気候で、勉強に集中しやすい環境です。",
  },
]

export default function WhyMalaysia() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">なぜマレーシア留学がいいのか？</h2>
          <p className="mt-4 text-xl text-gray-600">マレーシアは留学先として多くの魅力があります</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <div key={reason.title} className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <reason.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{reason.title}</h3>
                  <p className="mt-5 text-base text-gray-500">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}