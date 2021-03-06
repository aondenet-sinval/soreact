/*
const Item = (props) => {
	return(
	  <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
	   {props.text}
	  </a>
	)
}
*/
//Components Children
/*
const Item = (props) => {
	return(
	  <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
	   {props.children}
	  </a>
	)
}
*/
//Or with destruturing
/**/
const Item = ({ children }) => {
	return( 
	  <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
	   { children }
	  </a>
	)
}

export default Item;