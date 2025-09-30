import { motion } from "framer-motion";
import HochschuleLogo from "@/assets/Logo_der_Hochschule_Flensburg.png";
import SoopLogo from "@/assets/SOOP-LOGO.svg";

export default function PartnerLogos() {
  return (
    <section className="py-12 px-6 bg-default-50 dark:bg-default-100/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-3">Unsere Partner</h2>
          <p className="text-default-600">
            In Kooperation mit führenden Institutionen für maritime Innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-6"
          >
            <div className="h-24 flex items-center mb-4">
              <div className="bg-white dark:bg-gray-200 rounded-lg p-3">
                <img
                  src={HochschuleLogo}
                  alt="Hochschule Flensburg"
                  className="h-18 w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Hochschule Flensburg</h3>
            <p className="text-sm text-default-600 text-center">
              Akademischer Partner und Forschungseinrichtung
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center p-6"
          >
            <div className="h-24 flex items-center mb-4">
              <div className="bg-primary-500 dark:bg-primary-400 rounded-lg p-4">
                <img
                  src={SoopLogo}
                  alt="SOOP"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">SOOP</h3>
            <p className="text-sm text-default-600 text-center">
              Technologie-Partner für IoT-Sensorsysteme
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}