import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/design-system/typography/typography';
import Image from 'next/image';
import { footerApplicationLinks, footerLinks } from './app-links';
import { footerUserLinks } from './app-links';
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from './active-link';
import { AppLinks, FooterLinks } from '@/types/app-links';
import { LinkTypes } from '@/lib/link-type';
import { SocialNetworksButtons } from './social-networks-buttons';
import { RiInstagramFill, RiTiktokFill, RiTwitterFill } from 'react-icons/ri';


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const FooterNavigationList = footerLinks.map((columLinks) =>
    (
        <FooterLink key={uuidv4()} data={columLinks}   />

    ));
    return (

        <div className="bg-white ">
            <Container className='flex justify-between pt-16'>
                <div className='flex flex-col items-center  py-2 space-y-3'>
                <Image
                            src="./assets/svg/logo.svg"
                            width={190}
                            height={200}
                            alt='RemoteMonkey'
                            className='mr-48 '
                        />
                    <Typography variant='body-sm' theme='gray' component='p' className='ml-5' >
                       Lorem ipsum dolor sit, amet consectetur adipisicing eli 
                   
                    </Typography>
                    
                    <div className='flex space-x-5 mr-60 '>
                    <RiTwitterFill size={30} color='Orange' className=''/>
                    <RiInstagramFill size={30}/>
                    <RiTiktokFill size={30}/>
                    </div>
                                                         
                </div>
                <div className='flex  gap-7'>
                     {FooterNavigationList}     
                </div>
            </Container>

            <Container className='pt-9 pb-11 space-y-11 '>
                <hr className='text-gray-300' />
                <div className='text-center'>
                    <Typography variant='caption4' theme='gray' className='items-center'>
                        {` @ ${currentYear}  .  GNISSEART.`} {""}
                      
                        {`Tous droits réservés`}
                    </Typography>
           
                 
                </div>
            </Container>

        </div>
    ); 
};

interface footerLinkProps{

data: FooterLinks;

}

const FooterLink = ({data}: footerLinkProps) => {

    const linksList = data.links. map((link) =>
    (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink  href={link.baseUrl}>{link.label}</ActiveLink>

            )}

            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">{link.label}</a>
            )

            }
        </div>
    ));


    return (
        <div className='min-w-[190px]'>
            <Typography
                theme='white'
                variant='caption2'
                weight='meduim'
                className='pb-5'>
                {data.label}
            </Typography  >

            <Typography
                theme='gray'
                variant='caption3'
                className='space-y-4'>
                {linksList}
            </Typography>
        </div>
    )
}    