import { motion } from "framer-motion";

interface OrbitItemProps {
  image: string;
  angle: number;
  radius: number;
  size: number;
  duration: number;
}

const OrbitItem = ({
  image,
  angle,
  radius,
  size,
  duration,
}: OrbitItemProps) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration,
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      <img
        src={image}
        alt=""
        className="absolute"
        style={{
          width: size,
          transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
          left: "50%",
          top: "50%",
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
      />
    </motion.div>
  );
};

export default OrbitItem;