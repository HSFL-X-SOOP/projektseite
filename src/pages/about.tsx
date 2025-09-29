import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <h1 className={title()}>Über das Projekt</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Smartes Hafenmonitoring durch IoT-Sensorik
        </h2>
      </div>

      <div className="max-w-4xl px-6">
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-semibold mb-4">
            Wie läuft die smarte Hafenanalyse?
          </h3>
          <p className="text-default-700 mb-6">
            SOOP stellt Sensorboxen für Häfen bereit, welche die Messwerte per
            LoRaWAN übermitteln. Die Sensorboxen sind dabei teilweise autark und
            werden mit Solarzellen betrieben. Die Messwerte werden von SOOP
            veröffentlicht und durch ein Team von Studierenden der Hochschule
            Flensburg aufbereitet und visualisiert.
          </p>

          <h3 className="text-xl font-semibold mb-4">Unsere Messwerte</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
                Wasserdaten
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Wassertemperatur</li>
                <li>• Wasserstand</li>
                <li>• Wellenhöhe</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Winddaten
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Windrichtung</li>
                <li>• Windgeschwindigkeit</li>
                <li>• Windrichtung Böen</li>
                <li>• Windgeschwindigkeit Böen</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Luftdaten
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Luftdruck</li>
                <li>• Luftfeuchtigkeit</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Projektfortschritt</h3>
          <p className="text-default-700 mb-4">
            Das Projekt wird im Rahmen des Masterstudiengangs &quot;Angewandte
            Informatik&quot; von einem Team aus fünf Studierenden durchgeführt.
            Das Team entwickelt die Aufbereitung und Visualisierung der
            Messwerte. Das Projekt läuft bis April 2026.
          </p>

          <div className="bg-default-100 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Unsere Partner</h4>
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <div className="text-center">
                <p className="font-semibold">Hochschule Flensburg</p>
                <p className="text-sm text-default-600">Akademischer Partner</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">SOOP</p>
                <p className="text-sm text-default-600">Technologie-Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
