import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

import { RiArrowRightLine, RiPlayCircleLine } from "react-icons/ri";



export const CurrentCourseCtaView = () => {
    return (
        <div className="bg-yellow-200">
            <Container className="py-6 space-y-4 mt-4 ">

                <div className="flex justify-center gap-24">

                    <div className="w-[600px] h-[500px] relative mt-3 flex justify-between ">
                        <div className=" w-[550px] h-[500px] top-30 left-398 bg-purple-200 rounded-full opacity-70 blur-[70px]  relative">
                        </div>
                        <Image width={710} height={610} src="assets/svg/coders.svg" alt="illustration gateau" className="  absolute Ovefflow-hidden" />


                    </div>


                    <div className="py-15 space-y-5">
                        <Typography variant="caption3" component="h2" theme="warning" >
                            NOLIDO C&apos;EST
                        </Typography>


                        <div className="relative">
                            <Typography variant="h3" component="h3" theme="black" >
                                Le transfert d&apos;argent le plus rapide en Afrique
                            </Typography>
                        </div>

                        <div className="relative">
                            <Typography variant="caption2" component="h2" theme="black" >
                                Quand le transfert d&apos;argent devient un simple reflexe.Encourageons le développement
                                et la prospérité des familles africaines
                            </Typography>
                        </div>

                        <div className="flex flex grid grid-rows-2 space-y-5">

                            <div className="flex flex col space-x-20  ">

                                <div className="flex flex-row gap-1 ">
                                    <div className="bg-gray-700 rounded-full w-[110px] h-[40px] text-center    ">
                                        {/* <div className="flex flex-col top-0 mt-0 ">
                                            <Typography variant="caption4" component="h2" theme="black" className="">
                                                .
                                            </Typography>
                                            <Typography variant="caption4" component="h2" theme="black" className="">
                                                .
                                            </Typography>
                                            <Typography variant="caption4" component="h2" theme="black" className="">
                                                .
                                            </Typography>
                                        </div> */}

                                    </div>

                                    <div className="flex flex-col ">
                                        <Typography variant="body-lg" component="span" theme="gray-600" className="py-3">
                                            Simple
                                        </Typography>

                                        <Typography variant="caption4" component="p" theme="gray-600">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, omnis! Expedita earum odit, optio,
                                        </Typography>

                                    </div>


                                </div>

                                <div className="flex flex-row gap-1 ">
                                    <div className="bg-gray-700 rounded-full w-[110px] h-[40px] text-center    ">
                                        {/* <div className="flex flex-col top-0 mt-0 ">
                                            <Typography variant="caption4" component="h2" theme="black" className="">
                                                .
                                            </Typography>
                                            <Typography variant="caption4" component="h2" theme="black" className="">
                                                .
                                            </Typography>
                                            <Typography variant="caption4" component="h2" theme="black" className="">
                                                .
                                            </Typography>
                                        </div> */}

                                    </div>

                                    <div className="flex flex-col ">
                                        <Typography variant="body-lg" component="span" theme="gray-600" className="py-3">
                                            Economique
                                        </Typography>

                                        <Typography variant="caption4" component="p" theme="gray-600">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, omnis! Expedita earum odit, optio,
                                        </Typography>

                                    </div>


                                </div>

                            </div>



                            <div className="flex flex col space-x-20  ">

                                <div className="flex flex-row gap-1 ">
                                    <div className="bg-gray-700 rounded-full w-[110px] h-[40px] text-center    ">
                                        {/* <div className="flex flex-col top-0 mt-0 ">
                <Typography variant="caption4" component="h2" theme="black" className="">
                    .
                </Typography>
                <Typography variant="caption4" component="h2" theme="black" className="">
                    .
                </Typography>
                <Typography variant="caption4" component="h2" theme="black" className="">
                    .
                </Typography>
            </div> */}

                                    </div>

                                    <div className="flex flex-col ">
                                        <Typography variant="body-lg" component="span" theme="gray-600" className="py-3">
                                            Rapide
                                        </Typography>

                                        <Typography variant="caption4" component="p" theme="gray-600">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, omnis! Expedita earum odit, optio,
                                        </Typography>

                                    </div>


                                </div>

                                <div className="flex flex-row gap-1 ">
                                    <div className="bg-gray-700 rounded-full w-[110px] h-[40px] text-center    ">
                                        {/* <div className="flex flex-col top-0 mt-0 ">
                <Typography variant="caption4" component="h2" theme="black" className="">
                    .
                </Typography>
                <Typography variant="caption4" component="h2" theme="black" className="">
                    .
                </Typography>
                <Typography variant="caption4" component="h2" theme="black" className="">
                    .
                </Typography>
            </div> */}

                                    </div>

                                    <div className="flex flex-col ">
                                        <Typography variant="body-lg" component="span" theme="gray-600" className="py-3">
                                            Fiable
                                        </Typography>

                                        <Typography variant="caption4" component="p" theme="gray-600">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, omnis! Expedita earum odit, optio,
                                        </Typography>

                                    </div>


                                </div>

                            </div>




                        </div>





                    </div>
                </div>

            </Container>

        </div>
    )
};  