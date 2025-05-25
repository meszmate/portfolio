import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/images/about1.jpg";
import image2 from "@/images/about2.jpg";
import image3 from "@/images/about3.jpg";
import image from "@/images/image.jpg";
import nextjs from "@/images/companies/nextjs.png";
import github from "@/images/companies/github.png";
import nike from "@/images/companies/nike.svg";
import react from "@/images/companies/react.png";
import upwork from "@/images/companies/upwork.png";

function ShowCaseImage({href}:{href: string}) {
  return <div style={{background: `url('${href}')`}} className="h-55 !bg-cover !bg-center rounded-lg">

  </div>
}

function Company({href}:{href: string}) {
  return <div className="h-5 sm:h-8 md:h-10 lg:h-14">
    <img src={href} className="h-full" alt="" />
  </div>
}

export default function Home() {
  return <>
    <section className="relative h-[50em]">
      <div className="absolute inset-0">
        <div className="relative h-[50em] w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div></div>
      </div>
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-8 font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl text-slate-900">
            Let me build what you
            <span className="text-blue-600"> Need</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare arcu magna, vel gravida mi elementum et. Mauris in dolor urna. Nam lacinia eros dui, ut viverra mi volutpat non.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={"https://www.upwork.com/freelancers/~01b249bac3cf08ba6c"} className="rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700">
              Go to Upwork
            </Link>
            <Link href={"https://github.com/meszmate"} className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
              Check Github
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100">
      <div className="px-6 py-14 max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center mb-8 gap-4">
            <h1 className="text-gray-800 text-2xl font-extrabold font-[var(--font-inter)] tracking-widest uppercase">Showcase</h1>
            <div className="w-8 h-1 bg-blue-500"></div>
          </div>
          <p className="text-center mb-8 max-w-[1200px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat nisl et diam rutrum, at elementum leo euismod. Integer scelerisque imperdiet felis eu luctus. Nullam egestas tincidunt justo et pretium. Donec et metus at magna fermentum congue nec id metus. Phasellus ut auctor mi. </p>
          <div className="grid grid-cols-3 gap-6 mb-5">
            <ShowCaseImage href={image1.src} />
            <ShowCaseImage href={image2.src} />
            <ShowCaseImage href={image3.src} />
          </div>
      </div>
    </section>
    <section className="relative">
      <div className="pt-30 px-6 max-w-[1500px] mx-auto">
        <h1 className="font-black text-7xl text-center mb-12">Give form to your thoughts</h1>
        <div className="flex justify-center mb-28">
          <div className="border border-blue-600 bg-gray-100/10 shadow-xl shadow-blue-500/10 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-900/3 text-lg">
            Check Out Now
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-600/40 rounded-full"></div>
      </div>
    </section>
    <section>
      <div className="py-40 px-6 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:pr-20 py-5 flex flex-col justify-center">
          <div className="bg-blue-600/13 text-blue-600 rounded-full px-3 py-1 w-fit mb-7">Highly recommended</div>
          <h1 className="text-6xl/19 font-black mb-8">What can I do for your business</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat nisl et diam rutrum, at elementum leo euismod. Integer scelerisque imperdiet felis eu luctus. Nullam egestas tincidunt justo et pretium. Donec et metus at magna fermentum congue nec id metus. Phasellus ut auctor mi. Maecenas laoreet tellus lacus, eget commodo libero hendrerit eget. Ut non tortor non orci rhoncus rutrum. Aenean magna dui, sodales eget faucibus in, aliquam lobortis risus.</p>
        </div>
        <div style={{background: `url('${image.src}')`}} className="min-h-120 !bg-cover !bg-center"></div>
      </div>
    </section>
    <section className="bg-gray-100">
      <div className="pt-18 pb-10 px-6 max-w-[1500px] mx-auto">
        <div className="flex overflow-x-scroll justify-between mb-18">
          <Company href={nextjs.src}/>
          <Company href={react.src}/>
          <Company href={github.src}/>
          <Company href={nike.src}/>
          <Company href={upwork.src}/>
        </div>
        <div>
          <div className="mx-auto px-4.5 py-1.5 bg-gray-200 border border-gray-300 rounded-full w-fit text-gray-600">Trusted by over <span className="text-blue-600">1k+</span> companies (Just an example)</div>
        </div>
      </div>
    </section>
  </>
}
