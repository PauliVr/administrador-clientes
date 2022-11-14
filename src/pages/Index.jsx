export function loader() {
  return 'desde loader';
}

function Index() {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes</p>
    </>
  );
}

export default Index;
