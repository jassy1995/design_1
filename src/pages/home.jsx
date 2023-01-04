import Button from '../components/button';
import Footer from '../components/footer';
import Navbar from '../components/nav-bar';
import Operation from '../components/operation';
import Team from '../components/team';
import { operations, teams } from '../lib/util';

export default function Home() {
    return (
        <>
            <div className='container'>
                <Navbar />
                <div className="flex flex-col items-center mt-6">
                    <img src="../../images/illustration-intro.png" alt="not exist" className='md:w-7xl xl:w-7xl lg:w-7xl xxl:w-7xl' />
                    <div className='reak-normal w-[750px] flex flex-col space-y-8 items-center mt-6'>
                        <header className='text-[30px] font-bold'>All your files are in one location, accessible anywhere.</header>
                        <p className='text-xl px-20'>Fylo stores all your most important files in one secure location. Access them whenever you need, share and collaborate with friends family, and co-workers</p>
                        <Button text='Get Started' />

                    </div>
                    <div className="grid gap-[100px] grid-cols-2 grid-rows-2 mt-48 max-w-4xl">
                        {operations.map((operation, i) => (
                            <Operation operation={operation} key={i} />
                        ))}
                    </div>
                    <div className="flex space-x-20 mt-[100px]">
                        <img src="../../images/illustration-stay-productive.png" alt="not exist" className='w-[450px] h-auto' />
                        <div className="flex flex-col space-y-2  py-10 w-[450px]">
                            <header className='text-[30px] text-start font-bold mt-10'>Stay productive, whenever you are</header>
                            <p className='text-start'>Never let location be an issue when accessing your files. Flyo has you covered for all your file storage needs.</p>
                            <p className='text-start'>Securely share files and folders with friends, family and colleague for live collaboration. No email attachments required.</p>
                            <div className='flex border-b border-cyan-500 pb-1 space-x-1 items-center w-[144px] cursor-pointer'>
                                <span className='text-cyan-500'>See how Flyo works</span>
                                <span className='bg-cyan-500 rounded-full w-3 h-3 flex justify-center items-center'><i className="fa-sharp fa-solid fa-arrow-right flex items-center w-2 h-2 text-[10px]"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-6 mt-32">
                        {teams.map((team, i) => (
                            <Team team={team} key={i} />
                        ))}
                    </div>
                    <div className='bg-[rgb(28,34,48)] mt-[100px] flex flex-col space-y-3 pt-10 px-10 pb-5 w-[700px]' style={{ boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)" }}>
                        <header className='font-bold text-[30px]'>Get early access today</header>
                        <p className='text-slate-300'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any question, our support team would be happy to help you</p>
                        <div className='flex space-x-3 pt-4'>
                            <input type="text" className='rounded-full grow bg-white text-black px-4' placeholder='enter your email' />
                            <Button text="Get Started For Free" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
