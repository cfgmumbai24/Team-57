import { useState } from "react";
// import axios from 'axios'; // Commenting out axios since we are mocking

const DeleteBeneficiary = () => {
  const [beneficiaryId, setBeneficiaryId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Commenting out the actual API call
      // const response = await axios.delete(`YOUR_API_ENDPOINT/beneficiaries/${beneficiaryId}`);
      // console.log(response.data);

      // Mocking API response with a delay
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulating successful deletion for mock purposes
          if (beneficiaryId) {
            resolve({ data: { message: "Beneficiary deleted successfully" } });
          } else {
            reject(new Error("Beneficiary ID not found"));
          }
        }, 1000); // Simulate a 1-second delay
      });

      console.log(response.data);
      alert("Beneficiary deleted successfully");
      setBeneficiaryId("");
    } catch (error) {
      console.error("Error deleting beneficiary:", error);
      alert("Failed to delete beneficiary");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Delete Beneficiary</h2>
      <form onSubmit={handleDelete}>
        <div className="mb-3">
          <label htmlFor="beneficiaryId" className="form-label">
            Beneficiary ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="beneficiaryId"
            value={beneficiaryId}
            onChange={(e) => setBeneficiaryId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteBeneficiary;
