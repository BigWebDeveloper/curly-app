import Image from "@node_modules/next/image";

const ImageTemp = (items) => {
  return (
    <span className={`block ${items.containerClass}`}>
      <Image
        src={items.src}
        onClick={items.onClick == undefined && null}
        alt={items.alt}
        height={items.height}
        width={items.width}
        className={items.className}
      />
    </span>
  );
};

export default ImageTemp;
