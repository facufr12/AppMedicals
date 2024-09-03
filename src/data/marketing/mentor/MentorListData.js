import { v4 as uuid } from 'uuid';

// import media files
import MentorImg1 from 'assets/images/mentor/mentor-img-1.jpg';
import MentorImg2 from 'assets/images/mentor/mentor-img-2.jpg';
import MentorImg3 from 'assets/images/mentor/mentor-img-3.jpg';
import MentorImg4 from 'assets/images/mentor/mentor-img-4.jpg';
import MentorImg5 from 'assets/images/mentor/mentor-img-5.jpg';
import MentorImg6 from 'assets/images/mentor/mentor-img-6.jpg';
import MentorImg7 from 'assets/images/mentor/mentor-img-7.jpg';
import MentorImg8 from 'assets/images/mentor/mentor-img-8.jpg';

export const MentorListData = [
	{
		id: uuid(),
		image: MentorImg7,
		mentorName: 'Andrew Lupien',
		mentorRole: 'Quality Assurance Engineer',
		company: 'Microsoft',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 35, // price per month
		allowFreeTrial: true,
		mentees: '40+',
		skills: [
			'Problem Solving',
			'Automation',
			'Analytical',
			'Time Management',
			'Accuracy',
			'Critical Thinking',
			'Flexibility'
		]
	},
	{
		id: uuid(),
		image: MentorImg3,
		mentorName: 'Bernice Perry',
		mentorRole: 'Senior Business Analyst',
		company: 'Amazon',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 0,
		ratings: 0,
		verified: true,
		new: true,
		price: 40, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'BI tools',
			'Data Analysis',
			'ERP',
			'CRM Systems',
			'SDLC',
			'SQL',
			'MS Excel'
		]
	},
	{
		id: uuid(),
		image: MentorImg4,
		mentorName: 'Patrice Long',
		mentorRole: 'Senior Data Engineer',
		company: 'InstaCart',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 10,
		ratings: 4.5,
		verified: true,
		new: false,
		price: 60, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Problem Solving',
			'Automation',
			'Analytical',
			'Time Management',
			'Accuracy',
			'Critical Thinking',
			'Flexibility'
		]
	},
	{
		id: uuid(),
		image: MentorImg5,
		mentorName: 'Akshay Sharma',
		mentorRole: 'Frontend Engineer',
		company: 'Zoom',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 112,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 25, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Frontend',
			'HTML',
			'CSS',
			'React',
			'Javascript',
			'Vuejs',
			'Next.js'
		]
	},

	{
		id: uuid(),
		image: MentorImg6,
		mentorName: 'Jessica Lupien',
		mentorRole: 'UI/UX Designer',
		company: 'InstaCart',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 55, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Figma',
			'Product Designing',
			'Prototyping',
			'Wireframing',
			'Microinteractions',
			'VR Prototyping'
		]
	},
	{
		id: uuid(),
		image: MentorImg1,
		mentorName: 'Akshay Sharma',
		mentorRole: 'Frontend Engineer',
		company: 'Target',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 44, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Frontend',
			'HTML',
			'CSS',
			'React',
			'Javascript',
			'Vuejs',
			'Next.js'
		]
	},
	{
		id: uuid(),
		image: MentorImg2,
		mentorName: 'Cathy Diehl',
		mentorRole: 'Quality Assurance Engineer',
		company: 'Microsoft',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 54, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Problem Solving',
			'Automation',
			'Analytical',
			'Time Management',
			'Accuracy',
			'Critical Thinking',
			'Flexibility'
		]
	},
	{
		id: uuid(),
		image: MentorImg8,
		mentorName: 'Patrice Long',
		mentorRole: 'Software Engineer',
		company: 'Figma',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 0,
		ratings: 0,
		verified: true,
		new: true,
		price: 30, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Frontend',
			'HTML',
			'CSS',
			'React',
			'Javascript',
			'Vuejs',
			'Next.js'
		]
	},

	{
		id: uuid(),
		image: MentorImg2,
		mentorName: 'Jessica Lupien',
		mentorRole: 'Quality Assurance Engineer',
		company: 'Amazon',
		experience: 6,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 50, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Problem Solving',
			'Automation',
			'Analytical',
			'Time Management',
			'Accuracy',
			'Critical Thinking',
			'Flexibility'
		]
	},
	{
		id: uuid(),
		image: MentorImg3,
		mentorName: 'Bernice Perry',
		mentorRole: 'Senior Business Analyst',
		company: 'InstaCart',
		experience: 4.5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 50, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'BI tools',
			'Data Analysis',
			'ERP',
			'CRM Systems',
			'SDLC',
			'SQL',
			'MS Excel'
		]
	},
	{
		id: uuid(),
		image: MentorImg6,
		mentorName: 'Jessica Lupien',
		mentorRole: 'UI/UX Designer',
		company: 'Zoom',
		experience: 3,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 30, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Figma',
			'Product Designing',
			'Prototyping',
			'Wireframing',
			'Microinteractions',
			'VR Prototyping'
		]
	},
	{
		id: uuid(),
		image: MentorImg4,
		mentorName: 'Patrice Long',
		mentorRole: 'Senior Data Engineer',
		company: 'Microsoft',
		experience: 6,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 66, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'BI tools',
			'Data Analysis',
			'ERP',
			'CRM Systems',
			'SDLC',
			'SQL',
			'MS Excel'
		]
	},
	{
		id: uuid(),
		image: MentorImg5,
		mentorName: 'Akshay Sharma',
		mentorRole: 'Frontend Engineer',
		company: 'InstaCart',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 45, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Frontend',
			'HTML',
			'CSS',
			'React',
			'Javascript',
			'Vuejs',
			'Next.js'
		]
	},
	{
		id: uuid(),
		image: MentorImg7,
		mentorName: 'Cathy Diehl',
		mentorRole: 'Quality Assurance Engineer',
		company: 'Amazon',
		experience: 8,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 25, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Problem Solving',
			'Automation',
			'Analytical',
			'Time Management',
			'Accuracy',
			'Critical Thinking',
			'Flexibility'
		]
	},
	{
		id: uuid(),
		image: MentorImg8,
		mentorName: 'Patrice Long',
		mentorRole: 'Software Engineer',
		company: 'Microsoft',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 55, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Frontend',
			'HTML',
			'CSS',
			'React',
			'Javascript',
			'Vuejs',
			'Next.js'
		]
	},
	{
		id: uuid(),
		image: MentorImg1,
		mentorName: 'Akshay Sharma',
		mentorRole: 'Frontend Engineer',
		company: 'Figma',
		experience: 7,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 25, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Frontend',
			'HTML',
			'CSS',
			'React',
			'Javascript',
			'Vuejs',
			'Next.js'
		]
	},
	{
		id: uuid(),
		image: MentorImg2,
		mentorName: 'Jessica Lupien',
		mentorRole: 'Quality Assurance Engineer',
		company: 'InstaCart',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 29, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'Problem Solving',
			'Automation',
			'Analytical',
			'Time Management',
			'Accuracy',
			'Critical Thinking',
			'Flexibility'
		]
	},
	{
		id: uuid(),
		image: MentorImg3,
		mentorName: 'Bernice Perry',
		mentorRole: 'Senior Business Analyst',
		company: 'Amazon',
		experience: 5,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis`,
		reviews: 12,
		ratings: 5.0,
		verified: true,
		new: false,
		price: 50, // price per month
		allowFreeTrial: false,
		mentees: '40+',
		skills: [
			'BI tools',
			'Data Analysis',
			'ERP',
			'CRM Systems',
			'SDLC',
			'SQL',
			'MS Excel'
		]
	}
];

export default MentorListData;
