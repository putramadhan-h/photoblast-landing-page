import Image from "next/image";

const images = [
  "/gallery-image-1.png",
  "/gallery-image-2.png",
  "/gallery-image-1.png",
  "/gallery-image-2.png",
  "/gallery-image-1.png",
  "/gallery-image-2.png",
  "/gallery-image-1.png",
  "/gallery-image-2.png",
  "/gallery-image-1.png",
  "/gallery-image-2.png",
  "/gallery-image-1.png",
  "/gallery-image-2.png",
];

export const Gallery = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center mb-12">
          <div className="tag2">Gallery</div>
          <h2 className="section-title mt-4">Our Stunning Gallery</h2>
          <p className="section-description mt-4">
            Explore our collection of moments captured in their best forms.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className="relative overflow-hidden group"
            >
              <Image
                src={imageSrc}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
