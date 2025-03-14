import '../styles/Priority.css';

function Priority() {
  return (
    <div className="priority">
      <h3 data-aos="fade-up" data-aos-duration="10000">OUR PRIORITY</h3>
      <h1 data-aos="fade-up" data-aos-duration="10000">We Chase <span>Customer Satisfaction</span>.</h1>
      <div className="targets">
        <div className="target" data-aos="fade-up" data-aos-duration="10000">
          <div className="icon">
            <img 
              src="/images/speed.gif" 
              alt="Fast home removals with speed" 
              loading="lazy" 
            />
          </div>
          <h2>Speed</h2>
          <p>Quick and timely house removals to meet your schedule with efficiency and precision.</p>
        </div>

        <div className="target" data-aos="fade-up" data-aos-duration="20000">
          <div className="icon">
            <img 
              src="/images/security.gif" 
              alt="Safe and secure moving services" 
              loading="lazy" 
            />
          </div>
          <h2>Security</h2>
          <p>Your belongings are handled safely and securely throughout the move to ensure peace of mind.</p>
        </div>

        <div className="target" data-aos="fade-up" data-aos-duration="30000">
          <div className="icon">
            <img 
              src="/images/quality.gif" 
              alt="High-quality home removal service" 
              loading="lazy" 
            />
          </div>
          <h2>Quality</h2>
          <p>Attention to detail and care during every stage of the moving process for a quality service.</p>
        </div>

        <div className="target" data-aos="fade-up" data-aos-duration="40000">
          <div className="icon">
            <img 
              src="/images/reliability.gif" 
              alt="Reliable and trusted moving service" 
              loading="lazy" 
            />
          </div>
          <h2>Reliability</h2>
          <p>A trusted team that ensures smooth and stress-free removals every time.</p>
        </div>
      </div>
    </div>
  );
}

export default Priority;
