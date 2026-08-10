import Layout from './Layout'
import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function TicketCreate({ equipments }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        status: 'open',
        priority: 'medium',
        equipment_id: '',
    })

    function handleSubmit() {
        router.post('/tickets', form)
    }

    return (
        <Layout>
            <div style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
                <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                    ➕ Nouveau ticket
                </h1>
                <input 
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                    placeholder="Titre"
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                />
                <textarea 
                    value={form.description}
                    onChange={e => setForm({...form, description: e.target.value})}
                    placeholder="Description"
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem', minHeight: '100px'}}
                />
                <select 
                    value={form.priority}
                    onChange={e => setForm({...form, priority: e.target.value})}
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                >
                    <option value="low">Basse</option>
                    <option value="medium">Moyenne</option>
                    <option value="high">Haute</option>
                </select>
                <select 
                    value={form.equipment_id}
                    onChange={e => setForm({...form, equipment_id: e.target.value})}
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                >
                    <option value="">Choisir un équipement</option>
                    {equipments.map(e => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
                </select>
                <button onClick={handleSubmit} style={{backgroundColor: '#22c55e', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer'}}>
                    💾 Créer
                </button>
            </div>
        </Layout>
    )
}