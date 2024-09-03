import { v4 as uuid } from 'uuid';

// import media files
import SlackLogo from 'assets/images/mentor/brand-slack.svg';
import LinkedinLogo from 'assets/images/mentor/brand-linkedin.svg';
import ZoomLogo from 'assets/images/mentor/brand-zoom.svg';
import NvidiaLogo from 'assets/images/mentor/brand-nvidia.svg';
import MicrosoftLogo from 'assets/images/mentor/brand-microsoft.svg';
import GoogleLogo from 'assets/images/mentor/brand-google.svg';
import NetflixLogo from 'assets/images/mentor/brand-netflix.svg';

const BrandLogoList = [
	{
		id: uuid(),
		logoimage: SlackLogo
	},
	{
		id: uuid(),
		logoimage: LinkedinLogo
	},
	{
		id: uuid(),
		logoimage: ZoomLogo
	},
	{
		id: uuid(),
		logoimage: NvidiaLogo
	},
	{
		id: uuid(),
		logoimage: MicrosoftLogo
	},
	{
		id: uuid(),
		logoimage: GoogleLogo
	},
	{
		id: uuid(),
		logoimage: NetflixLogo
	}
];

export default BrandLogoList;
