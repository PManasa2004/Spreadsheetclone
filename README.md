📝 Google Sheets-Like Web Application
🚀 Overview
This web app is a Google Sheets clone that includes the following features:

Spreadsheet UI: Mimics a spreadsheet interface with support for Light/Dark mode and Column/Row headers.
Mathematical & Text Functions: Includes basic and advanced functions 
Formula Parsing: Support for parsing and calculating simple and complex formulas.
Multi-Sheet Support: Allows creating and switching between multiple sheets.
Real-Time Collaboration: Leverages WebSockets for real-time collaborative editing.
CSV/JSON Import & Export: Enables users to import/export data in CSV or JSON format.
Print & PDF Export: Options to print or export the spreadsheet as a PDF file.
Google Sign-In & Firebase Storage: Integration with Firebase for Google authentication and Firestore for storage.
⚙️ Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, WebSockets
Database: Firebase Firestore
Libraries & Tools:
WebSockets for real-time communication
Papa Parse for CSV parsing
jsPDF for PDF export
Firebase Authentication and Firestore for user authentication and storage
🛠️ Installation
Follow these steps to get the application up and running locally.

1️⃣ Clone the Repository
First, clone the repository to your local machine:

sh
Copy
Edit
git clone https://github.com/yourusername/spreadsheet-app.git
cd spreadsheet-app
2️⃣ Install Dependencies
Install all the required dependencies by running:

sh
Copy
Edit
npm install
3️⃣ Set Up Firebase
To set up Firebase for the app, follow these steps:

Create a Firebase project at Firebase Console.
Enable Firestore and Firebase Authentication (Google Sign-In).
Obtain your Firebase configuration and update the firebase-config.js file with your credentials.
4️⃣ Run the Development Server
Start the development server using:

sh
Copy
Edit
npm start
This will start the server and allow you to access the app locally on http://localhost:3000.

5️⃣ Access the Application
Once the server is running, you can open the app in your web browser by visiting:

sh
Copy
Edit
http://localhost:3000
🌟 Features
Light/Dark Mode Toggle: Switch between light and dark themes.
Real-Time Collaboration: Collaborate with others in real-time on the same sheet.
Multi-Sheet Support: Create multiple sheets within the same document.
Formula Bar: Enter mathematical formulas like =A1+B1 or =SUM(A1:A5) to calculate values.
Import/Export: Import and export data in CSV and JSON formats for easy backup and transfer.
Print & Export: Print or export your spreadsheet as a PDF for offline access.
Google Sign-In: Use your Google account to sign in and store your data in Firebase.
🛠️ Testing
To test the application locally, follow the setup instructions above and navigate to http://localhost:3000. You can also run tests using:

sh
Copy
Edit
npm test


