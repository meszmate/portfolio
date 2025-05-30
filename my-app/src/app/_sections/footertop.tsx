"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, SplitText);
export default function FooterTop(){
    useGSAP(() => {
        let split = SplitText.create("#footertitle", {type:"words, chars"});
        gsap.fromTo(
            split.chars,
            {
                ease: "back",
                duration: .3,
                opacity: 0,
                yPercent: "random([-100, 100])",
                yoyo: true,
            },
            {
                yPercent: 0,
                opacity: 1,
                ease: "back",
                duration: .3,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: "#footertitle",
                    start: "top 90%",
                    toggleActions: "play reverse play reverse"
                },
            }
            );
    })

    return <section className="bg-gray-100">
      <div className="pt-18 pb-10 px-6 max-w-[1500px] mx-auto">
        <h1 id="footertitle" className="font-[ClashGrotesk] text-7xl text-gray-800 text-center mb-10">Get in Touch on Upwork</h1>
        <div>
          <div className="mx-auto px-4.5 py-1.5 bg-gray-200 border border-gray-300 rounded-full w-fit text-gray-600">Feel free to reach out on <span className="text-blue-600">Upwork</span></div>
        </div>
      </div>
    </section>
}