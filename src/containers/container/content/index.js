import React from 'react';
import Profile from "../../../components/profile";
import movieImage1 from '../../../assets/movie1.jpg';
import movieImage2 from '../../../assets/movie2.jpg';
import movieImage3 from '../../../assets/movie3.jpg';
import movieImage4 from '../../../assets/movie4.jpg';
import movieImage5 from '../../../assets/movie5.jpg';

import "./content.css";

const DATA = [
    {
        movieimg: movieImage1,
        title: "Rise of Guardians",
        category: "Kids"
    },

    {
        movieimg: movieImage2,
        title: "Soul",
        category: "Kids"
    },

    {
        movieimg: movieImage3,
        title: "Coco",
        category: "Kids"
    },

    {
        movieimg: movieImage4,
        title: "How To Train Your Dragon",
        category: "Kids"
    },

    {
        movieimg: movieImage5,
        title: "Puss In Boots",
        category: "Kids"
    },

   
]
class Content extends React.Component {
    render() {
        return (

            <div className="content" >
                { DATA.map((list) => <Profile title={list.title} category={list.category} movieimg={list.movieimg}/>)};
            </div>

            

        );

    }
}

export default Content;