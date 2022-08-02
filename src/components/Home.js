import React, { useEffect, useState } from "react";
import axios from "axios";

//ddd
const Home = () => {
  const baseURL = "http://localhost:4000";

  const [dataView, setDataView] = useState([])

  useEffect(() => {
    getCryptoData()
  }, []);

  const getCryptoData = async () => {
    try {
      const response = await axios.get(baseURL);
      setDataView(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(dataView);

  return (
    <table class="table mt-5 text-center">
      <thead>
        <tr>
          <th scope="col">DataID#</th>
          <th scope="col">Asset</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Quant</th>
          <th scope="col">Token Price</th>
          <th scope="col">Gross</th>
          <th scope="col">Net</th>
          <th scope="col">Trans Type</th>

        </tr>
      </thead>
      <tbody>
        {dataView.map(dataView => (
          <tr key={dataView.dbid}>
             <td>{dataView.dbid}</td>
             <td>{dataView.Asset}</td>
             <td>{dataView.From}</td>
             <td>{dataView.To}</td>
             <td>{dataView.Quantity}</td>
             <td>{dataView.Gross}</td>
             <td>{dataView[`Token Price`]}</td>
             <td>{dataView.Net}</td>
             <td>{dataView[`Transaction Type`]}</td>
          </tr>
        ))}
     
      </tbody>
    </table>
  );
};

export default Home;
