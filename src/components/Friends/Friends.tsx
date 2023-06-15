import "./Friends.css"
import {FriendsType} from "../Data/Store";

export type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends = (props: FriendsPropsType) => {

    return (
        <div className='wrapper'>
            <div className='AddFriendForm'>
                <h3>Let's Add New Friends</h3>
                <div className='inputForm'>
                    <textarea className='textitem'
                    ></textarea>
                    <textarea className='textitem'
                    ></textarea>
                    <button className='button'>+</button>
                </div>

            </div>
            <div className='friends-wrapper'>
            {props.friends.map(f=>{
                return(
                    <div className="user-cards" key={f.id}>
                        <div className="card-body">
                            <h5 className="card-title">{f.name}</h5>
                            <p className="card-text">{f.description}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}