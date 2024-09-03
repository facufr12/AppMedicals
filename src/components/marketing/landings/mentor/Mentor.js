// import node module libraries
import { Fragment } from 'react';

// import sub components
import EasySteps from './EasySteps';
import ExploreMentors from './ExploreMentors';
import HeroTypedMentors from './HeroTypedMentors';
import FREETrialSession from './FREETrialSession';
import TestimonialsByMentees from './TestimonialsByMentees';

// import custom components
import LogosTopBrands from 'components/marketing/common/clientlogos/LogosTopBrands';
import CTAMentor from 'components/marketing/common/call-to-action/CTAMentor';

// import required data files
import BrandLogoList from 'data/marketing/clientlogos/BrandLogoList';

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark';


const Mentor = () => {
    return (
        <Fragment>

            {/* Top Navbar */}
            <NavbarMentorPages />

            {/*   section  */}
            <main>

                {/* Hero section */}
                <HeroTypedMentors />

                {/* Logo section */}
                <LogosTopBrands
                    title="Learn from founders/operators of top brands."
                    logos={BrandLogoList} />

                {/* Explore Mentors by Category */}
                <ExploreMentors />

                {/* FREE trial session */}
                <FREETrialSession />

                {/* Easy Steps */}
                <EasySteps />

                {/* Testimonials By Mentees */}
                <TestimonialsByMentees />

                {/* Call to action  */}
                <CTAMentor />

            </main>

            {/*   Footer with center alignment */}
            <FooterDark />

        </Fragment>
    )
}


export default Mentor