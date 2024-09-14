import react from "react"
import reactdom from "react-dom/client"
import Navbar from "./navbar"
import Categories from "./categories"
import saleimage from "./saleimage"
import Recommended from "./recommended"
import Topics from "./topics"
import Popular from "./popular"
import Footer from "./footer"
import "./style.css"

const root = reactdom.createRoot(document.getElementById("root"))

root.render(
  <div>
  <Navbar></Navbar>
  <Categories></Categories>
  <saleimage></saleimage>
  <Recommended></Recommended>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
  </div>
)