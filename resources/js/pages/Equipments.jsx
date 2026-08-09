export default function Equipments({ equipments }) {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Parc Informatique</h1>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2">Nom</th>
                        <th className="p-2">Série</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Catégorie</th>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map(e => (
                        <tr key={e.id} className="border-t">
                            <td className="p-2">{e.name}</td>
                            <td className="p-2">{e.serial_number}</td>
                            <td className="p-2">{e.status}</td>
                            <td className="p-2">{e.category?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}