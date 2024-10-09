// import context file
import { MailContext } from 'context/Context';


const MailProvider = ({ children }) => {
	const [mailContextValue] = [
		{
			mails: MailsData,
			filters: ['None', 'All', 'Read', 'Unread', 'Starred', 'Unstarred'],
			activeFilter: 'None'
		}
	];
	return (
		<MailContext.Provider value={{ mailContextValue }}>
			{children}
		</MailContext.Provider>
	);
};

export default MailProvider;
