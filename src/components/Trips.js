import React from 'react';
import './Trips.css';
import TripsData from './TripsData';
import MaldivesImg from '../Assets/Maldives.webp'
import TripImg from '../Assets/Trip2.jpg'
import BaliImg from '../Assets/Bali.jpg'

function Trips() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Adventures are the best way to learn.....</p>
      <div className="tripcard">
        <TripsData
        Image ={MaldivesImg} heading ="Maldives" text ="Maldives officially the Republic of Maldives is an archipelagic state located in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland. The chain of 26 atolls stretches across the Equator from Ihavandhippolhu Atoll in the north to Addu Atoll in the south."
        />
        <TripsData
        Image ={TripImg} heading ="Malaysia" text ="Malaysia is a Southeast Asia Country occupying parts of the Malay Peninsula and the island of Borneo. It's beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.Peninsular Malaysia shares a land and maritime border with Thailand and maritime borders with Singapore, Vietnam, and Indonesia."
        />
        <TripsData
        Image ={BaliImg} heading ="Bali" text ="Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast. The provincial capital, Denpasar,is the most populous city in the Lesser Sunda Islands and the second-largest, after Makassar, in Eastern Indonesia. "
        />
      </div>
    </div>
  )
}

export default Trips;
