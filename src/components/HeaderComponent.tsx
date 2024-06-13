import SearchComponent from './SearchComponent.tsx'
import SidebarMenuComponent from './SidebarMenuComponent.tsx'
import CabinetComponent from './CabinetComponent.tsx'

function HeaderComponent() {

    return (
        <div className='header'>
            <SidebarMenuComponent />
            <SearchComponent />
            <CabinetComponent />
        </div>
    )
}

export default HeaderComponent