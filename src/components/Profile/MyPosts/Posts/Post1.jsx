import s from './Post1.module.css';

const Post1 = (props) => {
    return (
        <div>
            
            <div className={s.item}>
                <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' alt='avatar'></img>
                { props.message }
                <div>
                    <span> like</span>{ props.LikesCount}
                </div>
            </div>
        </div>
    )
};

export default Post1;