import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section>
            <div className="mx-auto w-full max-w-7xl min-h-screen px-7 md:px-10 lg:px-20 py-10">
                <div className="flex flex-col-reverse md:flex-row gap-12 sm:gap-20">
                    <div className="w-full md:w-1/2 my-auto">
                        <h1 className="mb-10 text-4xl font-bold md:text-6xl">Hoang Nguyen</h1>
                        <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                            <p className="text-xl text-gray-600 dark:text-gray-400">Hi! I am Minh Hoang Nguyen, a graduate from the University of Alberta with a major in Computer Science and a minor in Mathematics. I am a highly motivated and detail-oriented software developer with a strong foundation in programming principles and problem-solving.</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <Button className="px-8 py-6">
                                <Link href="/" className="text-center font-semibold">My Blog</Link>
                            </Button>
                            
                            <Button className="px-8 py-6">
                                <Link href="https://hoangnguyenminh.info/" target="_blank" className="text-center font-semibold">My Portfolio</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="h-full max-h-[500px] w-[85%] mx-auto overflow-hidden rounded-2xl">
                            <Image
                                src="/images/headshot.png"
                                alt=""
                                className="relative h-full w-full max-w-[800px] object-cover object-top"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}