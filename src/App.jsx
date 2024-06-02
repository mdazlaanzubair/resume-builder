import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SectionTiles from "./components/SectionTiles";
import { PDFDownloadLink, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import PDFResume from "./components/DynamicPDF";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    {
      id: 5,
      title: "Skills",
      fields: [
        { name: "HTML/CSS", rating: 5 },
        { name: "JavaScript", rating: 4 },
        { name: "Adobe Photoshop", rating: 5 },
        { name: "UI/UX Design", rating: 4 },
        { name: "Responsive Design", rating: 5 },
        { name: "HTML/CSS", rating: 5 },
        { name: "JavaScript", rating: 4 },
        { name: "Adobe Photoshop", rating: 5 },
        { name: "UI/UX Design", rating: 4 },
        { name: "Responsive Design", rating: 5 },
        { name: "HTML/CSS", rating: 5 },
        { name: "JavaScript", rating: 4 },
        { name: "Adobe Photoshop", rating: 5 },
        { name: "UI/UX Design", rating: 4 },
        { name: "Responsive Design", rating: 5 },
      ],
    },
    {
      id: 6,
      title: "Interests",
      fields: [
        "Photography",
        "Traveling",
        "Gaming",
        "Photography",
        "Traveling",
        "Gaming",
        "Photography",
        "Traveling",
        "Gaming",
      ],
    },
  ]);

  // FUNCTION TO GET INDEX OF ARRAY DATA ELEMENT
  const getDataIndex = (id) => data?.findIndex((task) => task?.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active?.id === over?.id) return;
    else {
      setData((data) => {
        const originalPos = getDataIndex(active?.id);
        const newPos = getDataIndex(over?.id);
        return arrayMove(data, originalPos, newPos);
      });
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 20,
      backgroundColor: "#fff",
    },
    h1: {
      fontSize: 32,
      marginBottom: 10,
    },
    h2: {
      fontSize: 24,
      marginBottom: 5,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontWeight: "bold",
      borderBottom: "2px solid #000",
      paddingBottom: 5,
      marginBottom: 10,
      fontSize: 20,
    },
    contacts: {
      listStyleType: "none",
      padding: 0,
    },
    contactItem: {
      marginBottom: 5,
    },
    softSkills: {
      display: "flex",
      flexWrap: "wrap",
    },
    softSkillItem: {
      width: "50%",
    },
    sectionContent: {
      paddingLeft: 10,
    },
    employmentItem: {
      marginBottom: 10,
    },
    employmentTitle: {
      margin: "5px 0",
      fontSize: 18,
    },
    employmentDescription: {
      margin: "5px 0",
    },
    educationItem: {
      marginBottom: 10,
    },
    educationTitle: {
      margin: "5px 0",
      fontSize: 18,
    },
    educationDescription: {
      margin: "5px 0",
    },
  });

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 p-5">
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <ul className="list-none">
            <SortableContext
              items={data}
              strategy={verticalListSortingStrategy}
            >
              {data?.map((section) => (
                <SectionTiles
                  key={section?.id}
                  id={section?.id}
                  title={section?.title}
                />
              ))}
            </SortableContext>
          </ul>
        </DndContext>
        <PDFDownloadLink
          style={{
            padding: 15,
            background: "#000000",
            color: "#ffffff",
            fontSize: 12,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: "5px",
          }}
          document={<PDFResume data={data} />}
          fileName="resume.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </div>
      <div className="col-span-8">
        <PDFViewer
          showToolbar={false}
          style={{ width: "100%", height: "100vh" }}
        >
          <PDFResume data={data} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
