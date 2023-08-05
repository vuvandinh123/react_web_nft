import Blur from "./Blur"

const Background = () => {
    return (
        <>
            <Blur />
            <Blur top="0" left="50%" width="20%" height="3%"background="#ff1ed2" />
            {/* <Blur top="5%" left="80%" width="10%" height="3%" background="#ff8b1e" /> */}
            <Blur top="10%" width="20%" height="3%"  left="0" background="#1e50ff" />
            <Blur top="10%" left="80%" width="20%" height="3%"  background="#FFC935" />
            <Blur top="20%" left="40%" width="20%" height="3%" background="#ffae00" />
            <Blur top="30%" left="40%" width="20%" height="3%" background="#ffae00" />
            <Blur top="35%" left="40%" width="20%" height="3%" background="#b119cf" />
            <Blur top="46%" left="40%" width="20%" height="3%" background="#ffae00" />
            <Blur top="52%" left="0%" width="20%" height="3%" background="#bb00ff" />
            <Blur top="60%" left="50%" width="20%" height="3%" background="#ff0059" />
            <Blur top="65%" left="10%" width="20%" height="3%" background="#f352ff" />
            <Blur top="73%" left="40%" width="20%" height="3%" background="#a200ff" />
            <Blur top="80%" left="70%" width="20%" height="3%" background="#ff7205" />
            <Blur top="88%" left="40%" width="20%" height="3%" background="#ff0505" />
        </>
    )
}

export default Background
