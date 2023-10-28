import {
  IAside,
  IContent,
  IFooter,
  IHeader,
  ILayout,
  ILayoutCSSClasses,
  ILayoutCSSVariables,
  ILayoutHTMLAttributes,
  IPageTitle,
  ISidebar,
  IToolbar,
} from './LayoutModels'
import {DefaultLayoutConfig} from './DefaultLayoutConfig'

const LAYOUT_CONFIG_KEY = process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || 'LayoutConfig'

export function getLayout(): ILayout {
  const ls = localStorage.getItem(LAYOUT_CONFIG_KEY)
  if (ls) {
    try {
      return JSON.parse(ls) as ILayout
    } catch (er) {
      console.error(er)
    }
  }
  return DefaultLayoutConfig
}

function setLayout(config: ILayout): void {
  try {
    localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config))
  } catch (er) {
    console.error(er)
  }
}

export function getEmptyCssClasses() {
  return {
    header: [],
    headerContainer: [],
    headerMobile: [],
    headerMenu: [],
    aside: [],
    asideMenu: [],
    asideToggle: [],
    toolbar: [],
    toolbarContainer: [],
    content: [],
    contentContainer: [],
    footerContainer: [],
    sidebar: [],
    pageTitle: [],
  }
}

export function getEmptyHTMLAttributes() {
  return {
    asideMenu: new Map(),
    headerMobile: new Map(),
    headerMenu: new Map(),
    headerContainer: new Map(),
    pageTitle: new Map(),
  }
}

export function getEmptyCSSVariables() {
  return {
    body: new Map(),
  }
}

export class LayoutSetup {
  public static isLoaded: boolean = false
  public static config: ILayout = getLayout()
  public static classes: ILayoutCSSClasses = getEmptyCssClasses()
  public static attributes: ILayoutHTMLAttributes = getEmptyHTMLAttributes()
  public static cssVariables: ILayoutCSSVariables = getEmptyCSSVariables()

  private static initCSSClasses(): void {
    LayoutSetup.classes = getEmptyCssClasses()
  }

  private static initHTMLAttributes(): void {
    LayoutSetup.attributes = Object.assign({}, getEmptyHTMLAttributes())
  }

  private static initCSSVariables(): void {
    LayoutSetup.cssVariables = getEmptyCSSVariables()
  }

  private static initLayout(config: ILayout): void {}

  private static initHeader(config: IHeader): void {
    LayoutSetup.classes.headerContainer.push(
      config.width === 'fluid' ? 'container-fluid' : 'container'
    )

    if (config.fixed.desktop) {
      document.body.classList.add('header-fixed')
    }

    if (config.fixed.tabletAndMobile) {
      document.body.classList.add('header-tablet-and-mobile-fixed')
    }
  }

  private static initToolbar(config: IToolbar): void {}

  private static initPageTitle(config: IPageTitle): void {
    if (!config.display) {
      return
    }

    if (config.direction === 'column') {
      this.classes.pageTitle.push('flex-column')
      this.classes.pageTitle.push('align-items-start')
    } else {
      this.classes.pageTitle.push('align-items-center')
      this.classes.pageTitle.push('flex-wrap')
    }
    this.classes.pageTitle.push('me-3')

    if (config.responsive) {
      this.classes.pageTitle.push('mb-5')
      this.classes.pageTitle.push('mb-lg-0')

      LayoutSetup.attributes.pageTitle.set('data-kt-swapper', true)
      LayoutSetup.attributes.pageTitle.set('data-kt-swapper-mode', 'prepend')
      LayoutSetup.attributes.pageTitle.set(
        'data-kt-swapper-parent',
        `{ default: '#kt_content_container', '${config.responsiveBreakpoint}': '${config.responsiveTarget}'}`
      )
    }
  }

  private static initContent(config: IContent): void {
    if (config.width === 'fluid') {
      LayoutSetup.classes.contentContainer.push('container-fluid')
    } else {
      if (config.width === 'fixed') {
        LayoutSetup.classes.contentContainer.push('container-xxl')
      }
    }
  }

  private static initAside(config: IAside): void {
    // Check if aside is displayed
    if (!config.display) {
      return
    }
  }

  private static initAsideMenu(config: IAside): void {}

  private static initSidebar(sidebarConfig?: ISidebar): void {
    if (!sidebarConfig) {
      return
    }
  }

  private static initFooter(config: IFooter): void {
    LayoutSetup.classes.footerContainer.push(`container${config.width === 'fluid' ? '-fluid' : ''}`)
  }

  private static initConfig(config: ILayout): void {
    // Init layout
    LayoutSetup.initLayout(config)
    if (config.main?.type !== 'default') {
      return
    }

    LayoutSetup.initHeader(config.header)
    LayoutSetup.initPageTitle(config.pageTitle as IPageTitle)
    LayoutSetup.initToolbar(config.toolbar)
    LayoutSetup.initContent(config.content)
    LayoutSetup.initAside(config.aside)
    LayoutSetup.initFooter(config.footer)
    LayoutSetup.initAsideMenu(config.aside)
    LayoutSetup.initSidebar(config.sidebar)
  }

  public static updatePartialConfig(fieldsToUpdate: Partial<ILayout>): ILayout {
    const config = LayoutSetup.config
    const updatedConfig = {...config, ...fieldsToUpdate}
    document.body.className = ''
    LayoutSetup.initCSSClasses()
    LayoutSetup.initCSSVariables()
    LayoutSetup.initHTMLAttributes()
    LayoutSetup.isLoaded = false
    LayoutSetup.config = updatedConfig
    LayoutSetup.initConfig(Object.assign({}, updatedConfig))
    LayoutSetup.isLoaded = true // remove loading there
    return updatedConfig
  }

  public static setConfig(config: ILayout): void {
    setLayout(config)
  }

  public static bootstrap = (() => {
    LayoutSetup.updatePartialConfig(LayoutSetup.config)
  })()
}
