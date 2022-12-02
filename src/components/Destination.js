import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";
import TalImg from "../Assets/Tal.webp";
import TalImg2 from "../Assets/taal-volcano.jpg";
import BoraImg1 from "../Assets/Bora1.jpg";
import BoraImg2 from "../Assets/Bora2.jpg";
import KerelaImg1 from "../Assets/Kerela1.jpg";
import KerelaImg2 from "../Assets/Kerela2.jpg";
import ParisImg1 from "../Assets/Paris1.jpg";
import ParisImg2 from "../Assets/Paris2.jpg";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>The journey of a thousand miles begins with a single step...</p>

      <DestinationData
        className="first-des"
        heading="Taal Valcano,Batangas"
        text="Taal valcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP.The volcano is located about 50 kilometers (31 mi) south of Manila, the capital of the Philippines"
        img1={TalImg}
        img2={TalImg2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Bora Bora, French Polynesia"
        text="Bora Bora is an island group in the Leeward Islands. The Leeward Islands comprise the western part of the Society Islands of French Polynesia, which is an overseas collectivity of the French Republic in the Pacific Ocean.Bora Bora is a major international tourist destination, famous for its seaside (and even offshore) luxury resorts. The major settlement, Vaitape, is on the western side of the main island, opposite the main channel leading into the lagoon. Produce of the island is mostly limited to what can be obtained from the sea and from the plentiful coconut trees, which were historically of economic importance for the production of copra."
        img1={BoraImg1}
        img2={BoraImg2}
      />
      <DestinationData
        className="first-des"
        heading="Alleppey, Kerala, India"
        text="Alappuzha or Alleppey is the administrative headquarters of Alappuzha district in state of Kerala, India. The Backwaters of Alappuzha are one of the most popular tourist attractions in India which attracts millions of domestic and international tourists. It is an important tourist destination in India. It connects Kumarakom and Cochin to the North and Kollam to the South. It is also the access point for the annual Nehru Trophy Boat Race, held on the Punnamada Lake, near Alappuzha, on the second Saturday of August every year. This is amongst the most popular and competitive boat races in India."
        img1={KerelaImg1}
        img2={KerelaImg2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Eiffel Tower, Paris"
        text="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Locally nicknamed,it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair.The tower is 330 metres (1,083 ft) tall,[5] about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest human-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930."
        img1={ParisImg1}
        img2={ParisImg2}
      />
    </div>
  );
}

export default Destination;
