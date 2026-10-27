import type { Content } from './types'

// Keep the English plain: short sentences and common words.
const en: Content = {
  locale: 'en',
  meta: {
    title: 'Eita Matsuura',
    description:
      'Portfolio of Eita Matsuura, a doctoral student at Nagaoka University of Technology. Research on career support and machine learning, and web and AI development.',
  },
  nav: {
    profile: 'Profile',
    research: 'Research',
    works: 'Works',
    contact: 'Contact',
    switchLabel: '日本語に切り替える',
    switchHref: '/',
  },
  hero: {
    greeting: '> Hello',
    name: 'Eita Matsuura',
    nameLatin: '松浦 瑛太',
    avatarLabel: 'Pixel art of a mandarin orange taking a hot spring bath',
    intro:
      'I am a first-year doctoral student at Nagaoka University of Technology. I study career support in many languages with machine learning. I also build web and AI products.',
    now: 'Now: Ho Chi Minh City University of Technology (Sep–Dec 2026)',
    worksButton: 'See my works ▼',
  },
  profile: {
    heading: 'Profile',
    affiliationLabel: 'Affiliation',
    affiliation: [
      'Nagaoka University of Technology, Graduate School of Engineering',
      '5-year Doctoral Program, Science of Technology Innovation, 1st year',
      'Machine Learning Theory Lab',
    ],
    activitiesLabel: 'Activities',
    activities: 'NUTFES, the school festival committee (web and app development)',
    timeline: [
      { date: '2004', text: 'Born in Ehime, Japan' },
      {
        date: '–2024.03',
        text: 'National Institute of Technology, Niihama College, Electronic Control Engineering (final project: business use of avatars made with a 3D scanner)',
      },
      {
        date: '2024.04',
        text: 'Joined Nagaoka University of Technology as a 3rd-year student, Information and Management Systems Engineering',
      },
      { date: '2026.04', text: 'Started the 5-year doctoral program' },
      {
        date: '2026.09–12',
        text: 'Research internship at Ho Chi Minh City University of Technology, Vietnam',
        current: true,
      },
    ],
  },
  research: {
    heading: 'Research',
    items: [
      {
        venue: 'SITA2025',
        title:
          'How high school students make decisions in a career path system that uses generative AI',
      },
      {
        venue: 'SITA2026',
        title: 'How to evaluate the detection of reading errors in speech synthesis',
      },
    ],
  },
  works: {
    heading: 'Works',
    noImage: '[Screenshot]',
    items: [
      {
        name: 'School Festival Website',
        description: 'The official site of the 44th NUTFES (September 2025).',
        tech: ['Next.js', 'Tailwind CSS'],
        image: '/works/nutfes-44th.jpg',
      },
      {
        name: 'NUTMEG-Seeds',
        description: 'A web app to keep records of study sessions: who learned what, with which tools.',
        tech: ['Next.js', 'Ruby on Rails', 'Docker'],
        image: '/works/nutmeg-seeds.png',
      },
      {
        name: 'Bakulock',
        description: 'An alarm app. If you sleep again, it posts your secret on Slack.',
        tech: ['Expo', 'React Native'],
        image: '/works/bakulock.jpg',
      },
    ],
  },
  contact: {
    heading: 'Contact',
    message: 'Feel free to contact me about research or development.',
    emailLabel: 'Email',
    email: 's243366@stn.nagaokaut.ac.jp',
  },
  boot: {
    lines: [
      'Nagaoka Univ. of Technology',
      'Machine Learning Theory Lab',
      'Research data',
      '3 works',
      'Location: Ho Chi Minh City',
      'Ready',
    ],
    skip: 'Skip',
    replay: 'Play the start screen again',
    loading: 'Loading',
  },
}

export default en
