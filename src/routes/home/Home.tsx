import About from "../../components/about/About"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import Popular from "../../components/popular/Popular"
import Products from "../../components/products/Products"
import Testimonials from "../../components/testimonials/Testimonials"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Testimonials/>
      <About/>
      <Popular/>
      <Footer/>
    </div>
  )
}

export default Home
