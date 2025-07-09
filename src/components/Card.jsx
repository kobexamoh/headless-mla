export default function Card({ name, party, region, division, photo }) {
    return (
        <div className="p-4 border rounded-lg shadow bg-white text-gray-900">
            <img src={photo} alt={`${name} headshot`} className="w-75 h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-700">{party}</p>
            <p className="text-sm">{division}, {region}</p>
        </div>
    );
}