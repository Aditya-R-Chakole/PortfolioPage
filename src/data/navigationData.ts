export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href?: string;
  readonly type: 'link' | 'button';
  readonly icon?: string;
}

export const navigationData = {
  mainNav: [
    // {
    //   id: 'blog',
    //   label: 'Blog',
    //   href: '/blog',
    //   type: 'link' as const
    // },
    // {
    //   id: 'tools',
    //   label: 'Tools',
    //   type: 'button' as const,
    //   icon: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-2.svg"
    // }
  ]
} as const;
