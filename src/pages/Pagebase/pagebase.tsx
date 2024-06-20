import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/header'
import { Container } from '../../components/Container/container'

export function Pagebase() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
