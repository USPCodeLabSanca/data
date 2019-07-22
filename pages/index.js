import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';

const Home = () => (
  <React.Fragment>
    <Head />
    <Navbar />
    <main>
      <div className='container mx-auto flex flex-col items-center justify-center px-4 h-screen pt-navbar' id='home'>
        <img src='/static/images/logot.png' className='h-image my-2' />
        <div className='text-gray text-center my-2'>
          <h1 className='text-5xl md:text-6xl font-bold'>data</h1>
          <h2 className='text-xl md:text-2xl'>
            Grupo de extensão de ciência de dados e aprendizado de máquina
          </h2>
        </div>
      </div>

      <div className='bg-primary text-center text-white' id='sobre'>
        <div className='container mx-auto px-4'>
          <h3 className='text-5xl md:text-6xl font-bold py-4'>sobre</h3>
          <p className='text-xl md:text-2xl pb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            mi in enim gravida sollicitudin. Nunc quis fringilla ipsum. Mauris
            eros lorem, convallis nec fermentum nec, pellentesque ac ligula.
            Integer auctor mattis mattis. Ut rhoncus diam ac arcu tempus
            dapibus. Morbi id aliquet libero. Fusce posuere posuere dapibus.
            Duis ligula dolor, condimentum quis consectetur ut, fermentum id
            tellus. Nullam aliquet sodales augue. Etiam porta tristique mauris.
            Donec eu vulputate diam.
          </p>
        </div>
      </div>

      <div className='bg-secondary text-center text-white' id='frentes'>
        <div className='container mx-auto px-4'>
          <h3 className='text-5xl md:text-6xl font-bold py-4'>frentes</h3>
          <div className='flex flex-col md:flex-row pb-12'>
            <div className='w-full lg:w-1/3 px-2'>
              <h4 className='text-2xl md:text-4xl font-medium'>frente</h4>
              <p className='text-xl md:text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                at mi in enim gravida sollicitudin. Nunc quis fringilla ipsum.
                Mauris eros lorem, convallis nec fermentum nec, pellentesque ac
                ligula
              </p>
            </div>
            <div className='w-full lg:w-1/3 px-2 py-4 md:py-0'>
              <h4 className='text-2xl md:text-4xl font-medium'>frente</h4>
              <p className='text-xl md:text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                at mi in enim gravida sollicitudin. Nunc quis fringilla ipsum.
                Mauris eros lorem, convallis nec fermentum nec, pellentesque ac
                ligula
              </p>
            </div>
            <div className='w-full lg:w-1/3 px-2'>
              <h4 className='text-2xl md:text-4xl font-medium'>frente</h4>
              <p className='text-xl md:text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                at mi in enim gravida sollicitudin. Nunc quis fringilla ipsum.
                Mauris eros lorem, convallis nec fermentum nec, pellentesque ac
                ligula
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 text-center' id='contato'>
        <h3 className='text-5xl md:text-6xl font-bold py-4'>contato</h3>
        <form className='pb-12'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 mr-0 md:mr-4'>
              <input
                className='w-full text-xl md:text-2xl font-bold border border-solid border-gray mb-6 p-4 form-control'
                id='nome'
                type='text'
                name='nome'
                placeholder='nome'
              />
              <input
                className='w-full text-xl md:text-2xl font-bold border border-solid border-gray mb-6 p-4 form-control'
                id='email'
                type='email'
                name='email'
                placeholder='email'
              />
              <input
                className='w-full text-xl md:text-2xl font-bold border border-solid border-gray mb-6 p-4 form-control'
                id='assunto'
                type='text'
                name='assunto'
                placeholder='assunto'
              />
            </div>
            <div className='mb-6 md:w-1/2'>
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
            className='w-full button bg-primary text-white text-xl md:text-2xl font-bold p-4'
          >
            enviar
          </button>
        </form>
      </div>
    </main>
    <Footer />
    <style jsx>{`
      .pt-navbar {
        padding-top: 58px;
      }

      .h-image {
        max-height: 50%;
      }

      .button {
        transition: 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      .button:hover {
        background-color: #34acd9;
      }
    `}</style>
  </React.Fragment>
);

export default Home;
