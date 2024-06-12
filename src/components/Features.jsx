

const Features = () => {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-8">All Features You Need In One Place</h2>
      <div className="grid grid-cols-2 gap-8 mx-20">
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-semibold">Secure Online Banking</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-semibold">Automatic Bill Payment</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-semibold">No Hidden Fees</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-semibold">Card Payments Anytime</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
