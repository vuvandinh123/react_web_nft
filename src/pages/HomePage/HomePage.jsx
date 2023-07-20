import Brand from "../../components/Home/Brand"
import Collections from "../../components/Home/Collections"
import Content from "../../components/Home/Content"
import Trending from "../../components/Home/Trending"

const HomePage = () => {
    return (
        <>
            <Content />
            <Brand />
            <section>
                <div className="container" >
                    <Trending />
                    <Collections/>
                </div>
            </section>
            
        </>
    )
}

export default HomePage
