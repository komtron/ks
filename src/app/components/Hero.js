import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-black text-white py-20 h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl font-thin mb-4 text-pink-300">
          Zen Massage Therapy
        </h1>
        <p className="text-xl font-thin mb-8">
          Experience the art of relaxation
        </p>
        <Link
          href="/massage-history"
          className="bg-pink-300 text-white px-6 py-3 rounded-full font-thin hover:bg-pink-400 transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
      <div className="fixed bottom-4 right-4 z-20">
        <Link
          href="#"
          className="block w-20 h-20 rounded-full overflow-hiddenp-2"
        >
          <Image
            src="/lotus.png"
            alt="Book a massage"
            width={80}
            height={80}
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
