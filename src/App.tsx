import React, { useState } from "react";
import "./App.css";

interface FormData {
  name: string;
  age: number;
  birthdate: string;
  address: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
    birthdate: "",
    address: "",
  });
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.age || !formData.birthdate) {
      setError("All fields are required");
      return;
    }
    setSubmittedData(formData);
    setError(null); 
  };

  return (
    <div className="container">
      <div className="form-container">
        {error && <p style={{ color: "red" }}>{error}</p>} 
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>

          <label>
            Birthdate:
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      {submittedData && (
        <div className="footer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>BirthDate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.address}</td>
                <td>{submittedData.age}</td>
                <td>{submittedData.birthdate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
