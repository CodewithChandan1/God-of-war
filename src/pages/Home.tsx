
import FeaturedRealms from '../components/home/FeaturedRealms';
import CharacterShowcase from '../components/home/CharacterShowcase';
import WeaponsSection from '../components/home/WeaponsSection';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturedRealms />
      <CharacterShowcase />
      <WeaponsSection />
    </div>
  );
};

export default Home;