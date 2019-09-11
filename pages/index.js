import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';

import Jumbotron from '../components/home/jumbotron';
import About from '../components/home/about';
import Fronts from '../components/home/fronts';
// import Contact from '../components/home/contact';

const Home = () => (
  <React.Fragment>
    <Head />
    <Navbar />
    <main>
      <Jumbotron />
      <About />
      <Fronts />
      {/* <Contact /> */}
    </main>
    <Footer />
  </React.Fragment>
);

export default Home;
