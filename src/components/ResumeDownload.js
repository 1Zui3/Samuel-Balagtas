import React from "react";
import "./ResumeDownload.css";

function ResumeDownload() {
  return (
    <section id="resume" className="resume-section">
      <h2>Download My Resume</h2>
      <a
        href="/Balagtas-resume.pdf"
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </section>
  );
}

export default ResumeDownload;
