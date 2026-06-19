const ErrorMsg = () => {
     let fooditems = ["dal","green vegetables","protein"];
    return <>{fooditems.length === 0 ? <h3>cart is empty</h3> : null }</>
}
export default ErrorMsg;