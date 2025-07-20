"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, User, Mail, Phone, Calendar } from "lucide-react";

import { PatientForm } from "./forms/PatientForm";

interface FlippingModalProps {
  children: React.ReactNode;
}

export const FlippingModal = ({ children }: FlippingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsOpen(true);
    // Start flip animation after modal appears
    setTimeout(() => {
      setIsFlipped(true);
    }, 300);
  };

  const closeModal = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 600);
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Initial animation - modal appears from center with scale and rotation
      gsap.fromTo(
        modalRef.current,
        {
          scale: 0,
          opacity: 0,
          rotationY: 0,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (isFlipped && modalContentRef.current) {
      // Flip animation - stops at 180 degrees (middle of flip)
      gsap.to(modalContentRef.current, {
        rotationY: 180,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Keep it at 180 degrees (middle of flip)
          gsap.set(modalContentRef.current, { rotationY: 180 });
        },
      });
    }
  }, [isFlipped]);

  // Create a trigger element with proper event handling
  const createTrigger = () => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        },
        type: 'button'
      });
    }
    return (
      <button 
        onClick={openModal}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
      >
        {children}
      </button>
    );
  };

  return (
    <>
      {createTrigger()}

      {/* Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Container - Centered */}
          <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ perspective: "1200px" }}
          >
            <div
              ref={modalContentRef}
              className="relative w-[60%] h-[50%] transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front side - Initial View */}
              <div
                className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-center space-y-6 p-8">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <User className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-800">
                    Welcome to Neo Care
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Your health is our priority. Let's get you started with the best medical care.
                  </p>
                  <div className="flex items-center justify-center space-x-4 mt-6">
                    <div className="flex items-center space-x-2 text-teal-600">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm font-medium">Quick Booking</span>
                    </div>
                    <div className="flex items-center space-x-2 text-teal-600">
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium">Expert Doctors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back side - Form */}
              <div
                className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl backface-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-teal-800">
                        Patient Information
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Please provide your details to continue
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Form */}
                  <div className="flex-1 overflow-y-auto">
                    <PatientForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}; 