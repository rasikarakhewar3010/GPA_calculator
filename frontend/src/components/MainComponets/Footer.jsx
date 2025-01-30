import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
        <div className="bg-[#0f171a] h-30 w-full text-white py-4 px-16 ">
            <div className='flex justify-center items-center gap-6 '>
                <GitHubIcon className='hover:bg-gray-500 '></GitHubIcon>
                <LinkedInIcon className='hover:bg-gray-500'></LinkedInIcon>
                <InstagramIcon className='hover:bg-gray-500'></InstagramIcon>
            </div>
        </div>
    )
}