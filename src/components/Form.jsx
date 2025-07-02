const Form = ({getWeather}) => {
    const getCity = e => {
        const city = e.currentTarget.city.value.trim();
        console.log(city)
        e.preventDefault()
        getWeather(city)


    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder='City name'/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;