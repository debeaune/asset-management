import Layout from './Layout'

export default function Locations({ locations }) {
    return (
        <Layout>
            <div style={{minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem'}}>
                <h1 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937'}}>
                    📍 Localisations
                </h1>
                <div style={{backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
                    <table style={{width: '100%', borderCollapse: 'collapse'}}>
                        <thead style={{backgroundColor: '#1f2937', color: 'white'}}>
                            <tr>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Nom</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Bâtiment</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Salle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locations.map(l => (
                                <tr key={l.id} style={{borderTop: '1px solid #e5e7eb'}}>
                                    <td style={{padding: '0.75rem'}}>{l.name}</td>
                                    <td style={{padding: '0.75rem'}}>{l.building}</td>
                                    <td style={{padding: '0.75rem'}}>{l.room}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}