export interface FeaturedLogo {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
}

export const featuredLogos: FeaturedLogo[] = [
  { id: 'logo1', src: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-8.svg", alt: 'Icon' },
  { id: 'logo2', src: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-9.svg", alt: 'Icon' },
  { id: 'logo3', src: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-10.svg", alt: 'Icon' },
  { id: 'logo4', src: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-11.svg", alt: 'Icon' },
  { id: 'logo5', src: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-12.svg", alt: 'Icon' }
] as const;
