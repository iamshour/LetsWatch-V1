import spinner from '../images/Spinner.gif'

const Loading = () => {
    return (
        <div className='loading-container'>
            <img 
                src={spinner}
                alt='loading...'
                className='loading'
            />
        </div>
    )
}

export default Loading
