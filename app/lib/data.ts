import { Skillset, Project } from "./definition";

export function getSkillset() {
  const skillset: Skillset[] = [
    {
      id: "1",
      name: "React",
      image: "/react.svg",
    },
    {
      id: "2",
      name: "Typescript",
      image: "/typescript.svg",
    },
    {
      id: "3",
      name: "Next.js",
      image: "/nextjs.svg",
    },
    {
      id: "4",
      name: "Sass",
      image: "/sass.svg",
    },
    {
      id: "5",
      name: "Tailwind css",
      image: "/tailwind.svg",
    },
    {
      id: "6",
      name: "PHP",
      image: "/php.svg",
    },
    {
      id: "7",
      name: "Laravel",
      image: "/laravel.svg",
    },
    {
      id: "8",
      name: "Node.js",
      image: "/nodejs.svg",
    },
    {
      id: "9",
      name: "MySQL",
      image: "/mysql.svg",
    },
    {
      id: "10",
      name: "Pgsql",
      image: "/pgsql.svg",
    },
  ];

  return skillset;
}

export function getProjects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Wedding site (The Wedding of Sanudin & Nurfauziah)",
      description: `<p class="mb-3 text-justify">A simple and heartfelt wedding website created to share the joy of Sanudin and Nurfauziah's special day. The site includes essential features to keep guests informed and engaged: Events, Story, Photo Gallery, and Wishes.</p>
          <p class="mb-3 text-justify">Designed with simplicity and warmth, this website ensures a seamless experience for guests to celebrate and connect with the couple on their big day.</p>`,
      image: "/project-wedding-site.png",
      tags: ["sass", "bootstrap", "notion"],
      link: "https://ziah.sanud.in/",
      github: "https://github.com/ssanudin/ziah",
    },
    {
      id: "2",
      title: "Book collection manager (Bookshelf App)",
      description: `<p class="mb-3 text-justify">The Bookshelf App is a web application that allows users to manage their book collection. Users can add new books, search for existing books, and view lists of completed and incomplete books. The app provides a user-friendly interface and utilizes local storage to save book data.</p>`,
      image: "/project-book-collection-manager.png",
      tags: ["javascript"],
      link: "https://ssanudin.github.io/bookshelf-app-v1/",
      github: "https://github.com/ssanudin/bookshelf-app-v1",
    },
    {
      id: "3",
      title: "Notes App",
      description: `<p class="mb-3 text-justify">A notes application to manage your tasks and notes efficiently. This app allows users to create, edit, and delete notes, providing a simple and intuitive interface.</p>
      <p class="mb-3 text-justify">This project utilizes custom element components in JavaScript, allowing for a modular and reusable approach to building the user interface.</p>`,
      image: "/project-notes-app.png",
      tags: ["javascript", "webpack"],
      link: "https://notes-app-sanudin.vercel.app/",
      github: "https://github.com/ssanudin/notes-app-v1",
    },
    {
      id: "4",
      title: "DDevs Story",
      description: `<p class="mb-3 text-justify">DDevs Story is a web application that showcases development stories and experiences. This project demonstrates modern web development practices and provides an engaging platform for sharing developer journeys.</p>`,
      image: "/project-ddevs-story.png",
      tags: ["web development"],
      link: "https://ddevs-story.web.app/",
      github: "https://github.com/ssanudin/ddevs-story",
    },
  ];

  return projects;
}
