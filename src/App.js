import './App.css';
import Nav from './header/header';
import Nf_ori from './nf_original/nf_original';
import Pop from './popular_on_netflix/pop_nf';
import Cf_tv from './child_family_tv/cf_tv';

function App() {
  return (
    <>
      <Nav/>
      <Nf_ori/>
      <Pop/>
      <Cf_tv/>
    </>  
  );
}

export default App;
