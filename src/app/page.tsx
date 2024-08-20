import Image from 'next/image';
import Link from 'next/link';

import { SendEventOnLoad } from '@/components/send-event-on-load';
import { CONFIG } from '@/config';
import { getPosts } from '@/lib/posts';
import { reformatDate } from '@/lib/utils';
import { Redis } from '@upstash/redis';

import Footer from './_components/footer';
import Header from './/_components/header';
import Subscribe from './/_components/subscribe';
import Promotions from './/_components/promotions';
import Ventures from './/_components/ventures';

const redis = Redis.fromEnv();
export const revalidate = 0;

export default async function Home() {
  let allPosts = getPosts();

  const views = (
    await redis.mget<number[]>(
      ...allPosts.map((p) => ['pageviews', 'posts', p.slug].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[allPosts[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <>
      <SendEventOnLoad eventKey="User hit home page" />
        {/* <Header /> */}
      <div className="flex flex-col space-y-12 pb-8 pt-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex w-full items-center justify-center sm:mt-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-600 rounded-full blur-sm group-hover:blur transition-all duration-300"></div>
            <Link
              href="https://launchsolo.co"
              className="relative px-4 py-1 bg-black border border-emerald-500 rounded-full inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-all duration-200"
            >
              <span className="text-sm font-medium">
                Introducing SoloFoundersHub
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-6 sm:gap-y-7 animate-slide-from-down-and-fade-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-5 blur-[20px] group-hover:blur-[25px] transition-all duration-300 rounded-full transform scale-110"></div>
            <h1 className="text-pretty text-white lg:text-6xl lg:-tracking-4 lg:leading-[4rem] lg:font-extrabold text-4xl md:text-5xl -tracking-3 font-bold max-w-3xl text-center relative z-10">
              I&apos;m a{' '}
              <span className="relative inline-block">
                solopreneur,
                <svg
                  className="absolute -bottom-1 w-full h-3 left-0"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.5C31 3.5 61 3.5 91 3.5C121 3.5 151 3.5 181 7.5"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="1"
                      y1="5"
                      x2="181"
                      y2="5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#34d399" />
                      <stop offset="1" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              builder and founder.
            </h1>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col items-center text-center animate-slide-from-down-and-fade-2 max-w-2xl mx-auto">
  <div className="flex flex-col space-y-2">
    <p className="text-neutral-300/80 leading-6">
      {CONFIG.description}
    </p>
  </div>
</div>

        {/* Subscribe component */}
        <div className="max-w-2xl mx-auto w-full animate-slide-from-down-and-fade-3 text-center">
  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 font-semibold tracking-wide">
    Startup Ideas, Sent Weekly
  </h3>
  <Subscribe />
</div>

        <div className="animate-slide-from-down-and-fade-4">
          <Promotions />
        </div>
        <div className="animate-slide-from-down-and-fade-5">
          <Ventures />
        </div>
        <div className="flex flex-col space-y-6">
          {/* Projects */}
          <div className="flex flex-col space-y-4 animate-slide-from-down-and-fade-6 w-full max-w-3xl mx-auto">
  <div className="flex flex-col space-y-2 items-center">
    <span className="font-semibold text-xl">My Projects</span>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {CONFIG.projects.map((project, idx) => {
        if (project.featured) {
          return (
            <Link
              key={idx}
              href={project.link}
              target="_blank"
              className="flex flex-col items-center text-center duration-300 hover:bg-hoverBackground p-4 rounded-lg cursor-pointer"
            >
              <Image
                src={project.image}
                alt=""
                width={60}
                height={60}
                className="w-15 h-15 mb-2"
              />
              <span className="text-secondaryDark text-sm font-medium">{project.name}</span>
              <span className="text-secondaryDarker text-xs mt-1">{project.description}</span>
            </Link>
          );
        }
      })}
    </div>
  </div>
  <Link
    href="/projects"
    className="flex flex-row space-x-2 items-center group cursor-pointer justify-center"
  >
    <span className="text-neutral-400 text-sm hover:underline underline-offset-4 hover:text-secondary duration-200">
      All Projects
              </span>
            </Link>
          </div>

          {/* Posts */}
          <div className="flex flex-col space-y-4 animate-slide-from-down-and-fade-6 w-full max-w-3xl mx-auto">
  <div className="flex flex-col space-y-2 items-center">
    <span className="font-semibold text-xl text-center sm:text-left">Featured Posts</span>
    <div className="flex flex-col space-y-2 w-full">
      {allPosts
        .filter((post) => post.metadata.featured === 'true')
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .slice(0, 3)
        .map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0 sm:space-x-2 items-start duration-300 hover:bg-hoverBackground px-4 py-3 rounded-lg cursor-pointer"
          >
            <span className="text-secondaryDark text-sm">{post.metadata.title}</span>
            <span className="text-neutral-400 text-xs whitespace-nowrap">
              {reformatDate(post.metadata.publishedAt)}
            </span>
          </Link>
        ))}
    </div>
  </div>
  <Link
    href="/posts"
    className="flex flex-row space-x-2 items-center group cursor-pointer justify-center sm:justify-end"
  >
    <span className="text-neutral-400 text-sm hover:underline underline-offset-4 hover:text-secondary duration-200">
      All Posts
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}