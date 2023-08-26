export const Message = ({msg, className, value=""})=>{
    // const myClassName = `${className} `;
    return (<h2 className={className}>{msg} {value}</h2>)
}