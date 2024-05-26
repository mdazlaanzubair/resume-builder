const resumeDataModal = [
  {
    title: "Introduction",
    fields: {
      profilePic: "pravatar url",
      coverPhoto: "plane background unsplash url",
      fullName: "string",
      about: "string",
      title: "string",
      email: "string",
      contact: "string",
      location: "string",
      website: "string",
      social: [
        { network: "string", username: "string", link: "url" },
        { network: "string", username: "string", link: "url" },
        { network: "string", username: "string", link: "url" },
      ],
    },
  },
  {
    title: "Experience",
    fields: [
      {
        company: "string",
        position: "string",
        dateRange: "string",
        location: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
      {
        company: "string",
        position: "string",
        dateRange: "string",
        location: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
    ],
  },
  {
    title: "Education",
    fields: [
      {
        institution: "string",
        degree: "string",
        areaOfStudy: "string",
        score: "string",
        dateRange: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
      {
        institution: "string",
        degree: "string",
        areaOfStudy: "string",
        score: "string",
        dateRange: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
    ],
  },
  {
    title: "Certification",
    fields: [
      {
        name: "string",
        issuer: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
      {
        name: "string",
        issuer: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
    ],
  },
  {
    title: "Skills",
    fields: [
      { name: "string", rating: 0 },
      { name: "string", rating: 0 },
      { name: "string", rating: 0 },
    ],
  },
  {
    title: "Interests",
    fields: ["string", "string", "string"],
  },
  {
    title: "Awards",
    fields: [
      {
        name: "string",
        awarder: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
      {
        name: "string",
        awarder: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
    ],
  },
  {
    title: "Project",
    fields: [
      {
        name: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
        keywords: ["string", "string", "string"],
      },
      {
        name: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
        keywords: ["string", "string", "string"],
      },
    ],
  },
  {
    title: "Publication",
    fields: [
      {
        name: "string",
        publisher: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
      {
        name: "string",
        publisher: "string",
        date: "string",
        website: { title: "string", link: "url" },
        description: "string",
      },
    ],
  },
  {
    title: "Reference",
    fields: [
      {
        name: "string",
        position: "string",
        company: "string",
        email: "string",
        contact: "string",
      },
    ],
  },
];

export const resumeData = [
  {
    sectionId: 1,
    title: "Introduction",
    fields: {
      profilePic: "https://i.pravatar.cc/150?img=3",
      coverPhoto:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34",
      fullName: "John Doe",
      about:
        "Passionate web designer with 10 years of experience in creating stunning websites and digital graphics. Adept at using various design tools and technologies to bring creative ideas to life.",
      title: "Senior Web Designer",
      email: "john.doe@example.com",
      contact: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://www.johndoe.com",
      social: [
        {
          network: "LinkedIn",
          username: "john_doe",
          link: "https://www.linkedin.com/in/john_doe",
        },
        {
          network: "Twitter",
          username: "johndoe",
          link: "https://twitter.com/johndoe",
        },
        {
          network: "GitHub",
          username: "johndoe",
          link: "https://github.com/johndoe",
        },
      ],
    },
  },
  {
    sectionId: 2,
    title: "Experience",
    fields: [
      {
        company: "Creative Studio",
        position: "Lead Web Designer",
        dateRange: "Jan 2015 - Present",
        location: "San Francisco, CA",
        website: {
          title: "Creative Studio",
          link: "https://www.creativestudio.com",
        },
        description:
          "Led the design team in creating visually appealing websites and graphics for a variety of clients. Managed multiple projects simultaneously and ensured timely delivery of high-quality work.",
      },
      {
        company: "Design Hub",
        position: "Web Designer",
        dateRange: "May 2010 - Dec 2014",
        location: "New York, NY",
        website: { title: "Design Hub", link: "https://www.designhub.com" },
        description:
          "Developed and maintained website layouts and user interfaces. Collaborated with developers and clients to bring design concepts to life. Created digital assets for marketing campaigns.",
      },
    ],
  },
  {
    sectionId: 3,
    title: "Education",
    fields: [
      {
        institution: "University of California, Berkeley",
        degree: "Bachelor of Arts",
        areaOfStudy: "Graphic Design",
        score: "3.8 GPA",
        dateRange: "2006 - 2010",
        website: { title: "UC Berkeley", link: "https://www.berkeley.edu" },
        description:
          "Focused on visual communication, design principles, and digital media. Completed several projects involving web and print design.",
      },
      {
        institution: "San Francisco Art Institute",
        degree: "Master of Fine Arts",
        areaOfStudy: "Interactive Design",
        score: "3.9 GPA",
        dateRange: "2010 - 2012",
        website: { title: "SFAI", link: "https://www.sfai.edu" },
        description:
          "Specialized in interactive design and user experience. Developed skills in animation, web design, and multimedia art.",
      },
    ],
  },
  //   {
  //     sectionId: 4,
  //     title: "Certification",
  //     fields: [
  //       {
  //         name: "Certified Web Designer",
  //         issuer: "Web Design Institute",
  //         date: "April 2014",
  //         website: {
  //           title: "Web Design Institute",
  //           link: "https://www.webdesigninstitute.com",
  //         },
  //         description:
  //           "Completed an extensive certification program covering advanced web design techniques and best practices.",
  //       },
  //       {
  //         name: "Adobe Certified Expert",
  //         issuer: "Adobe",
  //         date: "June 2015",
  //         website: { title: "Adobe", link: "https://www.adobe.com" },
  //         description:
  //           "Demonstrated proficiency in Adobe Photoshop, Illustrator, and InDesign through a series of rigorous exams.",
  //       },
  //     ],
  //   },
  {
    sectionId: 5,
    title: "Skills",
    fields: [
      { name: "HTML/CSS", rating: 5 },
      { name: "JavaScript", rating: 4 },
      { name: "Adobe Photoshop", rating: 5 },
      { name: "UI/UX Design", rating: 4 },
      { name: "Responsive Design", rating: 5 },
    ],
  },
  {
    sectionId: 6,
    title: "Interests",
    fields: ["Photography", "Traveling", "Gaming"],
  },
  //   {
  //     sectionId: 7,
  //     title: "Awards",
  //     fields: [
  //       {
  //         name: "Best Web Designer",
  //         awarder: "Design Awards",
  //         date: "2018",
  //         website: {
  //           title: "Design Awards",
  //           link: "https://www.designawards.com",
  //         },
  //         description:
  //           "Awarded for outstanding creativity and technical skills in web design.",
  //       },
  //       {
  //         name: "Innovative Designer",
  //         awarder: "Creativity International Awards",
  //         date: "2019",
  //         website: {
  //           title: "Creativity International Awards",
  //           link: "https://www.creativityawards.com",
  //         },
  //         description:
  //           "Recognized for innovative and impactful design solutions.",
  //       },
  //     ],
  //   },
  //   {
  //     sectionId: 8,
  //     title: "Project",
  //     fields: [
  //       {
  //         name: "Portfolio Website",
  //         date: "2020",
  //         website: {
  //           title: "John Doe Portfolio",
  //           link: "https://www.johndoportfolio.com",
  //         },
  //         description:
  //           "Developed a personal portfolio website to showcase design projects and skills. Implemented a responsive layout and interactive elements.",
  //         keywords: ["HTML", "CSS", "JavaScript"],
  //       },
  //       {
  //         name: "E-commerce Website",
  //         date: "2021",
  //         website: { title: "ShopOnline", link: "https://www.shoponline.com" },
  //         description:
  //           "Designed and developed a fully functional e-commerce website. Integrated payment gateways and optimized for SEO.",
  //         keywords: ["E-commerce", "Web Design", "SEO"],
  //       },
  //     ],
  //   },
  //   {
  //     sectionId: 9,
  //     title: "Publication",
  //     fields: [
  //       {
  //         name: "Design Trends 2022",
  //         publisher: "Design Magazine",
  //         date: "January 2022",
  //         website: {
  //           title: "Design Magazine",
  //           link: "https://www.designmagazine.com",
  //         },
  //         description:
  //           "Authored an article on the latest trends in web design and how to implement them in projects.",
  //       },
  //       {
  //         name: "UI/UX Best Practices",
  //         publisher: "Tech Journal",
  //         date: "March 2022",
  //         website: { title: "Tech Journal", link: "https://www.techjournal.com" },
  //         description:
  //           "Co-authored a comprehensive guide on UI/UX best practices for designers and developers.",
  //       },
  //     ],
  //   },
  //   {
  //     sectionId: 10,
  //     title: "Reference",
  //     fields: [
  //       {
  //         name: "Jane Smith",
  //         position: "Creative Director",
  //         company: "Creative Studio",
  //         email: "jane.smith@creativestudio.com",
  //         contact: "+1 (555) 987-6543",
  //       },
  //     ],
  //   },
];
