import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"
// import { useAuth } from "@/context/AuthUserContext"
import { DiVim } from "react-icons/di"
import { AccountAvatarNavigationLink } from "./account-avatar-link"

interface Props {

}

export const Navigation = ({ }) => {
    // const { authUser } = useAuth();
    // console.log("authUser", authUser);
    // const authentificationSystem = (
    //     <div className="flex items-center gap-2">
    //         <Button size="small" baseUrl="/connexion">Connexion</Button>
    //         <Button size="small" variant="secondary" baseUrl="/connexion/inscription">Rejoindre</Button>

    //     </div>
    // );



    return (
        <div className="border-gray-400 relative bg-cover bg-blue-200" style={{ 
            backgroundImage: "url('assets/svg/.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
        }}>
        <div className=" border-gray-400">
            <Container className="flex items-center justify-between gap-7 py-1.5">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                    

                    </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography variant="h5"  theme="warning" className="flex items-center gap-7">
                    <Button variant="secondary">Télécharger Nolido</Button> 
                    </Typography>
                 

                 {/* {!authUser ? authentificationSystem: <AccountAvatarNavigationLink/>} */}




                </div>
            </Container>
        </div>
    </div>
    )
}
