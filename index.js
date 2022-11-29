const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };

console.log(userInfo.projects[1].title)
console.log(userInfo.company.jobTitle)

const mondayMenu = {
    cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" },
    fries: "Curly",
    salad: "Cobb",
};
mondayMenu.fries = "Sweet potato";
console.log(mondayMenu)