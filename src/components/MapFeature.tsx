import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function MapFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-6xl mx-auto px-6 py-12"
    >
      <div className="text-center mb-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Interaktive Sensorkarte
        </motion.h2>
        <p className="text-lg text-default-600 max-w-2xl mx-auto">
          Verfolge Live-Daten von allen aktiven Sensoren in verschiedenen Häfen 
          auf unserer interaktiven Karte
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-primary-500/10 border-1 border-primary-200/50">
            <CardBody className="p-8">
              <div className="relative h-64 bg-default-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Simplified map illustration */}
                    <rect x="0" y="0" width="400" height="300" fill="#f0f8ff" />
                    <path d="M50 150 Q 100 100, 150 120 T 250 140 Q 300 160, 350 130" 
                          stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
                    
                    {/* Animated sensor points */}
                    {[
                      { x: 80, y: 140, delay: 0 },
                      { x: 150, y: 120, delay: 0.2 },
                      { x: 220, y: 145, delay: 0.4 },
                      { x: 290, y: 155, delay: 0.6 },
                      { x: 340, y: 130, delay: 0.8 },
                    ].map((point, i) => (
                      <motion.g key={i}>
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r="8"
                          fill="#3b82f6"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: point.delay,
                          }}
                        />
                        <circle cx={point.x} cy={point.y} r="3" fill="white" />
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r="12"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1"
                          opacity="0.5"
                          animate={{
                            r: [12, 20],
                            opacity: [0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: point.delay,
                          }}
                        />
                      </motion.g>
                    ))}
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-default-100/90 px-3 py-1 rounded-lg">
                  <p className="text-xs font-medium">5 aktive Sensoren</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">Live-Tracking Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">📍</span>
                <div>
                  <p className="font-medium">Echtzeit-Standorte</p>
                  <p className="text-sm text-default-600">
                    Alle Sensoren mit aktuellem Status und Position
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">📊</span>
                <div>
                  <p className="font-medium">Interaktive Datenpunkte</p>
                  <p className="text-sm text-default-600">
                    Klicke auf Sensoren für detaillierte Messwerte
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">🌡️</span>
                <div>
                  <p className="font-medium">Farbcodierte Visualisierung</p>
                  <p className="text-sm text-default-600">
                    Temperatur- und Wetterübersicht auf einen Blick
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              as={Link}
              href="https://www.marlin-live.com/map"
              isExternal
              color="primary"
              size="lg"
              className="font-semibold"
            >
              Zur interaktiven Karte →
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}