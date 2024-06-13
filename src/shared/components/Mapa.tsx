import { Marker, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './MapTime.css'
import '../../App.css'


function Mapa() {
  return (
    <MapContainer
      center={[-8.0870709258829, -34.891816062109775]}
      zoom={70}
      scrollWheelZoom={false}
      className='Map-Container'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-8.0870709258829, -34.891816062109775]}>
      </Marker>
    </MapContainer>
  )
}
export default Mapa