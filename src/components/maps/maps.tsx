import { Dispatch, FC, SetStateAction, useMemo, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import styled from 'styled-components';

import 'leaflet/dist/leaflet.css';

const icon = L.icon({ iconUrl: '/icon-marker.png', iconSize: [34, 36] });

interface MapsProps {
  position: { lat: number; lng: number };
  setPosition: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const Maps: FC<MapsProps> = (props) => {
  const { position, setPosition } = props;
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (!!marker && marker != null) {
          //@ts-ignore
          setPosition(marker?.getLatLng());
        }
      },
    }),
    [],
  );

  return (
    <StyledMapContainer className="transition-all">
      <MapContainer
        dragging={true}
        center={[position.lat, position?.lng]}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          draggable={true}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}
          icon={icon}
        />
      </MapContainer>
    </StyledMapContainer>
  );
};

export default Maps;

const StyledMapContainer = styled.div`
  display: flex;
  position: relative;

  .map {
    height: 28rem !important;
    width: 100%;
    border-radius: 0.75rem;
    z-index: 10;
  }

  .map-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    background: #696969;
    height: 48px;
    border-radius: 0.75rem;
    padding: 0rem 1rem;
    position: absolute;
    bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 99;
    width: 97%;

    :hover {
      transform: scale(1.01);
    }

    span {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3125rem;
      color: #f5f5f5;
    }
  }
`;
