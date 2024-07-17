import AboutUs from './AboutUs'
import BlogsSection from './BlogsSection'
import ClientReviews from './ClientReviews'
import Footer from './Footer'
import GetInTouchSection from './GetInTouchSection'
import Hero from './Hero'
import JourneySection from './JourneySection'
import MeetOurTeam from './MeetOurTeam'
import Portfolio from './Portfolio'
import Services from './Services'

const MainPage = () => {
  return (
    <div>
        <Hero/>
        <JourneySection/>
        <AboutUs/>
        <Services/>
        <Portfolio/>
        <MeetOurTeam/>
        <ClientReviews/>
        <BlogsSection/>
        <GetInTouchSection/>
        <Footer/>
    </div>
  )
}

export default MainPage