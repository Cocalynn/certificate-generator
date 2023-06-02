import './App.css';
import CertificateGenerator from './components/CertificateGenerator';

function App() {

  const recipients = [
    {
      name: 'Peter',
      course: 'Web Development'
    },
    {
      name: 'John',
      course: 'Data Science'
    },
    {
      name: 'Mary',
      course: 'UX Design'
    }
    // Add more recipients and courses as needed
  ];

  return (
    <div className="App">
      <CertificateGenerator recipients = {recipients} /> 
    </div>
  );
}

export default App;