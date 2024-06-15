import { useEffect, useState } from "react";
// import axios from 'axios'; // Commenting out axios since we are mocking
import Table from "react-bootstrap/Table";

const ReadBeneficiary = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        // Commenting out the original API call
        // const response = await axios.get('YOUR_API_ENDPOINT/beneficiaries');
        // setBeneficiaries(response.data);

        // Mocking API response with a delay
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: [
                {
                  id: 1,
                  name: "John Doe",
                  village: "Village A",
                  income: 5000,
                  totalMembers: 5,
                  earningMembers: 2,
                  femaleGoats: 3,
                  maleGoats: 1,
                },
                {
                  id: 2,
                  name: "Jane Smith",
                  village: "Village B",
                  income: 3000,
                  totalMembers: 4,
                  earningMembers: 1,
                  femaleGoats: 2,
                  maleGoats: 2,
                },
                // Add more mock beneficiaries as needed
              ],
            });
          }, 1000); // Simulate a 1-second delay
        });

        setBeneficiaries(response.data);
      } catch (error) {
        console.error("Error fetching beneficiaries:", error);
      }
    };

    fetchBeneficiaries();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Beneficiaries</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Village</th>
            <th>Income</th>
            <th>Total Members</th>
            <th>Earning Members</th>
            <th>Female Goats</th>
            <th>Male Goats</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary) => (
            <tr key={beneficiary.id}>
              <td>{beneficiary.id}</td>
              <td>{beneficiary.name}</td>
              <td>{beneficiary.village}</td>
              <td>{beneficiary.income}</td>
              <td>{beneficiary.totalMembers}</td>
              <td>{beneficiary.earningMembers}</td>
              <td>{beneficiary.femaleGoats}</td>
              <td>{beneficiary.maleGoats}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReadBeneficiary;
