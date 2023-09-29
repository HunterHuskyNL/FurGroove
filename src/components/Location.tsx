import "./styles/Location.css";
import venue from "../assets/venue.png";

function Location() {
  return (
    <section id="Location">
      <div>
        <p>
          The location for this edition is{" "}
          <strong className="pink">FORT33</strong>. A concert venue with a big
          stage and bar where our house DJ's will move your paws. Across the
          stage is a <strong className="blue">big bar</strong> where you can
          order drinks or some snacks. The bar accepts coins you can buy at the
          entrance. Coins can be bought with cash or card.
          <br />
          <br />
          Our location will also have a big enough{" "}
          <strong className="yellow">fursuit lounge</strong> to cool down and
          store your suits. You can also get some water or dry up in front of
          the fans.
          <br />
          <br />
          The whole location is wheelchair friendly.
        </p>
        <img id="location__venue" src={venue} alt="" />
        <p id="location__address">
          Bavoortseweg 25 <br />
          3833 BM - Leusden, NL
        </p>
      </div>
      <div id="location__map"></div>
    </section>
  );
}

export default Location;
