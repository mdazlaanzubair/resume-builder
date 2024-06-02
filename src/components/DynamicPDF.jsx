import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const PDFResume = ({ data }) => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 12,
      textAlign: "center",
      margin: 12,
    },
    heading: {
      fontSize: 16,
      borderBottom: "2px solid #000",
      marginBottom: 10,
    },
    subHeading: {
      fontSize: 14,
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
    },
    textSmall: {
      fontSize: 10,
    },
    section: {
      marginBottom: 15,
    },
    contactSection: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
    },
    experienceSection: {
      borderRadius: "8px",
      padding: 10,
      backgroundColor: "#f5f5f5",
      marginBottom: 10,
    },
    educationSection: {
      borderRadius: "8px",
      padding: 10,
      backgroundColor: "#f5f5f5",
      marginBottom: 10,
    },
    skillSection: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  return (
    <Document>
      <Page size="A4" wrap={true} style={styles.body}>
        {data?.map((item, index) => {
          if (item?.id === 1) {
            return (
              <View key={index}>
                <Text style={styles.title}>{item?.fields?.fullName}</Text>
                <Text style={styles.subtitle}>{item?.fields?.title}</Text>

                <View style={styles.section}>
                  <Text style={styles.heading}>{item?.title}</Text>
                  <View style={styles.contactSection}>
                    <Text style={styles.text}>{item?.fields?.location}</Text>
                    <Text style={styles.text}>{item?.fields?.email}</Text>
                    <Text style={styles.text}>{item?.fields?.contact}</Text>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.heading}>Profile</Text>
                  <Text style={styles.text}>{item?.fields?.about}</Text>
                </View>
              </View>
            );
          }

          if (item?.id == 2) {
            return (
              <View style={styles.section} key={index}>
                <Text style={styles.heading}>{item?.title}</Text>
                {item?.fields?.map((field, index) => (
                  <View style={styles.experienceSection} key={index}>
                    <Text style={styles.subHeading} break>
                      {field?.dateRange} — {field?.position}
                    </Text>
                    <Text style={styles.textSmall}>
                      at {field?.company}, {field?.location}
                    </Text>
                    <Text style={styles.text}>{field?.description}</Text>
                  </View>
                ))}
              </View>
            );
          }

          if (item?.id == 3) {
            return (
              <View style={styles.section} key={index}>
                <Text style={styles.heading}>{item?.title}</Text>
                {item?.fields?.map((field, index) => (
                  <View style={styles.educationSection} key={index} break>
                    <Text style={styles.subHeading}>
                      {field?.dateRange} — {field?.institution}
                    </Text>
                    <Text style={styles.text}>{field?.description}</Text>
                  </View>
                ))}
              </View>
            );
          }

          if (item?.id == 5) {
            return (
              <View style={styles.section} key={index}>
                <Text style={styles.heading}>{item?.title}</Text>
                <View style={styles.skillSection}>
                  {item?.fields?.map((field, index) => (
                    <Text style={styles.text} key={index}>
                      {field?.name} - {field?.rating}
                    </Text>
                  ))}
                </View>
              </View>
            );
          }

          if (item?.id == 6) {
            return (
              <View style={styles.section} key={index}>
                <Text style={styles.heading}>{item?.title}</Text>
                <View style={styles.skillSection}>
                  {item?.fields?.map((field, index) => (
                    <Text style={styles.text} key={index}>
                      {field}
                    </Text>
                  ))}
                </View>
              </View>
            );
          }
        })}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFResume;
