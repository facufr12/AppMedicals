// import node module libraries
import { Fragment } from 'react'

// import sub components
import FilterMentorHero from './FilterMentorHero'
import ListOfMentors from './ListOfMentors'

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark';

const MentorList = () => {
    return (
        <Fragment>
            {/* Top Navbar */}
            <NavbarMentorPages />

            {/* Mentor list hero section */}
            <FilterMentorHero />

            {/* List all mentors with summary */}
            <ListOfMentors />

            {/*   Footer with center alignment */}
            <FooterDark />
        </Fragment>
    )
};

export default MentorList;
