import './ProfilePosts.scss'
import {useState} from "react";

const posts = [
    {id: 0, text: 'Hey, why nobody loves me?!'},
    {id: 1, text: 'Hey, why nobody loves me?!'},
    {id: 2, text: 'Hey, why nobody loves me?!'},
]

const ProfilePosts = ({photos}) => {

    const [postText, setPostText] = useState('');

    const postElements = posts.map(({id, text}) => (
        <div key={id} className="posts-profile__item">
            <img className='posts-profile__user' src={photos?.small} alt=""/>
            <div className="posts-profile__text">{text}</div>
        </div>
    ))

    const handleSubmit = (e) => {
        e.preventDefault()
        posts.push({id: posts.length, text: postText})
        setPostText('')
    }


    return (
        <div className="profile__posts posts-profile">
            Don't realized (API doesn't support it)
            <div className="posts-profile__new ">
                <div className="posts-profile__title">Create new one</div>
                <form onSubmit={handleSubmit} className="posts-profile__form">
                    <input onChange={(e) => setPostText(e.target.value)}
                           value={postText}
                           type="text"
                           placeholder='Your news...'
                           className="input"
                    />
                    <button className="btn">Send</button>
                </form>
            </div>
            <div className="posts-profile__recent">
                <div className="posts-profile__title">Recent posts</div>
                {postElements}
            </div>
        </div>
    )
}

export default ProfilePosts