import Navbar from "./Navbar";

const Header = ({ setShowSignup }) => {
  return (
    <div
      className="min-h-screen mb-4 flex items-center bg-cover bg-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      {/* Navbar is back inside the Header where it belongs! */}
      <Navbar setShowSignup={setShowSignup} />
      
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            Explore homes that fit your dreams
          </h2>
          <div className="space-x-6 mt-16">
            <a href="#Projects" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">Projects</a>
            <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition">Contact Us</a>
          </div>
      </div>
    </div>
  );
};

export default Header;