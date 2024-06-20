import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pagebase } from './pages/Pagebase/pagebase'
import { Home } from './pages/Home/home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagebase />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
