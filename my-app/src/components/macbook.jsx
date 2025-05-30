"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Model = () => {
  const { nodes, materials } = useGLTF("/macbook.glb");
  const texture = new THREE.TextureLoader().load("/mac.jpg");
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const groupRef = React.useRef();

  useGSAP(() => {
      if (!groupRef.current) return;
      
      const tl = gsap.timeline({
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          end: "bottom top",
          scrub: true,
        }
      })
      tl.to(groupRef.current.rotation, { y: 7, z: .5 });
  })

  return (
    <group dispose={null}>
      <group scale={0.1} ref={groupRef}>
        <mesh geometry={nodes.xVreGKoBGSZYMij.geometry} material={materials.dKLyhhkbEyMrqky} />
        <mesh geometry={nodes.CTBERffHyoCSDBm_0.geometry} material={materials.YjmXmicdBWsFQyD} />
        <mesh geometry={nodes.hczGzWOWpedUDYd_0.geometry} material={materials.pEUnNAGXCoAFoUk} />
        <mesh geometry={nodes.biHEvGDNnTqamRb.geometry} material={materials.dFfswgailNMtaYj} />
        <mesh geometry={nodes.TyOrApjEOLhYCaF.geometry} material={materials.AZirwHJdxxcChtp} />
        <mesh geometry={nodes.vrIckaCELZpnnNK.geometry} material={materials.dkOmcmuFedorUKC} />
        <mesh geometry={nodes.SadnAkehSlxIwKv.geometry} material={material}/>
        <mesh geometry={nodes.OrhpMXCxeprcNok.geometry} material={materials.OfvrpEsWzbOpbcs} />
        <mesh geometry={nodes.aLWGnOLpsFWVSfy.geometry} material={materials.iFCKstMLETFqCmZ} />
        <mesh geometry={nodes.WDUVUVPpNjdIPkb.geometry} material={materials.ZPlxrBOYjSNYvVB} />
        <mesh geometry={nodes.NqUinIWcwSlXpvt.geometry} material={materials.rvYnnyqXrbFJXxh} />
        <mesh geometry={nodes.MaufYfIBnxcfRgH.geometry} material={materials.SsSIPrCyVNTOxvd} />
        <mesh geometry={nodes.aIqeGXayDxWnOWQ.geometry} material={materials.EKOOVJzobzfBYEj} />
        <mesh geometry={nodes.HrtjMXqDCcINmDE_0.geometry} material={materials.BfIgIOaUEgyoEft} />
        <mesh geometry={nodes.zWqVyCKpTAuZNiu_0.geometry} material={materials.zFJMMvikHFjtmzd} />
        <mesh geometry={nodes.MYVKQTLmUkzzlBj_0.geometry} material={materials.jIhmcgKbjDOICsY} />
        <mesh geometry={nodes.qEJjkxdFZFWJWzR_0.geometry} material={materials.JKvAHnqjqlqshmY} />
        <mesh geometry={nodes.lvlCIzdfTmsrnsM.geometry} material={materials.iFCKstMLETFqCmZ} />
        <mesh geometry={nodes.eeWSraIVipLsSmX_0.geometry} material={materials.JKvAHnqjqlqshmY} />
        <mesh geometry={nodes.PgbYkhvRdcmMeGL.geometry} material={materials.wOIDWopwzKBeTNU} />
        <mesh geometry={nodes.rktWdhtZkCSmqne.geometry} material={materials.ZrrjpMZNDbttBCc} />
        <mesh geometry={nodes.hztTkkTJBJTZDmk.geometry} material={materials.ZrrjpMZNDbttBCc} />
        <mesh geometry={nodes.bHBjPHbrqJmhyoR.geometry} material={materials.ZrrjpMZNDbttBCc} />
        <mesh geometry={nodes.HHcJitDCPTdgnFk.geometry} material={materials.RMDHOHZakhhXXHT} />
        <mesh geometry={nodes.DRGkWmkJlgmNDJU.geometry} material={materials.RMDHOHZakhhXXHT} />
        <mesh geometry={nodes.KMwpdMtieDqmHVU.geometry} material={materials.RMDHOHZakhhXXHT} />
        <mesh geometry={nodes.KgPDMIRPrxAynTV.geometry} material={materials.hZBlDyddxAQhuPm} />
        <mesh geometry={nodes.XwGJfoaIrduFPcU.geometry} material={materials.YjmXmicdBWsFQyD} />
        <mesh geometry={nodes.ACMWKGtOCqXifQY.geometry} material={materials.RMDHOHZakhhXXHT} />
        <mesh geometry={nodes.BkHyotPbPWzwAAj.geometry} material={materials.sRPrqogRtliLLae} />
        <mesh geometry={nodes.bkcxDtALZjuqGGQ.geometry} material={materials.RMDHOHZakhhXXHT} />
        <mesh geometry={nodes.ebZHPVwKTmqvgbU.geometry} material={materials.kDpbvvjwMgCSCmF} />
        <mesh geometry={nodes.uSnVzUkbvcGaVtm.geometry} material={materials.AqVxlXuHIFahLKs} />
        <mesh geometry={nodes.znOBoeqnOAcWvld.geometry} material={materials.dKLyhhkbEyMrqky} />
        <mesh geometry={nodes.tIZmzvOOHrlOFci.geometry} material={materials.oKQWdLrXUCbYByI} />
        <mesh geometry={nodes.UmfOhraHkqkMHJr.geometry} material={materials.OFvWomWIIUgmKKA} />
        <mesh geometry={nodes.roXkINNmErodbSy.geometry} material={materials.oKQWdLrXUCbYByI} />
        <mesh geometry={nodes.wWWhLQmmNVhThGV.geometry} material={materials.OFvWomWIIUgmKKA} />
        <mesh geometry={nodes.JoRHkRchuIHZFdI.geometry} material={materials.mEMAJQfiigHeUXV} />
        <mesh geometry={nodes.qJLFXXZhlqhKvcM.geometry} material={materials.mEMAJQfiigHeUXV} />
        <mesh geometry={nodes.thJvyyEdPZIkQGr.geometry} material={materials.OFvWomWIIUgmKKA} />
        <mesh geometry={nodes.juMIjHdkYweLlGP.geometry} material={materials.NzmRSNqyvNKhkmK} />
        <mesh geometry={nodes.zNYAavJLMZZchIX.geometry} material={materials.ASadxrcBIAXFnLn} />
        <mesh geometry={nodes.bzbXKgxvWZbXAqu.geometry} material={materials.JKvAHnqjqlqshmY} />
        <mesh geometry={nodes.guzkNjLPdYYIFbm.geometry} material={materials.oINmXIPcNKkHSJV} />
        <mesh geometry={nodes.CkZgGMshUOhytMM.geometry} material={materials.AvocVUvikCzzMtu} />
        <mesh geometry={nodes.oiLbjgjnUUhPosp.geometry} material={materials.AvocVUvikCzzMtu} />
        <mesh geometry={nodes.nDWhlgWONddUcnN.geometry} material={materials.tyKqaDjBmuwfmrZ} />
        <mesh geometry={nodes.VAcTKRVsYcEMWxB.geometry} material={materials.dkOmcmuFedorUKC} />
      </group>
    </group>
  )
};

useGLTF.preload("/macbook.glb")

export const Macbook = () => {
  return (
    <Canvas id="mac" style={{transform: "translateY(50px)"}} camera={{ position: [0, 10, 20], fov: 17 }} gl={{ powerPreference: 'default'}}>
      <group>
        <Model/>
        <directionalLight intensity={10} position={[1,1,1]} />
      </group>
    </Canvas>
  )
};
export default Macbook;