"use client";

import { ArrowRight, Calendar, Clock, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-teal-50 to-mint-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Modern Healthcare
                <span className="block text-teal-600">Management</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Streamline your healthcare practice with our comprehensive patient management system. 
                Book appointments, manage records, and provide exceptional care with ease.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/patients/new/register"
                  className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Get Started
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link
                  href="/admin"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Admin Panel
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <Image
                  src="/assets/images/onboarding-img.png"
                  alt="Healthcare Management"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your practice
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive tools designed for modern healthcare providers
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex size-10 items-center justify-center rounded-lg bg-teal-100">
                <User className="size-5 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Patient Management</h3>
              <p className="mt-2 text-gray-600">
                Complete patient profiles with medical history, contact information, and treatment plans.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex size-10 items-center justify-center rounded-lg bg-teal-100">
                <Calendar className="size-5 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Appointment Scheduling</h3>
              <p className="mt-2 text-gray-600">
                Easy appointment booking with real-time availability and automated reminders.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex size-10 items-center justify-center rounded-lg bg-teal-100">
                <Clock className="size-5 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Time Management</h3>
              <p className="mt-2 text-gray-600">
                Optimize your schedule with intelligent time slots and conflict detection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex size-10 items-center justify-center rounded-lg bg-teal-100">
                <Phone className="size-5 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Communication</h3>
              <p className="mt-2 text-gray-600">
                Stay connected with patients through SMS notifications and secure messaging.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex size-10 items-center justify-center rounded-lg bg-teal-100">
                <MapPin className="size-5 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Location Services</h3>
              <p className="mt-2 text-gray-600">
                Manage multiple locations and coordinate care across different facilities.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="flex size-10 items-center justify-center rounded-lg bg-teal-100">
                <ArrowRight className="size-5 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Analytics & Reports</h3>
              <p className="mt-2 text-gray-600">
                Track performance metrics and generate comprehensive reports for better decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-teal-600 px-6 py-12 text-center sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your healthcare practice?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Join thousands of healthcare providers who trust our platform
            </p>
            <div className="mt-8">
              <Link
                href="/patients/new/register"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-teal-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
