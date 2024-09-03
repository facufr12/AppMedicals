import { v4 as uuid } from 'uuid';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar9 from 'assets/images/avatar/avatar-9.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';

export const TestimonialsData = [
    {
        id: uuid(),
        menteeImage: Avatar1,
        menteeName: 'John Deo',
        text: `The generated lorem Ipsum is therefore always free from repetition,
            <span class="text-primary">injected humour, or words etc generate</span>
            lorem Ipsum which looks racteristic reasonable...`,
        mentorImage: Avatar10,
        mentorName: 'Akshay sharma',
        role: 'Software Engineer at Palantir'
    },
    {
        id: uuid(),
        menteeImage: Avatar7,
        menteeName: 'Gladys Colbert',
        text: `Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore. Officia irure nisi dolor dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.`,
        mentorImage: Avatar8,
        mentorName: 'Jessica Lupien',
        role: 'Senior Data Engineer at Zoom'
    },
    {
        id: uuid(),
        menteeImage: Avatar2,
        menteeName: 'Bev Robertson',
        text: `Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore.<span class="text-primary">Officia irure nisi dolor</span>dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.`,
        mentorImage: Avatar4,
        mentorName: 'Andrew Lupien',
        role: 'Quality Assurance Engineer at Amazon'
    },
    {
        id: uuid(),
        menteeImage: Avatar9,
        menteeName: 'Doris Esparza',
        text: `Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.`,
        mentorImage: Avatar10,
        mentorName: 'James Anderson',
        role: 'UI/UX Designer at Figma'
    },
    {
        id: uuid(),
        menteeImage: Avatar5,
        menteeName: 'Marlene Turner',
        text: `Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui.`,
        mentorImage: Avatar6,
        mentorName: 'Bernice Perry',
        role: 'Senior business analyst at InstaCart'
    },


    {
        id: uuid(),
        menteeImage: Avatar11,
        menteeName: 'Daniel Groleau',
        text: `The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable...`,
        mentorImage: Avatar12,
        mentorName: 'Patrice Long',
        role: 'Software Engineer at Microsoft'
    },
];

export default TestimonialsData;
