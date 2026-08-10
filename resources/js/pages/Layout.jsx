export default function Layout({ children }) {
    return (
        <div>
            <nav style={{background: 'linear-gradient(135deg, #1e3a5f, #3b82f6)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.2)'}}>
                <span style={{color: 'white', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '1rem'}}>
                    🖥️ Parc IT
                </span>
                <a href="/equipments" style={{color: '#93c5fd', textDecoration: 'none', fontWeight: '500'}}>
                    Équipements
                </a>
                <a href="/tickets" style={{color: '#93c5fd', textDecoration: 'none', fontWeight: '500'}}>
                    Tickets
                </a>
                <a href="/locations" style={{color: '#93c5fd', textDecoration: 'none', fontWeight: '500'}}>
                    Localisations
                </a>
            </nav>
            <div>{children}</div>
        </div>
    )
}