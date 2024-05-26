import React from "react";

const DynamicResume = ({ data }) => {
  return (
    <div class="container">
      {data?.map((item, index) => {
        if (item?.sectionId === 1) {
          return (
            <div key={index}>
              <h1>{item?.fields?.fullName}</h1>
              <p>{item?.fields?.title}</p>

              <div class="section">
                <h2 class="section-title">{item?.title}</h2>
                <ul class="contacts">
                  <li>{item?.fields?.location}</li>
                  <li>{item?.fields?.email}</li>
                  <li>{item?.fields?.contact}</li>
                </ul>
              </div>

              <div class="section">
                <h2 class="section-title">Profile</h2>
                <div class="section-content">
                  <p>{item?.fields?.about}</p>
                </div>
              </div>
            </div>
          );
        }

        if (item?.sectionId == 2) {
          return (
            <div class="section" key={index}>
              <h2 class="section-title">{item?.title}</h2>
              <div class="section-content">
                {item?.fields?.map((field, index) => (
                  <div class="employment-item" key={index}>
                    <h3>
                      {field?.dateRange} — {field?.position} at{" "}
                      {field?.position}, {field?.location}
                    </h3>
                    <p>{field?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (item?.sectionId == 3) {
          return (
            <div class="section" key={index}>
              <h2 class="section-title">{item?.title}</h2>
              <div class="section-content">
                {item?.fields?.map((field, index) => (
                  <div class="education-item" key={index}>
                    <h3>
                      {field?.dateRange} — {field?.institution}
                    </h3>
                    <p>{field?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (item?.sectionId == 5) {
          return (
            <div class="section" key={index}>
              <h2 class="section-title">{item?.title}</h2>
              <ul class="soft-skills">
                {item?.fields?.map((field, index) => (
                  <li key={index}>
                    {field?.name} - {field?.rating}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        if (item?.sectionId == 6) {
          return (
            <div class="section" key={index}>
              <h2 class="section-title">{item?.title}</h2>
              <ul class="soft-skills">
                {item?.fields?.map((field, index) => (
                  <li key={index}>{field}</li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DynamicResume;
