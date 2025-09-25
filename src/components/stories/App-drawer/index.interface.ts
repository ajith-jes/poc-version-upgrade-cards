
export type DrawerItem = {
    label: string,
    icon?: string,
    active_icon?: string,
    onClick?: (item: DrawerItem) => void
    active: (item: DrawerItem) => boolean
}

export type AppDrawerProps = {
    data: DrawerItem[]
}