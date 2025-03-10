import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);

    // Transition of navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={"flex flex-col items-center "}>
            {/* Navbar */}
            <div className="flex flex-col items-center justify-end relative h-screen">
                <div
                    className={`z-10 text-xl text-black font-bold fixed left-1/2 transform -translate-x-1/2 transition-all duration-900 ${
                        isSticky
                            ? "text-black top-0 w-full p-4 flex justify-center items-center fixed"
                            : "text-2xl top-1/2 -translate-y-1/2"
                    }`}
                >
                    inner
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" className=" size-6 w-10 h-6 m-10">
                    <path d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"/>
                </svg>
            </div>

            <div className="flex flex-col items-center justify-around relative h-screen bg-gray-300 pt-10">
                <div className={"w-full h-70"}>
                    <p className={"text-xl place-content-center text-center p-10"}>
                        در گذشته پادشاهان امکانات بیشتری نسبت به تمام مردم دیگر داشته‌اند. برای تصمیمات خود از مشاوران
                        حرفه‌ای در حیطه‌ی مربوطه و از منجمان برای بررسی موقعیت ستارگان و تاثیر انرژی آن‌ها بر تصمیمات و
                        تقدیرشان استفاده می‌کردند.
                        اکنون با پیشرفت تکنولوژی بستری فراهم گشته که شما پادشاه قلمرو خود باشید.
                        ما اینجا هستیم تا همچون یک منجم شما را انرژی ستارگان آگاه کنیم .
                    </p>
                </div>
                <div className={"w-full h-70"}>
                    <p className={"text-xl place-content-center text-center p-10"}>
                        ما در اینجا با استفاده از تنها تاریخ و محل تولد تقدیر شما را به دست آورده و نسبت به انرژی کیهان و ستارگان در هر روز به شما راهکارهایی پیشنهاد دهیم که قدرت شما در استفاده از تمام ظرفیت خود را افزایش دهد.
                        برای هماهنگ شدن با کیهان ادامه دهید و به تقدیر خود دست یابید.
                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" className=" size-6 w-10 h-6 m-10">
                    <path d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"/>
                </svg>
            </div>

            <div className="bg-black flex flex-col items-center justify-around relative h-screen w-full pt-10">
                    <img onClick={()=>{
                        navigate("/register")
                    }} className={"h-full w-full hover:cursor-pointer hover:w-full hover:h-200 duration-800"} src={"src/assets/backgrounds/begin1.jpg"}/>
            </div>
        </div>
    );
}
