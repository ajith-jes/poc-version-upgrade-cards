export type IconType = "" | 'Add' | 
'Attachment' | 
'AuditTrail' | 
'BackArrow' | 
'BulkClose' | 
'Close' | 
'Create' | 
'Download' | 
'ExpandWindow' | 
'Help' | 
'HidePW' | 
'Hierarchy' | 
'Hold' | 
'Home' | 
'mail1' | 
'names.sh' | 
'NotificationEmpty' | 
'NotificationYes' | 
'Open' | 
'output' | 
'Overdue' | 
'People' | 
'Profile' | 
'Report' | 
'Resolved' | 
'run.sh' | 
'Search' | 
'Security' | 
'ShowPW' | 
'text.txt' | 
'Upload' | 
'UserCheck' | 
'Work' |
'Copy' |
'ChevronDown' |
'Correspondence' |
'StatusCheck' |
'StatusCircle' |
'StatusPause' |
'StatusUserCheck' |
'StatusWarningInfo' |
'AppCard' |
'AppCSR' | 
'AppJV' |
'ComplainHistory' |
'AppUPI' |
'BinIcon'|
'Edit'|
"IconNotification"|
"IconDelete"|
"IconAssigned"|
"IconAudit"|
"IconLoader";


export type Icon = {
    /**
     * size of the icon
     */
    size?: number
    /**
     * color
     */
    color?: string
}

export type IconsProps = {
    /**
     * size of the icon
     */
    size?: number
    /**
     * icon name
     */
    name: IconType
    /**
     * color
     */
    color?: string
    /**
     * to capture click event
     * @returns {void}
     */
    onClick?: () => void
}

