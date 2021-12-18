import React, { Component, Fragment, useState, useReducer } from 'react'
import { render } from 'react-dom'
import GoogleMapReact from 'google-map-react';
import useSWR from 'swr'
import fetch from 'unfetch'
import Supercluster from 'supercluster';

import cluster from 'point-cluster';



const fetcher = url => fetch(url).then(r => r.json())

const AnyReactComponent = ({ text }) => <div style={{ width: '48px', height: '48px', borderRadius: '48px', overflow: 'hidden', background: 'rgba(255,255,255,0.8)', borderRadius: 30, textAlign: 'center', lineHeight: '30px' }}><img src={text} alt="123" /></div>;

const App = () => {
  const { data, error } = useSWR('https://randomuser.me/api/?results=200', fetcher, { revalidateOnFocus: false })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>


  const _onClick = (event) => console.log(event)
  const _onBoundsChange = (e) => console.log(e)

  //정품 AIzaSyDQsQFi3w5ai_lJ18svbq98i4raZFaq30s
  //가짜 AIzaSyCnT0WtjaUjiW-KW9BePOEX25rDLzSwq0I

  return <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCnT0WtjaUjiW-KW9BePOEX25rDLzSwq0I' }}
      center={[36.7740924946, 127.8808593750]}
      zoom={3}
      //onClick={_onClick}
      //</div>onBoundsChange={_onBoundsChange}
      options={{
        // minZoom: 8,
        // maxZoom: 10,
        // panControl: false,
        // mapTypeControl: false,
        // scrollwheel: false,
        // zoomControl: false,
        // scaleControl: false,
        // fullscreenControl:false,
        // gestureHandling: 'none',

      }}
    >
      {
        data.results.map((e, i) => <AnyReactComponent
          lat={e.location.coordinates.latitude}
          lng={e.location.coordinates.longitude}
          text={e.picture.thumbnail}
          key={e.login.uuid}
        />)
      }
    </GoogleMapReact>
  </div>
}

const index = new Supercluster({
  //log: true,
  radius: 60000,
  extent: 256,
  maxZoom: 17
});
index.load([
  [100, 100],
  [-100, -100],
  [100, -100],
  [-100, 100]
]);
console.log(index)
console.log(index.getClusters([-180, -85, 180, 85], 3))
;

render(<App />, document.getElementById('app'))
