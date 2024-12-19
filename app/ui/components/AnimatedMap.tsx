"use client";
import { useEffect, useRef } from "react";
import maplibregl, { Map, StyleImageInterface } from "maplibre-gl";

// Extend StyleImageInterface to include the `context` property
interface ExtendedStyleImageInterface extends StyleImageInterface {
  context?: CanvasRenderingContext2D;
}

export default function AnimatedMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: Map | null = null;

    if (mapContainer.current) {
      map = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
        center: [77.5108751, 13.0484269],
        zoom: 8,
      });

      const size = 80;

      const pulsingDot: ExtendedStyleImageInterface = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        onAdd() {
          const canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext(
            "2d"
          ) as CanvasRenderingContext2D;
        },

        render() {
          const duration = 1000;
          const t = (performance.now() % duration) / duration;

          const radius = (size / 2) * 0.3;
          const outerRadius = (size / 2) * 0.7 * t + radius;
          const context = this.context;

          if (context) {
            context.clearRect(0, 0, this.width, this.height);

            // Outer circle
            context.beginPath();
            context.arc(
              this.width / 2,
              this.height / 2,
              outerRadius,
              0,
              Math.PI * 2
            );
            context.fillStyle = `rgba(100, 100, 200,${1 - t})`;
            context.fill();

            // Inner circle
            context.beginPath();
            context.arc(
              this.width / 2,
              this.height / 2,
              radius,
              0,
              Math.PI * 2
            );
            context.fillStyle = "rgba(100, 100, 255, 1)";
            context.strokeStyle = "white";
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();

            this.data = context.getImageData(
              0,
              0,
              this.width,
              this.height
            ).data;
          }

          map?.triggerRepaint();

          return true;
        },
      };

      map.on("load", () => {
        map?.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

        map?.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [77.5108751, 13.0484269],
                },
                properties: null,
              },
            ],
          },
        });

        map?.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "pulsing-dot",
          },
        });

        map?.flyTo({
          center: [77.5108751, 13.0484269],
          zoom: 12,
          speed: 0.5,
        });
      });
    }

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} className=" h-48 rounded-lg overflow-hidden cursor-grab" />
  );
}
