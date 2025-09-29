import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";

const teamMembers = [
  {
    name: "Daniel",
    role: "Backend-Entwicklung & API",
    description:
      "Verantwortlich für die Server-Infrastruktur und API-Entwicklung. Expertise in Node.js und Datenbank-Design.",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Docker"],
  },
  {
    name: "Fatih",
    role: "Frontend & Mobile App",
    description:
      "Entwickelt die Benutzeroberfläche und mobile Anwendung. Spezialisiert auf React Native und moderne UI/UX.",
    skills: ["React Native", "TypeScript", "Tamagui", "UI/UX Design"],
  },
  {
    name: "Julian",
    role: "Datenanalyse & Algorithmen",
    description:
      "Analysiert Sensordaten und entwickelt Algorithmen für Dateninterpolation und -vorhersage.",
    skills: ["Python", "Data Science", "Machine Learning", "Statistik"],
  },
  {
    name: "Krister",
    role: "Hardware & IoT",
    description:
      "Entwickelt und wartet die Sensorkits. Expertise in Embedded Systems und IoT-Protokollen.",
    skills: ["Arduino", "Raspberry Pi", "Sensortechnik", "IoT"],
  },
  {
    name: "Tarek",
    role: "DevOps & Infrastruktur",
    description:
      "Verwaltet die Cloud-Infrastruktur und CI/CD-Pipelines. Sorgt für Skalierbarkeit und Zuverlässigkeit.",
    skills: ["AWS", "Kubernetes", "CI/CD", "Monitoring"],
  },
];

export default function TeamPage() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <h1 className={title()}>Unser Team</h1>
        <p className="mt-4 text-lg text-default-600">
          Studenten des Master Angewandte Informatik, die gemeinsam das
          MARLIN-Projekt entwickeln
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-6 w-full">
        {teamMembers.map((member) => (
          <Card key={member.name} className="p-4">
            <CardHeader className="flex flex-col items-start gap-2 pb-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-2">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {member.name[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                {member.role}
              </p>
            </CardHeader>
            <CardBody className="pt-2">
              <p className="text-sm text-default-600 mb-4">
                {member.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Chip key={skill} color="primary" size="sm" variant="flat">
                    {skill}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-12 max-w-4xl px-6 w-full">
        <Card className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
          <CardBody className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Gemeinsam für smarte Hafenlösungen
            </h3>
            <p className="text-default-700">
              Unser interdisziplinäres Team vereint Expertise aus verschiedenen
              Bereichen der Informatik, um innovative Lösungen für die maritime
              Datenerfassung und -visualisierung zu entwickeln. Durch die
              Kombination von Hardware, Software und Datenanalyse schaffen wir
              eine ganzheitliche Plattform für smartes Hafenmanagement.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
