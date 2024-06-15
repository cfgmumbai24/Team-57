import { useState } from "react";

const UpdateBeneficiary = () => {
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [income, setIncome] = useState();
  const [totalMembers, setTotalMembers] = useState();
  const [earningMembers, setEarningMembers] = useState();
  const [femaleGoats, setFemaleGoats] = useState();
  const [maleGoats, setMaleGoats] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission for updating
    console.log({
      name,
      village,
      income,
      totalMembers,
      earningMembers,
      femaleGoats,
      maleGoats,
    });
    // Reset form fields after submission
    setName("");
    setVillage("");
    setIncome(0);
    setTotalMembers(0);
    setEarningMembers(0);
    setFemaleGoats(0);
    setMaleGoats(0);
  };

  return (
    <div className="container mt-4">
      {" "}
      {/* Bootstrap container class */}
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <h2>Update Beneficiary</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="village" className="form-label">
            Village:
          </label>
          <input
            type="text"
            className="form-control"
            id="village"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="income" className="form-label">
            Income:
          </label>
          <input
            type="number"
            className="form-control"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalMembers" className="form-label">
            Total Members in Family:
          </label>
          <input
            type="number"
            className="form-control"
            id="totalMembers"
            value={totalMembers}
            onChange={(e) => setTotalMembers(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="earningMembers" className="form-label">
            Earning Members in Family:
          </label>
          <input
            type="number"
            className="form-control"
            id="earningMembers"
            value={earningMembers}
            onChange={(e) => setEarningMembers(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="femaleGoats" className="form-label">
            Number of Female Goats:
          </label>
          <input
            type="number"
            className="form-control"
            id="femaleGoats"
            value={femaleGoats}
            onChange={(e) => setFemaleGoats(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="maleGoats" className="form-label">
            Number of Male Goats:
          </label>
          <input
            type="number"
            className="form-control"
            id="maleGoats"
            value={maleGoats}
            onChange={(e) => setMaleGoats(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBeneficiary;
