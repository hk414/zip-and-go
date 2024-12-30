'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sending form data to the backend
    const response = await fetch('http://localhost:5000/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Error sending email');
    }
  };

  return (
    <div className="bg-gray-100 py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Details */}
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We are here to assist you. Feel free to reach out to us!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <span className="text-3xl text-indigo-600">📍</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
                  <p className="text-gray-600">Manchester, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <span className="text-3xl text-indigo-600">📞</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+447787409400" className="text-indigo-500 hover:text-indigo-700">
                      +44 (778) 7409400
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <span className="text-3xl text-indigo-600">✉️</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:contact@zipandgo.com"
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      contact@zipandgo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Google Maps and Contact Form */}
          <div className="space-y-10">
            {/* Google Maps */}
            <div className="h-80 rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=Manchester&key=AIzaSyAqybiN598uZ2aLHu-Yvj1I2QeoVt1Goyg"
                allowFullScreen
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="mt-2 relative">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Let us know how we can help you."
                      value={formData.message}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                  <div className="ml-3 text-gray-700">
                    <p className="text-sm">
                      By selecting this, you agree to our{' '}
                      <a href="#" className="font-medium text-indigo-500 hover:text-indigo-700">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-indigo-500 hover:text-indigo-700">
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
