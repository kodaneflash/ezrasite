import React from 'react';
import Image from 'next/image';

const ventures = [
  {
    title: 'RunwayML',
    description: 'Head of Operations at Runway. Runway is an applied AI research company building the next era of art, entertainment and human creativity.',
    image: 'https://res.cloudinary.com/imaginify/image/upload/v1723267637/runway_nmkzbx.jpg',
    link: 'https://www.runwayml.com/',
    buttonText: 'Learn More',
  },
  {
    title: 'Akkio: AI Data Platform for Agencies',
    description: 'Akkio is a generative BI platform thats an easy-to-use, scalable, and affordable AI platform real-time decision making',
    image: 'https://res.cloudinary.com/imaginify/image/upload/v1724024029/akkio_fdf9fj.jpg',
    link: 'https://akkio.com/',
    buttonText: 'Learn More',
  },
  {
    title: 'Oracui',
    description: 'APAC-based gen-z focused strategy consulting',
    image: 'https://framerusercontent.com/images/B3V42UZI4onufIfs7fqQRFdOK2k.png',
    link: 'https://oracui.com/',
    buttonText: 'Learn More',
  },
];

export default function Ventures() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-white text-3xl font-medium text-center sm:text-left">
        Ventures
      </div>
      <div className="text-zinc-400 text-xl text-center sm:text-left">
        involved as a <span className="text-zinc-300">founder</span> or <span className="text-zinc-300">investor</span>.
      </div>
      <div className="flex flex-col sm:flex-row gap-6">
        {ventures.map((venture, idx) => (
          <div key={idx} className="bg-zinc-900 flex flex-col items-start justify-between rounded-3xl p-8 w-full">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center bg-white rounded-lg p-2">
                <Image 
                  src={venture.image} 
                  alt={venture.title} 
                  width={128} 
                  height={64} 
                  className="object-contain" 
                />
              </div>
              <div className="text-white text-2xl">
                {venture.title}
              </div>
              <div className="text-zinc-400">
                {venture.description}
              </div>
            </div>
            <a href={venture.link} target="_blank" rel="noopener noreferrer" className="py-2 px-5 mt-4 rounded-lg border border-neutral-700 text-zinc-300 font-medium hover:bg-neutral-800">
              {venture.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}