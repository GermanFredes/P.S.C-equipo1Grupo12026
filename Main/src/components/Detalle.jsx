import "../App.css";
import { obtenerColor } from "../utils/categoria";

export default function Detalle({ elemento , cerrar}) {
  return (
    <aside
      className="detalle"
      style={{ backgroundColor: obtenerColor(elemento.categoria) }}
    >
      <h2>{elemento.nombre}</h2>
      <button onClick={cerrar}>X</button>

      <p><strong>Símbolo:</strong> {elemento.simbolo}</p>
      <p><strong>Número atómico:</strong> {elemento.numero}</p>
      <p><strong>Categoría:</strong> {elemento.categoria}</p>
      <p><strong>Masa atómica:</strong> {elemento.masa}</p>
      <p><strong>Estado:</strong> {elemento.estado}</p>
      <p><strong>Grupo:</strong> {elemento.grupo}</p>
      <p><strong>Período:</strong> {elemento.periodo}</p>
      <p><strong>Configuración electrónica:</strong> {elemento.configuracion}</p>
      <p><strong>Electronegatividad:</strong> {elemento.electronegatividad}</p>
      <p><strong>Densidad:</strong> {elemento.densidad} g/cm³</p>
     
    </aside>
  );
}
