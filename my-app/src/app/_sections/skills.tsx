"use client";

import Macbook from "@/components/macbook"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {SplitText} from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Skills() {
    useGSAP(() => {
        let split = SplitText.create("#question", {type:"words, chars"});
        gsap.fromTo(
            split.chars,
            {
                ease: "back",
                duration: .3,
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                ease: "back",
                duration: .3,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: "#question",
                    start: "top 90%",
                    toggleActions: "play reverse play reverse"
                },
            }
        );
        gsap.from("#aboutflag", {
            x: -100,
            opacity: 0,
            ease: "back",
            scrollTrigger: {
                trigger: "#aboutflag",
                start: "top 90%",
                toggleActions: "play reverse play reverse"
            },
        })
        let split2 = SplitText.create("#aboutdescription", {type:"words"});
        gsap.fromTo(
            split2.words,
            {
                ease: "back",
                duration: .3,
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                ease: "back",
                duration: .3,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: "#aboutdescription",
                    start: "top 90%",
                    toggleActions: "play reverse play reverse"
                },
            }
        );
        gsap.from("#mac", {
            y: 100,
            opacity: 0,
            ease: "back",
            scrollTrigger: {
                trigger: "#mac",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            },
        })
  });

    return <>
        <section className="relative">
        <div className="pt-30 px-6 max-w-[1500px] mx-auto">
            <h1 className="font-black text-7xl text-center mb-36 bg-[url('/mac.jpg')] brightness-55 bg-clip-text text-transparent font-[ClashGrotesk]">Whether you have a design or just an idea, I’ll turn it into a live website.</h1>
            <div className="h-[1px] w-full bg-gray-600/40 rounded-full"></div>
        </div>
        </section>
        <section id="skills">
            <div className="relative">
                <div className="py-40 px-6 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className="lg:pr-20 py-5 flex flex-col justify-center">
                        <div id="aboutflag" className="bg-blue-600/13 text-blue-600 rounded-full px-3 py-1 w-fit mb-7">About Me</div>
                        <h1 className="text-6xl/19 font-black mb-8 font-[ClashGrotesk]" id="question">How I Approach My Work</h1>
                        <p className="text-xl" id="aboutdescription">I craft every project with precision and care—writing scalable, maintainable code that adapts to client needs. I pay close attention to every detail, ensuring both performance and user experience are prioritized. With a strong mathematical background and a sharp problem-solving mindset, I’m quick to learn new technologies or invent efficient systems from scratch. My work blends technical depth with creative flexibility.</p>
                    </div>
                    <div className="min-h-120 bg-gray-100">
                        <Macbook/>
                    </div>
                </div>
            </div>
        </section>
    </>
}