

const BusinessSizes = () => {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Designed for Businesses of All Sizes</h2>
      <div className="grid grid-cols-3 gap-8 mx-20">
        <div className="bg-purple-600 p-6 rounded text-center">
          <h3 className="text-xl font-semibold">For Small Businesses</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded text-center">
          <h3 className="text-xl font-semibold">For Startups</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded text-center">
          <h3 className="text-xl font-semibold">For Enterprises</h3>
        </div>
      </div>
    </section>
  );
};

export default BusinessSizes;
