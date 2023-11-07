export interface MenuItem {
  label: string
  link: string
  subMenu?: SubMenuItem[]
}

export interface SubMenuItem {
  name: string
  slug: string
}
