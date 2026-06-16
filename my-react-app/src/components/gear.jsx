function Gear() {
  const gears = [
    {
      name: "Carrier 60L",
      desc: "Cocok untuk pendakian 2-4 hari",
      price: "Rp35.000/hari",
    },
    {
      name: "Tenda 4 Orang",
      desc: "Ringan dan tahan hujan",
      price: "Rp50.000/hari",
    },
    {
      name: "Sleeping Bag",
      desc: "Nyaman untuk cuaca dingin",
      price: "Rp20.000/hari",
    },
    {
      name: "Kompor Portable",
      desc: "Praktis untuk memasak di gunung",
      price: "Rp15.000/hari",
    },
  ];

  return (
    <section id="alat" className="gear-section">
      <div className="gear-container">
        <h2>Rental Gear</h2>
        <p>
          Pilih perlengkapan terbaik untuk mendukung petualanganmu.
        </p>

        <div className="gear-grid">
          {gears.map((gear, index) => (
            <div key={index} className="gear-card">
              <h3>{gear.name}</h3>
              <p>{gear.desc}</p>
              <span>{gear.price}</span>

              <button>Sewa Sekarang</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gear;