import React from "react";

const ResumeTemplate = () => {
  return (
    <div class="container">
      <h1>Fred Lynch</h1>
      <p>Web-Designer</p>

      <div class="section">
        <h2 class="section-title">Contacts</h2>
        <ul class="contacts">
          <li>2207 Beach Avenue, Los Angeles</li>
          <li>fredlynch@mail.me</li>
          <li>(914) 479-6342</li>
        </ul>
      </div>

      <div class="section">
        <h2 class="section-title">Profile</h2>
        <div class="section-content">
          <p>
            Graphic designer with +8 years of experience in branding and print
            design. Skilled at Adobe Creative Suite (Photoshop, Illustrator,
            InDesign) as well as sketching and hand drawing. Supervised 23 print
            design projects that resulted in an increase of 32% in savings.
          </p>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="section-content">
          <div class="education-item">
            <h3>2005 – 2007 — Los Angeles University</h3>
            <p>Master of Graphic Design</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Employment</h2>
        <div class="section-content">
          <div class="employment-item">
            <h3>2005 – 2007 — UI Designer at Market Studios, New York</h3>
            <p>
              Successfully translated subject matter into concrete design for
              newsletters, promotional materials and sales collateral. Created
              design theme and graphics for marketing and sales presentations,
              training videos and corporate websites.
            </p>
          </div>
          <div class="employment-item">
            <h3>2007 – 2009 — Graphic Designer at FireWeb, Los Angeles</h3>
            <p>
              Created new design themes for marketing and collateral materials.
              Collaborated with creative team to design and produce
              computer-generated artwork for marketing and promotional
              materials.
            </p>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Soft skills</h2>
        <ul class="soft-skills">
          <li>Communication</li>
          <li>Attention to details</li>
          <li>Time management</li>
          <li>Desire to learn</li>
          <li>Teamwork</li>
          <li>Meeting deadlines</li>
          <li>Creativity</li>
        </ul>
      </div>

      <div class="section">
        <h2 class="section-title">Technical skills</h2>
        <ul class="technical-skills">
          <li>Figma</li>
          <li>Web Design (HTML/CSS)</li>
          <li>Sketch</li>
          <li>Premiere Pro</li>
          <li>Adobe Photoshop</li>
          <li>After Effects</li>
          <li>Adobe Illustrator</li>
          <li>Photography</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeTemplate;
