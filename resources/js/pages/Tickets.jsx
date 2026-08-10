import Layout from './Layout'
import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function Tickets({ tickets }) {
    const [confirmDelete, setConfirmDelete] = useState(null)

    function priorityBadge(priority) {
        if (priority === 'high') return { backgroundColor: '#fee2e2', color: '#991b1b' }
        if (priority === 'medium') return { backgroundColor: '#ffedd5', color: '#9a3412' }
        if (priority === 'low') return { backgroundColor: '#dcfce7', color: '#166534' }
        return { backgroundColor: '#f3f4f6' }
    }

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
                                <th style={{padding: '0.75rem', textAlign: 'center'}}>Titre</th>
                                <th style={{padding: '0.75rem', textAlign: 'center'}}>Status</th>
                                <th style={{padding: '0.75rem', textAlign: 'center'}}>Priorité</th>
                                <th style={{padding: '0.75rem', textAlign: 'center'}}>Équipement</th>
                                <th style={{padding: '0.75rem', textAlign: 'center'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map(t => (
                                <tr key={t.id} style={{borderTop: '1px solid #e5e7eb'}}>
                                    <td style={{padding: '0.75rem', textAlign: 'center'}}>{t.title}</td>
                                    <td style={{padding: '0.75rem', textAlign: 'center'}}>
                                        <span style={{...priorityBadge(t.status), padding: '0.25rem 0.75rem', display: 'inline-block', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500'}}>
                                            {t.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '0.75rem', textAlign: 'center'}}>
                                        <span style={{...priorityBadge(t.priority), padding: '0.25rem 0.75rem', display: 'inline-block', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500'}}>
                                            {t.priority}
                                        </span>
                                    </td>
                                    <td style={{padding: '0.75rem', textAlign: 'center'}}>{t.equipment?.name}</td>
                                    <td style={{padding: '0.75rem', textAlign: 'center'}}>
                                        <button 
                                            onClick={() => router.get(`/tickets/${t.id}/edit`)}
                                            style={{backgroundColor: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', marginRight: '0.5rem'}}>
                                                ✏️ Modifier
                                        </button>
                                        <button 
                                            onClick={() => setConfirmDelete(t.id)}
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
            {confirmDelete && (
                <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{backgroundColor: 'white', padding: '2rem', borderRadius: '0.75rem', maxWidth: '400px', width: '90%'}}>
                        <h2 style={{marginBottom: '1rem'}}>Confirmer la suppression</h2>
                        <p style={{marginBottom: '1.5rem', color: '#6b7280'}}>Cette action est irréversible.</p>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <button 
                                onClick={() => { router.delete(`/tickets/${confirmDelete}`); setConfirmDelete(null) }}
                                style={{backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', flex: 1}}>
                                Supprimer
                            </button>
                            <button 
                                onClick={() => setConfirmDelete(null)}
                                style={{backgroundColor: '#6b7280', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', flex: 1}}>
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}