import { Aside } from 'components/Aside'
import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface Props extends React.PropsWithChildren {

}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Aside />
      {children}
      <Footer />
    </>
  )
}

export default Layout