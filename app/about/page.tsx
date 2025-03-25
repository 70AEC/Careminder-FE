"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/context/language-context"

export default function AboutPage() {
  const { language } = useLanguage()
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

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
        staggerChildren: 0.2,
      },
    },
  }

  const teamMembers = [
    {
      name: "강준구",
      position: "CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "삼성서울병원 서비스디자인 프로젝트 대상",
        "제10회 실험실창업페스티벌 최우수상",
        "제13회 정주영 창업경진대회 우수상",
        "산학연협력 EXPO 우수성과상",
        "네이버 D2SF 캠퍼스 기술창업 공모전 선정",
      ],
    },
    {
      name: "이유진",
      position: "CSO",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "아주대병원 개방형실험실 구축사업 선정",
        "제4회 AI ICT 창의자율과제 은상",
        "제1회 DPG AI Challenge 장려상",
        "제2회 인공지능 서비스 아이디어 공모전 우수상",
        "LINC 3.0 AJOU-Good 데모데이 우수상",
      ],
    },
    {
      name: "이지민",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "자체 STT AI 모델 개발",
        "미국 CES2024 선진기술 체험 프로그램 선정",
        "실리콘밸리 K-Startup Dream Challenge 선정",
        "SKKU 학부생 창업경진대회 대상",
        "제5회 대학연합창업캠프 우수상",
      ],
    },
    {
      name: "김도연",
      position: "AI",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "케어보이스 AI 음성인식 모델 개발",
        "제1회 반도체 창업Day 창업 아이디어 발표회 2등",
        "2023 KINGO 미니아이코어 우수상",
        "제5회 전국 청년창업 아이디어 경진대회 장려상",
        "학생 창업유망팀 300+ 도약트랙 선정",
      ],
    },
    {
      name: "성태현",
      position: "프론트",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "케어보이스 프로토타입 어플리케이션 개발",
        "케어보이스 MVP 모델 개발",
        "경기창업혁신공간 입주기업 선정",
        "성균관대교 캠퍼스타운 StartUp 입주경진대회 선정",
        "사회연대은행 청년 창업 자조활동 라운드 프로젝트 알파청년 선정",
      ],
    },
    {
      name: "안승찬",
      position: "프론트",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "케어보이스 스마트베드 UI/UX 개발",
        "케어보이스 그룹웨어 프론트엔드 개발",
        "경기도경제과학진흥원 세대융합형 베이비부머 창업 서포터즈 선정",
        "제13회 정주영 창업경진대회 선정",
        "실험실 창업탐색 프로그램 Nexus Lab 선정",
      ],
    },
    {
      name: "이은구",
      position: "백엔드",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "케어보이스 백엔드 시스템 개발",
        "병원 시스템 연동 API 개발",
        "중소벤처기업부 경기대학교 예비창업패키지 선정",
        "과학기술정보통신부 공공기술기반 시장연계 창업탐색 지원사업 I-Corps 선정",
        "AI ICT 창의자율과제 선정",
      ],
    },
    {
      name: "이정민",
      position: "백엔드",
      image: "/placeholder.svg?height=300&width=300",
      bio: [
        "케어보이스 데이터베이스 설계",
        "케어보이스 클라우드 인프라 구축",
        "ISO 9001/14001/27001/45001 인증 취득",
        "제1회 소셜벤처 부트캠프 선정",
        "연구중심병원 심포지엄 부스 운용",
      ],
    },
  ]

  const milestones = [
    {
      date: "2025.03",
      events: ["스페인 MWC 부스 운용"],
    },
    {
      date: "2025.02",
      events: ["제1회 소셜벤처 부트캠프 선정(사회적협동조합 스윗)", "Seed 투자 유치(프라이머)", "강남베드로병원 PoC"],
    },
    {
      date: "2025.01",
      events: ["삼성서울병원 서비스디자인 프로젝트 교육 진행"],
    },
    {
      date: "2024.12",
      events: [
        "제10회 실험실창업페스티벌 최우수상 수상(과학기술정보통신부)",
        "제4회 AI ICT 창의자율과제 은상(ICT 명품인재양성사업단)",
        "구미강남병원 PoC",
      ],
    },
    {
      date: "2024.11",
      events: [
        "제13회 정주영 창업경진대회 우수상, 인기상 수상(아산나눔재단)",
        "산학연협력 EXPO 우수성과상 수상(교육부)",
        "제1회 DPG AI Challenge 장려상 수상(디지털플랫폼정부위원회)",
        "ISO 9001: 품질경영시스템인증 취득",
        "ISO 14001: 환경경영시스템인증 취득",
        "ISO 27001: 정보보호경영시스템인증 취득",
        "ISO 45001: 안전보건경영시스템인증 취득",
      ],
    },
    {
      date: "2024.09",
      events: ["수원창업오디션 우수상 수상(수원특례시)"],
    },
    {
      date: "2024.08",
      events: ["법인 설립"],
    },
    {
      date: "2024.07",
      events: ["네이버 D2SF 캠퍼스 기술창업 공모전 선정"],
    },
    {
      date: "2024.06",
      events: ["경기도경제과학진흥원 세대융합형 베이비부머 창업 서포터즈 선정"],
    },
    {
      date: "2024.05",
      events: [
        "제13회 정주영 창업경진대회 선정",
        "학생 창업유망팀 300+ 도약트랙 선정",
        "실험실 창업탐색 프로그램 Nexus Lab 선정",
        "사회연대은행 청년 창업 자조활동 라운드 프로젝트 알파청년 선정",
        "연구중심병원 심포지엄 부스 운용",
      ],
    },
    {
      date: "2024.04",
      events: [
        "중소벤처기업부 경기대학교 예비창업패키지 선정",
        "과학기술정보통신부 공공기술기반 시장연계 창업탐색 지원사업 I-Corps 선정",
        "AI ICT 창의자율과제 선정",
      ],
    },
    {
      date: "2024.03",
      events: [
        "한국보건산업진흥원 아주대학교병원 개방형실험실 구축사업 선정",
        "성균관대교 캠퍼스타운 StartUp 입주경진대회 선정",
      ],
    },
    {
      date: "2024.02",
      events: ["경기도경제과학진흥원 경기창업혁신공간 입주기업 선정"],
    },
    {
      date: "2024.01",
      events: ["케어보이스 MVP 모델 출시", "자체 STT AI 모델 개발", "미국 CES2024 선진기술 체험 프로그램 선정"],
    },
    {
      date: "2023.12",
      events: [
        "제2회 인공지능 서비스 아이디어 공모전 우수상",
        "제1회 반도체 창업Day-창업 아이디어 발표회 2등",
        "LINC 3.0 AJOU-Good 데모데이 우수상",
      ],
    },
    {
      date: "2023.11",
      events: [
        "제5회 전국 청년창업 아이디어 경진대회 장려상(광주 동구청장상)",
        "2023 KINGO 미니아이코어 우수상",
        "실리콘밸리 K-Startup Dream Challenge 선정",
      ],
    },
    {
      date: "2023.10",
      events: ["SKKU 학부생 창업경진대회 대상"],
    },
    {
      date: "2023.07",
      events: ["케어보이스 프로토타입 어플리케이션 출시", "제5회 대학연합창업캠프 우수상(수원특례시장상)"],
    },
    {
      date: "2023.01",
      events: [
        "삼성서울병원 협업을 통한 간호인력 PainPoint 발굴 및 케어보이스 기획",
        "환자 경험 및 의료 서비스 디자인 프로젝트 대상",
      ],
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-careminder-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-careminder-800 mb-6 text-center"
            >
              {language === "ko"
                ? "간호인력이 더 편한 환경에서 근무할 수 있도록 만들겠습니다"
                : "We will create a more comfortable working environment for nursing staff"}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-8">
              {language === "ko"
                ? "대한민국은 보건의료 만족도 1위를 기록 중에 있는 의료 선진국입니다. 하지만 이는 환자를 위해 24시간 밤낮으로 헌신하는 간호인력의 뒷받침이 있었기에 가능한 일이었습니다. 케어마인더는 병원의 업무 프로세스를 개선하여 간호인력이 더 편한 환경에서 근무할 수 있도록 만들겠습니다."
                : "South Korea is a leading medical country with the highest healthcare satisfaction rating. However, this was only possible with the support of nursing staff who dedicate themselves 24 hours a day for patients. CareMinder will improve hospital work processes to create a more comfortable working environment for nursing staff."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="삼성서울병원 협업"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 mb-6">
                  {language === "ko"
                    ? "CareMinder는 2023년 1월, 삼성서울병원과 진행한 '환자 경험 및 의료 서비스 디자인 프로젝트'에서 출발했습니다."
                    : "CareMinder started from the 'Patient Experience and Medical Service Design Project' conducted with Samsung Seoul Hospital in January 2023."}
                </p>
                <p className="text-lg text-gray-700">
                  {language === "ko"
                    ? "삼성서울병원 응급실과의 협업을 통해 '모호한 업무 분장으로 인한 업무 과중 및 의료사고'라는 간호인력의 PainPoint를 발굴하였습니다."
                    : "Through collaboration with the emergency room of Samsung Seoul Hospital, we identified the nursing staff's pain point of 'work overload and medical accidents due to ambiguous work division'."}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <p className="text-lg text-gray-700 mb-6">
                  {language === "ko"
                    ? "기존 구두 방식에서의 환자-간호인력 소통방식에서 발생하는 문제를 비롯한 여러 원내 업무 소통 문제를 개선하여 병원의 업무 효율을 증진시키고 간편화하고자 합니다."
                    : "We aim to improve and simplify hospital work efficiency by addressing various in-hospital communication issues, including problems arising from the traditional verbal communication method between patients and nursing staff."}
                </p>
                <p className="text-lg text-gray-700">
                  {language === "ko"
                    ? "현재 아주대병원과 공동연구를 수행하며 더 나은 병원 환경을 만들기 위해 최선을 다하고 있습니다."
                    : "We are currently conducting joint research with Ajou University Hospital and doing our best to create a better hospital environment."}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="아주대병원 공동연구"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-careminder-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">
              {language === "ko" ? "저희가 함께 하겠습니다" : "We will be with you"}
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full focus:outline-none group">
                      <div className="relative mb-4 mx-auto">
                        <div className="aspect-square w-full max-w-[200px] rounded-full overflow-hidden border-4 border-careminder-300 group-hover:border-careminder-500 transition-all duration-300 mx-auto">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-careminder-800 group-hover:text-careminder-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-careminder-600">{member.position}</p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-2xl">
                        {member.name} - {member.position}
                      </DialogTitle>
                      <DialogDescription className="text-center">
                        {language === "ko" ? "주요 경력 및 성과" : "Key Achievements"}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row items-center gap-6 py-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-careminder-300 flex-shrink-0">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <ul className="space-y-2">
                          {member.bio.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-2 h-2 rounded-full bg-careminder-500 mt-1.5 mr-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">
              {language === "ko" ? "연혁" : "History"}
            </motion.h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-careminder-300"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`mb-16 relative flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-careminder-500 border-4 border-white z-10"></div>

                  {/* Date column - always on the opposite side of content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <h3 className="text-xl font-bold text-careminder-700 mb-2">{milestone.date}</h3>
                  </div>

                  {/* Content column */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <ul className="space-y-2">
                          {milestone.events.map((event, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-2 h-2 rounded-full bg-careminder-500 mt-1.5 mr-2"></span>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-careminder-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "ko"
                ? "케어마인더와 함께 더 나은 병원 환경을 만들어보세요"
                : "Create a better hospital environment with CareMinder"}
            </h2>
            <p className="text-lg mb-8 text-careminder-100">
              {language === "ko"
                ? "간호 인력의 업무 효율성을 높이고 환자 경험을 개선하는 스마트 솔루션"
                : "Smart solutions that improve nursing staff efficiency and enhance patient experience"}
            </p>
            <Button className="bg-white text-careminder-600 hover:bg-careminder-100 px-8 py-6 text-lg">
              {language === "ko" ? "도입 문의하기" : "Contact Us"}
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

