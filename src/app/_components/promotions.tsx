import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const promotions = [
  {
    title: 'SoloFoundersHub (Coming Soon)',
    description: 'Dive into our database of 4,310 case studies and see how thousands of solo entrepreneurs created profitable online businesses. ',
    image: 'https://res.cloudinary.com/imaginify/image/upload/v1723268012/solofounders_d3govh.webp',
    link: 'https://launchsolo.co',
    buttonText: 'Learn More',
  },
  {
    title: 'Hume AI',
    description: 'AI to measure and understand how tech affects human emotion. The worlds first voice AI that responds empathically, built to align technology with human well-being.',
    image: 'https://res.cloudinary.com/imaginify/image/upload/v1724024023/hume_fhtg0l.png',
    link: 'https://www.hume.ai/',
    buttonText: 'Learn More',
  },
  {
    title: 'Just Launch It',
    description: "Startup ideas, sent weekly. Your Saturday issue to find startup ideas, launch fast, and get profitable. Join 25,000+ solo entrepreneurs.",
    image: 'https://res.cloudinary.com/imaginify/image/upload/v1723268223/exploding_brzkzy.webp',
    link: 'https://newsletter.solofoundershub.com/',
    buttonText: 'Read',
  },
];

export default function Promotions() {
  return (
    <div className="flex flex-col space-y-4 max-w-3xl mx-auto md:max-w-4xl lg:max-w-5xl">
      <div className="text-white text-3xl font-medium text-center mb-6">
        Companies
      </div>
      {promotions.map((promo, idx) => (
        <Link
          key={idx}
          href={promo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-between items-center bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 px-4 py-3 md:px-8 md:py-6 rounded-lg cursor-pointer"
        >
          <div className="flex flex-row space-x-3 md:space-x-6 items-center flex-grow">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src={promo.image}
                alt={promo.title}
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-200 text-base md:text-lg md:font-medium">{promo.title}</span>
              <span className="text-zinc-400 text-sm md:text-base">{promo.description}</span>
            </div>
          </div>
          <div className="flex items-center ml-4 flex-shrink-0">
            <span className="hidden md:inline text-zinc-400 text-sm md:text-lg border border-zinc-700 rounded-md px-3 py-1">
              {promo.buttonText}
            </span>
            <div className="md:hidden w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}