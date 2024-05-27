import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const PDFResume = ({ data }) => {
  const styles = StyleSheet.create({
    container: {
      width: "80%",
      maxWidth: 900,
      margin: "20px auto",
      background: "#fff",
      padding: 20,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: 32,
      marginBottom: 10,
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
      listStyleType: "none",
      padding: 0,
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
  });

  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          {data?.map((item, index) => {
            if (item?.id === 1) {
              return (
                <View key={index}>
                  <Text style={styles.title}>{item?.fields?.fullName}</Text>
                  <Text>{item?.fields?.title}</Text>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{item?.title}</Text>
                    <View style={styles.contacts}>
                      <Text style={styles.contactItem}>
                        {item?.fields?.location}
                      </Text>
                      <Text style={styles.contactItem}>
                        {item?.fields?.email}
                      </Text>
                      <Text style={styles.contactItem}>
                        {item?.fields?.contact}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                    <View style={styles.sectionContent}>
                      <Text>{item?.fields?.about}</Text>
                    </View>
                  </View>
                </View>
              );
            }

            if (item?.id == 2) {
              return (
                <View style={styles.section} key={index}>
                  <Text style={styles.sectionTitle}>{item?.title}</Text>
                  <View style={styles.sectionContent}>
                    {item?.fields?.map((field, index) => (
                      <View style={styles.employmentItem} key={index}>
                        <Text style={styles.employmentTitle}>
                          {field?.dateRange} — {field?.position} at{" "}
                          {field?.company}, {field?.location}
                        </Text>
                        <Text style={styles.employmentDescription}>
                          {field?.description}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              );
            }

            if (item?.id == 3) {
              return (
                <View style={styles.section} key={index}>
                  <Text style={styles.sectionTitle}>{item?.title}</Text>
                  <View style={styles.sectionContent}>
                    {item?.fields?.map((field, index) => (
                      <View style={styles.employmentItem} key={index}>
                        <Text style={styles.employmentTitle}>
                          {field?.dateRange} — {field?.institution}
                        </Text>
                        <Text style={styles.employmentDescription}>
                          {field?.description}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              );
            }

            if (item?.id == 5) {
              return (
                <View style={styles.section} key={index}>
                  <Text style={styles.sectionTitle}>{item?.title}</Text>
                  <View style={styles.softSkills}>
                    {item?.fields?.map((field, index) => (
                      <Text style={styles.softSkillItem} key={index}>
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
                  <Text style={styles.sectionTitle}>{item?.title}</Text>
                  <View style={styles.softSkills}>
                    {item?.fields?.map((field, index) => (
                      <Text style={styles.softSkillItem} key={index}>
                        {field}
                      </Text>
                    ))}
                  </View>
                </View>
              );
            }
          })}
        </View>
      </Page>
    </Document>
  );
};

export default PDFResume;
