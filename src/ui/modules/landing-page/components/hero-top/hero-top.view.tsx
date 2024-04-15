import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiMoneyCnyBoxFill, RiMoneyDollarBoxFill, RiMoneyDollarBoxLine, RiPlayCircleLine, RiSecurePaymentLine } from "react-icons/ri";

export const HeroTopView = () => {
    return (
        <div className="border-gray-400 relative bg-cover bg-blue-200" style={{ 
            backgroundImage: "url('assets/svg/.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        
            
        }}>
        <Container className="relative pt-40 pb-52 overflow-hidden " >
            <div className="w-full max-w-2xl space-y-5  ">
                <Typography variant="h3" component="h1" className="mx-w-lg">
                    Envoyez de l'argent en Afrique en temps réel avec NOLIDO
                </Typography>
                <Typography variant="lead" component="div" theme="gray" className="mx-w-xl pt-3">
                    Décrouvrez Nolido, la solution concue pour vous offrir des
                    transferts plus simple et fiable en Afrique.Gagnez en temps et en argent
                </Typography>
                <div className=" flex items-center space-x-5 pt-3  ">
                    <Button baseUrl="" variant="warning">Télécharger Nolido</Button>

                    <div className="relative flex flex col items-center justify-center gap-2 ">
                        <RiPlayCircleLine size={52} color="green" />
                        <Typography
                            variant="caption2"
                            weight="meduim" className="space-x-1">
                            Découvrir en vidéo
                        </Typography>
                    </div>
                </div>
                
                <div className=" flex items-center space-x-5 pt-5 ">

                    <div className="relative flex flex col items-center justify-center gap-2 ">
                        <RiSecurePaymentLine size={52}  color="green"/>
                        <div className="flex flex-col">
                        <Typography variant="caption4" theme="gray" component="span">
                                Sécurisée
                            </Typography>
                            <div className="text-gray font-extrabold text-[20px]">Transactions sécurisées</div> 
                        </div>
                    </div>
                    <Typography variant="h3"  component="h1" className="gap-5">
                                /
                            </Typography>

                            <div className="relative flex flex col items-center justify-center gap-2 ">
                        <RiMoneyCnyBoxFill size={52}  color="green"/>
                        <div className="flex flex-col">
                        <Typography variant="caption4" theme="gray" component="span">
                                Faible Taux
                            </Typography>
                            <div className="text-gray font-extrabold text-[20px]">Des taux revu à la base</div> 
                        </div>
                    </div>


                </div>






            </div>
            <div className="space-x-30">
                <Image
                    src="/assets/svg/3.svg"
                    alt="Evolution dev frontend"
                    width={550}
                    height={400}
                    className="absolute top-20 right-5 z-0"
                />


                <Image
                    src="/assets/svg/2.svg"
                    alt="Evolution dev frontend"
                    width={600}
                    height={600}
                    className="absolute top-0 right-1 z-30 "
                />


                <Image
                    src="/assets/svg/Frame 10.svg"
                    alt="Evolution dev frontend"
                    width={500}
                    height={300}
                    className="absolute top-30 right-0 z-30"
                />

                <Image
                    src="/assets/svg/money.svg"
                    alt="Evolution dev frontend"
                    width={50}
                    height={30}
                    className="absolute top-25 right-20 z-30"
                />

            </div>



        </Container>
        </div>
    )
}