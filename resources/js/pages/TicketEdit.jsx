import Layout from './Layout'
import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function TicketEdit({ ticket, equipments }) {
    const [form, setForm] = useState({
        title: ticket.title,
        description: ticket.description,
        status: ticket.status,
        priority: ticket.priority,
        equipment_id: ticket.equipment_id,
    })

    function handleSubmit() {
        router.put(`/tickets/${ticket.id}`, form)
    }

    return (
        <Layout>
            <div style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
                <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                    ✏️ Modifier ticket
                </h1>
                <input 
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                    placeholder="Titre"
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                />
                <select 
                    value={form.status}
                    onChange={e => setForm({...form, status: e.target.value})}
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                </select>
                <select 
                    value={form.priority}
                    onChange={e => setForm({...form, priority: e.target.value})}
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                >
                    <option value="low">Basse</option>
                    <option value="medium">Moyenne</option>
                    <option value="high">Haute</option>
                </select>
                <button onClick={handleSubmit} style={{backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer'}}>
                    💾 Sauvegarder
                </button>
            </div>
        </Layout>
    )
}