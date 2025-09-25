
import { Icon, IconType, IconsProps } from './index.interface';

import { IconAttachment } from './svg/Attachment'
import { IconAuditTrail } from './svg/AuditTrail'
import { IconBackArrow } from './svg/BackArrow'
import { IconBulkClose } from './svg/BulkClose'
import { IconClose } from './svg/Close'
import { IconCreate } from './svg/Create'
import { IconDownload } from './svg/Download'
import { IconExpandWindow } from './svg/ExpandWindow'
import { IconHelp } from './svg/Help'
import { IconHidePW } from './svg/HidePW'
import { IconHierarchy } from './svg/Hierarchy'
import { IconHold } from './svg/Hold'
import { IconHome } from './svg/Home'
import { Iconmail1 } from './svg/mail1'
import { IconNotificationEmpty } from './svg/NotificationEmpty'
import { IconNotification } from './svg/NotificationIcon';
import { IconNotificationYes } from './svg/NotificationYes'
import { IconOpen } from './svg/Open'
import { IconOverdue } from './svg/Overdue'
import { IconPeople } from './svg/People'
import { IconProfile } from './svg/Profile'
import { IconReport } from './svg/Report'
import { IconSearch } from './svg/Search'
import { IconSecurity } from './svg/Security'
import { IconShowPW } from './svg/ShowPW'
import { IconUpload } from './svg/Upload'
import { IconUserCheck } from './svg/UserCheck'
import { IconWork } from './svg/Work'
import { IconAdd } from './svg/AddIcon';
import { IconStatusCheck } from './svg/StatusCheck';
import { IconStatusCircle } from './svg/StatusCircle';
import { IconStatusPause } from './svg/StatusPause';
import { IconUserCheckStatus } from './svg/UserCheckStatus';
import { IconWarningInfoStatus } from './svg/WarningInfo';
import { IconCopy } from './svg/Copy';
import { IconChevronDown } from './svg/CheveronDown';
import { IconCorrespondence } from './svg/Correspondence';
import { IconAppCard } from './svg/AppCard';
import { IconAppCSR } from './svg/AppCSR';
import { IconAppJV } from './svg/AppJV';
import { IconAppUPI } from './svg/AppUPI';
import { IconComplainHistory } from './svg/ComplainHistory';
import { BinIcon } from './svg/BinIcon';
import { IconEdit } from './svg/EditIcon';
import { IconDelete } from './svg/DeleteIcon';
import { IconAssigned } from './svg/AssignedIcon'
import { IconAudit } from './svg/AuditIcon';
import { IconLoader } from './svg/LoaderIcon';
const componentMap = (name: IconType, props: Icon) => {
    switch (name) {
        case 'Add':
            return <IconAdd {...props} />
        case 'Attachment':
            return <IconAttachment {...props} />
        case 'AuditTrail':
            return <IconAuditTrail {...props} />
        case 'BackArrow':
            return <IconBackArrow {...props} />
        case 'BulkClose':
            return <IconBulkClose {...props} />
        case 'Close':
            return <IconClose {...props} />
        case 'Create':
            return <IconCreate {...props} />
        case 'Download':
            return <IconDownload {...props} />
        case 'ExpandWindow':
            return <IconExpandWindow {...props} />
        case 'Help':
            return <IconHelp {...props} />
        case 'HidePW':
            return <IconHidePW {...props} />
        case 'Hierarchy':
            return <IconHierarchy {...props} />
        case 'Hold':
            return <IconHold {...props} />
        case 'Home':
            return <IconHome {...props} />
        case 'mail1':
            return <Iconmail1 {...props} />
        case 'NotificationEmpty':
            return <IconNotificationEmpty {...props} />
        case 'NotificationYes':
            return <IconNotificationYes {...props} />
        case 'Open':
            return <IconOpen {...props} />
        case 'Overdue':
            return <IconOverdue {...props} />
        case 'People':
            return <IconPeople {...props} />
        case 'Profile':
            return <IconProfile {...props} />
        case 'Report':
            return <IconReport {...props} />
        case 'Search':
            return <IconSearch {...props} />
        case 'Security':
            return <IconSecurity {...props} />
        case 'ShowPW':
            return <IconShowPW {...props} />
        case 'Upload':
            return <IconUpload {...props} />
        case 'UserCheck':
            return <IconUserCheck {...props} />
        case 'Work':
            return <IconWork {...props} />
        case 'Copy':
            return <IconCopy {...props} />
        case 'ChevronDown':
            return <IconChevronDown {...props} />
        case 'StatusCheck':
            return <IconStatusCheck {...props} />
        case 'StatusCircle':
            return <IconStatusCircle {...props} />
        case 'StatusPause':
            return <IconStatusPause {...props} />
        case 'StatusUserCheck':
            return <IconUserCheckStatus {...props} />
        case 'StatusWarningInfo':
            return <IconWarningInfoStatus {...props} />
        case 'Correspondence':
            return <IconCorrespondence {...props} />
        case 'AppCard':
            return <IconAppCard {...props} />
        case 'AppCSR':
            return <IconAppCSR {...props} />
        case 'AppJV':
            return <IconAppJV {...props} />
        case 'AppUPI':
            return <IconAppUPI {...props} />
        case 'ComplainHistory':
            return <IconComplainHistory {...props} />
        case 'BinIcon':
            return <BinIcon {...props} />
        case 'Edit':
            return <IconEdit {...props} />
        case 'IconNotification':
            return <IconNotification {...props} />
        case 'IconDelete':
            return <IconDelete {...props} />
        case 'IconAssigned':
            return <IconAssigned {...props} />
        case 'IconAudit':
            return <IconAudit {...props} />
        case 'IconLoader':
            return <IconLoader {...props} />
        default:
            return <span></span>
    }
}


/**
 * Primary UI component for user interaction
 */
export const Iconx = (_props: IconsProps) => {
    return (
        componentMap(_props.name, _props)
    );
};