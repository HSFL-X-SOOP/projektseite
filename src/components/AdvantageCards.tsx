import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";

const advantages = [
  {
    icon: "📡",
    title: "Echtzeitdaten rund um die Uhr",
    description: "Kontinuierliche Überwachung von Wasser- und Wetterbedingungen mit modernster Sensortechnik für präzise Entscheidungen."
  },
  {
    icon: "⚓",
    title: "Sicherheit für Hafenbetrieb",
    description: "Frühwarnsystem bei kritischen Wetterbedingungen schützt Boote, Infrastruktur und ermöglicht optimale Hafenplanung."
  },
  {
    icon: "🌊",
    title: "Offene Datenplattform",
    description: "Transparente API und öffentlicher Datenzugang fördern Innovation und wissenschaftliche Forschung im maritimen Bereich."
  },
  {
    icon: "🗺️",
    title: "Interaktive Sensorkarte",
    description: "Visualisierung aller Sensordaten auf einer übersichtlichen Karte mit Echtzeitwerten für schnelle Lagebeurteilung."
  },
  {
    icon: "📱",
    title: "Mobile App mit Benachrichtigungen",
    description: "Push-Benachrichtigungen bei Unwetterwarnungen und kritischen Bedingungen direkt auf Ihr Smartphone."
  }
];

export default function AdvantageCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Vorteile der MARLIN-Plattform
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Modernste Sensortechnologie kombiniert mit intelligenter Datenverarbeitung 
            für smartes Hafenmanagement und maritime Forschung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card 
                className={`h-full ${
                  index % 2 === 0 
                    ? "bg-secondary-50/50 dark:bg-secondary-900/20" 
                    : "bg-primary-50/50 dark:bg-primary-900/20"
                }`}
              >
                <CardBody className="p-8 text-center">
                  <div className="text-5xl mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-default-600">
                    {advantage.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}