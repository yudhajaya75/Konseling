import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banlayanan'
import Teks from '../../components/teks/teks';
import Card from '../../components/card/card';
import Teks2 from '../../components/teks/teks-kata-mereka';
import Sosmed from '../../components/sosmed/sosmed';
import Teks3 from '../../components/teks/teks-kerjasama';
import Compslid1 from '../../components/compslid/compslid1';
import Footer from '../../components/footer/footer';


function layanan1() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Teks />
      <Card />
      <Teks2 />
      <Sosmed />
      <Teks3 />
      <Compslid1 />
      <Footer />
    </div>
  );
}

export default layanan1;
