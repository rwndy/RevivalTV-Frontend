import Head from "next/head"
import { DetailProductComponent, Footer, NavbarComponent } from "../../components"

const DetailProduct = () => {
  return (
    <>
      <Head>
        <title>Detail Product | Drone App</title>
      </Head>
      <NavbarComponent />
      <DetailProductComponent />
      <Footer />
    </>
  )
}

export default DetailProduct
