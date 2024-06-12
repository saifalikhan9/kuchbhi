
import hero from "../assets/hero.svg"
const Header = () => {
  return (
    <header className="bg-purple-600 text-white p-6">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">BANQUEE</div>
        <div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded">Get Started</button>
        </div>
      </nav>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Easy Way to Banking</h1>
        <p className="mt-4 text-lg">We give you both the foundation and flexibility to build out your digital capabilities and deliver customer experiences.</p>
        <button className="bg-orange-500 text-white py-2 px-4 mt-6 rounded">Get Started</button>
        <img src={hero} alt="Piggy Bank" className="mt-6 mx-auto w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" />
      </div>
    </header>
  );
};

export default Header;
