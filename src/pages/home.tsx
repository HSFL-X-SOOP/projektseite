import { title, subtitle } from "@/components/primitives";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>MARLIN&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>
          Maritime Live Information&nbsp;
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Live-Messungen in Häfen zu Wasser- und Luftbedingungen
        </h2>
      </div>

      <div className="flex flex-col items-center gap-8 mt-8 max-w-4xl">
        <div className="text-center px-6">
          <p className="text-lg text-default-700">
            Eine Kooperation zwischen der Hochschule Flensburg und SOOP zur
            Echtzeit-Erfassung und Visualisierung von Meeres- und Wetterdaten in
            verschiedenen Marinas.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 w-full px-4">
          <div className="p-4 rounded-lg bg-default-100">
            <h3 className="font-semibold text-lg mb-2">🌊 Wasserdaten</h3>
            <p className="text-sm text-default-600">
              Temperatur, Wasserstand und Wellenhöhe in Echtzeit
            </p>
          </div>
          <div className="p-4 rounded-lg bg-default-100">
            <h3 className="font-semibold text-lg mb-2">💨 Winddaten</h3>
            <p className="text-sm text-default-600">
              Geschwindigkeit, Richtung und Böen kontinuierlich gemessen
            </p>
          </div>
          <div className="p-4 rounded-lg bg-default-100">
            <h3 className="font-semibold text-lg mb-2">🌡️ Luftdaten</h3>
            <p className="text-sm text-default-600">
              Druck und Feuchtigkeit für präzise Wetteranalysen
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            href="https://www.marlin-live.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Zur Live-Plattform
          </a>
        </div>
      </div>
    </section>
  );
}
