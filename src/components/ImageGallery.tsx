import { motion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Woods",
  },
  {
    src: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Vegetation",
  },
  {
    src: "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean",
  },
];

const ImageGallery = () => {
  return (
    <div className="w-[80%] flex">
      {images.map((image, index) => (
        <motion.figure
          key={index}
          className="relative m-[1rem] overflow-hidden rounded-md shadow-lg"
          whileHover={{ scale: 1.09 }}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full h-[120px] object-cover "
          />
          <motion.figcaption
            className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-50 text-white  opacity-0 hover:opcaity-100 transition-opacity duration-300 cursor-pointer font-bold "
            whileHover={{ opacity: 1 }}
          >
            <p className="text-lg">{image.caption}</p>
          </motion.figcaption>
        </motion.figure>
      ))}
    </div>
  );
};

export default ImageGallery;
