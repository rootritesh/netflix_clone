import './App.css';
import Nav from './header/header';
import Nf_ori from './nf_original/nf_original';
import Pop from './popular_on_netflix/pop_nf';
import Cf_tv from './child_family_tv/cf_tv';
import Extv from './excited_tv/ex_tv';
import Bing from './bing_tv/bingeworthy_tv';
import Foote from './footer/foot';

function App() {
  return (
    <>
      <Nav/>
      <Nf_ori/>
      <Pop/>
      <Cf_tv/>
      <Extv/>
      <Bing/>
      <Foote/>
    </>  
  );
}

export default App;
