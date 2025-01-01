import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
  {
    title: "Unlimited 1 Hours",
    monthlyPrice: "1,800,000",
    buttonText: "Book your date",
    facilities: [
      "Unlimited Prints",
      "LED Touchscreen Monitor 23 inch",
      "Professional Lighting",
      "Free QR Code / Send Mail",
      "Free Custom Template Design",
      "Free Frame Photo",
      "Free Fun Property",
      "Get All File Photo in GDrive",
      "Free Transport",
    ],
  },
  {
    title: "Unlimited 2 Hours",
    monthlyPrice: "2,500,000",
    buttonText: "Book your date",
    facilities: [
      "Unlimited Prints",
      "LED Touchscreen Monitor 23 inch",
      "Professional Lighting",
      "Free QR Code / Send Mail",
      "Free Custom Template Design",
      "Free Frame Photo",
      "Free Fun Property",
      "Get All File Photo in GDrive",
      "Free Transport",
    ],
  },
  {
    title: "Unlimited 3 Hours",
    monthlyPrice: "2,800,000",
    buttonText: "Book your date",
    facilities: [
      "Unlimited Prints",
      "LED Touchscreen Monitor 23 inch",
      "Professional Lighting",
      "Free QR Code / Send Mail",
      "Free Custom Template Design",
      "Free Frame Photo",
      "Free Fun Property",
      "Get All File Photo in GDrive",
      "Free Transport",
    ],
  },
  {
    title: "Unlimited 4 Hours",
    monthlyPrice: "3,500,000",
    buttonText: "Book your date",
    facilities: [
      "Unlimited Prints",
      "LED Touchscreen Monitor 23 inch",
      "Professional Lighting",
      "Free QR Code / Send Mail",
      "Free Custom Template Design",
      "Free Frame Photo",
      "Free Fun Property",
      "Get All File Photo in GDrive",
      "Free Transport",
    ],
  },
  {
    title: "Unlimited 5 Hours",
    monthlyPrice: "3,800,000",
    buttonText: "Book your date",
    facilities: [
      "Unlimited Prints",
      "LED Touchscreen Monitor 23 inch",
      "Professional Lighting",
      "Free QR Code / Send Mail",
      "Free Custom Template Design",
      "Free Frame Photo",
      "Free Fun Property",
      "Get All File Photo in GDrive",
      "Free Transport",
    ],
  },
  {
    title: "Unlimited 6 Hours",
    monthlyPrice: "4,000,000",
    buttonText: "Book your date",
    facilities: [
      "Unlimited Prints",
      "LED Touchscreen Monitor 23 inch",
      "Professional Lighting",
      "Free QR Code / Send Mail",
      "Free Custom Template Design",
      "Free Frame Photo",
      "Free Fun Property",
      "Get All File Photo in GDrive",
      "Free Transport",
    ],
  },
];

export const Pricelist = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricelist</h2>
          <p className="section-description mt-5">
            Enjoy unlimited prints, professional lighting, and additional features tailored to make your events unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, facilities }, index) => (
            <div
              key={index}
              className="card p-6 border rounded-lg transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-black/90">{title}</h3>
              </div>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-2xl text-black/90 font-bold">IDR {monthlyPrice}</span>
              </div>
              <button
                className="btn btn-primary w-full mt-6"
              >
                {buttonText}
              </button>
              <ul className="mt-6 space-y-3">
                {facilities.map((facility, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-black/60" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
