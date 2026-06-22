/**
 * Content for the NPCO concept redesign. Business facts verified from npcoinc.com
 * (see docs/research.md). Testimonials/clients below are SAMPLE/dummy content for
 * the pitch mockup — swapped for real, approved content on engagement.
 */
export const site = {
  name: 'National Packaging Co',
  short: 'NPCO',
  phone: '(256) 260-2979',
  phoneHref: 'tel:+12562602979',
  address: '3306 Central PKWY, Decatur, AL 35603',
  agency: 'Uombo Studio',
} as const;

export const hero = {
  h1: 'Dry food manufacturing, scaled with precision.',
  sub: 'NPCO is the contract manufacturing & co-packing partner for dry food brands — precision mixing, packaging, and warehousing under one roof, without the capital cost of your own facility.',
  primaryCta: { label: 'Get Your Free Production Quote', href: '#quote' },
  secondaryCta: { label: 'See Our Capabilities', href: '#services' },
  trust: 'SQF-certified · FDA registered · Decatur, Alabama',
} as const;

export const heritage = [
  { value: 40, suffix: '+', label: 'Years in food manufacturing' },
  { value: 3, suffix: 'rd', label: 'Generation, family-owned' },
  { value: 65000, suffix: '', label: 'Sq-ft food-grade warehouse', format: 'comma' },
  { value: 10000, suffix: '', label: 'Lb max single batch', format: 'comma' },
] as const;

export const services = [
  {
    id: 'mixing',
    title: 'Precision Mixing & Blending',
    blurb: 'Powders, baking mixes, drink bases, and custom dry blends with food-grade precision — small-batch R&D to high-volume runs.',
    points: ['Batches 50 – 10,000 lb', 'New-product R&D', 'Allergen-controlled lines'],
  },
  {
    id: 'packaging',
    title: 'Packaging, Pouch to Pallet',
    blurb: 'End-to-end co-packing: materials sourcing, bagging, boxing, and palletization — adapted to your specs and retail requirements.',
    points: ['Pouches, bags, sachets', 'Rigid container filling', 'Retail-ready case packing'],
  },
  {
    id: 'logistics',
    title: 'Warehousing & Fulfillment',
    blurb: 'Store and ship from our 65,000 sq-ft facility with environmental controls, inventory tracking, and professional staging.',
    points: ['Climate-controlled storage', 'Real-time inventory', 'LTL & FTL coordination'],
  },
  {
    id: 'stick-packs',
    title: 'Stick Packs',
    blurb: 'Single-serve stick packs for powders and dry mixes — supplements, drink mixes, and on-the-go formats, filled and sealed in-house.',
    points: ['Single-serve formats', 'Custom fill weights', 'On-the-go convenience'],
  },
] as const;

export const personas = [
  { id: 'owners', label: 'Food Brand Owners', need: 'Scale past your current co-packer without losing flexibility.' },
  { id: 'ops', label: 'Operations Managers', need: 'Reliable runs, on-time fulfillment, transparent communication.' },
  { id: 'product', label: 'Product Developers', need: 'R&D and formulation support to get new SKUs to shelf.' },
  { id: 'supply', label: 'Supply-Chain Leads', need: 'Consolidate mixing, packaging, and warehousing under one partner.' },
] as const;

export const process = [
  { n: 1, title: 'Free Consultation', detail: 'We review your specs, volume, and timeline.' },
  { n: 2, title: 'Assessment & Sampling', detail: 'We evaluate feasibility and produce test batches.' },
  { n: 3, title: 'Production Planning', detail: 'We finalize specs, packaging, and scheduling.' },
  { n: 4, title: 'Full-Scale Manufacturing', detail: 'Your product goes into regular production.' },
  { n: 5, title: 'Warehousing & Shipping', detail: 'We store and fulfill orders as needed.' },
] as const;

export const certifications = [
  { slug: 'sqf', name: 'SQF Certified' },
  { slug: 'kosher', name: 'Kosher' },
  { slug: 'usda-organic', name: 'USDA Organic' },
  { slug: 'halal', name: 'Halal' },
  { slug: 'non-gmo', name: 'Non-GMO Project' },
  { slug: 'gluten-free', name: 'Gluten Free' },
  { slug: 'allergen-free', name: 'Allergen Free' },
] as const;

/** SAMPLE testimonials for the pitch mockup — fictional, replaced with approved quotes on engagement. */
export const testimonials = [
  {
    quote: 'NPCO took us from farmers-market batches to 600+ retail doors in eighteen months — without a single missed shipment.',
    name: 'Maya Chen',
    role: 'Founder',
    brand: 'Sunrise Granola Co.',
  },
  {
    quote: 'Their R&D team reformulated our drink mix and had shelf-ready samples back in three weeks. That speed won us the account.',
    name: 'Daniel Reyes',
    role: 'Operations Director',
    brand: 'Brewhaus Mixes',
  },
  {
    quote: 'Allergen-controlled lines and flexible runs let us launch three SKUs at once. They scale with us instead of boxing us in.',
    name: 'Priya Nair',
    role: 'VP Product',
    brand: 'Trailhead Snacks',
  },
] as const;

/** SAMPLE client wordmarks for the logo strip (fictional brands). */
export const clients = ['Sunrise Granola', 'Brewhaus', 'Trailhead Snacks', 'Field & Vine', 'NorthFork Foods', 'Goldhouse'] as const;
