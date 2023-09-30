import "./styles/DJs.css";

import beatbird from "../assets/beatbird.jpg";
import djem from "../assets/djem.jpg";
import stripe from "../assets/stripe.jpg";
import menos from "../assets/menos.png";

function DJs() {
  return (
    <section id="DJs">
      <section className="dj beatbird">
        <div className="dj__image">
          <img src={beatbird} alt="" />
          <div className="dj__name">
            <h1>Beatbird</h1>
          </div>
        </div>
        <div className="dj__quote">
          <p>
            The one and only Dutch DJ Bird! Living close to the venue so it's
            almost like home. Loves to play all kinds of styles!
          </p>
        </div>
      </section>
      <section className="dj djem">
        <div className="dj__quote">
          <p>
            The French Laser DJ. Loves to please the crowd and resident DJ at many big cons and parties.
          </p>
        </div>
        <div className="dj__image">
          <img src={djem} alt="" />
          <div className="dj__name">
            <h1>Djem</h1>
          </div>
        </div>
      </section>
      <section className="dj stripe">
        <div className="dj__image">
          <img src={beatbird} alt="" />
          <div className="dj__name">
            <h1>Stripe</h1>
          </div>
        </div>
        <div className="dj__quote">
          <p>
          The Mash-up king of Germany! He is the only one that can mix schlagers with baby shark and still make it sound good.
          </p>
        </div>
      </section>
      <section className="dj menos">
        <div className="dj__quote">
          <p>
          One of our Dutch DJ's that will end the evening with one mission; Make everyone like hardstyle!
          Get ready for some bangers, sing-a-longs and a bass that will blow you away.
          </p>
        </div>
        <div className="dj__image">
          <img src={yellowstreak} alt="" />
          <div className="dj__name">
            <h1>Menos</h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DJs;
