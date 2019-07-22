const Footer = () => (
  <footer className='bg-gray h-56'>
    <div className='flex flex-col justify-center container h-full mx-auto'>
      <div className='flex justify-center'>
        <div className='w-8 h-8 rounded-full bg-white m-4' />
        <div className='w-8 h-8 rounded-full bg-white m-4' />
        <div className='w-8 h-8 rounded-full bg-white m-4' />
        <div className='w-8 h-8 rounded-full bg-white m-4' />
      </div>
      <p className='text-white text-center'>
        feito pelo
        <a
          href='https://codelab-icmc.netlify.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary link ml-2'
        >
          USPCodeLab São Carlos
        </a>
      </p>
    </div>
    <style jsx>{`
      .link {
        transition: 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      .link:hover {
        color: #34acd9;
      }
    `}</style>
  </footer>
);

export default Footer;
