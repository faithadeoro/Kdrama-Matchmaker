export interface KDrama {
  id: string;
  title: string;
  tags: string[];
  tagline: string;
  year: number;
  episodes: number;
  genre: string[];
}

export const kdramas: KDrama[] = [
  {
    id: '1',
    title: 'Crash Landing on You',
    tags: ['romance', 'comedy', 'drama'],
    tagline: 'Love knows no borders... or parachutes! 💕✈️',
    year: 2019,
    episodes: 16,
    genre: ['Romance', 'Comedy', 'Drama']
  },
  {
    id: '2',
    title: 'Squid Game',
    tags: ['thriller', 'action', 'dark'],
    tagline: 'Childhood games with deadly stakes 🦑💀',
    year: 2021,
    episodes: 9,
    genre: ['Thriller', 'Drama', 'Action']
  },
  {
    id: '3',
    title: 'Welcome to Waikiki',
    tags: ['comedy', 'slice-of-life', 'friendship'],
    tagline: 'Chaotic roommates = nonstop laughter 😂🏠',
    year: 2018,
    episodes: 20,
    genre: ['Comedy', 'Romance']
  },
  {
    id: '4',
    title: 'Goblin',
    tags: ['fantasy', 'romance', 'supernatural'],
    tagline: 'Immortal guardian meets his destined bride 🗡️👻',
    year: 2016,
    episodes: 16,
    genre: ['Fantasy', 'Romance', 'Drama']
  },
  {
    id: '5',
    title: 'Hospital Playlist',
    tags: ['slice-of-life', 'friendship', 'medical'],
    tagline: 'Doctors by day, band members by night 🏥🎵',
    year: 2020,
    episodes: 12,
    genre: ['Medical', 'Slice of Life', 'Comedy']
  },
  {
    id: '6',
    title: 'Kingdom',
    tags: ['thriller', 'horror', 'historical'],
    tagline: 'Zombies meet Joseon dynasty politics 🧟‍♂️👑',
    year: 2019,
    episodes: 12,
    genre: ['Horror', 'Thriller', 'Historical']
  },
  {
    id: '7',
    title: 'Reply 1988',
    tags: ['slice-of-life', 'nostalgia', 'family'],
    tagline: 'Growing up in the golden age of friendship 📼💫',
    year: 2015,
    episodes: 20,
    genre: ['Slice of Life', 'Comedy', 'Romance']
  },
  {
    id: '8',
    title: 'Vincenzo',
    tags: ['action', 'comedy', 'crime'],
    tagline: 'Italian mafia lawyer takes on Korean corruption 🇮🇹⚖️',
    year: 2021,
    episodes: 20,
    genre: ['Action', 'Comedy', 'Crime']
  },
  {
    id: '9',
    title: 'My Love from the Star',
    tags: ['fantasy', 'romance', 'alien'],
    tagline: 'Alien professor falls for Hallyu star 👽⭐',
    year: 2013,
    episodes: 21,
    genre: ['Fantasy', 'Romance', 'Sci-Fi']
  },
  {
    id: '10',
    title: 'Descendants of the Sun',
    tags: ['romance', 'military', 'medical'],
    tagline: 'Army captain meets surgeon in war zone 💚⚕️',
    year: 2016,
    episodes: 16,
    genre: ['Romance', 'Action', 'Medical']
  },
  {
    id: '11',
    title: 'Strong Woman Do Bong Soon',
    tags: ['romance', 'comedy', 'superhero'],
    tagline: 'Tiny woman with superhuman strength 💪✨',
    year: 2017,
    episodes: 16,
    genre: ['Romance', 'Comedy', 'Fantasy']
  },
  {
    id: '12',
    title: 'Itaewon Class',
    tags: ['business', 'revenge', 'youth'],
    tagline: 'From ex-con to restaurant empire builder 🍺💼',
    year: 2020,
    episodes: 16,
    genre: ['Drama', 'Business', 'Romance']
  },
  {
    id: '13',
    title: 'The Heirs',
    tags: ['romance', 'school', 'rich'],
    tagline: 'Poor girl meets chaebol heir at elite school 🏫💎',
    year: 2013,
    episodes: 20,
    genre: ['Romance', 'School', 'Drama']
  },
  {
    id: '14',
    title: 'Signal',
    tags: ['thriller', 'time-travel', 'crime'],
    tagline: 'Walkie-talkie connects past and present detectives 📻🕰️',
    year: 2016,
    episodes: 16,
    genre: ['Thriller', 'Crime', 'Sci-Fi']
  },
  {
    id: '15',
    title: 'Sky Castle',
    tags: ['family', 'education', 'dark'],
    tagline: 'Elite moms will do anything for their kids success 🏰📚',
    year: 2018,
    episodes: 20,
    genre: ['Drama', 'Family', 'Thriller']
  },
  {
    id: '16',
    title: 'What\'s Wrong with Secretary Kim',
    tags: ['romance', 'comedy', 'office'],
    tagline: 'Narcissistic boss panics when secretary quits 💼💕',
    year: 2018,
    episodes: 16,
    genre: ['Romance', 'Comedy', 'Office']
  },
  {
    id: '17',
    title: 'Hometown\'s Embrace',
    tags: ['slice-of-life', 'healing', 'rural'],
    tagline: 'City dentist finds peace in countryside village 🦷🌾',
    year: 2021,
    episodes: 12,
    genre: ['Slice of Life', 'Romance', 'Healing']
  },
  {
    id: '18',
    title: 'Extraordinary Attorney Woo',
    tags: ['legal', 'autism', 'heartwarming'],
    tagline: 'Brilliant autistic lawyer sees world differently 🐋⚖️',
    year: 2022,
    episodes: 16,
    genre: ['Legal', 'Drama', 'Comedy']
  },
  {
    id: '19',
    title: 'Business Proposal',
    tags: ['romance', 'comedy', 'fake-dating'],
    tagline: 'Fake blind date turns into real feelings 💼💘',
    year: 2022,
    episodes: 12,
    genre: ['Romance', 'Comedy', 'Office']
  },
  {
    id: '20',
    title: 'All of Us Are Dead',
    tags: ['zombie', 'school', 'survival'],
    tagline: 'High school becomes zombie apocalypse ground zero 🧟‍♀️🏫',
    year: 2022,
    episodes: 12,
    genre: ['Horror', 'Thriller', 'School']
  }
];

export const moodToTags: Record<string, string[]> = {
  cry: ['slice-of-life', 'family', 'healing', 'nostalgia', 'medical'],
  laugh: ['comedy', 'friendship', 'office', 'fake-dating'],
  romance: ['romance', 'fake-dating', 'office', 'school'],
  thrill: ['thriller', 'action', 'crime', 'zombie', 'horror'],
  escape: ['fantasy', 'supernatural', 'time-travel', 'alien'],
  inspire: ['business', 'legal', 'revenge', 'superhero', 'youth']
};

export function getRecommendations(userAnswers: string[]): KDrama[] {
  const relevantTags = new Set<string>();
  
  // Map user answers to tags
  userAnswers.forEach(answer => {
    const tags = moodToTags[answer.toLowerCase()] || [];
    tags.forEach(tag => relevantTags.add(tag));
  });
  
  // Score dramas based on tag matches
  const scoredDramas = kdramas.map(drama => {
    const matchCount = drama.tags.filter(tag => relevantTags.has(tag)).length;
    return { drama, score: matchCount };
  });
  
  // Sort by score and return top 3
  return scoredDramas
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.drama);
}
