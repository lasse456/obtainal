import Navbar from "../components/Navbar";
import ServiceHero from "../components/ServiceHero";
import Stickycta from "../components/Stickycta";

function Websites() {
  return (
    <div>
      <Stickycta />
      <Navbar />
      <ServiceHero
        heading="Custom website development"
        description="Løft din forretning med Ase Selvstændig! En forening særligt for små selvstændige, som giver dig hurtig og nem adgang til eksperter inden for bl.a. jura, regnskab, marketing og HR. Få lige præcis den viden du skal bruge og kom hurtigt videre!"
      />
    </div>
  );
}

export default Websites;
