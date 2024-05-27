import { useState } from "react";
import ResumeTemplate from "./components/ResumeTemplate";
import { resumeData } from "./constant";
import DynamicResume from "./components/DynamicResume";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SectionTiles from "./components/SectionTiles";
import DynamicPDF from "./components/DynamicPDF";
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import PDFResume from "./components/DynamicPDF";

function App() {
  const [data, setData] = useState(resumeData);

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
      </div>
      <div className="col-span-8">
        <DynamicResume data={data} />
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <PDFResume data={data} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
