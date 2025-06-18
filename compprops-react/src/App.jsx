import React from "react";
import Greeting from "./components/Greeting";
import Table from "./components/table";
import ProductSection from "./components/tabletailwinds";


function App() {
  return (
    <div className="p-6">
      <Greeting name="Fay" />
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Table />
      <ProductSection />
    </div>
  );
}

export default App;
