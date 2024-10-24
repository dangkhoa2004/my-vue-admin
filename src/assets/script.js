export default function mainjs() {
    /*=============== SHOW SIDEBAR ===============*/
    const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
        const toggle = document.getElementById(toggleId),
            sidebar = document.getElementById(sidebarId),
            header = document.getElementById(headerId),
            main = document.getElementById(mainId)

        if (toggle && sidebar && header && main) {
            toggle.addEventListener('click', () => {
                /* Show sidebar */
                sidebar.classList.toggle('show-sidebar')
                /* Add padding header */
                header.classList.toggle('left-pd')
                /* Add padding main */
                main.classList.toggle('left-pd')
            })
        }
    }
    showSidebar('header-toggle', 'sidebar', 'header', 'main')

    /*=============== LINK ACTIVE ===============*/
    const sidebarLink = document.querySelectorAll('.sidebar__list a')

    function linkColor() {
        sidebarLink.forEach(l => l.classList.remove('active-link'))
        this.classList.add('active-link')
    }

    sidebarLink.forEach(l => l.addEventListener('click', linkColor))
}