import Link from "next/link";
import Skills from "./_sections/skills";
import WebBuilder from "./_sections/webbuilder";
import Languages from "./_sections/languages";
import Animations from "./_sections/animations";
import FooterTop from "./_sections/footertop";

export const UPWORK = "https://www.upwork.com/freelancers/~01b249bac3cf08ba6c";

function ShowCaseImage({href}:{href: string}) {
  return <div style={{background: `url('${href}')`}} className="h-55 !bg-cover !bg-center rounded-lg">

  </div>
}

function ShowCaseSoon() {
  return <div id="work" className="h-55 rounded-lg text-gray-400 border border-gray-600 border-dashed text-5xl bg-gray-50 font-[ClashGrotesk] flex items-center justify-center">
    Soon
  </div>
}

export default function Home() {
  return <>
    <Animations/>
    <section className="relative h-[50em] overflow-hidden">
      <div id="effect" className="absolute inset-0">
        <div className="relative h-[50em] w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div></div>
      </div>
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 id="" className="mb-8 font-bold tracking-wide text-5xl font-[ClashGrotesk] sm:text-6xl lg:text-7xl text-slate-900">
            Bringing Your Vision to <span className="relative text-slate-100"><div className="absolute -top-[5%] -left-[10%] w-[120%] rounded-lg h-[110%] bg-blue-500 rotate-5 -z-1"></div>Life</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-700">
            I specialize in crafting interactive, high-performance websites that meet your goals and grow with your business. From idea to execution — efficiently and with precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={UPWORK} className="rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700">
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
            <h1 className="text-gray-800 text-4xl font-extrabold font-[ClashGrotesk] tracking-widest uppercase">Showcase</h1>
            <div className="w-8 h-1 bg-blue-500"></div>
          </div>
          <p className="text-center text-lg mb-8 max-w-[1200px] mx-auto">A curated selection of my recent frontend projects — blending creative visuals with smooth interactions. Each work reflects my focus on user experience, performance, and modern web technologies.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            <ShowCaseSoon/>
            <ShowCaseSoon/>
            <ShowCaseSoon/>
          </div>
      </div>
    </section>
    <Skills/>
    <WebBuilder/>
    <Languages/>
    <FooterTop/>
  </>
}


