import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CodersMonkeysSlackView = () => {
    return (
        <Container className=" py-10   space-y-3">
            <div className="text-center mt-10" >
                <Typography variant="h2" theme="black" component="h2">
                    Fonctionnalités
                </Typography>
            </div>

            <div className="grid-rows-4 space-y-15 py-10 ">
                <div className="flex flex col py-10 space-x-10 ">


                    <div className="bg-gray-400  ">

                        <Typography variant="h5" theme="black" className="mt-10 ml-10 mr-5">
                            Solution instantannée1
                        </Typography>

                        <Typography variant="caption1" theme="primary" className="mt-2 ml-10 mr-5 mb-3"  >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            Fuga necessitatibus v!Lorem, ipsum dolor sit amet co

                        </Typography>

                    </div>

                    <div className="bg-gray-400  ">

                        <Typography variant="h5" theme="black" className="mt-10 ml-10 mr-5">
                            Solution instantannée2
                        </Typography>

                        <Typography variant="caption1" theme="primary" className="mt-2 ml-10 mr-5 mb-10 "  >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            Fuga necessitatibus v!Lorem, ipsum dolor sit amet co

                        </Typography>

                    </div>
                </div>


                <div className="flex flex col py-10 space-x-10 ">


                    <div className="bg-gray-400  ">

                        <Typography variant="h5" theme="black" className="mt-10 ml-10 mr-5">
                            Solution instantannée1
                        </Typography>

                        <Typography variant="caption1" theme="primary" className="mt-2 ml-10 mr-5 mb-3"  >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            Fuga necessitatibus v!Lorem, ipsum dolor sit amet co

                        </Typography>

                    </div>

                    <div className="bg-gray-400  ">

                        <Typography variant="h5" theme="black" className="mt-10 ml-10 mr-5">
                            Solution instantannée2
                        </Typography>

                        <Typography variant="caption1" theme="primary" className="mt-2 ml-10 mr-5 mb-10 "  >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            Fuga necessitatibus v!Lorem, ipsum dolor sit amet co

                        </Typography>

                    </div>
                </div>


            </div>


        </Container>
    )
}
