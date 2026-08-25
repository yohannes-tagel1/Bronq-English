import React from "react";

const planets = [
  {
    name: "Mercury",
    size: 10,
    color: "bg-gray-400",
    orbit: 90,
    duration: 8,
    spin: 3,
  },
  {
    name: "Venus",
    size: 16,
    color: "bg-yellow-600",
    orbit: 130,
    duration: 12,
    spin: 5,
  },
  {
    name: "Earth",
    size: 18,
    color: "bg-blue-500",
    orbit: 180,
    duration: 16,
    spin: 4,
    hasMoon: true,
  },
  {
    name: "Mars",
    size: 14,
    color: "bg-red-500",
    orbit: 230,
    duration: 22,
    spin: 4.5,
  },
  {
    name: "Jupiter",
    size: 36,
    color: "bg-orange-400",
    orbit: 310,
    duration: 40,
    spin: 2,
  },
];

export default function SolarSystemSection() {
  return (
    <section className="absolute w-full min-h-screen overflow-hidde  flex items-center justify-center">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-10 left-0 right-0 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          {/* Explore Our Solar System */}
        </h1>
        {/* <p className="mt-3 text-lg text-gray-300">
          Planets orbiting the Sun • Rotating on their axes
        </p> */}
      </div>

      {/* Solar System Container */}
      <div className="relative w-[700px] h-[700px] max-w-[90vw] max-h-[90vw]">
        {/* Sun */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {/* <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 shadow-[0_0_60px_20px_rgba(251,191,36,0.6)] animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-yellow-200/30 blur-xl animate-ping" /> */}
          {/* <h1>Bronq English</h1> */}
        </div>

        {/* Planets */}
        {planets.map((planet) => (
          <div
            key={planet.name}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: planet.orbit * 2,
              height: planet.orbit * 2,
              animation: `orbit ${planet.duration}s linear infinite`,
            }}
          >
            {/* Orbit path (subtle) */}
            <div
              className="absolute inset-0 rounded-full border border-white/10"
              style={{ width: "100%", height: "100%" }}
            />

            {/* Planet */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${planet.color} shadow-lg`}
              style={{
                width: planet.size,
                height: planet.size,
                animation: `spin ${planet.spin}s linear infinite`,
              }}
            >
              {/* Simple surface detail for Earth */}
              {planet.name === "Earth" && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute w-1/2 h-full bg-green-600/60 left-0" />
                  <div className="absolute w-full h-1/3 bg-white/20 top-1/4" />
                </div>
              )}

              {/* Moon for Earth */}
              {planet.hasMoon && (
                <div
                  className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: "orbit 3s linear infinite",
                    width: 40,
                    height: 40,
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gray-300 shadow" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}