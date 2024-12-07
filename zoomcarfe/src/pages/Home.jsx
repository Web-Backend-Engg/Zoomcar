import DefaultLayout from "../components/DefaultLayout"
import { useSelector } from "react-redux"

function Home() {
  const cars = useSelector((state) => state.cars.cars);
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <h1>Length cars: {cars.length}</h1>
    </DefaultLayout>
  )
}

export default Home
