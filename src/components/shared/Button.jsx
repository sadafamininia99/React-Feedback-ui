import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
    return (
        <button type={type}  disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps={
    version : 'primary',
    type:'button',
    isDisabled:false
    //by default
}

Button.protoTypes={
    children:PropTypes.node.isRequierd,
    version:PropTypes.string,
    type:PropTypes.string,
    isDisabled:PropTypes.bool,


}
export default Button
