import Welcome from "./Layout/Welcome";
import { Offering } from "./Layout/Offering";
import Meals from "./Meals/Meals";
import { Testimonial } from "./Layout/Testimonial";



function Main() {
    
    return (
        <>
            <Welcome />
            <main className='wrapup'>
                <Offering />
                <Meals />
                <Testimonial />
            </main>
        </>
    )
}

export default Main;
