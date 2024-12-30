'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ChatBot from '@/components/ChatBot';

export default function DownloadPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Preview on the Left */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                src="/images/user-phone-mockup-1.png"
                alt="Zip&Go App Preview"
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Download Section on the Right */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Download Zip&Go Now
            </h2>
            <p className="text-lg text-gray-600">
              Get Zip&Go, the app that connects you with local runners to handle your errands efficiently.
            </p>
            <div
              className="relative w-full max-w-xs mx-auto lg:mx-0"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Download Buttons */}
              <div className="flex space-x-4">
                {/* Android Download Button */}
                <Link
                  href="https://play.google.com/store/apps/details?id=com.zipandgo.android"
                  className={`inline-flex flex-col items-center px-4 py-2 text-base font-medium rounded-lg text-white transition duration-300 ${hovered ? 'bg-gray-200' : 'bg-gray-100'}`}
                >
                  <img
                    src="images/technology.png" // Your Android icon
                    alt="Google Play Store"
                    className="h-6 mb-2"
                  />
                  <span className="mt-1 text-xs font-medium text-gray-400">Android</span> {/* Small label for Android */}
                </Link>

                {/* iOS Download Button */}
                <Link
                  href="https://apps.apple.com/us/app/zip-and-go/idXXXXXX"
                  className={`inline-flex flex-col items-center px-4 py-2 text-base font-medium rounded-lg text-white transition duration-300 ${hovered ? 'bg-gray-200' : 'bg-gray-100'}`}
                >
                  <img
                    src="images/apple-logo.png" // Your Apple icon
                    alt="Apple App Store"
                    className="h-6 mb-2"
                  />
                  <span className="mt-1 text-xs font-medium text-gray-400">Apple</span> {/* Small label for Apple */}
                </Link>
              </div>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Efficient errand-running through local runners</li>
              <li>Save time and effort with flexible services</li>
              <li>Strengthen community connections and earn flexibly</li>
            </ul>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
