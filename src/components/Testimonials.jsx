

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Trusted by People All Over the World</h2>
      <div className="grid grid-cols-2 gap-8 mx-20">
        <div className="bg-gray-800 p-6 rounded">
          <p>Super user-friendly! It is so intuitive that anyone can use it.</p>
          <p>- User 1</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <p>Saved hours every week! The tool automatically organizes all data and saves our entire team.</p>
          <p>- User 2</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
