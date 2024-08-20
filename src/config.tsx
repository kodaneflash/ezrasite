import { DiscordIcon } from '@/components/icons/discord';
import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { TwitchIcon } from '@/components/icons/twitch';
import { XIcon } from '@/components/icons/x';
import { YouTubeIcon } from '@/components/icons/youtube';





export const CONFIG = {
  name: 'James Archer - Serial Entrepreneur | Leader | Strategist',
  headshot: '/headshot.png',
  title: 'James Archer - Serial Entrepreneur | Leader | Strategist',
  description: `I’m a serial entrepreneur, leader, and strategist. I've founded 6 online software companies, with 4 being acquired. COO at RunwayML.  I have a unique ability to manage multi-disciplinary projects and navigate complex challenges. 
 I share my knowledge and experience on building successful online businesses.`,
  socials: [
    { platform: 'X', link: 'https://twitter.com/jamesarcherio', icon: <XIcon /> },
    {
      platform: 'GitHub',
      link: 'https://github.com/kodaneflash',
      icon: <GithubIcon />,
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/@jamesarcher',
      icon: <YouTubeIcon />,
    },
    {
      platform: 'Twitch',
      link: 'https://www.twitch.tv/jamesarcher',
      icon: <TwitchIcon />,
    },
    {
      platform: 'Discord',
      link: 'https://discord.com/invite/Dcyy6Qfe',
      icon: <DiscordIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/',
      icon: <LinkedInIcon />,
    },
  ],
  projects: [
    {
      featured: true,
      name: 'InteriorAI ($40k MRR)',
      slug: 'interior-ai',
      description: 'Interior design made easy.',
      image: 'https://res.cloudinary.com/imaginify/image/upload/v1723268478/interiorai_prncqa.jpg',
      link: 'https://interiorai.com/',
    },
    {
      featured: true,
      name: 'PhotoAI ($56k MRR)',
      slug: 'photo-ai',
      description: 'Generate photos with AI.',
      image: 'https://res.cloudinary.com/imaginify/image/upload/v1723268478/photoai_zorzs2.jpg',
      link: 'https://photoai.com/',
    },
    {
      featured: true,
      name: 'RemoteOK ($31k MRR)',
      slug: 'remote-ok',
      description: 'Find the best remote jobs and freelance gigs.',
      image: 'https://res.cloudinary.com/imaginify/image/upload/v1723268626/remoteok_lgvaqk.png',
      link: 'https://remoteok.com/',
    },
    {
      featured: true,
      name: 'CookieFirst (1M ARR) (Acquired)',
      slug: 'cookie-first',
      description: 'CookieFirst is a cookie consent management platform that helps you comply with GDPR, CCPA, and other privacy laws.',
      image: 'https://res.cloudinary.com/imaginify/image/upload/v1723270073/cookiefirst_heixhz.jpg',
      link: 'https://www.cookiefirst.com/',
    },
    {
      featured: false,
      name: 'RepoMapper',
      slug: 'repo-mapper',
      description: 'Visualize Your GitHub Repos in ASCII.',
      image: '/icons/repo-mapper.png',
      link: 'https://repo-mapper.vercel.app/',
    },
    {
      featured: false,
      name: 'Open Graph Vault',
      slug: 'open-graph-vault',
      description: 'Where all your open graph images live.',
      image: '/icons/open-graph-vault.png',
      link: 'https://opengraphvault.com/',
    },
    {
      featured: false,
      name: 'CustomGradient',
      slug: 'custom-gradient',
      description: 'A gradient generator and editor.',
      image: '/icons/custom-gradient.png',
      link: 'https://customgradient.com/',
    },
  ],
};