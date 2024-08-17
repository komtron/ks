import Link from 'next/link';

export default function MassageHistory() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/hero.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl font-thin mb-8 text-pink-300">
          The Rich Tapestry of Massage History
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-thin mb-4 text-pink-200">
            Ancient Beginnings
          </h2>
          <p className="mb-4">
            The art of massage, much like the serene lotus rising from murky
            waters, has its roots deeply embedded in ancient civilizations. As
            far back as 3000 BCE, massage was revered as a sacred healing art,
            intertwining the physical and spiritual realms.
          </p>
          <p className="mb-4">
            In ancient China, texts dating to 2700 BCE describe massage
            techniques as part of their medical practices. The famous "Yellow
            Emperor's Classic of Internal Medicine" details the use of massage
            for treating a variety of ailments, showcasing its integral role in
            traditional Chinese medicine.
          </p>
          <p className="mb-4">
            Simultaneously, in ancient Egypt, tomb paintings depict individuals
            receiving massage, indicating its significance in their culture. The
            Egyptians are credited with developing reflexology, believing that
            manipulating specific points on the feet and hands could heal organs
            and promote overall wellness.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-thin mb-4 text-pink-200">
            Eastern Traditions
          </h2>
          <p className="mb-4">
            In India, the practice of massage is deeply rooted in Ayurvedic
            medicine, dating back to 1800 BCE. Ayurveda views massage as
            essential for balancing the body's energies and maintaining health.
            The ancient Hindu schools of health care taught massage techniques
            to physicians as a fundamental aspect of healing.
          </p>
          <p className="mb-4">
            Japanese massage, known as anma, evolved from Chinese massage
            techniques. By the 6th century CE, anma had become an integral part
            of Japanese medicine, later evolving into the more specialized forms
            of shiatsu and jin shin jyutsu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-thin mb-4 text-pink-200">
            Western Development
          </h2>
          <p className="mb-4">
            In ancient Greece, Hippocrates, the "father of medicine," wrote
            extensively about the benefits of "rubbing" in the 5th century BCE.
            He advocated for its use in treating sports and war injuries,
            recognizing its ability to improve circulation and alleviate pain.
          </p>
          <p className="mb-4">
            The Romans further developed massage techniques, incorporating them
            into their famous bathhouses. Galen, a prominent Roman physician,
            wrote about massage in the 2nd century CE, detailing specific
            techniques for different parts of the body.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-thin mb-4 text-pink-200">
            Modern Revival and Evolution
          </h2>
          <p className="mb-4">
            After falling out of favor during the Middle Ages in the West,
            massage saw a revival in the 19th century. Pehr Henrik Ling, a
            Swedish physiologist, developed the "Swedish Movement System," which
            later became known as Swedish massage. This systematic approach to
            massage therapy laid the foundation for many modern Western massage
            techniques.
          </p>
          <p className="mb-4">
            The 20th century witnessed an explosion of new massage modalities.
            From deep tissue and sports massage to more esoteric forms like
            Rolfing and craniosacral therapy, massage adapted to meet diverse
            needs and incorporate new understandings of anatomy and physiology.
          </p>
          <p className="mb-4">
            Today, massage therapy stands at the intersection of ancient wisdom
            and modern science. Research continues to validate its numerous
            health benefits, from stress reduction and pain management to
            improved immune function and mental health. As our understanding of
            the mind-body connection deepens, massage therapy remains a powerful
            tool for holistic wellness, bridging the gap between traditional
            healing arts and contemporary healthcare practices.
          </p>
        </section>

        <Link href="/" className="text-pink-300 hover:underline text-lg">
          Return to Zen Massage Therapy
        </Link>
      </div>
    </div>
  );
}
