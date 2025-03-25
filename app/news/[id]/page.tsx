"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NewsDetailPage() {
  const params = useParams()
  const newsId = params.id

  // 실제 구현에서는 API 호출 등을 통해 뉴스 데이터를 가져와야 합니다.
  // 여기서는 예시로 하드코딩된 데이터를 사용합니다.
  const newsData = {
    id: 1,
    title: "MWC 2025 참가… AI 음성인식 기반 '케어보이스'로 간호사 업무 부담 경감",
    date: "2025.03.10",
    author: "salescareminder",
    content: [
      {
        type: "text",
        content:
          "스타트업 케어마인더(대표 강준구)가 MWC 2025에서 AI 음성인식 기반의 의료 솔루션 '케어보이스'와 스마트 병원 관리 시스템 '케어플로우'를 선보이며 유럽 시장 공략에 나섰다. 이번 전시회를 통해 케어마인더는 환자의 요청을 자동으로 분류해 업무를 분배하는 AI 기술을 소개하며, 병원 내 효율성을 높이고 간호사의 업무 부담을 줄이는 혁신적인 의료 솔루션을 강조했다.",
      },
      {
        type: "text",
        content:
          "'케어보이스'는 환자 병상에 설치된 태블릿을 통해 환자의 요청을 음성으로 입력하면 AI가 이를 분석해 간단한 요청은 자동 응답하고, 전문적인 처치가 필요한 요청은 해당 담당 의료진에게 즉시 전달하는 시스템이다. 이를 통해 불필요한 대기 시간을 줄이고, 간호사들이 보다 효율적으로 업무를 수행할 수 있도록 지원한다.",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=800",
        caption:
          "MWC 2025에서 공개된 '케어보이스'. 환자의 요청을 병원 내 담당자별로 자동 분배해 전달하는 웹 기반 솔루션| 촬영 - 에이빙뉴스",
      },
      {
        type: "heading",
        content: "AI 기반 간호 업무 자동화, 환자 맞춤형 일정 관리 제공",
      },
      {
        type: "text",
        content:
          "케어마인더가 이번 MWC 2025에서 선보인 '케어플로우'는 환자의 요청을 병원 내 의료진에게 자동으로 전달하는 웹 기반 솔루션이다. AI 기술을 활용해 환자가 요청한 사항을 자동으로 분석하고, 업무를 담당 부서에 할당하는 기능을 제공한다. 예를 들어, 환자가 병원복을 교체해달라고 요청하면 간호조무사에게, 진통제 요청은 담당 간호사에게 자동으로 전달된다. 이를 통해 의료진 간 불필요한 커뮤니케이션 과정이 줄어들고, 보다 신속한 대응이 가능해진다.",
      },
      {
        type: "text",
        content:
          "또한 '케어보이스'는 병원 시스템과 연동돼 환자별 맞춤형 일정 관리 기능을 제공한다. 환자의 MRI 촬영 일정, 금식 시간, 물리치료 예약 등을 자동으로 안내하며, 병원 내 의료진과의 소통을 더욱 원활하게 만든다. 예를 들어, 의사의 회진 시간이 다가오면 \"의사가 곧 회진을 시작합니다. 자리에 계셔 주세요.\"라는 안내가 자동으로 표시된다. 이를 통해 환자들은 중요한 일정을 놓치는 일이 줄어들고, 의료진도 보다 체계적으로 업무를 수행할 수 있게 된다.",
      },
      {
        type: "text",
        content:
          '이지민 CTO는 "병원에서 간호사들은 수많은 요청을 관리해야 하고, 종종 환자와 의료진 간 정보 전달이 원활하지 않아 불필요한 혼선이 발생하는 경우가 많다"며, "AI 기반의 자동화 시스템을 통해 이러한 문제를 해결하고, 의료진이 보다 중요한 업무에 집중할 수 있도록 지원할 것"이라고 밝혔다.',
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=800",
        caption:
          "MWC 2025에 참가한 케어마인더 부스 전경, 이지민 CTO가 관계자들과 상담을 진행하고 있다. | 촬영 - 에이빙뉴스",
      },
      {
        type: "heading",
        content: "유럽시장 공략… 스마트 병원·노인 요양 시설 협업 논의",
      },
      {
        type: "text",
        content:
          "MWC 2025에서 케어마인더는 병원뿐만 아니라 노인 요양 시설과의 협업 가능성도 모색하고 있다. 미국, 유럽 등지에서는 요양시설에서 환자의 상태를 모니터링하고, 가족과 실시간으로 소통할 수 있는 시스템에 대한 수요가 높아지고 있다. 케어마인더는 이러한 시장 흐름을 반영해, 노인 돌봄 시설에서도 '케어보이스'를 활용할 수 있도록 확장할 계획이다.",
      },
      {
        type: "text",
        content:
          "또한 해외 의료기기 기업과의 협업을 추진 중이다. 환자의 침대 시트에 사람이 올라와 있는지 감지하는 IoT 기술을 보유한 기업과 협력해 낙상 방지 기능을 추가하는 방안을 논의하고 있으며, 유럽의 스마트 병원 컨설팅 업체와도 협업을 타진하고 있다.",
      },
      {
        type: "text",
        content:
          "한편, '케어보이스'는 국내 병원에 도입되어 운영 중이다. 강남 베드로병원에 PoC 후 현재 차병원과도 협업을 논의 중이며, 향후 해외 시장 진출도 계획하고 있다. 특히, 유럽 의료 시장 진출을 위해 글로벌 병원 및 헬스케어 기업들과의 협력을 적극적으로 모색하고 있다.",
      },
      {
        type: "text",
        content:
          '이지민 CTO는 "유럽에서는 스마트병원화를 추진하는 컨설팅 업체와의 협업 가능성도 논의했다"며,"이를 통해 병원 내 AI 자동화 솔루션 적용 방안을 구체화하고, 유럽 의료 환경에 적합한 맞춤형 서비스를 제공할 수 있는 방안도 검토 중"이라고 전했다.',
      },
    ],
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Link href="/news">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> 뉴스 목록으로 돌아가기
            </Button>
          </Link>
        </motion.div>

        <motion.article initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <p className="font-medium">{newsData.author}</p>
                <p className="text-sm text-gray-500">{newsData.date}</p>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">{newsData.title}</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            {newsData.content.map((item, index) => {
              if (item.type === "text") {
                return (
                  <p key={index} className="mb-6">
                    {item.content}
                  </p>
                )
              } else if (item.type === "image") {
                return (
                  <figure key={index} className="mb-8">
                    <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden">
                      <Image
                        src={item.url || "/placeholder.svg"}
                        alt={item.caption || "News image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {item.caption && (
                      <figcaption className="text-sm text-gray-500 mt-2 text-center">{item.caption}</figcaption>
                    )}
                  </figure>
                )
              } else if (item.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold text-careminder-800 mb-4 mt-8">
                    {item.content}
                  </h2>
                )
              }
              return null
            })}
          </div>
        </motion.article>

        <div className="max-w-4xl mx-auto mt-12 mb-8 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold mb-6">관련 뉴스</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[2, 3, 4].map((id) => (
              <Link href={`/news/${id}`} key={id}>
                <div className="group">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Related news"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-medium group-hover:text-careminder-500 transition-colors">
                    {id === 2
                      ? "케어마인더, 프라이머 시드 투자 유치 성공"
                      : id === 3
                        ? "강남베드로병원, 케어마인더 솔루션 도입으로 간호사 업무 효율 30% 향상"
                        : "케어마인더, 제10회 실험실창업페스티벌 최우수상 수상"}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

