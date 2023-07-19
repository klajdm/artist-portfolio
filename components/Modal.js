import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

export default function Modal({ selectedImg, setSelectedImg, imageTitle }) {
  const handleClick = () => {
    setSelectedImg(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
    >
      <motion.div
        className="absolute mt-6 left-[85%] lg:left-[97%] w-fit text-slate-500 hover:text-slate-950 cursor-pointer"
        onClick={handleClick}
      >
        <CgClose size={30} />
      </motion.div>
      <div className="flex flex-col">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout
          src={selectedImg}
          alt="enlarged image"
          className="block max-w-[70%] max-h-[80%] md:max-w-[50%] lg:max-w-[25%] my-32 lg:my-20 mx-auto"
        />
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className=" flex justify-center mt-[-60px] text-center px-5"
        >
          <p className="lg:max-w-lg">{imageTitle}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
