import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {City, OfferDataType, OffersDataType} from '../../types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';
import 'leaflet/dist/leaflet.css';
import {useMap} from '../../hooks/use-map';

type MapProps = {
  className?: string;
  city: City;
  points: (OffersDataType | OfferDataType | null)[] ;
  selectedPoint: string | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({className = 'cities__map map', city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city?.location.zoom);
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        if (point !== null) {
          const marker = new Marker({
            lat: point.location.latitude,
            lng: point.location.longitude
          });

          marker
            .setIcon(
              point.id === selectedPoint
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={`${className} map`}
      style={{minHeight: '500px'}}
      ref={mapRef}
    >
    </section>
  );
}

