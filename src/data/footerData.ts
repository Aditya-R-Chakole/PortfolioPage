export interface FooterLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
}

export interface FooterSection {
  readonly id: string;
  readonly title: string;
  readonly links: readonly FooterLink[];
  readonly hasSecondColumn?: boolean;
  readonly secondColumnTitle?: string;
  readonly secondColumnLinks?: readonly FooterLink[];
}

export const footerData = {
  sections: [
    {
      id: 'css-generators',
      title: 'CSS Generators',
      links: [
        { id: 'bg-gradients', text: 'Background Gradients', href: '/tailwind-gradient-background' },
        { id: 'text-gradients', text: 'Text Gradients', href: '/tailwind-text-gradients' },
        { id: 'box-shadow', text: 'Box Shadow', href: '/tailwind-box-shadow' },
        { id: 'glassmorphism', text: 'Glassmorphism', href: '/tailwind-glassmorphism-generator' }
      ],
      hasSecondColumn: true,
      secondColumnTitle: 'More Tools',
      secondColumnLinks: [
        { id: 'colors', text: 'Colors', href: '/tailwind-colors' },
        { id: 'blob-generator', text: 'Blob Generator', href: '/blob-generator' },
        { id: 'mesh-generator', text: 'Mesh Generator', href: '/mesh-gradients' },
        { id: 'color-palettes', text: 'Color Palettes', href: '/color-palette-generator' }
      ]
    },
    {
      id: 'color-palettes',
      title: 'Color Palettes',
      links: [
        { id: 'summer', text: 'Summer Color Palette', href: '/summer-color-palette' },
        { id: 'winter', text: 'Winter Color Palette', href: '/winter-color-palette' },
        { id: 'colorful', text: 'Colorful Color Palette', href: '/colorful-color-palette' },
        { id: 'spring', text: 'Spring Color Palette', href: '/spring-color-palette' }
      ],
      hasSecondColumn: true,
      secondColumnTitle: '',
      secondColumnLinks: [
        { id: 'pastel', text: 'Pastel Color Palette', href: '/pastel-color-palette' },
        { id: 'neon', text: 'Neon Color Palette', href: '/neon-color-palette' },
        { id: 'vintage', text: 'Vintage Color Palette', href: '/vintage-color-palette' },
        { id: 'dark', text: 'Dark Color Palette', href: '/dark-color-palette' }
      ]
    }
  ]
} as const;
