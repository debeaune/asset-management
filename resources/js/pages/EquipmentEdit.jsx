import Layout from './Layout'
import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function EquipmentEdit({ equipment, categories, locations }) {
    const [form, setForm] = useState({
        name: equipment.name,
        serial_number: equipment.serial_number,
        status: equipment.status,
        category_id: equipment.category_id,
        location_id: equipment.location_id,
    })

    function handleSubmit() {
        router.put(`/equipments/${equipment.id}`, form)
    }

    return (
        <Layout>
            <div style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
                <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                    ✏️ Modifier {equipment.name}
                </h1>
                <input 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Nom"
                    style={{display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem'}}
                />
                <button onClick={handleSubmit} style={{backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer'}}>
                    💾 Sauvegarder
                </button>
            </div>
        </Layout>
    )
}