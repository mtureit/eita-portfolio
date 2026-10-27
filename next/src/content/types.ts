export type Locale = 'ja' | 'en'

export type TimelineItem = {
  // Leave undefined while the date is unconfirmed (see docs/content.md)
  date?: string
  text: string
  current?: boolean
}

export type ResearchItem = {
  venue: string
  title: string
  inProgress?: boolean
}

export type Work = {
  name: string
  description: string
  tech: string[]
  image?: string
  url?: string
}

export type Content = {
  locale: Locale
  meta: { title: string; description: string }
  nav: {
    profile: string
    research: string
    works: string
    contact: string
    switchLabel: string
    switchHref: string
  }
  hero: {
    greeting: string
    name: string
    nameLatin: string
    avatarLabel: string
    intro: string
    now: string
    worksButton: string
  }
  profile: {
    heading: string
    affiliationLabel: string
    affiliation: string[]
    activitiesLabel: string
    activities: string
    timeline: TimelineItem[]
  }
  research: { heading: string; items: ResearchItem[] }
  works: { heading: string; items: Work[]; noImage: string }
  contact: {
    heading: string
    message: string
    emailLabel: string
    // Unset until the public address is decided (see docs/content.md)
    email?: string
  }
  boot: { lines: string[]; skip: string; replay: string; loading: string }
}
