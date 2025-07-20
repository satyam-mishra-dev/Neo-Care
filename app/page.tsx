"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Stethoscope, Heart, Eye, Leaf, BookOpen, Zap, Menu, X } from "lucide-react";
import { FlippingModal } from "@/components/FlippingModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-teal-100/50 px-6 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <span className="text-2xl font-bold text-teal-700">Neo</span>
            <span className="text-2xl font-bold text-teal-500">Care</span>
            <span className="absolute -top-1 -right-1 text-teal-400 text-lg">+</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Home</a>
          <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">About us</a>
          <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Service</a>
          <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Pages</a>
          <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Doctors</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <FlippingModal>
            <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Appointment
            </button>
          </FlippingModal>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg flex items-center justify-center shadow-sm"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-teal-700" />
            ) : (
              <Menu className="w-5 h-5 text-teal-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-teal-200/50 md:hidden z-50 shadow-lg">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Home</a>
              <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">About us</a>
              <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Service</a>
              <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Pages</a>
              <a href="#" className="text-teal-700 font-medium hover:text-teal-600 transition-colors">Doctors</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-12 min-h-[80vh] flex items-center">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Curved Lines */}
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" stroke="#14B8A6" strokeWidth="0.3" fill="none" />
            <path d="M0,60 Q25,40 50,60 T100,60" stroke="#14B8A6" strokeWidth="0.3" fill="none" />
            <path d="M0,40 Q25,20 50,40 T100,40" stroke="#14B8A6" strokeWidth="0.3" fill="none" />
            <path d="M0,70 Q25,50 50,70 T100,70" stroke="#14B8A6" strokeWidth="0.2" fill="none" />
            <path d="M0,30 Q25,10 50,30 T100,30" stroke="#14B8A6" strokeWidth="0.2" fill="none" />
          </svg>
        </div>

        {/* Decorative Icons with Enhanced Styling */}
        <div className="absolute top-8 left-8 animate-float">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center shadow-lg">
            <Stethoscope className="w-6 h-6 text-teal-700" />
          </div>
        </div>
        <div className="absolute top-8 right-8 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-red-600" />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto flex items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              {/* Text Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-100/50 to-mint-100/50 rounded-2xl blur-2xl opacity-60"></div>
              
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 leading-tight mb-6">
                YOUR HEALTH,<br />
                <span className="bg-gradient-to-r from-teal-600 to-mint-600 bg-clip-text text-transparent">OUR PRIORITY</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Trusted medical care for you and your family with cutting-edge technology and compassionate healthcare professionals.
            </p>
            
            {/* CTA Buttons with Enhanced Styling */}
            <div className="flex items-center space-x-4">
              <FlippingModal>
                <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span>Find a Doctor</span>
                </button>
              </FlippingModal>
              <button className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Doctor Image with Enhanced Styling */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Image Container with Glow Effect */}
              <div className="relative z-20">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-200/30 to-mint-200/30 rounded-3xl blur-2xl"></div>
                <Image
                  src="/assets/images/onboarding-img.png"
                  alt="Doctor"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white/20"
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center animate-float shadow-lg">
                <Stethoscope className="w-10 h-10 text-teal-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-mint-100 to-mint-200 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: "1.5s" }}>
                <Heart className="w-8 h-8 text-mint-700" />
              </div>
              
              {/* Additional Decorative Elements */}
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-teal-300/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 -right-4 w-3 h-3 bg-mint-400/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with Enhanced Styling */}
      <section className="bg-gradient-to-r from-teal-100/80 to-mint-100/80 backdrop-blur-sm border-t border-teal-200/50 px-6 py-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-4 h-4 text-teal-700" />
              </div>
              <span className="text-teal-700 font-medium group-hover:text-teal-800 transition-colors">Vision</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-mint-200 to-mint-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Leaf className="w-4 h-4 text-mint-700" />
              </div>
              <span className="text-teal-700 font-medium group-hover:text-teal-800 transition-colors">Greenish</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-teal-700 font-medium group-hover:text-teal-800 transition-colors">Glossy</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-mint-200 to-mint-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-4 h-4 text-mint-700" />
              </div>
              <span className="text-teal-700 font-medium group-hover:text-teal-800 transition-colors">Ebooks</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 text-teal-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
