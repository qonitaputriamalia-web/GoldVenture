import {
  FaMountain,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

function TripPlanner() {
  return (
    <section className="tripplanner" id="planner">
      <div className="tripplanner-container">

        <div className="tripplanner-header">
          <span>SMART PLANNING</span>

          <h2>Trip Planner</h2>

          <p>
            Rencanakan perjalananmu lebih cepat dan dapatkan rekomendasi
            perlengkapan yang sesuai dengan kebutuhan trip.
          </p>
        </div>

        <div className="tripplanner-grid">

          <div className="planner-card">
            <h3>Informasi Perjalanan</h3>

            <div className="input-group">
              <FaMountain />
              <input
                type="text"
                placeholder="Gunung tujuan"
              />
            </div>

            <div className="input-group">
              <FaUsers />
              <input
                type="number"
                placeholder="Jumlah peserta"
              />
            </div>

            <div className="input-group">
              <FaCalendarAlt />
              <input
                type="number"
                placeholder="Durasi perjalanan (hari)"
              />
            </div>

            <button>
              Buat Rekomendasi
            </button>
          </div>

          <div className="recommendation-card">
            <h3>Rekomendasi Gear</h3>

            <div className="gear-item">
              🎒 Carrier 60L
            </div>

            <div className="gear-item">
              ⛺ Tenda 4 Orang
            </div>

            <div className="gear-item">
              🛏️ Sleeping Bag
            </div>

            <div className="gear-item">
              🔥 Kompor Portable
            </div>

            <div className="gear-item">
              💡 Headlamp
            </div>

            <div className="budget-box">
              <p>Estimasi Budget Rental</p>

              <strong>
                Rp120.000 - Rp180.000
              </strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TripPlanner;