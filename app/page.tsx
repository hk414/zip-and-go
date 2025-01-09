"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle, Truck, Smartphone, Lightbulb, Star } from 'lucide-react';
import MovingBanner from '@/components/MovingBanner';
import ChatBot from '@/components/ChatBot'; 

export default function Home() {
  return (
    
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <main>

          {/* Hero Section */}
          <div className="relative bg-indigo-600 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
              <div className="text-white text-center lg:text-left space-y-6">
                <div className="bg-yellow-400 text-yellow-900 text-sm font-semibold uppercase px-4 py-1 inline-block rounded-full">
                  Launching Soon
                </div>
                <div>
                  <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                  Effortless Errands
                  </h1>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">
                  Anytime, Anywhere
                  </h2>
                </div>
                <p className="text-lg text-indigo-200 max-w-xl mx-auto lg:mx-0">
                  Zip&Go connects you with trusted local runners to handle your everyday tasks. Save time, effort, and hassle with our convenient service.
                </p>
                <div className="flex justify-center lg:justify-start items-center space-x-4">
                  <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5" style={{ fill: '#FBBF24' }} /> 
                  ))}
                  </div>
                  <span className="text-indigo-200 text-sm">4.8/5 based on 1,200 reviews</span>
                </div>
                <div className="mt-6 flex justify-center lg:justify-start items-center space-x-6">
                  {/* Get Started Button */}
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg text-indigo-600 bg-white hover:bg-indigo-100 transition duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>

                  {/* Download Buttons */}
                  <div className="flex space-x-4">
                    {/* Android Download Button */}
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.zipandgo.android"
                      className="inline-flex flex-col items-center px-4 py-2 text-base font-medium rounded-lg text-white hover:bg-white transition duration-300"
                    >
                      <img
                        src="./images/technology.png" // Your Android icon
                        alt="Google Play Store"
                        className="h-6 mb-2"
                      />
                      <span className="mt-1 text-xs font-medium text-gray-400">Android</span> {/* Small label for Android */}
                    </Link>
                    {/* <span className="text-3xl font-bold text-blue px-2 py-1 rounded-full">+</span> */}

                    {/* iOS Download Button */}
                    <Link
                      href="https://apps.apple.com/us/app/zip-and-go/idXXXXXX"
                      className="inline-flex flex-col items-center px-4 py-2 text-base font-medium rounded-lg text-white hover:bg-white transition duration-300"
                    >
                      <img
                        src="./images/apple-logo.png" // Your Apple icon
                        alt="Apple App Store"
                        className="h-6 mb-2"
                      />
                      <span className="mt-1 text-xs font-medium text-gray-400">Apple</span> {/* Small label for Apple */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 lg:ml-8">
                <img
                  src="./images/hero-bg.png"
                  alt="Illustration of a person running errands"
                />
              </div>
            </div>
          </div>

          <MovingBanner />

          {/* Features Section */}
          <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-6">
                <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
                  Our Features
                </h2>
                <p className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Simplifying Your Life, One Errand at a Time
                </p>
                <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                  Zip&Go makes managing your tasks easier and more affordable. Here&apos;s how we do it:
                </p>
              </div>

              {/* Feature Cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[ 
                  { name: 'Post Your Task', description: 'Share your errand details and get matched with a local runner.', icon: CheckCircle },
                  { name: 'Connect & Pay', description: 'Set up your delivery preferences and make secure payments.', icon: Smartphone },
                  { name: 'Get It Done', description: 'Your runner completes the task quickly and efficiently.', icon: Truck },
                  { name: 'Pool Purchases', description: 'Group deliveries to save on costs with friends or family.', icon: Truck },
                  { name: 'Track Your Errands', description: 'Stay updated on the status of your errands in real-time.', icon: Smartphone },
                  { name: 'AI-Driven Assistance', description: 'Get smart suggestions and recommendations using AI.', icon: Lightbulb },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-95 hover:shadow-2xl space-y-6 flex flex-col items-center"
                  >
                    {/* Icon Section */}
                    <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 rounded-full shadow-lg mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Feature Details */}
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-gray-500 text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

                    
          {/* Mockup Section */}
          <div className="bg-indigo-600 py-16 sm:py-24 text-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                See Zip&Go in Action
              </h2>
              <p className="text-lg text-indigo-200 max-w-xl mx-auto">
                Experience how Zip&Go simplifies your life with our easy-to-use app. From posting tasks to tracking your errands, Zip&Go is designed to save you time and effort.
              </p>

              <div className="mt-8 relative">
                {/* Background Circle for Visual Appeal */}
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-indigo-700 to-indigo-800 rounded-full opacity-30"></div>
                <img
                  src="./images/zip.jpg"
                  alt="Zip&Go App Mockup"
                  className="mx-auto w-full max-w-md rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
                />
              </div>
              
              {/* Optional Call to Action */}
              {/* <div className="mt-8">
                <Link
                  href="/download"
                  className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-100 transition duration-300"
                >
                  Get Started with Zip&Go
                </Link>
              </div> */}
            </div>
          </div>


          {/* Download Section */}
          <div className="bg-indigo-50 py-16 sm:py-24 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Get the App Now
              </h2>
              <p className="text-lg text-gray-600">
                Zip&Go is available for download on both Android and iOS. Get started today!
              </p>
              <div className="flex justify-center space-x-8">
                {/* Android Download Button */}
                <div className="flex flex-col items-center space-y-2">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.zipandgo.android"
                    className="inline-flex flex-col items-center px-6 py-4 text-base font-medium rounded-lg text-white bg-black hover:bg-green-600 transition duration-300"
                  >
                    <img
                      src="./images/playstore.png"
                      alt="Google Play Store"
                      className="h-8"
                    />
                    <span className="text-sm">Get it on</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </Link>
                </div>

                {/* iOS Download Button */}
                <div className="flex flex-col items-center space-y-2">
                  <Link
                    href="https://apps.apple.com/us/app/zip-and-go/idXXXXXX"
                    className="inline-flex flex-col items-center px-6 py-4 text-base font-medium rounded-lg text-white bg-black hover:bg-blue-600 transition duration-300"
                  >
                    <img
                      src="./images/app-store.png"
                      alt="Apple App Store"
                      className="h-8"
                    />
                    <span className="text-sm">Download on the</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

{/* Testimonials Section */}
<div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
      What Our Users Are Saying
    </h2>
    <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
      Hear from our satisfied users and how Zip&Go has made a positive impact on their lives.
    </p>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: 'Zander Ong', testimonial: 'Zip&Go has been a lifesaver for managing my busy schedule. It’s fast and easy!', image: './images/user1.png' },
        { name: 'Edwin Chia', testimonial: 'The convenience is incredible with pool purchase. I can’t imagine life without it now.', image: './images/user2.png' },
        { name: 'Yi Hang Lok', testimonial: 'Reliable and affordable, Zip&Go is a must-have for anyone who wants to save time.', image: './images/user3.png' }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl p-8 transition-all transform hover:scale-105 hover:shadow-2xl space-y-6">
          {/* Testimonial Text */}
          <p className="text-lg text-gray-500 italic">{testimonial.testimonial}</p>

          {/* User Info */}
          <div className="mt-6 flex items-center justify-center space-x-4">
            <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-full border-2 border-indigo-600" />
            <div className="text-left">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              {/* star rating */}
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" style={{ fill: '#FBBF24' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Trusted By Section */}
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
      Trusted by Leading Brands
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
      <div className="flex flex-col items-center">
        <img
          src="./images/brennynotes.png"
          alt="Company 1"
          className="h-16 mb-4"
        />
        <p className="text-sm text-gray-500">BrennyNotes</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./images/notablekingdom.png"
          alt="Company 2"
          className="h-16 mb-4"
        />
        <p className="text-sm text-gray-500">Notable Kingdom</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="./images/astareasy.png"
          alt="Company 3"
          className="h-16 mb-4"
        />
        <p className="text-sm text-gray-500">Asta Easy</p>
      </div>
    </div>
  </div>
</div>



        </main>
        <ChatBot />
      </div>
    </div>
    
  );
}

