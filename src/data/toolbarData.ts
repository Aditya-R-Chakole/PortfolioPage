export interface ToolbarItem {
  readonly id: string;
  readonly type: 'button' | 'wrapper' | 'divider' | 'color-group';
  readonly icon?: string;
  readonly className?: string;
  readonly iconClass?: string;
  readonly label?: string;
  readonly mobileClass?: string;
  readonly desktopClass?: string;
}

export const toolbarData = {
  mobileTools: [
    {
      id: 'mobile-main',
      type: 'wrapper' as const,
      icon: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-21.svg"
    },
    {
      id: 'mobile-tool1',
      type: 'button' as const,
      icon: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-22.svg",
      className: "text-white items-center bg-indigo-950 flex justify-center min-h-[auto] min-w-[auto] text-center px-4 py-3 rounded-md md:min-h-0 md:min-w-0"
    },
    {
      id: 'mobile-tool2',
      type: 'button' as const,
      icon: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-23.svg",
      className: "text-white items-center bg-indigo-900 flex justify-center min-h-[auto] min-w-[auto] text-center px-4 py-3 rounded-md md:min-h-0 md:min-w-0"
    },
    {
      id: 'mobile-tool3',
      type: 'button' as const,
      icon: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-24.svg",
      className: "text-white items-center bg-indigo-950 flex justify-center min-h-[auto] min-w-[auto] text-center px-4 py-3 rounded-md md:min-h-0 md:min-w-0"
    },
    {
      id: 'mobile-tool4',
      type: 'button' as const,
      icon: "https://c.animaapp.com/mdu73xvuDUYcqi/assets/icon-25.svg",
      className: "text-black [align-items:normal] bg-zinc-100 inline-block justify-normal text-center px-1.5 py-px rounded-none md:text-white md:items-center md:aspect-auto md:bg-indigo-950 md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-4 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-md"
    }
  ],
  desktopTools: [
    {
      id: 'text-color',
      type: 'color-group' as const,
      label: 'Text',
      mobileClass: "text-white text-sm font-medium items-center bg-gray-950 inline-flex h-10 justify-center leading-5 text-center text-nowrap px-4 py-2 rounded-md md:hidden",
      desktopClass: "text-white items-center bg-indigo-950 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hidden justify-center text-center px-[28.8px] py-[10.8px] rounded-md md:flex",
      title: "Home"
    },
    {
      id: 'text-color',
      type: 'color-group' as const,
      label: 'Text',
      mobileClass: "text-white text-sm font-medium items-center bg-gray-950 inline-flex h-10 justify-center leading-5 text-center text-nowrap px-4 py-2 rounded-md md:hidden",
      desktopClass: "text-white items-center bg-indigo-950 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hidden justify-center text-center px-[28.8px] py-[10.8px] rounded-md md:flex",
      title: "About Me"
    },
    {
      id: 'text-color',
      type: 'color-group' as const,
      label: 'Text',
      mobileClass: "text-white text-sm font-medium items-center bg-gray-950 inline-flex h-10 justify-center leading-5 text-center text-nowrap px-4 py-2 rounded-md md:hidden",
      desktopClass: "text-white items-center bg-indigo-950 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hidden justify-center text-center px-[28.8px] py-[10.8px] rounded-md md:flex",
      title: "Resume"
    },
    {
      id: 'background-color',
      type: 'color-group' as const,
      label: 'Background',
      mobileClass: "text-black text-sm font-medium items-center bg-gray-100 inline-flex h-10 justify-center leading-5 text-center text-nowrap px-4 py-2 rounded-md md:hidden",
      desktopClass: "text-white items-center bg-indigo-950 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hidden justify-center text-center px-[28.8px] py-[10.8px] rounded-md md:flex",
      title: "Projects"
    },
    {
      id: 'primary-color',
      type: 'color-group' as const,
      label: 'Primary',
      mobileClass: "text-white text-sm font-medium items-center bg-indigo-950 inline-flex h-10 justify-center leading-5 text-center text-nowrap px-4 py-2 rounded-md md:hidden",
      desktopClass: "text-white items-center bg-indigo-950 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] hidden justify-center text-center px-[28.8px] py-[10.8px] rounded-md md:flex",
      title: "Contact"
    }
  ]
} as const;
