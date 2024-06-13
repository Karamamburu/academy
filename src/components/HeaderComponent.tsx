import SearchComponent from './SearchComponent.tsx'
import SidebarMenuComponent from './SidebarMenuComponent.tsx'
import CabinetComponent from './CabinetComponent.tsx'

function HeaderComponent() {

    return (
        <>
            <SidebarMenuComponent />
            <CabinetComponent />
            <SearchComponent />
        </>
    )
}

export default HeaderComponent