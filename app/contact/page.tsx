"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    phone: "",
    email: "",
    availableTime: "",
    referral: "",
    inquiry: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.")
    setFormData({
      name: "",
      hospital: "",
      phone: "",
      email: "",
      availableTime: "",
      referral: "",
      inquiry: "",
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

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-careminder-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-careminder-800 mb-6">문의 사항</h1>
            <p className="text-lg text-gray-700">하단 양식을 통해 문의하세요. 최대한 빠른 시일내에 답변드리겠습니다.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* KakaoTalk Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="mb-6">
                    <MessageSquare className="h-16 w-16 text-careminder-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-center text-careminder-800 mb-4">카카오톡 오픈채팅</h2>
                  <p className="text-center mb-6">
                    카카오톡 오픈채팅방 링크:
                    <br />
                    <a
                      href="https://open.kakao.com/o/sSKoc41f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-careminder-500 hover:underline"
                    >
                      https://open.kakao.com/o/sSKoc41f
                    </a>
                  </p>
                  <div className="relative w-32 h-32 mx-auto">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="카카오톡 QR 코드"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-careminder-800 mb-6">문의 양식 제출</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        성함
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="hospital" className="text-sm font-medium">
                        병원명 (개원예정인 경우 '개원예정'으로 입력)
                      </label>
                      <Input id="hospital" name="hospital" value={formData.hospital} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        연락 가능한 전화번호
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        연락 가능한 이메일 주소
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="availableTime" className="text-sm font-medium">
                        연락 가능한 날짜 및 시간
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
                        케어마인더를 알게된 경로
                      </label>
                      <Input id="referral" name="referral" value={formData.referral} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="inquiry" className="text-sm font-medium">
                        문의사항
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
                    <Button type="submit" className="w-full bg-careminder-500 hover:bg-careminder-600">
                      문의하기
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-careminder-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold text-careminder-800 mb-6">
              찾아오시는 길
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="케어마인더 위치"
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-careminder-700 mb-2">주소</h3>
                <p>
                  서울특별시 강남구 테헤란로 123
                  <br />
                  케어마인더 빌딩 8층
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-careminder-700 mb-2">연락처</h3>
                <p>
                  전화: 02-123-4567
                  <br />
                  이메일: contact@careminder.co.kr
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-careminder-700 mb-2">영업시간</h3>
                <p>
                  평일: 09:00 - 18:00
                  <br />
                  주말 및 공휴일: 휴무
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

