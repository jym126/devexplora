import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string[];
  photoUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  photoUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center w-64">
      <img
        src={photoUrl}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <p className="text-sm text-gray-500">{bio}</p>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Miguel Martínez",
      role: "Desarrollador Frontend",
      bio: [
        "Apasionado por la creación de interfaces de usuario intuitivas, atractivas y altamente funcionales.",
        " Dominio de tecnologías modernas como HTML5, CSS3, JavaScript, ",
        "TypeScript y frameworks avanzados como React, permitiendo el desarrollo de aplicaciones dinámicas y escalables.",
        "Con experiencia en la implementación de componentes reutilizables, sistemas de diseño y accesibilidad web (WCAG)",
        "Hábil en la optimización del rendimiento a través",
        "de técnicas como lazy loading, code splitting y minificación, mejorando la velocidad de carga y la eficiencia del sitio.",
      ],
      photoUrl: "/miguel.jpg",
    },
    {
      name: "Jose Martínez",
      role: "Desarrollador Backend",
      bio: [
        "Experto en el diseño, desarrollo y optimización de arquitecturas de servidores,",
        "APIs y bases de datos. Especializado en la creación de soluciones escalables, seguras",
        "y de alto rendimiento para aplicaciones web y móviles. Amplia experiencia en la implementación de microservicios, ",
        "desarrollo basado en la nube y optimización de bases de datos para mejorar la eficiencia y la velocidad de respuesta de las aplicaciones.",
        "Hábil en la integración de sistemas mediante API REST y GraphQL, garantizando la interoperabilidad y el acceso eficiente a los datos.",
      ],
      photoUrl: "/jose-min.jpg",
    },
    {
      name: "Luis Martínez",
      role: "Desarrollador de Software",
      bio: [
        "Desarrollador de software especializado en aplicaciones multiplataforma con experiencia en el diseño,",
        "desarrollo y mantenimiento de soluciones eficientes y escalables. Apasionado por la innovación tecnológica,",
        "el desarrollo ágil y la creación de experiencias de usuario optimizadas en distintos dispositivos y sistemas operativos.",
        "Desarrollo de aplicaciones móviles y de escritorio con Flutter y React Native. Implementación de soluciones escalables y optimización",
        "de rendimiento en dispositivos iOS y Android. Colaboración con equipos multidisciplinarios en proyectos de software ágil.",
      ],
      photoUrl: "/luis.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sobre Nosotros
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Somos un equipo de desarrolladores y diseñadores apasionados por crear
          soluciones innovadoras y de alta calidad.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
