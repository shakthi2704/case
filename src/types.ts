export interface MenuItem {
  label: string
  link: string
  subMenu?: SubMenuItem[]
}

export interface SubMenuItem {
  name: string
  slug: string
}
export interface CopyButtonProps {
  onClick: () => void
  isDisabled: boolean
}
export interface DownloadButtonProps {
  onClick: () => void
  isDisabled: boolean
}

export interface ClearButtonProps {
  onClick: () => void
  isDisabled: boolean
}
