import Layout from './Layout'
import { router } from '@inertiajs/react'

export default function Tickets({ tickets }) {
    return (
        <Layout>
            <div style={{minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem'}}>
                <h1 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937'}}>
                    🎫 Tickets
                </h1>
                <button 
                    onClick={() => router.get('/tickets/create')}
                    style={{backgroundColor: '#22c55e', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', marginBottom: '1.5rem'}}>
                        ➕ Nouveau ticket
                </button>

                <div style={{backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
                    <table style={{width: '100%', borderCollapse: 'collapse'}}>
                        <thead style={{backgroundColor: '#1f2937', color: 'white'}}>
                            <tr>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Titre</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Priorité</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Équipement</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map(t => (
                                <tr key={t.id} style={{borderTop: '1px solid #e5e7eb'}}>
                                    <td style={{padding: '0.75rem'}}>{t.title}</td>
                                    <td style={{padding: '0.75rem'}}>{t.status}</td>
                                    <td style={{padding: '0.75rem'}}>{t.priority}</td>
                                    <td style={{padding: '0.75rem'}}>{t.equipment?.name}</td>
                                    <td style={{padding: '0.75rem'}}>
                                        <button 
                                            onClick={() => router.get(`/tickets/${t.id}/edit`)}
                                            style={{backgroundColor: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', marginRight: '0.5rem'}}>
                                                ✏️ Modifier
                                        </button>
                                        <button 
                                            onClick={() => {
                                            if (confirm('Supprimer ce ticket ?')) {
                                                router.delete(`/tickets/${t.id}`)
                                            }
                                        }}
                                        style={{backgroundColor: '#ef4444', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer'}}>
                                            🗑️ Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}