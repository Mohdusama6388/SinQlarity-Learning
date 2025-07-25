function Firstcomponent(props){
    return<div classname="modal">
        <h1>{props.owner} application </h1>
        <p> Its application {props.reason}</p>
        <button onClick={props.closemodal}>close</button>
</div>
    
}
export default Firstcomponent;