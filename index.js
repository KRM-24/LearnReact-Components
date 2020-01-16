import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui containt comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post!" 
                avatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="Nice blog!" 
                avatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                content="Nice post!" 
                avatar={faker.image.avatar()} 
            />
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root')  
);