import { Link } from 'react-scroll';

const Navbar = () => (
  <header className='bg-gray fixed top-0 w-screen h-navbar'>
    <div className='flex justify-center md:justify-start items-center container h-full mx-auto'>
      <Link to='home' spy={true} smooth={true} duration={500}>
        <img
          src='/static/images/logot.png'
          className='h-10 mx-4'
          alt='data logo'
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <span className='hidden md:block flex-grow' />
      <ul className='hidden md:flex items-center text-white text-2xl'>
        <li className='px-4'>
          <Link
            to='sobre'
            spy={true}
            smooth={true}
            duration={500}
            offset={-55}
            style={{ cursor: 'pointer' }}
          >
            sobre
          </Link>
        </li>
        <li className='px-4'>
          <Link
            to='frentes'
            spy={true}
            smooth={true}
            duration={500}
            offset={-55}
            style={{ cursor: 'pointer' }}
          >
            frentes
          </Link>
        </li>
        <li className='px-4'>
          <Link
            to='contato'
            spy={true}
            smooth={true}
            duration={500}
            offset={-55}
            style={{ cursor: 'pointer' }}
          >
            contato
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .h-navbar {
        height: 58px;
      }

      li {
        transition: 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      li:hover {
        color: #dadadc;
      }
    `}</style>
  </header>
);

export default Navbar;
