import {ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../Styles';
import Header from '../../Components/Header';
import {images} from '../../assets/images';
import Post from '../../Components/Post';
import ProfileHeader from '../../Components/ProfileHeader';

const ScaryStories = () => {
  const data = [
    {
      id: 1,
      profilePic: images.profile3,
      name: 'Charles James',
      timeAgo: '7h',
      caption:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy',
      post: images.post1,
      totalLikes: 196,
      totalComments: 20,
      totalShares: 5,
    },
    {
      id: 2,
      profilePic: images.profile4,
      name: 'Dave Miller',
      timeAgo: '7h',
      caption:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy',
      post: images.post2,
      totalLikes: 196,
      totalComments: 20,
      totalShares: 5,
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.parentScrollContainer}>
      <Header notificationIcon={true} />
      <ProfileHeader />
      {data.map(area => {
        return <Post data={area} />;
      })}
    </ScrollView>
  );
};

export default ScaryStories;
