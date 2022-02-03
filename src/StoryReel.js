import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        className='storyReel__story'
        image='https://www.thecorrespondent.pk/wp-content/uploads/2021/10/muhammad-ali.jpeg'
        profileSrc='https://www.essentiallysports.com/stories/olympics-news-muhammad-ali-and-other-athletes-that-were-nominated-for-grammy-awards/assets/1.jpeg'
        title='Ali'
      />
      <Story
        className='storyReel__story'
        image='https://i2-prod.mirror.co.uk/incoming/article24806995.ece/ALTERNATES/s1200c/0_UFC-229-Khabib-v-McGregor-Weigh-Ins.jpg'
        profileSrc='https://i.insider.com/5bc0689aac0a6366eb62d642?width=1136&format=jpeg'
        title='Khabib Nurmago'
      />
      <Story
        className='storyReel__story'
        image='https://media.newyorker.com/photos/61e87281b67066a13fd20ea8/master/pass/Caesar-Ronaldo.jpg'
        profileSrc='https://www.cristianoronaldo.com/assets/images/brand_eyewear.jpg?832236'
        title='CRISTIANO RONALDO'
      />
      <Story
        className='storyReel__story'
        image='https://www.bolnews.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-10-at-13.12.39-1.jpeg'
        profileSrc='https://wikibio.in/wp-content/uploads/2019/04/Atif-Aslam.jpg'
        title='Atif Aslam'
      />
      <Story
        className='storyReel__story'
        image='https://i.insider.com/617713d4e100ad00181da11c?width=700'
        profileSrc='https://i.pinimg.com/originals/8e/21/29/8e2129f44804db65316ed3db92cf8552.jpg'
        title='Robert Downey Jr'
      />
    </div>
  );
}

export default StoryReel;
