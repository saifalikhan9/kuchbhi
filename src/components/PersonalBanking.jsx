

const PersonalBanking = () => {
  return (
    <section className="bg-white text-black py-16">
      <h2 className="text-center text-3xl font-bold mb-8">We Take Banking Personally</h2>
      <div className="grid grid-cols-3 gap-8 mx-20">
        <div className="p-6">
          <h3 className="text-xl font-semibold">Save</h3>
          <p>We use digital technology to solve that by automating saving through smart suggestions.</p>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Spend</h3>
          <p>Quick and easy payments directly from your account.</p>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Send</h3>
          <p>Send money easily to anyone, anywhere in the world.</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalBanking;
