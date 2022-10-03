import { Routes, Route, Navigate } from "react-router-dom"
import CoinPage from "modules/coin/CoinPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/coin/*" element={<CoinPage />} />
      <Route path="/" element={<Navigate to={"/coin"} />} />
    </Routes>
  )
}

export default AppRoutes