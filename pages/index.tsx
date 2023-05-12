import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
  text: string;
  textColor: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const food: [string, number, number, string, string][] = [
  ["🍅", 340, 10, "Dreams tomato", "text-red-500"],
  ["🍊", 20, 40, "Creates orange", "text-orange-500"],
  ["🍋", 60, 90, "Eats pear", "text-yellow-500"],
  ["🍏", 100, 140, "Shares apple", "text-green-500"],
];

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB, text, textColor }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }}></div>
      <motion.div className="card" variants={cardVariants}>
        <div className="flex flex-col">
          <div> {emoji}</div>
          <div className="justify-center mt-10 text-lg font-semibold text-center">
            <span className={textColor}>{text}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <section className="container py-12 mx-auto mt-8 sm:mt-24 lg:mt-56 lg:px-4 xl:px-0 ">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col items-start justify-center px-4 lg:w-6/12 md:w-6/12 lg:px-0">
            <p className="text-2xl font-light text-gray-800">
              Hi! I’am{" "}
              <span className="font-semibold text-teal-500">Paola Rivero</span>{" "}
              and
            </p>
            <h1 className="text-5xl font-extrabold leading-tight text-gray-800 sm:text-6xl md:text-4xl lg:text-6xl">
              I’ll Help You Build Your Dream
            </h1>
            <p className="pt-8 text-lg font-light leading-relaxed text-gray-600">
              This is a test
            </p>
            <button className="flex items-center pb-2 mt-10 mr-3 text-xl Sf-ui-pro custom-foreground-color font-regular custom-border-bottom focus:outline-none">
              Connect with me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </button>
          </div>
          <div className="mt-8 xl-w-11/12 sm:w-1/2 sm:mt-0">
            <div className="flex items-center justify-center w-full rounded-full sm:justify-end">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1.1, 1, 1],
                  rotate: [0, 0, -10, 10, 0],
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeatDelay: 1,
                }}
              >
                <Image
                  src="/image/paola.png"
                  alt="Vercel Logo"
                  className="rounded-full dark:invert"
                  width={300}
                  height={300}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/6"></div>
          <div className="flex flex-col justify-center w-4/6">
            {food.map(([emoji, hueA, hueB, text, textColor]) => (
              <div className="j" key={emoji}>
                <Card
                  emoji={emoji}
                  hueA={hueA}
                  hueB={hueB}
                  text={text}
                  textColor={textColor}
                  key={emoji}
                />
              </div>
            ))}
          </div>
          <div className="w-1/6"></div>
        </div>
      </section>
    </main>
  );
}
