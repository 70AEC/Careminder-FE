"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronRight, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    phone: "",
    email: "",
    availableTime: "",
    referral: "",
    inquiry: "",
    agreeTerms: false,
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const partnerCarouselRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeTerms) {
      alert(language === "ko" ? "개인정보 수집 및 이용에 동의해주세요." : "Please agree to the terms and conditions.")
      return
    }
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert(
      language === "ko"
        ? "문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다."
        : "Your inquiry has been received. We will get back to you soon.",
    )
    setFormData({
      name: "",
      hospital: "",
      phone: "",
      email: "",
      availableTime: "",
      referral: "",
      inquiry: "",
      agreeTerms: false,
    })
  }

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

  const heroSlides = [
    {
      id: 1,
      image: "/placeholder.svg?height=800&width=1600",
      alt: "CareMinder Hero Image 1",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=800&width=1600",
      alt: "CareMinder Hero Image 2",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=800&width=1600",
      alt: "CareMinder Hero Image 3",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  useEffect(() => {
    const autoScroll = () => {
      if (partnerCarouselRef.current) {
        const scrollAmount = 1
        partnerCarouselRef.current.scrollLeft += scrollAmount

        // Reset scroll position when reaching the end
        if (
          partnerCarouselRef.current.scrollLeft + partnerCarouselRef.current.clientWidth >=
          partnerCarouselRef.current.scrollWidth
        ) {
          partnerCarouselRef.current.scrollLeft = 0
        }
      }
    }

    const interval = setInterval(autoScroll, 30)
    return () => clearInterval(interval)
  }, [])

  const valueCards = [
    {
      title: language === "ko" ? "병원" : "Hospital",
      benefits:
        language === "ko"
          ? ["인건비 절약", "인력난 방지", "수익 극대화"]
          : ["Labor cost savings", "Prevent staff shortage", "Maximize revenue"],
    },
    {
      title: language === "ko" ? "간호인력" : "Nursing Staff",
      benefits:
        language === "ko"
          ? ["업무 분담 체계화", "업무 스트레스 완화", "업무량 감소"]
          : ["Systematic work distribution", "Reduce work stress", "Decrease workload"],
    },
    {
      title: language === "ko" ? "환자" : "Patients",
      benefits:
        language === "ko"
          ? ["보다 빠른 서비스 응대", "재요청의 번거로움 해소", "개선된 병원 환경"]
          : ["Faster service response", "Eliminate hassle of re-requests", "Improved hospital environment"],
    },
  ]

  const newsItems = [
    {
      id: 1,
      title:
        language === "ko"
          ? "MWC 2025 참가… AI 음성인식 기반 '케어보이스'로 간호사 업무 부담 경감"
          : "Participating in MWC 2025... Reducing nurse workload with AI voice recognition-based 'CareMinder'",
      date: "2025.03.10",
      excerpt:
        language === "ko"
          ? "스타트업 케어마인더가 MWC 2025에서 AI 음성인식 기반의 의료 솔루션 '케어보이스'와 스마트 병원 관리 시스템 '케어플로우'를 선보이며 유럽 시장 공략에 나섰다."
          : "Startup CareMinder showcased its AI voice recognition-based medical solution 'CareMinder' and smart hospital management system 'CareFlow' at MWC 2025, targeting the European market.",
    },
    {
      id: 2,
      title:
        language === "ko"
          ? "케어마인더, 프라이머 시드 투자 유치 성공"
          : "CareMinder successfully raises seed investment from Primer",
      date: "2025.02.15",
      excerpt:
        language === "ko"
          ? "병원 업무 자동화 솔루션 '케어보이스'를 개발하는 케어마인더가 프라이머로부터 시드 투자를 유치했다고 밝혔다."
          : "CareMinder, developer of the hospital work automation solution 'CareMinder', announced that it has raised seed investment from Primer.",
    },
    {
      id: 3,
      title:
        language === "ko"
          ? "강남베드로병원, 케어마인더 솔루션 도입으로 간호사 업무 효율 30% 향상"
          : "Gangnam Bedro Hospital improves nurse work efficiency by 30% with CareMinder solution",
      date: "2025.02.05",
      excerpt:
        language === "ko"
          ? "강남베드로병원이 케어마인더의 '케어보이스' 솔루션을 도입한 후 간호사들의 업무 효율이 30% 향상되었다고 발표했다."
          : "Gangnam Bedro Hospital announced that nurse work efficiency has improved by 30% after implementing CareMinder's solution.",
    },
  ]

  const partners = Array(20)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: `${language === "ko" ? "파트너" : "Partner"} ${i + 1}`,
    }))

  return (
    <main className="pt-16">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-careminder-800 mb-6"
            >
              {language === "ko" ? (
                <>
                  CareMinder,
                  <br />더 스마트한 병원 업무의 시작
                </>
              ) : (
                <>
                  CareMinder,
                  <br />
                  The Smart Start of Hospital Work
                </>
              )}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-careminder-700 mb-4">
              {language === "ko" ? "간호사도 함께 웃을 수 있는 병원" : "A hospital where nurses can smile too"}
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-8">
              {language === "ko"
                ? "CareMinder는 과도한 업무량과 체계가 부족했던 기존 병원 시스템으로 인한 간호인력의 문제를 해결하기 위해 최선을 다합니다."
                : "CareMinder is committed to solving nursing staff issues caused by excessive workload and lack of structure in existing hospital systems."}
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/products">
                <Button className="bg-careminder-500 hover:bg-careminder-600 text-white px-8 py-6 text-lg">
                  {language === "ko" ? "제품 알아보기" : "Explore Products"} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-careminder-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Value Creation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">
              {language === "ko" ? "가치 창출" : "Value Creation"}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 max-w-3xl mx-auto">
              {language === "ko"
                ? "CareMinder는 기존의 스마트 병실에는 존재하지 않았던 혁신적인 방법을 통해 병원, 간호인력, 그리고 환자에게 사회적 가치 창출을 기대하고 있습니다."
                : "CareMinder expects to create social value for hospitals, nursing staff, and patients through innovative methods that did not exist in traditional smart hospital rooms."}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueCards.map((card, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2,
                    },
                  },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-careminder-700">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {card.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-careminder-500 mr-3"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">
              {language === "ko" ? (
                <>
                  모두가 좋아하는, 특히
                  <br />
                  간호사가 좋아하는 태블릿 1위
                </>
              ) : (
                <>
                  Loved by everyone, especially
                  <br />
                  the #1 tablet preferred by nurses
                </>
              )}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 max-w-3xl mx-auto">
              {language === "ko"
                ? "케어마인더는 환자가 병실에서 음성으로 요청사항을 요구하면 간호인력에게 자동으로 업무 분담을 하여 전달을 해주어 간호인력의 동선도 줄이고 직접적인 채팅을 통한 답변을 통해 보다 더 빠른 대응 속도와 업무 과중에 대한 해결책을 제공합니다."
                : "CareMinder automatically distributes tasks to nursing staff when patients make voice requests in their rooms, reducing movement for nurses and providing faster response times and solutions to work overload through direct chat responses."}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-careminder-50 p-8 rounded-2xl"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="케어보이스 스마트베드"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-careminder-800 mb-2">
                {language === "ko" ? "환자가 간편하게 음성으로 이용하는" : "Easy voice operation for patients"}
              </h3>
              <p className="text-xl font-semibold text-careminder-600 mb-4">
                {language === "ko" ? "케어보이스 스마트베드" : "CareMinder SmartBed"}
              </p>
              <Link href="/products">
                <Button variant="outline" className="border-careminder-500 text-careminder-500 hover:bg-careminder-50">
                  {language === "ko" ? "자세히 보기" : "Learn More"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-careminder-50 p-8 rounded-2xl"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="케어보이스 그룹웨어"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-careminder-800 mb-2">
                {language === "ko" ? "간호사의 업무가 간편해지는" : "Simplifying nurses' work"}
              </h3>
              <p className="text-xl font-semibold text-careminder-600 mb-4">
                {language === "ko" ? "케어보이스 그룹웨어" : "CareMinder Groupware"}
              </p>
              <Link href="/products">
                <Button variant="outline" className="border-careminder-500 text-careminder-500 hover:bg-careminder-50">
                  {language === "ko" ? "자세히 보기" : "Learn More"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">
              {language === "ko" ? "케어마인더의 최신 소식을 확인하세요" : "Check out the latest news from CareMinder"}
            </h2>
          </motion.div>

          <Carousel className="w-full">
            <CarouselContent>
              {newsItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-careminder-700 line-clamp-2">{item.title}</CardTitle>
                      <CardDescription>{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 line-clamp-3 mb-4">{item.excerpt}</p>
                      <Link href={`/news/${item.id}`}>
                        <Button variant="link" className="text-careminder-500 p-0">
                          {language === "ko" ? "자세히 보기" : "Read More"} <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="text-center mt-8">
            <Link href="/news">
              <Button variant="outline" className="border-careminder-500 text-careminder-500 hover:bg-careminder-50">
                {language === "ko" ? "모든 소식 보기" : "View All News"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section with Auto-Scrolling */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-6">
              {language === "ko" ? "다양한 파트너와 함께합니다" : "We work with various partners"}
            </h2>
          </motion.div>

          <div
            ref={partnerCarouselRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex space-x-4 min-w-max">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="w-40 h-40 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 font-medium">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-careminder-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-careminder-800 mb-4">
                {language === "ko" ? (
                  <>
                    케어마인더와 함께
                    <br />더 행복한 병원 환경을 만들어나가세요
                  </>
                ) : (
                  <>
                    Create a happier hospital environment
                    <br />
                    with CareMinder
                  </>
                )}
              </h2>
            </motion.div>

            <motion.form
              variants={fadeIn}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {language === "ko" ? "성함" : "Name"}
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="hospital" className="text-sm font-medium">
                    {language === "ko"
                      ? "병원명 (개원예정인 경우 '개원예정'으로 입력)"
                      : "Hospital Name (Enter 'Opening Soon' if applicable)"}
                  </label>
                  <Input id="hospital" name="hospital" value={formData.hospital} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {language === "ko" ? "연락 가능한 전화번호" : "Contact Phone Number"}
                  </label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {language === "ko" ? "연락 가능한 이메일 주소" : "Contact Email Address"}
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="availableTime" className="text-sm font-medium">
                    {language === "ko" ? "연락 가능한 날짜 및 시간" : "Available Date and Time for Contact"}
                  </label>
                  <Input
                    id="availableTime"
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="referral" className="text-sm font-medium">
                    {language === "ko" ? "케어마인더를 알게된 경로" : "How did you hear about CareMinder"}
                  </label>
                  <Input id="referral" name="referral" value={formData.referral} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry" className="text-sm font-medium">
                  {language === "ko" ? "문의사항" : "Inquiry"}
                </label>
                <Textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="agreeTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {language === "ko" ? (
                      <>
                        <span>개인정보 수집 및 이용에 동의합니다. </span>
                        <Link href="/privacy" className="text-careminder-500 hover:underline">
                          개인정보처리방침
                        </Link>
                      </>
                    ) : (
                      <>
                        <span>I agree to the collection and use of personal information. </span>
                        <Link href="/privacy" className="text-careminder-500 hover:underline">
                          Privacy Policy
                        </Link>
                      </>
                    )}
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-careminder-500 hover:bg-careminder-600">
                {language === "ko" ? "문의하기" : "Submit Inquiry"}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

