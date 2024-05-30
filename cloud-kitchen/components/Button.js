export default ({label, func, classN})=>{
return(<>
    <button
    onClick={func}
    type="button" className={classN}
    >
        {label}
    </button>
    </>)
}