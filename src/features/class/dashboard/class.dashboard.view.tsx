import Layout from "../../../layout/Layout"
import ChatContainer from "../chat/class.chat.container"
import VideoContainer from "../video/class.video.container"

const DashboardClass = () =>{
    return(
        <Layout>
            <VideoContainer/>
            <ChatContainer/>
        </Layout>
    )
}

export default DashboardClass