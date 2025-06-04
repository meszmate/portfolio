<?php 
include "svg.php";

$GITHUB = "https://github.com/meszmate/portfolio";
$X = "https://x.com/meszmatew";
$INSTAGRAM = "https://instagram.com/meszmate";
$DISCORD = "https://discord.com/invite/7Gg2QssZfV";
$UPWORK = "https://www.upwork.com/freelancers/~01b249bac3cf08ba6c";

$WORKS = [
    [
        "image"=>"/assets/works/csrip.webp",
        "title"=>"CS.RIP",
        "description"=>"Under Development.",
        "url"=>"https://cs.rip",
    ],
    [
        "image"=>"/assets/works/mezganet.webp",
        "title"=>"Mezganet",
        "description"=>"Hungarian Internet Service Provider.",
        "url"=>"https://mezganet.hu",
    ],
    [
        "image"=>"/assets/works/portfolio.webp",
        "title"=>"Portfolio 2",
        "description"=>"Scroll Animations.",
        "url"=>"https://meszmate.hu",
    ]
];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matthew Meszaros</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://api.fontshare.com/v2/css?f[]=outfit@700&display=swap" rel="stylesheet">
    <style>
        .font-base {
            font-family: 'Outfit', sans-serif;
        }
    </style>
</head>
<body class="bg-slate-300">
    <section class="bg-[#f0f2ff] overflow-hidden relative z-[5]">
        <div class="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div class="absolute -bottom-20 left-1/2 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div class="absolute top-20 right-10 w-[300px] h-[300px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <nav class="w-full py-4 px-4">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex gap-5 items-center">
                    <img src="https://matex.hu/logo.jpg" class="w-8 h-8 rounded-full" alt="">
                    <h1 class="font-bold text-gray-700">Matthew Meszaros</h1>
                </div>
                <div>
                    <a class="hover:bg-gray-900/4 rounded-lg px-3 py-1 block" href="<?php echo $UPWORK?>">
                        <?php echo UpworkSVG("h-8") ?>
                    </a>
                </div>
            </div>
        </nav>
        <div class="pt-34 pb-50 px-4">
            <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-y-15">
                <div class="md:pr-12 flex flex-col justify-center">
                    <h1 class="font-base text-5xl sm:text-7xl text-gray-900 tracking-wider leading-17 sm:leading-23">High Quality, Modern Website Design</h1>
                    <p class="mt-9 text-xl text-gray-700">
                        No Agency. Same Quality. Same People.
                    </p>
                    <div class="flex mt-8 gap-2">
                        <a href="<?php echo $GITHUB ?>" class="px-4 py-2 bg-white/80 backdrop-blur-md rounded-lg text-xl border border-slate-300 hover:bg-white/40">Check Github</a>
                    </div>
                </div>
                <div class="flex items-center justify-center z-9">
                    <div class="bg-[url(/assets/design.webp)] w-full h-140 rounded-xl bg-center bg-cover"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative overflow-hidden bg-slate-50 py-10 px-4">
        <div class="max-w-7xl mx-auto">
            <div class="flex items-center gap-5">
                <h1 class="font-bold text-xl text-slate-600">My works</h1>
                <div class="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                <p class="text-slate-400">2017-<?php echo date("Y");?></p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-9 gap-8">
                <?php foreach ($WORKS as $w): ?>
                    <a href="<?php echo $w["url"]; ?>" target="_blank" class="work bg-slate-100 rounded-lg overflow-hidden shadow-md shadow-gray-200 hover:shadow-gray-300 transition-shadow">
                        <div class="bg-[url(<?php echo $w["image"]; ?>)] bg-cover bg-top h-55 w-full brightness-98"></div>
                        <div class="px-4 py-3">
                            <h1 class="font-bold text-gray-800 mb-2"><?php echo $w["title"]; ?></h1>
                            <p class="text-slate-500"><?php echo $w["description"] ?></p>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
            <div class="h-[1px] w-full bg-slate-200 my-20"></div>
            <div class="flex flex-col md:flex-row gap-10">
                <div class="max-w-[400px] flex gap-10">
                    <h1 class="text-5xl font-black">Let's Work Together.</h1>
                </div>
                <div class="flex flex-col gap-4 grow">
                    <h1 class="text-slate-800 font-bold text-lg">Send Me an Email</h1>
                    <p class="text-slate-600">Reach out at <a class="text-blue-600 hover:underline" href="mailto:contact@meszmate.com">contact@meszmate.com</a> with a description of your project or idea. The more details, the better!</p>
                    <h1 class="text-slate-800 font-bold text-lg mt-9">Let’s Connect</h1>
                    <p class="text-slate-600">I'll follow up with information on how we can discuss everything.</p>
                    <h1 class="text-slate-800 font-bold text-lg mt-9">Pricing</h1>
                    <p class="text-slate-600">Projects typically range from $500 to $3000, depending on your needs, complexity, and whether you already have a design or just an idea.</p>
                </div>
            </div>
        </div>
    </section>  
    <section class="bg-slate-200 py-5 px-4">
        <div class="max-w-7xl mx-auto flex justify-between">
            <div>
                <p class="text-slate-500 text-sm"><?php echo date("Y") ?> &copy; meszmate.com</p>
            </div>
            <div></div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
    <script src="main.js"></script>
</body>
</html>