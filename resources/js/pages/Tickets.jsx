import Layout from './Layout'

export default function Tickets({ tickets }) {
    return (
        <Layout>
            <div style={{minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem'}}>
                <h1 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937'}}>
                    🎫 Tickets
                </h1>
                <div style={{backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
                    <table style={{width: '100%', borderCollapse: 'collapse'}}>
                        <thead style={{backgroundColor: '#1f2937', color: 'white'}}>
                            <tr>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Titre</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Priorité</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Équipement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map(t => (
                                <tr key={t.id} style={{borderTop: '1px solid #e5e7eb'}}>
                                    <td style={{padding: '0.75rem'}}>{t.title}</td>
                                    <td style={{padding: '0.75rem'}}>{t.status}</td>
                                    <td style={{padding: '0.75rem'}}>{t.priority}</td>
                                    <td style={{padding: '0.75rem'}}>{t.equipment?.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}