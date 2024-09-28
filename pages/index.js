import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const MapComponent = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <p className="text-center p-4">Loading Map...</p>
});

const flowers = [
  {
    name: 'Rose',
    image: '/images/rose.jpg',
    description: 'Beautiful rose bouquet',
  },
  {
    name: 'Tulip',
    image: '/images/tulip.jpg',
    description: 'Colorful tulip arrangement',
  },
  {
    name: 'Sunflower',
    image: '/images/sunflower.jpg',
    description: 'Bright sunflower bouquet',
  },
];

const center = {
  lat: -6.2088,
  lng: 106.8456
};

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col">
      <Head>
        <title>Blooming Delights - Your Local Flower Shop</title>
        <meta name="description" content="Discover beautiful flowers and bouquets at Blooming Delights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl text-pink-500">Blooming Delights</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Catalog</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="bg-pink-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Welcome to <span className="text-pink-500">Blooming Delights</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Discover the beauty of nature with our exquisite collection of flowers and bouquets.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 md:py-4 md:text-lg md:px-10">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Flowers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {flowers.map((flower) => (
                <div key={flower.name} className="bg-pink-50 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-48 relative">
                    <Image
                      src={flower.image}
                      alt={`${flower.name} bouquet`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{flower.name}</h3>
                    <p className="text-gray-600">{flower.description}</p>
                    <a href="#" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Find Us</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-96 w-full">
                <MapComponent center={center} />
              </div>
              <p className="text-center text-gray-600 mt-4">
                123 Floral Street, Blossom City, 12345
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Blooming Delights</h3>
              <p className="mt-2 text-gray-400">Bringing joy with every bloom</p>
            </div>
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Blooming Delights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}