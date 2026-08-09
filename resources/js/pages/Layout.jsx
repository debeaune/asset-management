export default function Layout({ children }) {
    return (
        <div>
            <nav style={{backgroundColor: '#1f2937', padding: '1rem', display: 'flex', gap: '1.5rem'}}>
                <a href="/equipments" style={{color: 'white', textDecoration: 'none', fontWeight: '500'}}>
                    🖥️ Équipements
                </a>
                <a href="/tickets" style={{color: 'white', textDecoration: 'none', fontWeight: '500'}}>
                    🎫 Tickets
                </a>
                <a href="/locations" style={{color: 'white', textDecoration: 'none', fontWeight: '500'}}>
                    📍 Localisations
                </a>
            </nav>
            <div>{children}</div>
        </div>
    )
}