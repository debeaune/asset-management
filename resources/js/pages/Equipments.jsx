import Layout from './Layout'
import { router } from '@inertiajs/react'

export default function Equipments({ equipments }) {
    function statusBadge(status) {
        if (status === 'active') return { backgroundColor: '#dcfce7', color: '#166534' }
        if (status === 'inactive') return { backgroundColor: '#fee2e2', color: '#991b1b' }
        if (status === 'maintenance') return { backgroundColor: '#ffedd5', color: '#9a3412' }
        return { backgroundColor: '#f3f4f6' }
    }

    const total = equipments.length
    const actifs = equipments.filter(e => e.status === 'active').length
    const maintenance = equipments.filter(e => e.status === 'maintenance').length

    return (
        <Layout>
            <div style={{minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem'}}>
                <h1 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937'}}>
                    🖥️ Parc Informatique
                </h1>
            
                <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
                    <div style={{backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1}}>
                        <p style={{color: '#6b7280', fontSize: '0.75rem'}}>Total</p>
                        <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937'}}>{total}</p>
                    </div>
                    <div style={{backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1}}>
                        <p style={{color: '#6b7280', fontSize: '0.75rem'}}>Actifs</p>
                        <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#166534'}}>{actifs}</p>
                    </div>
                    <div style={{backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1}}>
                        <p style={{color: '#6b7280', fontSize: '0.75rem'}}>Maintenance</p>
                        <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9a3412'}}>{maintenance}</p>
                    </div>
                </div>

                <div style={{backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
                    <table style={{width: '100%', borderCollapse: 'collapse'}}>
                        <thead style={{backgroundColor: '#1f2937', color: 'white'}}>
                            <tr>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Nom</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Série</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Catégorie</th>
                                <th style={{padding: '0.75rem', textAlign: 'left'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipments.map(e => (
                                <tr key={e.id} style={{borderTop: '1px solid #e5e7eb'}}>
                                    <td style={{padding: '0.75rem'}}>{e.name}</td>
                                    <td style={{padding: '0.75rem'}}>{e.serial_number}</td>
                                    <td style={{padding: '0.75rem'}}>
                                        <span style={{...statusBadge(e.status), padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500'}}>
                                            {e.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '0.75rem'}}>{e.category?.name}</td>
                                    <td style={{padding: '0.75rem'}}>
                                        <button 
                                            style={{backgroundColor: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', marginRight: '0.5rem'}}>
                                                ✏️ Modifier
                                        </button>
                                        <button 
                                            onClick={() => {
                                                if (confirm('Supprimer cet équipement ?')) {
                                                    router.delete(`/equipments/${e.id}`)
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