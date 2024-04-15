import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container"
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string,
}



const featuresData: FeaturesListInterface[] = [
    {
        imagePath: "/assets/svg/disket.svg",
        imageAlt: "illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources pour les devs",
    },

    {
        imagePath: "/assets/svg/joystick.svg",
        imageAlt: "illustration",
        title: "Entrainement",
        description: "Entraine-toi à devenir meilleur et trouve de l'inspiration",
    },

    {
        imagePath: "/assets/svg/loudspeacker.svg",
        imageAlt: "illustration",
        title: "Visibilité",
        description: "Expose tes projets et crée toi des opportunités",
    },

    {
        imagePath: "/assets/svg/compass.svg",
        imageAlt: "illustration",
        title: "Relations",
        description: "Connecte-toi avec des devs web et booste ta carrrière",
    },


]

export const FeaturedView = () => {



    return (
        <div className="relative overflow-hidden border border-gray-400">
            <Container className="py-20">
                <div >
                    <Typography variant="caption3" theme="gray" component="h5">
                        Accompagné par :
                    </Typography>
                </div>


                <div className="grid grid-cols-5  pt-10 space-x-15 " >

                <div className="mx-auto border border-gray-400 w-236 h-150 rounded-tl-3.72 flex justify-center items-center gap-10">
                    <div className="relative flex flex col items-center space-x-5  ">
                        <div className="w-[100px] h-[100px] ">
                            <Image fill
                                src="assets/svg/image 11.svg" alt="illustration gateau" className="pr-14" />
                        </div>
                        <Typography variant="caption1" theme="primary" className="pr-10">
                            InTouch
                        </Typography>
                    </div>
                    
                    </div>



                    <div className="mx-auto border border-gray-400 w-236 h-150 rounded-tl-3.72 flex justify-center items-center gap-10">
                    <div className="relative flex flex col items-center space-x-5  ">
                        <div className="w-[100px] h-[100px] ">
                            <Image fill
                                src="assets/svg/image 11.svg" alt="illustration gateau" className="pr-14" />
                        </div>
                        <Typography variant="caption1" theme="primary" className="pr-10">
                            InTouch
                        </Typography>
                    </div>
                    
                    </div>

                    <div className="mx-auto border border-gray-400 w-236 h-150 rounded-tl-3.72 flex justify-center items-center gap-10">
                    <div className="relative flex flex col items-center space-x-5  ">
                        <div className="w-[100px] h-[100px] ">
                            <Image fill
                                src="assets/svg/image 11.svg" alt="illustration gateau" className="pr-14" />
                        </div>
                        <Typography variant="caption1" theme="primary" className="pr-10">
                            InTouch
                        </Typography>
                    </div>
                    
                    </div>
 
                    <div className="mx-auto border border-gray-400 w-236 h-150 rounded-tl-3.72 flex justify-center items-center gap-10">
                    <div className="relative flex flex col items-center space-x-5  ">
                        <div className="w-[100px] h-[100px] ">
                            <Image fill
                                src="assets/svg/image 11.svg" alt="illustration gateau" className="pr-14" />
                        </div>
                        <Typography variant="caption1" theme="primary" className="pr-10">
                            InTouch
                        </Typography>
                    </div>
                    
                    </div>

                    <div className="mx-auto border border-gray-400 w-236 h-150 rounded-tl-3.72 flex justify-center items-center gap-10">
                    <div className="relative flex flex col items-center space-x-5  ">
                        <div className="w-[100px] h-[100px] ">
                            <Image fill
                                src="assets/svg/image 11.svg" alt="illustration gateau" className="pr-14" />
                        </div>
                        <Typography variant="caption1" theme="primary" className="pr-10">
                            InTouch
                        </Typography>
                    </div>
                    
                    </div>


                    </div>

            </Container>
        </div>
    )
}