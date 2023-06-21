import React from 'react'

function Trip() {
  return (
    <div>
      <div className="trip">

        <div>
          <img src = "https://source.unsplash.com/WLxQvbMyfas" alt="Mount Fuji" className="trip-image"/>
        </div>

        <div className="trip-stats">

          <div className="firstline">
            <img src="https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png" alt="location of the place" className="location-icon"/>
            <span className="trip-location">JAPAN</span>
            <span><a href= "https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="trip-link">View on Google Maps</a></span>
          </div>

          <div>
            <h1>Mount Fuji</h1>
            <span className="trip-date">12 Jan, 2021 - </span>
            <span className="trip-date">24 Jan, 2021</span>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
          </div>

        </div>

      </div>

      <div className="trip-2">

        <div>
          <img src = "https://source.unsplash.com/JmuyB_LibRo" alt="Mount Fuji" className="trip-image"/>
        </div>

        <div className="trip-stats">

          <div className="firstline">
            <img src="https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png" alt="location of the place" className="location-icon"/>
            <span className="trip-location">AUSTRALIA</span>
            <span><a href= "https://www.google.com/maps/d/u/0/viewer?mid=1NYBTZlF3StQEf65_sVbpMlskCoo&hl=en&ll=-33.85691%2C151.215262&z=17" className="trip-link">View on Google Maps</a></span>
          </div>

          <div>
            <h1>Sydney Opera House</h1>
            <span className="trip-date">27 May, 2021 - </span>
            <span className="trip-date">8 Jun, 2021</span>
            <p>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>
          </div>

        </div>

      </div>

      <div className="trip-3">

        <div>
          <img src = "https://source.unsplash.com/3PeSjpLVtLg" alt="Mount Fuji" className="trip-image"/>
        </div>

        <div className="trip-stats">

          <div className="firstline">
            <img src="https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png" alt="location of the place" className="location-icon"/>
            <span className="trip-location">NORWAY</span>
            <span><a href= "https://www.google.com/maps/d/u/0/viewer?hl=en_US&mid=1zi9bW9Zkl8ExIwx-ZNbeChUSK38&ll=62.09137700000003%2C7.061932999999994&z=17" className="trip-link">View on Google Maps</a></span>
          </div>

          <div>
            <h1>Geirangerfjord</h1>
            <span className="trip-date">01 Oct, 2021 - </span>
            <span className="trip-date">18 Nov, 2021</span>
            <p>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
          </div>

        </div>

      </div>


    </div>
    

    
    
  )
}

export default Trip;
