import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface RouteMapProps {
  origin: string;
  destination: string;
  className?: string;
}

export function RouteMap({ origin, destination, className = '' }: RouteMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([-23.5505, -46.6333], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !origin || !destination) return;

    const geocodeCity = async (city: string): Promise<[number, number] | null> => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            city + ', Brasil'
          )}&format=json&limit=1`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        }
      } catch (error) {
        console.error('Erro ao geocodificar:', error);
      }
      return null;
    };

    const updateRoute = async () => {
      const map = mapInstanceRef.current;
      if (!map) return;

      map.eachLayer((layer) => {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
          map.removeLayer(layer);
        }
      });

      const originCoords = await geocodeCity(origin);
      const destCoords = await geocodeCity(destination);

      if (originCoords && destCoords) {
        const originIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        const destIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        L.marker(originCoords, { icon: originIcon })
          .addTo(map)
          .bindPopup(`<b>Origem:</b> ${origin}`);

        L.marker(destCoords, { icon: destIcon })
          .addTo(map)
          .bindPopup(`<b>Destino:</b> ${destination}`);

        const route = L.polyline([originCoords, destCoords], {
          color: 'hsl(150, 60%, 40%)',
          weight: 4,
          opacity: 0.7,
        }).addTo(map);

        map.fitBounds(route.getBounds(), { padding: [50, 50] });
      }
    };

    updateRoute();
  }, [origin, destination]);

  const switchToSatellite = () => {
    if (!mapInstanceRef.current) return;
    
    mapInstanceRef.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        mapInstanceRef.current?.removeLayer(layer);
      }
    });

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 19,
    }).addTo(mapInstanceRef.current);
  };

  const switchToStreet = () => {
    if (!mapInstanceRef.current) return;
    
    mapInstanceRef.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        mapInstanceRef.current?.removeLayer(layer);
      }
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapInstanceRef.current);
  };

  useEffect(() => {
    (window as any).switchToSatellite = switchToSatellite;
    (window as any).switchToStreet = switchToStreet;
  }, []);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className={`rounded-lg overflow-hidden border ${className}`}
        style={{ height: '500px', width: '100%' }}
      />
      <div className="absolute top-4 right-4 z-[1000] flex gap-2">
        <button
          onClick={switchToStreet}
          className="px-3 py-2 bg-background border rounded-md text-sm font-medium hover-elevate active-elevate-2"
          data-testid="button-street-view"
        >
          Mapa
        </button>
        <button
          onClick={switchToSatellite}
          className="px-3 py-2 bg-background border rounded-md text-sm font-medium hover-elevate active-elevate-2"
          data-testid="button-satellite-view"
        >
          Satélite
        </button>
      </div>
    </div>
  );
}
