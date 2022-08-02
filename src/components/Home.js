import React, {useEffect, useState} from 'react'

const Home = () => {
const getCryptoData = async() => {
    try {
        const response = await fetch("http://localhost:3001")
        const jsonData = await response.json()
        console.log(jsonData)

    } catch (error) {
        console.error(error.message)
    }
}

    useEffect(() => {
        getCryptoData()
    })

  return (

<table class="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="1">Larry the Bird</td>
      <td></td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  )
}

export default Home