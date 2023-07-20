import Brand from "@/components/Home/Brand"
import { CategoryHome, Collections, Content, Trending } from "../../components/Home"

const HomePage = () => {
    return (
        <>
            <Content />
            <Brand />
            <section>
                <div className="container" >
                    <Trending />
                    <Collections/>
                    <CategoryHome />
                </div>
            </section>
            
        </>
    )
}

export default HomePage
