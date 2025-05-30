"use client";

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function WebBuilder() {
    const section = React.useRef<HTMLDivElement | null>(null)
    const parent = React.useRef<HTMLDivElement | null>(null)
    const [scale, setScale] = React.useState<number>(parent.current ? parent.current.offsetWidth/1450:1)

    useEffect(() => {
        const handleResize = () => {
            if(parent.current) setScale(parent.current.offsetWidth/1450);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useGSAP(() => {
        if (!section.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: "top 10%",
                end: "+=2000",
                scrub: true,
                pin: true,
            },
        })
        tl.add([
            gsap.from("#l0", {
                y: 100,
                x: 100,
                opacity: 0
            }),
            gsap.from("#l1", {
                y: 100,
                x: 100,
                opacity: 0
            }),
            gsap.from("#title", {
                y: 100,
                x: -100,
                opacity: 0
            })
        ])
        tl.add([
            gsap.from("#logo", {
                y: 100,
                x: -100,
                opacity: 0
            }),
            gsap.from("#b1", {
                y: 100,
                x: 100,
                opacity: 0
            }),
            gsap.from("#b2", {
                y: 100,
                x: 100,
                opacity: 0
            })
        ])
        tl.add([
            gsap.from("#hero-left", {
                y: 100,
                opacity: 0
            })
        ])
        tl.add([
            gsap.from("#hero-right", {
                y: 100,
                opacity: 0
            })
        ])
        tl.add([
            gsap.from("#hero2", {
                y: 100,
                opacity: 0
            })
        ])
        tl.add([
            gsap.from("#w-0", {
                y: 100,
                x: -50,
                opacity: 0
            }),
            gsap.from("#w-3", {
                y: 100,
                x: 50,
                opacity: 0
            })
        ])
        tl.add([
            gsap.from("#w-1", {
                y: 100,
                x: -50,
                opacity: 0
            }),
            gsap.from("#w-2", {
                y: 100,
                x: 50,
                opacity: 0
            })
        ])
    })

    return <>
        <section className="relative min-h-screen bg-blue-100 pb-20" id="builder">
            <div className="pt-15 px-6 max-w-[1500px] mx-auto" ref={section}>
                <div className="w-full border-3 border-gray-600 rounded-xl" ref={parent} style={{height: `${scale*800}px`, padding: `${scale*5}px`}}>
                    <div className=" border-3 border-gray-50 rounded-lg relative w-full h-full overflow-hidden cursor-default">
                        <div id="header" className="absolute w-full left-0 top-0 bg-gray-100/75 backdrop-blur-md ">
                            <div className="max-w-[70%] mx-auto flex justify-between items-center" style={{padding: `${scale*8}px`}}>
                                <div className="flex items-center gap-5" style={{gap: `${scale*15}px`}}>
                                    <svg id="logo" className="rounded-lg" viewBox="0 0 500 500" style={{borderRadius: `${scale*10}px`}} width={scale*30} version="1.1"><g id="root" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect id="background" fill="#FFF" x="0" y="0" width="500" height="500"></rect><g id="shape" transform="translate(120.000000, 120.000000)"><rect id="shape.accent" fill="#c1eaf2" opacity=".5" transform="translate(173.610285, 103.939534) rotate(45.000000) translate(-173.610285, -103.939534)" x="71.61" y="83.964" width="204" height="39.951"></rect><rect id="shape.secondary" fill="#5cc2f2" opacity=".5" transform="translate(133.183959, 144.365861) rotate(45.000000) translate(-133.183959, -144.365861)" x="31.184" y="124.39" width="204" height="39.951"></rect><rect id="shape.primary" fill="#191ba9" opacity=".5" transform="translate(92.270568, 185.279251) rotate(45.000000) translate(-92.270568, -185.279251)" x="-9.729" y="165.304" width="204" height="39.951"></rect><rect id="shape.accent" fill="#c1eaf2" transform="translate(168.082375, 86.840028) rotate(45.000000) translate(-168.082375, -86.840028)" x="66.082" y="66.926" width="204" height="39.828"></rect><rect id="shape.secondary" fill="#5cc2f2" transform="translate(127.850437, 127.071965) rotate(45.000000) translate(-127.850437, -127.071965)" x="25.85" y="107.158" width="204" height="39.828"></rect><rect id="shape.primary" fill="#191ba9" transform="translate(86.947967, 167.974435) rotate(45.000000) translate(-86.947967, -167.974435)" x="-15.052" y="148.061" width="204" height="39.828"></rect></g><g id="Group" transform="translate(40.000000, 364.000000)"><rect id="Rectangle-10" x="0" y="0" width="420" height="58"></rect></g></g></svg>
                                    <h1 id="title" className="font-black font-[Inter] tracking-wide" style={{fontSize: `${scale*16}px`}}>Website Design</h1>
                                </div>
                                <div className="flex items-center gap-7" style={{gap: `${scale*20}px`}}>
                                    <div className="flex gap-5" style={{gap: `${scale*13}px`}}>
                                        {["About Us", "Contact"].map((v, i) => {
                                            return <div id={`l${i}`} className="text-gray-700" style={{fontSize: `${scale*16}px`}} key={v}>{v}</div>
                                        })}
                                    </div>
                                    <div className="flex gap-3" style={{gap: `${scale*10}px`}}>
                                        <div id="b1" className="text-blue-700 bg-blue-500/20" style={{padding: `${scale*4}px ${scale*15}px`, fontSize: `${scale*16}px`, borderRadius: `${scale*4}px`}}>Sign Up</div>
                                        <div id="b2" className="bg-blue-500 text-white" style={{padding: `${scale*4}px ${scale*15}px`, fontSize: `${scale*16}px`, borderRadius: `${scale*4}px`}}>Login</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-1 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                        <div className="max-w-[70%] mx-auto" style={{padding: `${scale*150}px ${scale*8}px`}}>
                            <div id="hero-left" className="h-full w-full left-0 my-auto flex flex-col justify-center gap-3">
                                <div className="flex flex-col items-center" style={{gap: `${scale*15}px`}}>
                                    <div className="bg-blue-500/20 text-blue-800 rounded-full w-fit" style={{fontSize: `${scale*14}px`, padding: `${scale*5}px ${scale*15}px`}}>20% OFF</div>
                                    <h1 className="font-black max-w-3xl text-center" style={{fontSize: `${scale*40}px`}}>Interactive & Animated Web Design</h1>
                                    <p className="text-center max-w-6xl" style={{fontSize: `${scale*16}px`}}>I craft high-end, interactive websites that focus on user experience, motion, and visual storytelling. Using tools like GSAP, Three.js, and modern frontend frameworks, I build immersive digital experiences with smooth scroll animations, 3D elements, and responsive design. If you're looking for a developer who brings your interface to life — let's work together.</p>
                                    <div className="flex" style={{gap: `${scale*10}px`}}>
                                        <div className="rounded-xl text-white bg-blue-500 mt-3" style={{padding: `${scale*5}px ${scale*15}px`, fontSize: `${scale*16}px`}}>Buy Now</div>
                                        <div className="rounded-xl text-blue-700 bg-blue-200 mt-3" style={{padding: `${scale*5}px ${scale*15}px`, fontSize: `${scale*16}px`}}>Ask question</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hero2" className="absolute w-full -z-1 bg-gray-100 pb-100">
                            
                        </div>
                        <div className="max-w-[70%] z-1 mx-auto grid grid-cols-4" style={{gap: `${scale*8}px`, paddingTop: `${scale*40}px`}}>
                                {
                                    ["Reliable Delivery", "Clean Code", "Scalable Structure", "Creative Input"].map((w, i) => {
                                        return <div key={i} id={`w-${i}`} className={`bg-slate-200 text-slate-700 text-center flex items-center justify-center`} style={{borderRadius: `${scale*16}px`, padding: `${scale*40}px 0`, fontSize: `${scale*16}px`}}>{w}</div>
                                    })
                                }
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}