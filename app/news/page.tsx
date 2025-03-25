"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function NewsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const newsItems = [
    {
      id: 1,
      title: "MWC 2025 참가… AI 음성인식 기반 '케어보이스'로 간호사 업무 부담 경감",
      date: "2025.03.10",
      author: "salescareminder",
      excerpt:
        "스타트업 케어마인더가 MWC 2025에서 AI 음성인식 기반의 의료 솔루션 '케어보이스'와 스마트 병원 관리 시스템 '케어플로우'를 선보이며 유럽 시장 공략에 나섰다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "케어마인더, 프라이머 시드 투자 유치 성공",
      date: "2025.02.15",
      author: "salescareminder",
      excerpt:
        "병원 업무 자동화 솔루션 '케어보이스'를 개발하는 케어마인더가 프라이머로부터 시드 투자를 유치했다고 밝혔다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "강남베드로병원, 케어마인더 솔루션 도입으로 간호사 업무 효율 30% 향상",
      date: "2025.02.05",
      author: "salescareminder",
      excerpt:
        "강남베드로병원이 케어마인더의 '케어보이스' 솔루션을 도입한 후 간호사들의 업무 효율이 30% 향상되었다고 발표했다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "케어마인더, 제10회 실험실창업페스티벌 최우수상 수상",
      date: "2024.12.20",
      author: "salescareminder",
      excerpt: "케어마인더가 과학기술정보통신부가 주최한 제10회 실험실창업페스티벌에서 최우수상을 수상했다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "케어마인더, 구미강남병원과 PoC 진행",
      date: "2024.12.10",
      author: "salescareminder",
      excerpt:
        "케어마인더가 구미강남병원과 '케어보이스' 솔루션의 PoC(Proof of Concept)를 성공적으로 진행했다고 밝혔다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "케어마인더, 제13회 정주영 창업경진대회 우수상 및 인기상 동시 수상",
      date: "2024.11.25",
      author: "salescareminder",
      excerpt: "케어마인더가 아산나눔재단이 주최한 제13회 정주영 창업경진대회에서 우수상과 인기상을 동시에 수상했다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "케어마인더, ISO 9001/14001/27001/45001 인증 동시 취득",
      date: "2024.11.15",
      author: "salescareminder",
      excerpt: "케어마인더가 품질, 환경, 정보보호, 안전보건 관련 ISO 인증을 동시에 취득했다고 밝혔다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "케어마인더, 법인 설립 및 본격적인 사업 확장 나서",
      date: "2024.08.05",
      author: "salescareminder",
      excerpt: "케어마인더가 법인 설립을 완료하고 본격적인 사업 확장에 나선다고 밝혔다.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-careminder-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-careminder-800 mb-6">케어마인더 뉴스</h1>
            <p className="text-lg text-gray-700">케어마인더의 최신 소식과 업데이트를 확인하세요</p>
          </motion.div>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                  },
                }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 pb-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                          <CardDescription>
                            {item.author} • {item.date}
                          </CardDescription>
                        </div>
                        <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pb-4">
                        <p className="text-gray-700">{item.excerpt}</p>
                      </CardContent>
                      <CardFooter className="p-0">
                        <Link href={`/news/${item.id}`}>
                          <Button variant="link" className="text-careminder-500 p-0">
                            자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

