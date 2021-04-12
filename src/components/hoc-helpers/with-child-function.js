/* Робиться для того щоб в App замінити    <PersonList>
            { ({name}) => <span>{name}</span> }
            </PersonList>  */
            const withChildFunction = (fn) => (Wrapper) => 
            {
                return (props) => {
                    return ( 
                        <Wrapper {...props} >
                            {fn}
                        </Wrapper>
                        )
                }
            } 

export default withChildFunction