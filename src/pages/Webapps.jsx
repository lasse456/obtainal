import Navbar from "../components/Navbar";
import ServiceHero from "../components/ServiceHero";
import Stickycta from "../components/Stickycta";

function Webapps() {
  return (
    <div>
      <Navbar />
      <ServiceHero
        heading="Functional web applications"
        description="Løft din forretning med Ase Selvstændig! En forening særligt for små selvstændige, som giver dig hurtig og nem adgang til eksperter inden for bl.a. jura, regnskab, marketing og HR. Få lige præcis den viden du skal bruge og kom hurtigt videre!"
      />
      <Stickycta />
    </div>
  );
}

export default Webapps;
