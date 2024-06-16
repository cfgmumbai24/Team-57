import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Volunteer from "./pages/Volunteer/Volunteer";
import AddBeneficiary from "./pages/Beneficiary/AddBeneficiary";
import UpdateBeneficiary from "./pages/Beneficiary/UpdateBeneficiary";
import ReadBeneficiary from "./pages/Beneficiary/ReadBeneficiary";
import DeleteBeneficiary from "./pages/Beneficiary/DeleteBeneficiary";
import Home from "./pages/Home/Home"; // Assume you have a Home component
import Login from "./pages/Login/Login"; // Assume you have a Login component
import Signup from "./pages/Signup/Signup"; // Assume you have a Signup component

function App() {
  const volunteer = {
    id: 1,
    name: "John Doe",
    contactNumber: "123-456-7890",
    email: "john@example.com",
    imageUrl: "src/assets/img.webp",
    village_assigned: "Village",
    number_of_family_visited: 10,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/volunteer"
          element={<Volunteer volunteer={volunteer} />}
        />
<<<<<<< HEAD
        <Route path="/beneficiary/create" element={<AddBeneficiary />} />
        <Route path="/beneficiary/update" element={<UpdateBeneficiary />} />
        <Route path="/beneficiary/read" element={<ReadBeneficiary />} />
        <Route path="/beneficiary/delete" element={<DeleteBeneficiary />} />
=======
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
>>>>>>> a2183d478ff152b687f2f293bed7ed6654ed1157
      </Routes>
    </Router>
  );
}

export default App;
