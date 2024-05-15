const Updated_component = (Origin_component) => {
    function New_component(props) {
        return (
            <h1>from HOC</h1>
        )

        return <Origin_component></Origin_component>;
    }
    return New_component;
}
export default Updated_component