import CoinList from './CoinList/components/CoinList'
import { Route, Routes } from "react-router-dom"
const CoinPage = () => {
  return (
    <Routes>
      <Route index element={<CoinList />} />
    </Routes>
  )
}

export default CoinPage