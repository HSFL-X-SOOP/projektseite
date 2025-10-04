import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { title, subtitle } from "@/components/primitives";

const sensorData = {
  waterTemperature: {
    title: "Wassertemperatur",
    description:
      "Die Wassertemperatur zeigt, wie warm oder kalt das Wasser ist.",
    icon: "🌡️",
    examples: [
      { value: "-2°C", description: "Meerwasser gefriert (wegen Salzgehalt)" },
      { value: "0°C", description: "Süßwasser würde gefrieren" },
      { value: "5°C", description: "Getränk direkt aus dem Kühlschrank" },
      { value: "10-15°C", description: "Neoprenanzug empfohlen" },
      { value: "20-25°C", description: "Angenehm zum Schwimmen (Badehose)" },
      { value: "40°C", description: "Heiße Dusche" },
    ],
  },
  waveHeight: {
    title: "Wellenhöhe",
    description:
      "Die Wellenhöhe beschreibt, wie hoch die Wasseroberfläche schwappt. Je höher die Welle, desto mehr Kraft steckt dahinter.",
    icon: "🌊",
    examples: [
      { value: "0.2m", description: "A4-Blatt (kurze Seite)" },
      { value: "0.3m", description: "A4-Blatt (lange Seite)" },
      { value: "0.5-1m", description: "Kann ein Kind umhauen" },
      { value: "2m", description: "Kann einen Erwachsenen umhauen" },
      { value: ">10m", description: "Tsunami-Warnung" },
    ],
  },
  waterLevel: {
    title: "Wasserstand",
    description:
      "Der Wasserstand zeigt, wie hoch das Wasser im Vergleich zum Normalwert steht. Ein hoher Wasserstand kann z.B. auf Hochwasser hindeuten.",
    icon: "📏",
    examples: [],
  },
  windSpeed: {
    title: "Windgeschwindigkeit",
    description:
      "Die Windgeschwindigkeit zeigt, wie schnell der Wind weht. Starker Wind kann Wellen und Strömungen verstärken.",
    icon: "💨",
    examples: [
      { value: "0-5 km/h", description: "Windstille bis leiser Zug" },
      { value: "6-11 km/h", description: "Leichte Brise" },
      { value: "20-28 km/h", description: "Frische Brise" },
      { value: "50-61 km/h", description: "Starker Wind" },
      { value: ">117 km/h", description: "Orkan" },
    ],
  },
  windDirection: {
    title: "Windrichtung",
    description:
      "Die Windrichtung gibt an, aus welcher Richtung der Wind kommt. Sie wird meist als Gradzahl angegeben.",
    icon: "🧭",
    examples: [
      { value: "0° / 360°", description: "Norden" },
      { value: "90°", description: "Osten" },
      { value: "180°", description: "Süden" },
      { value: "270°", description: "Westen" },
    ],
  },
  airPressure: {
    title: "Luftdruck",
    description:
      "Der Luftdruck zeigt, wie schwer die Luft auf die Erde drückt. Ein sinkender Luftdruck kann auf schlechtes Wetter hindeuten, ein steigender auf besseres Wetter.",
    icon: "🌤️",
    examples: [
      { value: "<1000 hPa", description: "Tiefdruck - Schlechtwetter möglich" },
      { value: "1013 hPa", description: "Normaldruck auf Meereshöhe" },
      {
        value: ">1020 hPa",
        description: "Hochdruck - Schönwetter wahrscheinlich",
      },
    ],
  },
  standardDeviation: {
    title: "Standardabweichung",
    description:
      "Die Standardabweichung gibt an, wie stark die Messwerte schwanken. Eine kleine Abweichung bedeutet, dass die Werte stabil sind. Große Abweichungen zeigen, dass sich die Bedingungen schnell ändern.",
    icon: "📊",
    examples: [],
  },
};

export default function SensorsPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <h1 className={title()}>Sensordaten Erklärung</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Hier findest du eine einfache Erklärung der wichtigsten Messwerte und
          wie du sie interpretieren kannst
        </h2>
      </div>

      <div className="max-w-6xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(sensorData).map(([key, sensor]) => (
            <Card key={key} className="overflow-visible">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="text-4xl">{sensor.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{sensor.title}</h3>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-default-600 mb-4">{sensor.description}</p>

                {sensor.examples.length > 0 && (
                  <>
                    <Divider className="my-4" />
                    <div className="space-y-2">
                      <p className="font-medium text-sm text-default-700">
                        Beispiele:
                      </p>
                      {sensor.examples.map((example, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-1"
                        >
                          <span className="text-sm font-mono bg-default-100 px-2 py-1 rounded">
                            {example.value}
                          </span>
                          <span className="text-sm text-default-600 text-right ml-4">
                            {example.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20">
          <CardBody className="p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              💡 Gut zu wissen
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Echtzeitdaten</h4>
                <p className="text-sm text-default-600">
                  Alle Messwerte werden kontinuierlich erfasst und in Echtzeit
                  übertragen. Die Aktualisierung erfolgt je nach Sensor alle
                  paar Sekunden bis Minuten.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Genauigkeit</h4>
                <p className="text-sm text-default-600">
                  Unsere Sensoren sind kalibriert und liefern präzise Messwerte.
                  Kleine Schwankungen sind normal und zeigen die natürlichen
                  Veränderungen der Umgebung.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
