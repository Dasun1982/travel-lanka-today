import { assets } from './siteData.js';

export const localGuideReasons = [
  {
    title: 'Roads chosen by lived experience',
    text: 'Kithsiri knows when to start before the heat, where the crowds gather, and which quiet roads reveal the island slowly.'
  },
  {
    title: 'Private pace, not fixed group timing',
    text: 'Your day can slow down for elephants, a temple ceremony, a tea estate walk, or a village lunch that was never on the brochure.'
  },
  {
    title: 'One trusted person beside you',
    text: 'As both driver and guide, Kithsiri keeps the journey calm, safe, and personal from arrival to your final coastal evening.'
  }
];

export const mapStops = [
  {
    name: 'Sigiriya',
    region: 'Ancient kingdoms',
    position: { top: '31%', left: '56%' },
    image: assets.sigiriya,
    text: 'Rock fortress mornings, forest monasteries, village kitchens, and Cultural Triangle stories.'
  },
  {
    name: 'Kandy',
    region: 'Culture and hills',
    position: { top: '45%', left: '54%' },
    image: assets.kandy,
    text: 'Temple rituals, botanical gardens, mountain roads, and softer hill country light.'
  },
  {
    name: 'Ella',
    region: 'Tea country',
    position: { top: '59%', left: '61%' },
    image: assets.ella,
    text: 'Tea estate walks, scenic rail views, waterfalls, and relaxed highland days.'
  },
  {
    name: 'Yala',
    region: 'Wildlife parks',
    position: { top: '73%', left: '61%' },
    image: assets.safari,
    text: 'Safari drives, elephant country, birdlife, dry-zone forest, and golden evening light.'
  },
  {
    name: 'Galle',
    region: 'Southern coast',
    position: { top: '82%', left: '42%' },
    image: assets.galle,
    text: 'Fort walks, ocean ramparts, coastal villages, boutique stays, and sunset roads.'
  }
];

export const handpickedExperiences = [
  {
    title: 'Wildlife Safaris With Patience',
    label: 'Wildlife',
    image: assets.safari,
    text: 'Responsible park visits shaped around quiet timing, animal movement, and respectful distance.'
  },
  {
    title: 'Tea Country Roads and Rail',
    label: 'Highlands',
    image: assets.train,
    text: 'Misty mountain drives, scenic train moments, estate walks, waterfalls, and slow highland stays.'
  },
  {
    title: 'Ancient Kingdoms and Village Life',
    label: 'Culture',
    image: assets.dambulla,
    text: 'Sacred caves, old capitals, village kitchens, local markets, and stories carried by place.'
  }
];

export const wildlifeMoments = [
  'Private safari planning around better light and calmer park windows',
  'Elephants, birds, wetlands, dry-zone forest, and coastal marine options',
  'Nature-first pacing with space for observation, silence, and photography'
];

export const heritageMoments = [
  'Sigiriya, Dambulla, Kandy, Anuradhapura, Galle, and village craft routes',
  'Temple etiquette, local context, and flexible timing around ceremonies',
  'Food, architecture, faith, markets, and family-friendly cultural pacing'
];

export const journeyStyles = [
  {
    duration: '7-9 days',
    title: 'Culture, Tea Country and Coast',
    route: 'Sigiriya, Kandy, Ella, Galle',
    text: 'A balanced first journey through heritage sites, misty hills, and relaxed southern evenings.'
  },
  {
    duration: '10-12 days',
    title: 'Wildlife, Forest and Ancient Roads',
    route: 'Wilpattu, Sigiriya, Kandy, Yala',
    text: 'A nature-rich route for travellers who want safari, forest edges, ancient kingdoms, and private guiding.'
  },
  {
    duration: '14+ days',
    title: 'The Full Island, Privately Paced',
    route: 'West coast, Cultural Triangle, hills, east or south coast',
    text: 'A slower, more complete Sri Lanka journey with room for hidden stops, rest days, and seasonal routing.'
  }
];

export const travelerStories = [
  {
    quote:
      'Kithsiri made the journey feel personal from the first road out of Colombo. We saw the famous places, but the quiet local stops are what stayed with us.',
    name: 'Charlotte and Ben',
    trip: 'Private 11-day nature and culture route'
  },
  {
    quote:
      'The safari timing, temple visits, tea country roads, and beach days felt beautifully judged. It was professional without ever feeling packaged.',
    name: 'Maya R.',
    trip: 'Family multi-day Sri Lanka journey'
  }
];

export const editorialGallery = [
  { title: 'Forest roads', image: assets.ambuluwawe },
  { title: 'Ancient rock country', image: assets.sigiriya },
  { title: 'Wildlife parks', image: assets.safari },
  { title: 'Tea country rail', image: assets.train },
  { title: 'Southern coast', image: assets.blueBeach },
  { title: 'Temple heritage', image: assets.temple }
];
