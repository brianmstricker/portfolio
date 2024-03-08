import Header from "@/components/Header";

export default function Home() {
 return (
  <div className="h-screen flex flex-col items-center justify-center">
   <div className="h-full max-h-[80%] w-full relative">
    <Header />
    <div className="h-full grid grid-cols-2 items-center">
     <div>
      <div className="flex flex-col max-w-fit">
       <h1 className="text-7xl">Welcome</h1>
       <div className="w-full h-1 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-600" />
      </div>
      <p className="mt-6 max-w-prose text-stone-400">
       I&apos;m Brian Stricker, a{" "}
       <span className="text-white">software engineer</span> with a focus on{" "}
       <span className="text-white">web development</span>. I&apos;m based in
       New Jersey, and I enjoy all aspects of development, from design to
       deployment.
      </p>
     </div>
     <div className="ml-auto">home content</div>
    </div>
   </div>
  </div>
 );
}
