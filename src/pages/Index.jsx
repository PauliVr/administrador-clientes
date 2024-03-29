import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes';

// Exportar Loader
export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

function Index() {
  // Recuperamos Loader
  const clientes = useLoaderData();

  // Error Boundaries -> componentes de React que obtienen los errores en cualquier lugar del componente
  // Muestran los errores cuando ocurren y una interfaz en lugar del componente que causo el error

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>

      {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Clientes</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'>No hay clientes aún</p>
      )}
    </>
  );
}

export default Index;
