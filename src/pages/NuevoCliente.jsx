import { Form, useNavigate } from 'react-router-dom';
import Formulario from '../components/Formulario';

// 2 creamos la funcion de action que hará referencia al action al enviar el formulario 
export function action(){
  console.log('sumbit al formulario...');
}


function NuevoCliente() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {/*1 para usar Form de react router dom importamos el componente, y le pasamos su metodo y action */}
        <Form method='post' action=''>
          <Formulario />
          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value='registrar cliente'
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;
