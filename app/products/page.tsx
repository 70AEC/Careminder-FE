"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MessageSquare, CheckCircle, BarChart3, Bell, Tag } from "lucide-react"

export default function ProductsPage() {
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

  const features = [
    {
      title: "환자 노트",
      description: "환자에 대한 기억 및 참고해야 할 부가 정보를 기록 및 공유합니다.",
      icon: <MessageSquare className="h-10 w-10 text-careminder-500" />,
    },
    {
      title: "환자 상태바 조절",
      description:
        "환자가 본인의 남은 진료 및 현재 진행 상황을 확인할 수 있는 상태바를 환자 페이지에 노출시킬지 여부를 결정할 수 있습니다.",
      icon: <CheckCircle className="h-10 w-10 text-careminder-500" />,
    },
    {
      title: "병원 공지 작성",
      description: "환자 페이지에 자동 반복재생될 병원 공지내용을 작성할 수 있습니다.",
      icon: <Bell className="h-10 w-10 text-careminder-500" />,
    },
    {
      title: "NFC 태깅",
      description: "희망할 경우, 아이디/비밀번호 또는 NFC 태깅을 통해 더욱 보안을 강화할 수 있습니다.",
      icon: <Tag className="h-10 w-10 text-careminder-500" />,
    },
    {
      title: "통계",
      description: "각 환자 및 간호 인력별 정보 및 업무에 대한 통계를 구할 수 있습니다.",
      icon: <BarChart3 className="h-10 w-10 text-careminder-500" />,
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-careminder-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-careminder-800 mb-6">
              간호사를 직접 찾지 않더라도,
              <br />
              소통할 수 있게
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-careminder-700 mb-8">
              케어마인더는 침상에 부착된 태블릿을 통해 환자의 질문 및 요청사항을 간호사에게 전달할 수 있습니다. 더이상
              지나가는 간호사를 붙잡거나 직접 찾아가 질문을 하거나 필요한 사항을 요청할 필요가 없습니다.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Smart Bed Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">케어보이스 스마트베드</h2>
              <p className="text-lg text-gray-700 mb-6">
                환자는 홈화면에서 간호사의 설정에 따라 자신의 진료 상황을 볼 수도, 병원의 소개 내용을 볼 수도 있습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                메인 화면에 표시된 '현재 누적된 요청사항'이나 병원의 '공지' 등을 통해 현재 병원의 혼잡도를 확인할 수
                있습니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="케어보이스 스마트베드"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice Recognition Section */}
      <section className="py-20 bg-careminder-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <div className="inline-block p-4 bg-careminder-100 rounded-full mb-6">
                <Mic className="h-12 w-12 text-careminder-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">음성으로 요청하기</h2>
              <p className="text-lg text-gray-700">케어마인더는 기본적으로 음성인식 기능을 사용합니다.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>편리한 사용성</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      디지털 관련 기기 사용이 어색한 노년층이나 타이핑이 불편한 환자에게도 용이성을 높였습니다.
                    </p>
                    <p className="text-gray-700">
                      입력된 내용은 일차적으로 정제 작업을 통해 올바른 음성에 따른 요청인지를 확인합니다.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>AI 자동 분류</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      요청 내용은 AI 학습을 통해 자동으로 간호사 또는 간호조무사 등 관련 인력에게 전달이 됩니다.
                    </p>
                    <p className="text-gray-700">
                      병원별로 각기 다른 학습 데이터셋을 누적해 나가기 때문에 AI는 각 병원의 시스템에 맞는 분류체계를
                      점점 갖추어 나가게 됩니다.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="간호사와 메시지하기"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">간호사와 메시지하기</h2>
              <p className="text-lg text-gray-700 mb-6">
                간호사는 환자에게 메시지를 보낼 수 있습니다. 요구사항에 대한 추가 정보를 얻을 수도 있고, 정보 제공 관련
                일일 경우 환자에게 직접 가지 않더라도 메시지 소통을 통해 해결할 수 있습니다.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                간호사가 보낸 메시지는 환자 화면에 자동으로 팝업 및 알림이 오게 되어 원활한 소통을 만들어냅니다.
              </p>
              <p className="text-lg text-gray-700">
                환자는 자신이 질문 및 요청했던 내역들에 대한 구체적인 내용을 확인할 수 있습니다. 각 내역들의 현재
                단계(대기, 진행 중, 완료), 시간, 간호사와의 메시지 내용 등을 확인할 수 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Groupware Section */}
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
              본래의 업무에 집중할 수 있는 환경을 만드는
              <br />
              케어보이스 그룹웨어
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700">
              환자와 간호 인력 간의 소통 및 업무 분배 시스템을 체계화하는 케어마인더는 환자의 요청 및 질문을 자동으로
              적절한 인력에 분배하고, 환자와 편리한 비대면 양방향 소통을 지원합니다.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-careminder-100 rounded-full">
                  <CheckCircle className="h-10 w-10 text-careminder-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-careminder-800 mb-4">
                자동으로 업무에 따라 분류되는
                <br />
                효율적인 환자 요청 분류
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-careminder-100 rounded-full">
                  <MessageSquare className="h-10 w-10 text-careminder-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-careminder-800 mb-4">
                직접 가지 않아도 환자와
                <br />
                소통할 수 있는 간편 메시지
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              "케어보이스 그룹웨어"는 다음 기능을 지원합니다
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700">
              현재 지원하고 있는 연동·제공 기능부터 앞으로 지원 예정 기능까지
              <br />
              기능별 내용을 간략히 안내드립니다.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">{feature.icon}</div>
                    <CardTitle className="text-center text-careminder-700">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              케어마인더와 함께 더 효율적인 병원 환경을 만들어보세요
            </h2>
            <p className="text-lg mb-8 text-careminder-100">
              간호 인력의 업무 효율성을 높이고 환자 경험을 개선하는 스마트 솔루션
            </p>
            <Button className="bg-white text-careminder-600 hover:bg-careminder-100 px-8 py-6 text-lg">
              도입 문의하기
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

