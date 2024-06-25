function Item(props) {
    return (
        <img src={`/assets/img/`+props.image+`.jpg`} alt={props.alt}/>
    )   
}

export default Item