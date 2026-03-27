export default function WelcomeSection() {
  return (
    <section className="bg-white py-8 relative overflow-hidden">
      <div className="floating-roses-container absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const gridRow = Math.floor(i / 4);
          const gridCol = i % 4;
          const baseDelay = (gridRow * 4 + gridCol) * 2;

          return (
            <div
              key={`welcome-rose-${i}`}
              className="absolute opacity-5"
              style={{
                animationDelay: `${baseDelay}s`,
                backgroundImage: `url(/images/rose-${(i % 3) + 1}.png)`,
                backgroundSize: '60px 60px',
                backgroundRepeat: 'no-repeat',
                width: '60px',
                height: '60px',
                left: `${(i % 4) * 25 + Math.random() * 10}%`,
                top: `${Math.floor(i / 4) * 50 + Math.random() * 20}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10 max-w-[1500px]">
        <h2 className="font-playfair text-3xl md:text-4xl text-[#003864] mb-4">
          Welcome, Beloved One.
        </h2>
        <p className="max-w-3xl mx-auto text-[#003864] font-open-sans leading-relaxed">
          I am Mary Sophia — an intuitive channel, spiritual counselor, and
          messenger of Divine Feminine Light.
          <br />
          <br />
          Through sacred communion with Mother Mary, Mary Magdalene, the Angelic
          Realm, and the Wisdom of Sophia, I offer a sanctuary for women
          awakening to the Sacred Feminine within.
          <br />
          <br />
          Step into a space of divine remembrance, where wisdom, love, and sacred connection guide your path.
          Here, you are invited to return to life, to love, and to the eternal embrace of Sophia — the Divine Feminine Wisdom that lives within your soul.
          <br />
          <br />
          You are deeply loved.
          <br />
          You are intimately known.
          <br />
          You are eternally held.
        </p>
      </div>
    </section>
  );
}
