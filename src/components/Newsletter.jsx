

const Newsletter = () => {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter for a 10% Bonus on Transactions</h2>
        <form className="flex justify-center">
          <input type="email" placeholder="Your email address" className="p-2 rounded-l"/>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-r">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
