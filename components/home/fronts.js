const Fronts = () => (
  <React.Fragment>
    <div className='bg-secondary text-center text-white' id='frentes'>
      <div className='container mx-auto px-4'>
        <h3 className='text-5xl md:text-6xl font-bold py-4'>Frentes</h3>
        <div className='flex flex-col md:flex-row pb-12'>
          <div className='w-full lg:w-1/3 px-2'>
            <h4 className='text-2xl md:text-4xl font-medium ff-secondary'>
              Ensino
            </h4>
            <p className='text-xl md:text-2xl ff-secondary'>
              Organizamos aulas avançadas sobre Aprendizado de Máquina com
              professores convidados, abordando tópicos como classificação
              hierárquica, data stream e mercado financeiro.
            </p>
          </div>
          <div className='w-full lg:w-1/3 px-2 py-4 md:py-0'>
            <h4 className='text-2xl md:text-4xl font-medium ff-secondary'>
              Pesquisa
            </h4>
            <p className='text-xl md:text-2xl ff-secondary'>
              Possuímos um grupo de estudo em Deep Learning dedicado a entender
              o estado da arte por meio do estudo e discussão de artigos de
              impacto, além da (re)implementação de experimentos.
            </p>
          </div>
          <div className='w-full lg:w-1/3 px-2'>
            <h4 className='text-2xl md:text-4xl font-medium ff-secondary'>
              Parcerias
            </h4>
            <p className='text-xl md:text-2xl ff-secondary'>
              Estamos sempre buscando um contato com a indústria - organizamos
              eventos e competições de ciência de dados para aproximar teoria e
              prática.
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Fronts;
