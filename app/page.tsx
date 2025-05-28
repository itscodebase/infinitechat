'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MessageCircle, Sparkles, Zap, Globe, Star, ArrowRight } from "lucide-react"
import { useCallback } from "react"

export default function DomainSalePage() {
  const otherDomains = [
    { name: "cardinnovators.com", price: "$500", description: "Perfect for card innovation businesses" },
    { name: "zippycards.com", price: "$1,600", description: "Ideal for fast card services" },
    { name: "pairzo.com", price: "$1,000", description: "Great for pairing/matching platforms" },
    { name: "infinitchat.com", price: "$2,000", description: "Alternative chat domain" },
    { name: "sethukumar.com", price: "$9,999", description: "Personal brand domain" },
  ]

  const handleEmailClick = useCallback(() => {
    alert('Please contact us at sethukumartirumanyam@gmail.com')
    // if (typeof window !== 'undefined') {
    //   window.location.href = 'mailto:sethukumartirumanyam@gmail.com';
    // }
  }, []);

  const handleCallClick = useCallback(() => {
    alert('Please contact us at +918886257181')
    // if (typeof window !== 'undefined') {
    //   window.location.href = 'tel:+918886257181';
    // }
  }, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-medium shadow-lg">
              <Star className="w-4 h-4" />
              Premium AI Domain Available
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
                Infinite
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                Chat
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                .ai
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Secure this{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-bold">
                premium AI domain
              </span>{" "}
              for your next-generation conversational AI platform. Perfect for chatbots, AI assistants, and
              communication technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                $4,500
              </div>
              <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                🔥 Buy Now Price
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        onClick={handleEmailClick}
      >
        <Mail className="w-5 h-5 mr-2" />
        Contact to Purchase
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={handleCallClick}
      >
        <Phone className="w-5 h-5 mr-2" />
        Call Now
      </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Why InfiniteChat.ai?
            </span>
          </h2>
          <p className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto">
            Discover what makes this domain perfect for your AI venture
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  AI-Ready Domain
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Perfect for AI chatbots, virtual assistants, and conversational AI platforms. The .ai extension
                  signals innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Memorable & Brandable
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Easy to remember, type, and perfect for building a strong AI brand identity that customers will trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Premium .ai Extension
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  The .ai extension is highly sought after for AI and technology companies. Instant credibility and
                  recognition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Domains Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-600">
                Other Premium Domains
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our additional domain portfolio for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDomains.map((domain, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group bg-white"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {domain.name}
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                      {domain.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">{domain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Inquire About This Domain
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Ready to Secure Your Domain?
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Contact us today to discuss pricing, transfer process, and secure your premium domain name.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-800 font-mono text-lg mb-4 break-all">sethukumartirumanyam@gmail.com</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-800 font-mono text-lg mb-4">+91 8886257181</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white/80 text-lg">© 2025 Domain Portfolio. All rights reserved.</p>
            <p className="text-white/60 mt-2">Professional domain brokerage services</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
