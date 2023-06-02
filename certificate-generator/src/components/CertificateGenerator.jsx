import React from 'react'
import jsPDF from 'jspdf'
import img from '../assets/certificate-background.png'

const generateCertificate = (name, course) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add background image
  doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

  // Add recipient name
  doc.setFontSize(36);
  doc.setFont('helvetica'); // Change the font family and style
  doc.text(name, 105, 160, { align: 'center' }); // put the nick name 

  // Add course name
  doc.setFontSize(20);
  doc.text(course, 105, 195, { align: 'center' }); // put the course name

  // Save the PDF
  doc.save(`${name}-${course}.pdf`);
};

function CertificateGenerator(props) {
    return (
      <div>
        <button onClick={() => generateCertificate(props.name, props.course)}>Generate Certificate</button>
      </div>
    );
  }
  

export default CertificateGenerator