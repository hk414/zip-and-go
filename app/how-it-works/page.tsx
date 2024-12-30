import Link from 'next/link';
import { CheckCircle, DollarSign, Clock, Zap, Users, ChevronDown } from 'lucide-react';
import MovingBanner from '@/components/MovingBanner';
import ChatBot from '@/components/ChatBot';

export default function HowItWorks() {
  const userSteps = [
    { 
      name: 'Post Your Task', 
      description: 'Share your errand details, including task description and location.', 
      icon: CheckCircle, 
      imageURL: './images/user-phone-mockup-1.png',
      mockupPosition: 'left' 
    },
    { 
      name: 'Choose Pool Purchase', 
      description: 'Choose to make this task a pool purchase or join others\' pool for savings.', 
      icon: Users, 
      imageURL: './images/user-phone-mockup-2.png',
      mockupPosition: 'right' 
    },
    { 
      name: 'Connect & Pay', 
      description: 'Set up your delivery preferences and make secure payments.', 
      icon: DollarSign, 
      imageURL: './images/user-phone-mockup-3.png',
      mockupPosition: 'left' 
    },
  ];

  const runnerSteps = [
    { 
      name: 'Browse Tasks', 
      description: 'Browse available tasks in your area and choose one that fits your skills.', 
      icon: Clock, 
      imageURL: './images/user-phone-mockup-1.png',
      mockupPosition: 'left' 
    },
    { 
      name: 'Accept Task', 
      description: 'Accept the task and review the details before proceeding.', 
      icon: Zap, 
      imageURL: './images/user-phone-mockup-2.png',
      mockupPosition: 'right' 
    },
    { 
      name: 'Complete the Task', 
      description: 'Complete the task quickly and efficiently, ensuring customer satisfaction.', 
      icon: CheckCircle, 
      imageURL: './images/user-phone-mockup-3.png',
      mockupPosition: 'left' 
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-300 py-16 sm:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Simple Steps
          </p>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-4xl lg:text-6xl">
            to Get Things Done
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-indigo-100 leading-relaxed">
            Whether you&apos;re a user looking to get your errands done or a runner aiming to earn money by helping others, our platform provides a seamless and efficient process. With Zip&Go, you can save time and effort, while also supporting your community.
          </p>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#Users" className="flex flex-col items-center text-white hover:text-yellow-400">
            <ChevronDown className="h-10 w-10 animate-bounce" />
            <span className="mt-2 text-base font-medium">Explore</span>
          </a>
        </div>
      </div>

      <MovingBanner />

          {/* User Steps */}
          <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900" id="Users">How <span className='text-indigo-600'>Users</span> Get Errands Done</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Follow these simple steps to get your tasks done efficiently, safely, and affordably.
                </p>
                <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
                  {userSteps.map((step, index) => (
                    <div
                      key={step.name}
                      className={`relative ${step.mockupPosition === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:flex sm:items-center transform hover:scale-105 transition duration-300 ease-in-out`}
                    >
                      {/* Phone Mockup Section */}
                      <div className="sm:w-full sm:max-w-xs relative hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="w-full h-full bg-gray-200 rounded-lg shadow-md hover:shadow-xl flex items-center justify-center">
                          <img
                            src={step.imageURL}
                            alt="Phone Mockup"
                            className="max-w-full max-h-full object-cover rounded-lg transition duration-300 ease-in-out"
                          />
                        </div>
                      </div>

                      {/* Step Text Section */}
                      <div className="sm:w-full sm:max-w-lg mt-6 sm:mt-0 text-center sm:text-left sm:ml-8 sm:mr-8">
                        {/* Step Number with Rounded Background */}
                        <p className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center bg-indigo-600 text-white w-8 h-8 rounded-full">
                          <span className="font-bold">{index + 1}</span>
                        </p>
                        <p className="mt-2 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                        <p className="mt-2 text-base text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out cursor-pointer">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-indigo-50 py-16 sm:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Post a Task Now
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

        {/* Runners Steps */}
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900" id="Runners">How <span className='text-indigo-600'>Runners</span> Earn Money</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Follow these simple steps to complete tasks efficiently, earn money, and help users get their errands done with ease.
                </p>
                <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
                  {runnerSteps.map((step, index) => (
                    <div
                      key={step.name}
                      className={`relative ${step.mockupPosition === 'left' ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:flex sm:items-center transform hover:scale-105 transition duration-300 ease-in-out`}
                    >
                      {/* Phone Mockup Section */}
                      <div className="sm:w-full sm:max-w-xs relative hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="w-full h-full bg-gray-200 rounded-lg shadow-md hover:shadow-xl flex items-center justify-center">
                          <img
                            src={step.imageURL}
                            alt="Phone Mockup"
                            className="max-w-full max-h-full object-cover rounded-lg transition duration-300 ease-in-out"
                          />
                        </div>
                      </div>

                      {/* Step Text Section */}
                      <div className="sm:w-full sm:max-w-lg mt-6 sm:mt-0 text-center sm:text-left sm:ml-8 sm:mr-8">
                        {/* Step Number with Rounded Background */}
                        <p className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center bg-indigo-600 text-white w-8 h-8 rounded-full">
                          <span className="font-bold">{index + 1}</span>
                        </p>
                        <p className="mt-2 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                        <p className="mt-2 text-base text-gray-500 hover:text-indigo-600 transition duration-300 ease-in-out cursor-pointer">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
    <ChatBot  />
    </div>
  );
}
