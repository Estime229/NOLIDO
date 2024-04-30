import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiAppleLine, RiGooglePlayFill, RiMoneyCnyBoxFill, RiMoneyDollarBoxFill, RiMoneyDollarBoxLine, RiPlayCircleLine, RiSecurePaymentLine } from "react-icons/ri";

export const HighlightListView = () => {
    return (
        <div className="border-gray-400 relative bg-cover " style={{ 
            backgroundImage: "url('assets/svg/.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        
            
        }}>
        <Container className="relative pt-36 pb-52 overflow-hidden " >
            <div className="w-full max-w-2xl space-y-3  ">
                <Typography variant="h5" component="h1" className="mx-w-lg" theme="warning">
                    TELECHARGER NOLIDO
                </Typography>
                <Typography variant="h5" component="h3" theme="black" className="mx-w-xl pt-3">
                   Phase d&apos;enquete: vous
                   avez choisi Nolido, et vous avez raison
                </Typography>

                <Typography variant="caption2" component="h3" theme="gray" className="mx-w-xl pt-3">
                  Cette application vous offre une expérience nouvelle du transfert d&apos;argent.
                  Imaginez-vous effectuer votre transfert en toute tranquilité Nolido c&apos;est
                  nettement un gain en temps et en argent.
                </Typography>



                <div className=" flex items-center space-x-8 pt-8 ">
                
                   
                       <Button baseUrl="" variant="warning">
                    
                    <div className="relative flex flex col items-center justify-center gap-2">
                        <RiGooglePlayFill size={35} color="black"/>
                        <div className="flex flex-col mb-3">
                             <Typography variant="caption3" theme="black" component="span" className="mr-3">
                                DISPONIBLE SUR
                            </Typography>
                            <div className="text-gray font-extrabold text-[25px]">Google Play</div> 
                        </div>
                       
                    </div>
                    </Button> 

                          
                
                 

                    <Button baseUrl="" variant="warning">
                    
                    <div className="relative flex flex col items-center justify-center gap-2">
                        <RiAppleLine size={35} color="black"/>
                        <div className="flex flex-col mb-3">
                             <Typography variant="caption3" theme="black" component="span" className="mr-3">
                               Télécharger dans
                            </Typography>
                            <div className="text-gray font-extrabold text-[25px]">l&apos;App Store</div> 
                        </div>
                       
                    </div>
                    </Button> 

                </div>
        

            </div>
            <div className="space-x-30">
                <Image
                    src="/assets/svg/3.svg"
                    alt="Evolution dev frontend"
                    width={450}
                    height={300}
                    className="absolute top-20 right-5 z-0"
                />


                <Image
                    src="/assets/images/telech.png"
                    alt="Evolution dev frontend"
                    width={600}
                    height={600}
                    className="absolute top-0 right-1 z-30 "
                />


            </div>



        </Container>
        </div>
    )
}