import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Subscribe from '@/app/_components/subscribe';
import { CustomMDX } from '@/components/mdx';
import { getPosts } from '@/lib/posts';
import { reformatDate } from '@/lib/utils';
import { Redis } from '@upstash/redis';

import { ReportView } from './view';

const redis = Redis.fromEnv();
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  let { metadata, slug, content } = post;
  let ogImage = metadata.image
    ? `https://www.jamesarcher.io${metadata.image}`
    : `https://www.jamesarcher.io/og?title=${metadata.title}`;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: 'article',
      url: `https://www.jamesarcher.io/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: any }) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  const views =
    (await redis.get<number>(['pageviews', 'posts', params.slug].join(':'))) ??
    0;

  return (
    <div className="w-full pb-20">
      <ReportView slug={post.slug} />
      <div className="flex flex-row space-x-4 mb-6 text-sm text-secondaryDarker animate-slide-from-down-and-fade-1">
        <Link
          href="/posts"
          className="flex flex-row space-x-2 items-center group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-secondaryDarker">Back to all posts</span>
        </Link>
      </div>
      <h1 className="title font-bold text-3xl tracking-tighter max-w-[650px] animate-slide-from-down-and-fade-2">
        {post.metadata.title}
      </h1>
      <article className="prose prose-invert pb-10 animate-slide-from-down-and-fade-4 my-8">
        <CustomMDX source={post.content} />
      </article>
      <div className="flex justify-center items-center text-sm max-w-[650px] animate-slide-from-down-and-fade-3">
        <span className="text-secondaryDark">
          Published: {reformatDate(post.metadata.publishedAt)}
        </span>
      </div>
      <div className="flex w-full items-center justify-center  my-6  animate-slide-from-down-and-fade-4">
        <span className="w-8 bg-secondaryDarker h-[1px] rounded-full"></span>
      </div>
      <Subscribe />
    </div>
  );
}
