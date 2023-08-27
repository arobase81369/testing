import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Protectedrouter from "@/components/protectedrouter"
 
export default function Layout({ children }) {
  return (
    <>
    <Protectedrouter>
    <div>
        <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </div>
      </div>
      </Protectedrouter>
    </>
  )
}