import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "km";

const translations = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navContact: "Contact",
    themeToggle: "Toggle theme",
    menuToggle: "Toggle menu",
    languageLabel: "Language",
    english: "English",
    khmer: "Khmer",
    heroWelcome: "Welcome to my portfolio",
    heroGreeting: "Hi, I'm",
    heroRole: "Full-Stack Developer from Cambodia",
    heroDescription:
      "I craft beautiful, performant web applications using modern technologies like React, Next.js, TypeScript, and Node.js. Passionate about building scalable solutions and delivering exceptional user experiences.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    connectWithMe: "Connect with me:",
    decorativeAlt: "Pisey Suon",
    aboutTitle: "About Me",
    aboutP1:
      "I'm a passionate full-stack developer based in Cambodia with a strong foundation in both frontend and backend technologies. With expertise in modern JavaScript frameworks and server-side development, I create end-to-end solutions that solve real-world problems.",
    aboutP2:
      "My journey in web development started with a curiosity about how things work on the internet. Over the years, I've honed my skills through various projects, internships, and continuous learning. I believe in writing clean, maintainable code and delivering products that users love.",
    frontendDevelopment: "Frontend Development",
    backendDevelopment: "Backend Development",
    databaseTools: "Database & Tools",
    yearsExperience: "Years of Experience",
    projectsCompleted: "Projects Completed",
    technologies: "Technologies",
    clientSatisfaction: "Client Satisfaction",
    skillsTitle: "Skills & Expertise",
    skillsDescription:
      "A comprehensive toolkit of technologies and methodologies that I use to build robust, scalable applications.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    proficiency: "Proficiency Levels",
    proficiencyDescription: "My expertise across different technology areas",
    expert: "Expert",
    intermediate: "Intermediate",
    learning: "Learning",
    experienceTitle: "Experience",
    experienceDescription:
      "My professional journey and the roles that shaped my expertise as a full-stack developer.",
    present: "Present",
    logoAlt: "logo",
    exp1Title: "Lecturer at Setec Institute",
    exp1Description:
      "As a Lecturer at Setec Institute, I teach courses in web development and software engineering. I design and deliver engaging lectures and practical sessions to help students understand complex concepts and apply them in real-world scenarios. My work includes developing course materials, assessing student performance, and mentoring students to support their academic and professional growth.",
    exp2Title: "Web Application Developer",
    exp2Description:
      "I design and build complete web applications using Angular for the frontend and .NET for the backend. I develop RESTful APIs, manage Oracle and PostgreSQL databases, implement JWT authentication and role-based access control, and collaborate with cross-functional teams to plan, test, and deploy secure, scalable software.",
    exp3Title: "Web Application Developer",
    exp3Description:
      "As a Full-Stack Developer, I designed and built web applications using Next.js and Spring Boot. I integrated RESTful APIs, managed Oracle and PostgreSQL databases, implemented JWT authentication and role-based access control, and collaborated with teams to deliver reliable, user-friendly software.",
    exp4Title: "Frontend Developer & Technical Support",
    exp4Description:
      "Progressed from Technical Support to Frontend Developer, providing system support and troubleshooting while developing responsive web applications with React and Next.js, integrating APIs, optimizing performance, and collaborating with cross-functional teams.",
    contactTitle: "Get In Touch",
    contactDescription:
      "Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out!",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Phnom Penh, Cambodia",
    fullName: "Full Name",
    yourName: "Your name",
    emailAddress: "Email Address",
    subject: "Subject",
    projectInquiry: "Project inquiry",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    sending: "Sending...",
    sendMessage: "Send Message",
    sendSuccess: "Your message was sent successfully!",
    sendError: "Unable to send your message. Please try again.",
    footerRole: "Full-Stack Developer",
    footerDescription:
      "I build thoughtful digital experiences where clean design meets reliable, maintainable code.",
    navigation: "Navigation",
    connect: "Connect",
    copyright: "Designed and built with care.",
    backToTop: "Back to top",
    scrollToTop: "Scroll to top",
    notFoundTitle: "Page Not Found",
    notFoundDescription:
      "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.",
    goHome: "Go Home",
  },
  km: {
    navAbout: "អំពីខ្ញុំ",
    navSkills: "ជំនាញ",
    navExperience: "បទពិសោធន៍",
    navContact: "ទំនាក់ទំនង",
    themeToggle: "ប្តូររូបរាង",
    menuToggle: "បើកឬបិទម៉ឺនុយ",
    languageLabel: "ភាសា",
    english: "English",
    khmer: "ខ្មែរ",
    heroWelcome: "សូមស្វាគមន៍មកកាន់ផតហ្វូលីយ៉ូរបស់ខ្ញុំ",
    heroGreeting: "សួស្តី ខ្ញុំឈ្មោះ",
    heroRole: "អ្នកអភិវឌ្ឍន៍ Full-Stack មកពីកម្ពុជា",
    heroDescription:
      "ខ្ញុំបង្កើតកម្មវិធីវេបដែលស្រស់ស្អាត និងមានប្រសិទ្ធភាព ដោយប្រើបច្ចេកវិទ្យាទំនើបដូចជា React, Next.js, TypeScript និង Node.js។ ខ្ញុំស្រឡាញ់ការបង្កើតដំណោះស្រាយដែលអាចពង្រីកបាន និងផ្តល់បទពិសោធន៍ល្អដល់អ្នកប្រើប្រាស់។",
    viewProjects: "មើលគម្រោង",
    contactMe: "ទាក់ទងខ្ញុំ",
    connectWithMe: "ភ្ជាប់ទំនាក់ទំនងជាមួយខ្ញុំ៖",
    decorativeAlt: "សួន ពិសី",
    aboutTitle: "អំពីខ្ញុំ",
    aboutP1:
      "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ Full-Stack នៅកម្ពុជា ដែលមានមូលដ្ឋានរឹងមាំទាំងបច្ចេកវិទ្យា Frontend និង Backend។ ជាមួយជំនាញលើ JavaScript Framework ទំនើប និងការអភិវឌ្ឍផ្នែក Server ខ្ញុំបង្កើតដំណោះស្រាយពេញលេញសម្រាប់បញ្ហាជាក់ស្តែង។",
    aboutP2:
      "ដំណើររបស់ខ្ញុំក្នុងការអភិវឌ្ឍវេបបានចាប់ផ្តើមពីការចង់ដឹងថាអ៊ីនធឺណិតដំណើរការយ៉ាងដូចម្តេច។ ខ្ញុំបានពង្រឹងជំនាញតាមរយៈគម្រោង កម្មសិក្សា និងការសិក្សាបន្ត។ ខ្ញុំជឿលើការសរសេរកូដដែលស្អាត ងាយថែទាំ និងការបង្កើតផលិតផលដែលអ្នកប្រើប្រាស់ពេញចិត្ត។",
    frontendDevelopment: "ការអភិវឌ្ឍ Frontend",
    backendDevelopment: "ការអភិវឌ្ឍ Backend",
    databaseTools: "មូលដ្ឋានទិន្នន័យ និងឧបករណ៍",
    yearsExperience: "ឆ្នាំនៃបទពិសោធន៍",
    projectsCompleted: "គម្រោងបានបញ្ចប់",
    technologies: "បច្ចេកវិទ្យា",
    clientSatisfaction: "ការពេញចិត្តរបស់អតិថិជន",
    skillsTitle: "ជំនាញ និងឯកទេស",
    skillsDescription:
      "បច្ចេកវិទ្យា និងវិធីសាស្ត្រដែលខ្ញុំប្រើដើម្បីបង្កើតកម្មវិធីរឹងមាំ និងអាចពង្រីកបាន។",
    frontend: "Frontend",
    backend: "Backend",
    database: "មូលដ្ឋានទិន្នន័យ",
    proficiency: "កម្រិតជំនាញ",
    proficiencyDescription: "កម្រិតជំនាញរបស់ខ្ញុំតាមផ្នែកបច្ចេកវិទ្យានីមួយៗ",
    expert: "ជំនាញខ្ពស់",
    intermediate: "កម្រិតមធ្យម",
    learning: "កំពុងសិក្សា",
    experienceTitle: "បទពិសោធន៍",
    experienceDescription:
      "ដំណើរអាជីព និងតួនាទីដែលបានអភិវឌ្ឍជំនាញរបស់ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ Full-Stack។",
    present: "បច្ចុប្បន្ន",
    logoAlt: "ឡូហ្គោ",
    exp1Title: "សាស្ត្រាចារ្យនៅវិទ្យាស្ថានស៊ីតិក",
    exp1Description:
      "ក្នុងនាមជាសាស្ត្រាចារ្យនៅវិទ្យាស្ថានស៊ីតិក ខ្ញុំបង្រៀនមុខវិជ្ជាអភិវឌ្ឍវេប និងវិស្វកម្មកម្មវិធី។ ខ្ញុំរៀបចំមេរៀន និងការអនុវត្តជាក់ស្តែង ដើម្បីជួយនិស្សិតយល់ពីគោលគំនិតស្មុគស្មាញ និងអនុវត្តវាក្នុងស្ថានភាពពិត។ ខ្ញុំក៏រៀបចំឯកសារសិក្សា វាយតម្លៃ និងណែនាំនិស្សិតផងដែរ។",
    exp2Title: "អ្នកអភិវឌ្ឍន៍កម្មវិធីវេប",
    exp2Description:
      "ខ្ញុំរចនា និងបង្កើតកម្មវិធីវេបពេញលេញដោយប្រើ Angular សម្រាប់ Frontend និង .NET សម្រាប់ Backend។ ខ្ញុំអភិវឌ្ឍ RESTful API គ្រប់គ្រង Oracle និង PostgreSQL អនុវត្ត JWT និងការគ្រប់គ្រងសិទ្ធិតាមតួនាទី ព្រមទាំងសហការជាមួយក្រុមដើម្បីដាក់ឱ្យប្រើប្រាស់កម្មវិធីដែលមានសុវត្ថិភាព និងអាចពង្រីកបាន។",
    exp3Title: "អ្នកអភិវឌ្ឍន៍កម្មវិធីវេប",
    exp3Description:
      "ក្នុងនាមជាអ្នកអភិវឌ្ឍន៍ Full-Stack ខ្ញុំបានបង្កើតកម្មវិធីវេបដោយប្រើ Next.js និង Spring Boot។ ខ្ញុំបានភ្ជាប់ RESTful API គ្រប់គ្រង Oracle និង PostgreSQL អនុវត្ត JWT និងការគ្រប់គ្រងសិទ្ធិ ព្រមទាំងសហការជាមួយក្រុមដើម្បីផ្តល់កម្មវិធីដែលមានគុណភាព។",
    exp4Title: "អ្នកអភិវឌ្ឍន៍ Frontend និងផ្នែកជំនួយបច្ចេកទេស",
    exp4Description:
      "បានរីកចម្រើនពីផ្នែកជំនួយបច្ចេកទេសទៅជាអ្នកអភិវឌ្ឍន៍ Frontend ដោយផ្តល់ការគាំទ្រប្រព័ន្ធ និងដោះស្រាយបញ្ហា ព្រមទាំងបង្កើតកម្មវិធីវេប Responsive ជាមួយ React និង Next.js ភ្ជាប់ API និងកែលម្អប្រសិទ្ធភាព។",
    contactTitle: "ទាក់ទងមកខ្ញុំ",
    contactDescription:
      "មានគម្រោង ឬចង់សហការជាមួយខ្ញុំមែនទេ? ខ្ញុំរីករាយនឹងទទួលសារពីអ្នក។ សូមទាក់ទងមកខ្ញុំ!",
    email: "អ៊ីមែល",
    phone: "ទូរស័ព្ទ",
    location: "ទីតាំង",
    locationValue: "ភ្នំពេញ ប្រទេសកម្ពុជា",
    fullName: "ឈ្មោះពេញ",
    yourName: "ឈ្មោះរបស់អ្នក",
    emailAddress: "អាសយដ្ឋានអ៊ីមែល",
    subject: "ប្រធានបទ",
    projectInquiry: "សាកសួរអំពីគម្រោង",
    message: "សារ",
    messagePlaceholder: "ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក...",
    sending: "កំពុងផ្ញើ...",
    sendMessage: "ផ្ញើសារ",
    sendSuccess: "សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ!",
    sendError: "មិនអាចផ្ញើសារបានទេ។ សូមព្យាយាមម្តងទៀត។",
    footerRole: "អ្នកអភិវឌ្ឍន៍ Full-Stack",
    footerDescription:
      "ខ្ញុំបង្កើតបទពិសោធន៍ឌីជីថលដែលរួមបញ្ចូលការរចនាស្អាត និងកូដដែលទុកចិត្តបាន ងាយថែទាំ។",
    navigation: "តំណភ្ជាប់",
    connect: "ភ្ជាប់ទំនាក់ទំនង",
    copyright: "រចនា និងបង្កើតដោយយកចិត្តទុកដាក់។",
    backToTop: "ត្រឡប់ទៅខាងលើ",
    scrollToTop: "រំកិលទៅខាងលើ",
    notFoundTitle: "រកមិនឃើញទំព័រ",
    notFoundDescription:
      "សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមានទេ។ វាអាចត្រូវបានផ្លាស់ទី ឬលុបចេញ។",
    goHome: "ទៅទំព័រដើម",
  },
} as const;

type TranslationKey = keyof typeof translations.en;
type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return saved === "km" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "km" ? "km" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
