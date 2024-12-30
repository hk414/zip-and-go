import MovingBanner from '@/components/MovingBanner';
import ChatBot from '@/components/ChatBot';
import { ChevronDown } from 'lucide-react';

const people = [
  {
    name: 'Xu Qian Chin',
    role: 'CEO & Founder',
    imageUrl: './placeholder.svg',
    bio: 'Chin is passionate about making everyday tasks easier for people.',
  },
  {
    name: 'Hui Xin Koh',
    role: 'CTO',
    imageUrl: './images/huikoh.jpg',
    bio: 'CC is a seasoned software engineer with a focus on creating scalable and efficient platforms.',
  },
  {
    name: 'Wei Ying Chong',
    role: 'Head of Finance',
    imageUrl: './placeholder.svg',
    bio: 'Chong brings years of accounting and finance experience to ensure Zip&Go runs smoothly.',
  },
  {
    name: 'Brenda Chan',
    role: 'Head of Marketing',
    imageUrl: './placeholder.svg',
    bio: 'Brenda is a creative marketing professional dedicated to spreading the word about Zip&Go\'s mission.',
  },
];

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-300 py-16 sm:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Empowering Communities
            </p>
            <p className="mt-2 text-4xl font-extrabold text-white sm:text-4xl lg:text-6xl">
              One Errand at a Time
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-indigo-100 leading-relaxed">
              Zip&Go is a community-driven platform that connects users with local runners to simplify everyday tasks. 
              From groceries to urgent errands, we’re here to make life easier for everyone.
            </p>
          </div>

          {/* Scroll Down Button */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <a href="#Mission" className="flex flex-col items-center text-white hover:text-yellow-400">
              <ChevronDown className="h-10 w-10 animate-bounce" />
              <span className="mt-2 text-base font-medium">Explore</span>
            </a>
          </div>
        </div>
      
      {/* Moving Banner */}
      <MovingBanner />

      {/* Problem Section
      <div className="bg-gray-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            The Problem We’re Solving
          </h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div className="flex items-start space-x-4 hover:shadow-lg p-4 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">High Delivery Costs</h3>
                <p className="mt-2 text-base text-gray-500">
                  Traditional delivery platforms often charge hefty fees, making deliveries expensive and inaccessible. 
                  Zip&Go reduces costs by optimizing local deliveries and minimizing the need for multiple drivers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 hover:shadow-lg p-4 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Inconvenience in Everyday Errands</h3>
                <p className="mt-2 text-base text-gray-500">
                  From collecting online orders to last-minute grocery pickups, errands can be time-consuming. 
                  Zip&Go streamlines these tasks, giving you more time to focus on what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Mission Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="Mission">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Mission
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
            At Zip&Go, our mission is to create a world where everyday tasks are effortless, communities are more connected, 
            and individuals have the freedom to focus on what truly matters.
          </p>
        </div>
        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 10h10M9 16h6m2 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Empower Local Communities</h3>
                  <p className="mt-2 text-base text-gray-500">
                    By connecting users with local runners, we create flexible earning opportunities and strengthen neighborhood bonds.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16m-8-8v8" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Simplify Daily Life</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our platform streamlines everyday tasks, giving you back valuable time to spend on the things you love.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M9.379 5.379A12 12 0 1020.621 16.62 12 12 0 009.379 5.38z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Promote Sustainability</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our pool purchase option helps reduce waste and encourages cost-sharing by allowing users to collaborate on buying in bulk.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Support Local Businesses</h3>
                  <p className="mt-2 text-base text-gray-500">
                    By connecting our runners to local stores, we foster economic growth and support small businesses in your community.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Enhance Convenience</h3>
                  <p className="mt-2 text-base text-gray-500">
                    From groceries to urgent errands, Zip&Go makes life easier by bringing services right to your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61A2.12 2.12 0 0018.5 3H5.5a2.12 2.12 0 00-2.34 1.61l-1 7A2.12 2.12 0 004.5 13h15a2.12 2.12 0 001.84-1.39l1-7a2.12 2.12 0 00-.5-1.6zM7 18a4 4 0 008 0" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Build Trust</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our vetted runners and transparent processes ensure a safe and trustworthy experience for every user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Image Highlight Section
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: "local-runner-service.jpg",
              title: "Reliable Local Runners",
              description: "Our trusted runners are always ready to handle your errands with efficiency and care."
            },
            {
              image: "community-connections.jpg",
              title: "Strengthening Communities",
              description: "We bring neighbors closer by fostering connections and supporting local businesses."
            },
            {
              image: "bulk-purchase-option.jpg",
              title: "Bulk Purchase Made Easy",
              description: "Save money and reduce waste with our seamless group purchase options."
            }
          ].map(({ image, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={`/images/${image}`}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}



            {/* Team Section */}
            <div className="bg-white">
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-500">
                      Our diverse team of experts is dedicated to making Zip&Go the best platform for connecting people and simplifying everyday tasks.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul
                      role="list"
                      className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                    >
                      {people.map((person) => (
                        <li key={person.name}>
                          <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                              <img
                              // round to a circle
                                className="object-cover shadow-lg rounded-lg"
                                src={person.imageUrl}
                                style={{ height: '400px', width: '400px', objectFit: 'cover' }}
                                alt={person.name}
                              />
                            </div>
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                            <div className="text-lg">
                              <p className="text-gray-500">{person.bio}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-indigo-600 py-16 sm:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white">
                  Join the Zip&Go Community Today
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-200">
                  Experience the convenience of Zip&Go and help build a more connected community. 
                  Whether you’re running errands or earning as a local runner, we’re here to make life simpler.
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          <ChatBot />

          </div>
  );
}
