import {ILayout} from './LayoutModels'

export const DefaultLayoutConfig: ILayout = {
  main: {
    type: 'default', // Set layout type: default|blank|none
    primaryColor: '#04C8C8', // Primary color used in email templates
    darkSkinEnabled: true, // Enable optional dark mode mode
    pageBgWhite: false, // Set true if page background color is white
    iconType: 'duotone',
  },
  illustrations: {
    componentName: 'illustrations',
    set: 'dozzy-1',
  },
  loader: {
    display: false,
    type: 'default', // Set default|spinner-message|spinner-logo to hide or show page loader
  },
  scrolltop: {
    display: true, // Enable scrolltop
  },
  header: {
    display: true, // Set true|false to show or hide Header
    width: 'fluid', // Set fixed|fluid to change width type
    left: 'menu',
    fixed: {
      desktop: false, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: false, // Set true|false to set fixed Header for tablet and mobile modes
    },
    menuIcon: 'svg',
  },
  aside: {
    display: true,
    theme: 'dark',
    menu: 'main',
    fixed: true,
    minimized: false,
    minimize: false,
    hoverable: true,
    menuIcon: 'svg',
  },
  content: {
    width: 'fluid', // Set fixed|fluid to change width
    layout: 'default',
  },
  toolbar: {
    display: true, // Display toolbar
    width: 'fluid', // Set fixed|fluid to change width type,
    fixed: {
      desktop: true,
      tabletAndMobileMode: true,
    },
    layout: 'toolbar1',
    layouts: {
      toolbar1: {
        height: '55px',
        heightAndTabletMobileMode: '55px',
      },
      toolbar2: {
        height: '75px',
        heightAndTabletMobileMode: '65px',
      },
      toolbar3: {
        height: '55px',
        heightAndTabletMobileMode: '55px',
      },
      toolbar4: {
        height: '65px',
        heightAndTabletMobileMode: '65px',
      },
      toolbar5: {
        height: '75px',
        heightAndTabletMobileMode: '65px',
      },
    },
  },
  footer: {
    width: 'fluid', // Set fixed|fluid to change width type
  },
  pageTitle: {
    display: true, // Display page title
    breadCrumbs: true, // Display breadcrumb
    description: false, // Display description
    responsive: true, // Move page title to cotnent on mobile mode
    responsiveBreakpoint: 'lg', // Responsive breakpoint value(e.g: md, lg, or 300px)
    responsiveTarget: '#kt_toolbar_container', // Responsive target selector
  },
  sidebar: {
    display: true, // only for dashboard
  },
}
