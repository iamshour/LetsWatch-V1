import spinner from '../images/Spinner.gif'

const Loading = () => {
    return (
        <div>
            <img 
                src={spinner}
                alt='loading...'
                style={{ width: '200px', margin: '40px auto', display: 'block' }}
            />
        </div>
    )
}

export default Loading