export const assets = {
  logo: new URL('../../images/logo.png', import.meta.url).href,
  hero: new URL('../../images/sigiriya.jpeg', import.meta.url).href,
  sigiriya: new URL('../../images/sigiriya.jpeg', import.meta.url).href,
  kandy: new URL('../../images/kandy temple.jpg', import.meta.url).href,
  galle: new URL('../../images/galle-fort.jpg', import.meta.url).href,
  ella: new URL('../../images/Nine_Arch_Bridge.jpg', import.meta.url).href,
  hiriketiya: new URL('../../images/Hiriketiya-Beach.jpg', import.meta.url).href,
  dambulla: new URL('../../images/Dambulla.jpg', import.meta.url).href,
  safari: new URL('../../images/safari.jpg', import.meta.url).href,
  train: new URL('../../images/train ride.webp', import.meta.url).href,
  whale: new URL('../../images/whale watching.jpg', import.meta.url).href,
  boat: new URL('../../images/boat tour.jpg', import.meta.url).href,
  temple: new URL('../../images/Buddhist-Temple.jpg', import.meta.url).href,
  mihintale: new URL('../../images/Mihintale-Buddha-statue.jpg', import.meta.url).href,
  pidirangala: new URL('../../images/Pidurangala.jpg', import.meta.url).href,
  colombo: new URL('../../images/Colombo-Culture.jpg', import.meta.url).href,
  blueBeach: new URL('../../images/blue beach.jpg', import.meta.url).href,
  ambuluwawe: new URL('../../images/ambuluwawe.webp', import.meta.url).href,
  jungleBeach: new URL('../../images/jungle beach.webp', import.meta.url).href
};

const defaultWhatsAppMessage = 'Hi Kithsiri, I’m interested in a private Sri Lanka tour.';

export const contactDetails = {
  phone: '+94 77 123 4567',
  phoneCompact: '+94771234567',
  phoneHref: 'tel:+94771234567',
  email: 'hello@travellankatoday.com',
  emailHref: 'mailto:hello@travellankatoday.com',
  instagramHandle: '@travellankatoday',
  instagramUrl: 'https://instagram.com/travellankatoday',
  whatsappNumber: '94771234567',
  whatsappDefaultMessage: defaultWhatsAppMessage,
  whatsappHref: `https://wa.me/94771234567?text=${encodeURIComponent(defaultWhatsAppMessage)}`
};

export function getWhatsAppHref(message = contactDetails.whatsappDefaultMessage) {
  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Guide', href: '/guide' },
  { label: 'Tours', href: '/tours' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '/contact' }
];

export const guideTimeline = [
  {
    year: '2004',
    title: 'First private island routes',
    detail: 'Kithsiri began guiding long-form journeys across the Cultural Triangle, hill country, and southern coast.'
  },
  {
    year: '2012',
    title: 'Wildlife-first itineraries',
    detail: 'Expanded responsible safari timing around Yala, Udawalawe, Minneriya, and quieter nature corridors.'
  },
  {
    year: 'Today',
    title: 'Bespoke hosted travel',
    detail: 'Private multi-day journeys designed directly with travelers by WhatsApp, then hosted with calm local care.'
  }
];

export const mosaicExperiences = [
  {
    title: 'Wildlife Safaris',
    category: 'Wildlife',
    description: 'Private safari timing for elephants, birds, open plains, and quiet moments in Sri Lanka nature.',
    image: assets.safari,
    order: 1
  },
  {
    title: 'Ancient Kingdoms',
    category: 'Heritage',
    description: 'Explore Sigiriya, cave temples, sacred ruins, and old royal roads with local context and calm pacing.',
    image: assets.sigiriya,
    highlighted: true,
    order: 3
  },
  {
    title: 'Tea Country',
    category: 'Highlands',
    description: 'Misty tea estates, highland trains, forest views, and mountain air shaped into an unhurried route.',
    image: assets.train,
    order: 2
  },
  {
    title: 'Coastal South',
    category: 'Coast',
    description: 'Soft southern beaches, ocean roads, heritage towns, and warm coastal evenings with room to breathe.',
    image: assets.blueBeach,
    order: 4
  },
  {
    title: 'Local Life',
    category: 'Local',
    description: 'Village boats, family kitchens, markets, and hidden local places most visitors pass by too quickly.',
    image: assets.boat,
    order: 5
  }
];

export const landingTourPreview = [
  {
    title: '5 Day Highlights Tour',
    badge: '5 Days',
    text: 'Sigiriya, Kandy, Ella, Galle',
    image: assets.sigiriya
  },
  {
    title: '7 Day Nature & Culture Tour',
    badge: '7 Days',
    text: 'Wildlife, temples, tea country, and local roads',
    image: assets.safari
  },
  {
    title: '10 Day Classic Round Tour',
    badge: '10 Days',
    text: 'Culture Triangle, Ella, Yala, Mirissa, Galle',
    image: assets.train
  },
  {
    title: '14 Day Complete Sri Lanka Tour',
    badge: '14+ Days',
    text: 'Nature, wildlife, culture, beaches, and hidden places',
    image: assets.jungleBeach
  }
];

export const trustStories = [
  {
    quote:
      'Kithsiri made Sri Lanka feel personal, calm, and deeply alive. Every stop had a story, and every day felt beautifully paced.',
    name: 'Amelia and James',
    country: 'UK',
    trip: '12-day wildlife and culture route',
    initials: 'AJ',
    photo: assets.blueBeach
  },
  {
    quote:
      'This was not a packaged tour. It felt like travelling with a trusted local friend who knew when to slow down and when to surprise us.',
    name: 'Lena Hofmann',
    country: 'Germany',
    trip: '10-day tea country and coast journey',
    initials: 'LH',
    photo: assets.train
  },
  {
    quote:
      'From temples to safari drives to the best local meals, the journey was refined without ever feeling distant from real Sri Lanka.',
    name: 'Claire Martin',
    country: 'France',
    trip: 'Private family tour',
    initials: 'CM',
    photo: assets.galle
  },
  {
    quote:
      'We wanted wildlife, trains, beaches, and space to breathe. Kithsiri shaped exactly that, with effortless local support.',
    name: 'Noah Williams',
    country: 'Australia',
    trip: '14-day custom island journey',
    initials: 'NW',
    photo: assets.safari
  },
  {
    quote:
      'The planning was easy over WhatsApp, and the actual trip felt premium, warm, and completely individual.',
    name: 'Rachel Brooks',
    country: 'USA',
    trip: '7-day cultural highlights',
    initials: 'RB',
    photo: assets.kandy
  }
];

export const natureMoments = [
  'Elephant corridors and responsible safari timing',
  'Rainforest walks, birdsong, and quiet forest shade',
  'Private nature routes paced around light, weather, and wildlife rhythms'
];

export const cultureMoments = [
  'Ancient cities, temples, cave shrines, and sacred rituals',
  'Local markets, family kitchens, village craft, and soft everyday encounters',
  'Heritage stops timed with Kithsiri before the busiest hours'
];

export const editorialGallery = [
  { title: 'Elephant country', category: 'Wildlife', image: assets.safari },
  { title: 'Sigiriya rock light', category: 'Culture', image: assets.sigiriya },
  { title: 'Highland rail mornings', category: 'Tea Country', image: assets.train },
  { title: 'Blue coast calm', category: 'Coast', image: assets.blueBeach },
  { title: 'Village boat mornings', category: 'Local Life', image: assets.boat },
  { title: 'Kandy temple glow', category: 'Culture', image: assets.kandy },
  { title: 'Galle Fort evenings', category: 'Coast', image: assets.galle },
  { title: 'Whale watching waters', category: 'Wildlife', image: assets.whale }
];

export const introFeatures = [
  {
    title: 'Private Tours',
    description: 'Flexible routes, private hosting, and days paced around your interests.',
    icon: 'guide'
  },
  {
    title: 'Wildlife',
    description: 'Responsible park visits timed around animal rhythms and quiet light.',
    icon: 'wildlife'
  },
  {
    title: 'Culture',
    description: 'Temples, ancient capitals, crafts, and village traditions.',
    icon: 'heritage'
  },
  {
    title: 'Tea Country',
    description: 'Misty rail journeys, estate walks, and elegant mountain stays.',
    icon: 'tea'
  },
  {
    title: 'Coastal Escapes',
    description: 'Barefoot beach days balanced with refined local experiences.',
    icon: 'coast'
  }
];

export const destinations = [
  {
    name: 'Sigiriya',
    region: 'Cultural Triangle',
    image: assets.sigiriya,
    description: 'Private dawn climbs, ancient gardens, and village dining beneath jungle canopies.'
  },
  {
    name: 'Kandy',
    region: 'Hill Country',
    image: assets.kandy,
    description: 'Sacred temples, botanical gardens, tea estates, and mist-softened mountain air.'
  },
  {
    name: 'Galle Fort',
    region: 'South Coast',
    image: assets.galle,
    description: 'Boutique heritage walks, ocean ramparts, artisan studios, and golden sunsets.'
  },
  {
    name: 'Ella',
    region: 'Highlands',
    image: assets.ella,
    description: 'Scenic rail journeys, forest trails, waterfalls, and refined tea country stays.'
  },
  {
    name: 'Hiriketiya',
    region: 'Beach Escape',
    image: assets.hiriketiya,
    description: 'Palm-framed surf, calm coves, ocean-view dining, and barefoot luxury mornings.'
  },
  {
    name: 'Dambulla',
    region: 'Heritage Route',
    image: assets.dambulla,
    description: 'Cave temples, forest monasteries, quiet villages, and easy links to wildlife parks.'
  }
];

export const tours = [
  {
    title: '5 Day Highlights Tour',
    image: assets.sigiriya,
    duration: '5 days',
    destinations: 'Sigiriya, Kandy, Ella, Galle',
    bestFor: "First-time visitors who want Sri Lanka's highlights with a calm private guide."
  },
  {
    title: '7 Day Nature & Culture Tour',
    image: assets.safari,
    duration: '7 days',
    destinations: 'Sigiriya, Kandy, Nuwara Eliya, Ella, Yala',
    bestFor: 'Travelers who want ancient sites, tea country, wildlife, and mountain scenery.'
  },
  {
    title: '10 Day Classic Round Tour',
    image: assets.train,
    duration: '10 days',
    destinations: 'Anuradhapura, Sigiriya, Kandy, Ella, Yala, Mirissa, Galle',
    bestFor: 'A complete private round trip with culture, highlands, safari, and coast.'
  },
  {
    title: '14 Day Complete Sri Lanka Tour',
    image: assets.blueBeach,
    duration: '14 days',
    destinations: 'Culture Triangle, Tea Country, Wildlife, Coast',
    bestFor: 'Guests who want a spacious island journey with slower days and deeper local moments.'
  },
  {
    title: 'Custom Private Tour',
    image: assets.boat,
    duration: 'Flexible',
    destinations: 'Build your own route with Kithsiri',
    bestFor: 'Families, couples, photographers, return visitors, and travelers with special interests.'
  }
];

export const experiences = [
  {
    title: 'Wildlife & Safari',
    image: assets.safari,
    description:
      'Track elephants, leopards, birds, and wetland life with private naturalists who follow ethical wildlife rhythms.',
    detail: 'Yala, Udawalawe, Wilpattu'
  },
  {
    title: 'Culture & Heritage',
    image: assets.dambulla,
    description:
      'Enter sacred cave temples, ancient capitals, village kitchens, and craft traditions with guides who know the stories.',
    detail: 'Sigiriya, Dambulla, Kandy'
  },
  {
    title: 'Tea Country & Nature',
    image: assets.ambuluwawe,
    description:
      'Move through misty estates, mountain trails, waterfalls, and eco lodges where Sri Lanka slows into silence.',
    detail: 'Ella, Kandy, Nuwara Eliya'
  }
];

export const gallery = [
  {
    title: 'Rainforest coast',
    image: assets.hero
  },
  {
    title: 'Golden heritage',
    image: assets.sigiriya
  },
  {
    title: 'Tea country rail',
    image: assets.train
  },
  {
    title: 'Southern ocean',
    image: assets.blueBeach
  },
  {
    title: 'Sacred temples',
    image: assets.kandy
  },
  {
    title: 'Wild Sri Lanka',
    image: assets.safari
  }
];

export const luxuryStats = [
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    icon: 'years'
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Happy Travelers',
    icon: 'travelers'
  },
  {
    value: 100,
    suffix: '+',
    label: 'Custom Tours',
    icon: 'tours'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Local Support',
    icon: 'nature'
  }
];

export const bookingSteps = [
  {
    title: 'Share Your Dream',
    description: 'Tell us what Sri Lanka should feel like for you: wildlife, culture, coast, tea country, pace, and comfort.'
  },
  {
    title: 'We Design Your Route',
    description: 'We shape a private itinerary with considered timing, trusted stays, local guides, and room to breathe.'
  },
  {
    title: 'Travel With Local Experts',
    description: 'Arrive to a calm, hosted journey with discreet support from people who know the island intimately.'
  }
];

export const reasons = [
  {
    title: 'Private Local Naturalists',
    description: 'Travel with Sri Lankan hosts who understand wildlife rhythms, sacred spaces, hidden roads, and quiet viewpoints.'
  },
  {
    title: 'Elegant, Flexible Pacing',
    description: 'Each journey is private and unhurried, with room for sunrise walks, long lunches, and spontaneous discoveries.'
  },
  {
    title: 'Eco-Conscious Choices',
    description: 'We favor locally owned stays, responsible wildlife practices, and experiences that support communities.'
  },
  {
    title: 'Quiet Luxury Support',
    description: 'From airport arrival to your final beach morning, our team stays close enough to help and discreet enough to disappear.'
  }
];

export const testimonials = [
  {
    quote:
      'The journey felt like Sri Lanka opened privately for us. We had wildlife, temples, coast, and quiet moments without ever feeling rushed.',
    name: 'Amelia R.',
    trip: 'Private family journey, 12 days'
  },
  {
    quote:
      'Our guide knew exactly when to arrive before crowds and where to stop for the best tea, views, and local food. Effortless and beautiful.',
    name: 'Daniel M.',
    trip: 'Couple eco escape, 9 days'
  },
  {
    quote:
      'The lodges, safari drives, and slow beach days were balanced perfectly. It felt premium, personal, and deeply connected to nature.',
    name: 'Priya S.',
    trip: 'Wildlife and coast, 8 days'
  }
];

export const searchOptions = {
  destinations: ['Rainforest and coast', 'Cultural Triangle', 'Hill Country', 'Wildlife Parks', 'Full Island'],
  durations: ['3-5 days', '6-8 days', '9-12 days', '13+ days'],
  styles: ['Luxury eco tour', 'Private guide', 'Family journey', 'Honeymoon', 'Safari adventure']
};
