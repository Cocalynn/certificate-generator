# Certificate Generator📜

The Certificate Generator is a React application that allows users to dynamically generate custom certificates. It utilizes the jsPDF library to create PDF documents with background images, recipient names, and course details. 

Medium article link:https://medium.com/@yinong.li97/4-steps-to-generate-certificate-jspdf-react-6fa85f2aab0

## Features

- Generate certificates with custom recipient names and course details.
- Add background images to the certificates for a personalized touch.
- Automatically save the generated certificates as PDF files with unique filenames.
- Generate multiple certificates at one time (see branch `multipleCertificatesGenerator`).

## Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd certificate-generator
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Place the desired certificate background image in the `src/assets` directory.

2. Open the `CertificateGenerator.js` file in the `src` directory.

3. Modify the `generateCertificate` function to customize the certificate design.

4. Run the application:

   ```shell
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

6. Enter the recipient's name and course details.

7. Click the "Generate Certificate" button to generate and save the certificate as a PDF file.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.


