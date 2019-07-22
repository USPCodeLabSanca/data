const Jumbotron = () => (
  <React.Fragment>
    <div
      className='container mx-auto flex flex-col items-center justify-center px-4 h-screen pt-navbar'
      id='home'
    >
      <img
        src='/static/images/logot.png'
        className='h-image my-2'
        alt='data logo'
      />
      <div className='text-gray text-center my-2'>
        <h1 className='text-5xl md:text-6xl font-bold'>data</h1>
        <h2 className='text-xl md:text-2xl'>
          Grupo de extensão de ciência de dados e aprendizado de máquina
        </h2>
      </div>
    </div>
    <style jsx>{`
      .pt-navbar {
        padding-top: 58px;
      }

      .h-image {
        max-height: 50%;
      }
    `}</style>
  </React.Fragment>
);

export default Jumbotron;
