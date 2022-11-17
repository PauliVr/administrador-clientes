import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div className='space-y-5 '>
      <h1 className='text-center text-6xl font-extrabold mt-16 text-blue-900'>CRM - Clientes</h1>
      <p className='text-center mt-3'>Hubo un error</p>
      <p className='text-center mt-3'>{error.message}</p>
      <div className='flex justify-center align-middle'>
        <img className='w-2/3' src='./public/animation.svg' alt='Animación' />
      </div>
    </div>
  );
}
