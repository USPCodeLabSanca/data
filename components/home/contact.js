const Contact = () => (
  <React.Fragment>
    <div className='container mx-auto px-4 text-center' id='contato'>
      <h3 className='text-5xl md:text-6xl font-bold py-4'>contato</h3>
      <form className='pb-12'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 mr-0 md:mr-4'>
            <label for='nome' style={{ fontSize: '0px' }}>
              nome
            </label>
            <input
              className='w-full text-xl md:text-2xl font-bold border border-solid border-gray mb-6 p-4 form-control'
              id='nome'
              type='text'
              name='nome'
              placeholder='nome'
            />
            <label for='email' style={{ fontSize: '0px' }}>
              email
            </label>
            <input
              className='w-full text-xl md:text-2xl font-bold border border-solid border-gray mb-6 p-4 form-control'
              id='email'
              type='email'
              name='email'
              placeholder='email'
            />
            <label for='assunto' style={{ fontSize: '0px' }}>
              assunto
            </label>
            <input
              className='w-full text-xl md:text-2xl font-bold border border-solid border-gray mb-6 p-4 form-control'
              id='assunto'
              type='text'
              name='assunto'
              placeholder='assunto'
            />
          </div>
          <div className='mb-6 md:w-1/2'>
            <label for='mensagem' style={{ fontSize: '0px' }}>
              mensagem
            </label>
            <textarea
              className='h-px w-full text-xl md:text-2xl font-bold border border-solid border-gray p-4 form-control'
              id='mensagem'
              name='mensagem'
              placeholder='mensagem'
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full button bg-primary text-white text-lg md:text-xl font-bold p-4 ff-secondary'
        >
          ENVIAR
        </button>
      </form>
    </div>
    <style jsx>{`
      .button {
        transition: 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      .button:hover {
        background-color: #34acd9;
      }
    `}</style>
  </React.Fragment>
);

export default Contact;
