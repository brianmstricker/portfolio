import Header from "@/components/Header";

export default function Home() {
 return (
  <div className="h-screen flex flex-col items-center justify-center">
   <div className="h-full max-h-[80%] border w-full relative">
    <Header />
    <div className="flex flex-col items-center justify-center h-full">
     <div>home content</div>
    </div>
   </div>
  </div>
 );
}
