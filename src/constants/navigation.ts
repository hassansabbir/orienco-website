import { NavItem, SocialLink, FooterSection } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'Youtube', href: 'https://youtube.com', icon: 'youtube' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Home',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Category', href: '/category' },
      { label: 'All Cars', href: '/all-cars' },
    ],
  },
  {
    title: 'Business Hours',
    links: [
      { label: 'We are open 24/7', href: '#' },
    ],
  },
  {
    title: 'Contact Info',
    links: [
      { label: '+1 (555) 234-6789', href: 'tel:+15552346789' },
      { label: 'info@12345aa.com', href: 'mailto:info@12345aa.com' },
    ],
  },
];