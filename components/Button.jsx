export const Button = ({val, className, fn , style})=>{
    const clicked = ()=>{
        fn(val); // Parent Fn call and pass val (+, -)
        console.log('Clicked Happen ', val);
    }
    return (< button onClick={clicked} className = {className} style = {style}>{val}</button>)
}