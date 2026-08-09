import Layout from './Layout'
import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function EquipmentCreate({ categories, locations }) {
    const [form, setForm] = useState({
        name: '',
        serial_number: '',
        status: 'active',
        category_id: '',
        location_id: '',
    })

    function handleSubmit() {
        router.post('/equipments', form)
    }

    return (
        <Layout>
            <div style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
                <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                    ➕ Nouvel équipement
                </h1>
                <input 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Nom"
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                />
                <input 
                    value={form.serial_number}
                    onChange={e => setForm({...form, serial_number: e.target.value})}
                    placeholder="Numéro de série"
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                />
                <select 
                    value={form.status}
                    onChange={e => setForm({...form, status: e.target.value})}
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="maintenance">Maintenance</option>
                </select>
                <select 
                    value={form.category_id}
                    onChange={e => setForm({...form, category_id: e.target.value})}
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                >
                    <option value="">Choisir une catégorie</option>
                    {categories.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <button onClick={handleSubmit} style={{backgroundColor: '#22c55e', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer'}}>
                    💾 Créer
                </button>
            </div>
        </Layout>
    )
}