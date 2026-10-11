import { useState } from "react";
import "./App.css";
 // 1. Данные резюме 
const resume = {
  name: "Таиров Дилшат",
  title: "Начинающий разработчик",
  about:
    "Начинающий разработчик. Изучаю HTML, CSS, JavaScript и React. " +
    "Люблю делать аккуратные и понятные интерфейсы.",
  contacts: {
    email: "TairovDilshat@example.com",
    phone: "+996 555 123 456",
    city: "Бишкек, Кыргызстан",
  },
  skills: ["HTML", "Java","СSS", "JavaScript", "React"],
  experience: [
    {
      company: "Учебный проект",
      period: "2025 — настоящее время",
      role: "Разработчик",
      description: "Сделал несколько небольших сайтов и приложений на React.",
    },
  ],
  education: [
    {
      place: "Кыргызско-Германский институт прикладной информатики",
      period: "2025 — 2029",
      specialty: "Программные технологии",
    },
  ],
};
 
// 2. Универсальный блок-секция: заголовок + любое содержимое внутри (children)
function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
 
// 3. Шапка резюме. Данные приходят через props
function Header({ name, title }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p className="subtitle">{title}</p>
    </header>
  );
}
 
function About({ text }) {
  return (
    <Section title="Обо мне">
      <p>{text}</p>
    </Section>
  );
}
 
// 4. Список навыков выводится через .map()
function Skills({ items }) {
  return (
    <Section title="Навыки">
      <ul className="skills">
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  );
}
 
function Experience({ items }) {
  return (
    <Section title="Опыт">
      {items.map((job) => (
        <div className="item" key={job.company + job.period}>
          <h3>
            {job.role}, {job.company}
          </h3>
          <span className="period">{job.period}</span>
          <p>{job.description}</p>
        </div>
      ))}
    </Section>
  );
}
 
function Education({ items }) {
  return (
    <Section title="Образование">
      {items.map((edu) => (
        <div className="item" key={edu.place + edu.period}>
          <h3>{edu.place}</h3>
          <span className="period">{edu.period}</span>
          <p>{edu.specialty}</p>
        </div>
      ))}
    </Section>
  );
}
 
function Contacts({ data }) {
  return (
    <Section title="Контакты">
      <p>Email: {data.email}</p>
      <p>Телефон: {data.phone}</p>
      <p>Город: {data.city}</p>
    </Section>
  );
}
 
// 5. Главный компонент собирает всё вместе
function App() {
  // Состояние: тёмная тема включена или нет (необязательная часть)
  const [dark, setDark] = useState(false);
 
  return (
    <div className={dark ? "page dark" : "page"}>
      <div className="resume">
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "Светлая тема" : "Тёмная тема"}
        </button>
 
        <Header name={resume.name} title={resume.title} />
        <About text={resume.about} />
        <Skills items={resume.skills} />
        <Experience items={resume.experience} />
        <Education items={resume.education} />
        <Contacts data={resume.contacts} />
      </div>
    </div>
  );
}
 
export default App;
 