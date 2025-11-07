import { useEffect, useRef, useState } from 'react';

interface CustomMapProps {
  origin: string;
  destination: string;
  className?: string;
}

interface City {
  name: string;
  x: number;
  y: number;
  lat: number;
  lon: number;
}

const brazilianCities: City[] = [
  { name: "São Paulo", x: 480, y: 420, lat: -23.5505, lon: -46.6333 },
  { name: "Rio de Janeiro", x: 520, y: 410, lat: -22.9068, lon: -43.1729 },
  { name: "Belo Horizonte", x: 500, y: 370, lat: -19.9167, lon: -43.9345 },
  { name: "Brasília", x: 480, y: 320, lat: -15.8267, lon: -47.9218 },
  { name: "Curitiba", x: 470, y: 460, lat: -25.4284, lon: -49.2733 },
  { name: "Porto Alegre", x: 450, y: 520, lat: -30.0346, lon: -51.2177 },
  { name: "Salvador", x: 540, y: 240, lat: -12.9714, lon: -38.5014 },
  { name: "Fortaleza", x: 580, y: 150, lat: -3.7172, lon: -38.5433 },
  { name: "Recife", x: 590, y: 190, lat: -8.0476, lon: -34.8770 },
  { name: "Manaus", x: 280, y: 130, lat: -3.1190, lon: -60.0217 },
  { name: "Belém", x: 420, y: 110, lat: -1.4554, lon: -48.4898 },
  { name: "Goiânia", x: 470, y: 340, lat: -16.6869, lon: -49.2648 },
  { name: "Florianópolis", x: 460, y: 490, lat: -27.5954, lon: -48.5480 },
  { name: "Vitória", x: 530, y: 370, lat: -20.3155, lon: -40.3128 },
  { name: "Natal", x: 600, y: 170, lat: -5.7945, lon: -35.2110 },
  { name: "Campo Grande", x: 420, y: 380, lat: -20.4697, lon: -54.6201 },
  { name: "Cuiabá", x: 400, y: 320, lat: -15.6014, lon: -56.0979 },
  { name: "São Luís", x: 520, y: 130, lat: -2.5297, lon: -44.3028 },
  { name: "Maceió", x: 590, y: 210, lat: -9.6658, lon: -35.7353 },
  { name: "João Pessoa", x: 600, y: 180, lat: -7.1195, lon: -34.8450 },
];

export function CustomMap({ origin, destination, className = '' }: CustomMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [viewMode, setViewMode] = useState<'map' | 'satellite'>('map');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const findCity = (cityName: string): City | undefined => {
    return brazilianCities.find(
      city => city.name.toLowerCase() === cityName.toLowerCase()
    );
  };

  const calculateDistance = (city1: City, city2: City): number => {
    const R = 6371;
    const dLat = (city2.lat - city1.lat) * Math.PI / 180;
    const dLon = (city2.lon - city1.lon) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(city1.lat * Math.PI / 180) * Math.cos(city2.lat * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    if (viewMode === 'satellite') {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#1a4d2e');
      gradient.addColorStop(0.3, '#2d5a3d');
      gradient.addColorStop(0.5, '#3a6b4c');
      gradient.addColorStop(0.7, '#2d5a3d');
      gradient.addColorStop(1, '#1a3d2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = `rgba(74, 150, 100, ${Math.random() * 0.3})`;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 50 + 20;
        ctx.fillRect(x, y, size, size);
      }

      ctx.strokeStyle = 'rgba(100, 180, 130, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        ctx.moveTo(startX, startY);
        for (let j = 0; j < 5; j++) {
          ctx.lineTo(
            startX + (Math.random() - 0.5) * 100,
            startY + (Math.random() - 0.5) * 100
          );
        }
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = '#f0f4f8';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#d0dae6';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let i = 0; i < height; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      const mapOutline = [
        { x: 250, y: 100 }, { x: 300, y: 80 }, { x: 400, y: 90 },
        { x: 500, y: 100 }, { x: 580, y: 120 }, { x: 620, y: 150 },
        { x: 630, y: 200 }, { x: 620, y: 250 }, { x: 580, y: 300 },
        { x: 560, y: 350 }, { x: 540, y: 400 }, { x: 520, y: 450 },
        { x: 480, y: 500 }, { x: 450, y: 530 }, { x: 420, y: 540 },
        { x: 380, y: 530 }, { x: 350, y: 500 }, { x: 320, y: 450 },
        { x: 300, y: 400 }, { x: 280, y: 350 }, { x: 260, y: 300 },
        { x: 240, y: 250 }, { x: 230, y: 200 }, { x: 240, y: 150 },
      ];

      ctx.fillStyle = '#e8f4ea';
      ctx.strokeStyle = '#4a9960';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(mapOutline[0].x, mapOutline[0].y);
      mapOutline.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    brazilianCities.forEach(city => {
      ctx.fillStyle = 'rgba(150, 150, 150, 0.4)';
      ctx.beginPath();
      ctx.arc(city.x, city.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    const originCity = findCity(origin);
    const destCity = findCity(destination);

    if (originCity && destCity) {
      ctx.strokeStyle = 'hsl(150, 60%, 40%)';
      ctx.lineWidth = 4;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(originCity.x, originCity.y);
      ctx.lineTo(destCity.x, destCity.y);
      ctx.stroke();
      ctx.setLineDash([]);

      const distance = calculateDistance(originCity, destCity);
      const midX = (originCity.x + destCity.x) / 2;
      const midY = (originCity.y + destCity.y) / 2;
      
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'hsl(150, 60%, 40%)';
      ctx.lineWidth = 2;
      const padding = 8;
      const text = `${Math.round(distance)} km`;
      ctx.font = 'bold 14px sans-serif';
      const metrics = ctx.measureText(text);
      ctx.fillRect(
        midX - metrics.width / 2 - padding,
        midY - 10 - padding,
        metrics.width + padding * 2,
        20 + padding * 2
      );
      ctx.strokeRect(
        midX - metrics.width / 2 - padding,
        midY - 10 - padding,
        metrics.width + padding * 2,
        20 + padding * 2
      );
      ctx.fillStyle = 'hsl(150, 60%, 30%)';
      ctx.fillText(text, midX - metrics.width / 2, midY + 5);

      ctx.fillStyle = 'hsl(150, 70%, 40%)';
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(originCity.x, originCity.y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'white';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('O', originCity.x, originCity.y + 5);

      ctx.fillStyle = 'hsl(0, 70%, 50%)';
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(destCity.x, destCity.y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'white';
      ctx.fillText('D', destCity.x, destCity.y + 5);

      ctx.textAlign = 'left';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = 'hsl(150, 60%, 30%)';
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.strokeText(originCity.name, originCity.x + 15, originCity.y - 5);
      ctx.fillText(originCity.name, originCity.x + 15, originCity.y - 5);
      
      ctx.strokeText(destCity.name, destCity.x + 15, destCity.y - 5);
      ctx.fillText(destCity.name, destCity.x + 15, destCity.y - 5);
    }

    ctx.restore();
  }, [origin, destination, viewMode, zoom, pan]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(prev => Math.min(Math.max(prev * delta, 0.5), 3));
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className={`rounded-lg border cursor-move ${className}`}
        style={{ width: '100%', height: 'auto' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setViewMode('map')}
          className={`px-3 py-2 rounded-md text-sm font-medium border hover-elevate active-elevate-2 ${
            viewMode === 'map' ? 'bg-primary text-primary-foreground' : 'bg-background'
          }`}
          data-testid="button-street-view"
        >
          Mapa
        </button>
        <button
          onClick={() => setViewMode('satellite')}
          className={`px-3 py-2 rounded-md text-sm font-medium border hover-elevate active-elevate-2 ${
            viewMode === 'satellite' ? 'bg-primary text-primary-foreground' : 'bg-background'
          }`}
          data-testid="button-satellite-view"
        >
          Satélite
        </button>
      </div>
      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          onClick={() => setZoom(prev => Math.min(prev * 1.2, 3))}
          className="w-8 h-8 rounded-md bg-background border flex items-center justify-center hover-elevate active-elevate-2"
          data-testid="button-zoom-in"
        >
          +
        </button>
        <button
          onClick={() => setZoom(prev => Math.max(prev * 0.8, 0.5))}
          className="w-8 h-8 rounded-md bg-background border flex items-center justify-center hover-elevate active-elevate-2"
          data-testid="button-zoom-out"
        >
          −
        </button>
        <button
          onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
          className="px-3 py-1 rounded-md bg-background border text-sm hover-elevate active-elevate-2"
          data-testid="button-reset-view"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
