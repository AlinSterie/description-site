import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Aici suntem</h3>
          <PText>București, România</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/44%C2%B025'32.0%22N+26%C2%B001'30.1%22E/@44.425543,26.0244668,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0xb04ee945593ca00c!7e2!8m2!3d44.4255416!4d26.0250137"
            target="_blank"
            rel="noreferrer"
          >
            Deschide în Google Maps
          </a>
        </div>
      </div>
      <img src={MapImg} alt="Map" />
    </MapStyles>
  );
}
