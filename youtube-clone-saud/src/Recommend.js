import React from 'react';
import VideoCard from "./VideoCard"
import "./Recommend.css";

const Recommend = () => {
    return (
        <div className="recommend">
            <h2>Recommend</h2>
            <div className="recommend__videos">
            <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            image="/images/imag.jpeg"
            channelImage="/images/avatar.jpeg"
            />

           <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            image="https://i.ytimg.com/vi/5lAVApm2E3I/maxresdefault.jpg"
            channelImage="/images/avatar2.jpeg"

            />

           <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="data:image/jpeg;base64,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"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcv_SenT964ljEOEGsGQNPmpWNt9iOmtQrMA&usqp=CAU"
            />


           <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="data:image/jpeg;base64,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"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png "
            />

           <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="/images/avatar2.jpeg"
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEFQYznhWy3ggx3Nomuww4baFcUDj-E7tVg&usqp=CAU"

            />

           <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="/images/avatar2.jpeg"
            image = "https://api.time.com/wp-content/uploads/2014/05/youtube.jpg?quality=85&w=1024&h=512&crop=1"

            />

          <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="/images/avatar2.jpeg"
            image="https://i.pinimg.com/originals/c3/f7/a0/c3f7a0afc626a0dcdcb057f06eff9833.png"

            />

            <VideoCard 
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="/images/avatar2.jpeg"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Vm3o0bUNCh7dqLq3FKKZmkpFDk5IvuH1vuIHxl2jfk3QwbLTzo4wMucDsrjPgThmQFU&usqp=CAU"

            />

            <VideoCard
            title="Become a web Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            channel="SIDDIQUI SAUD"
            timestamp="3 days ago"
            channelImage="/images/avatar2.jpeg"
            image="https://marketplace.canva.com/EADaiN3g93w/1/0/800w/canva-nature-plants-youtube-channel-art-Vht9MjEgji8.jpg"

            />

            </div>
        </div>
    )
}

export default Recommend
