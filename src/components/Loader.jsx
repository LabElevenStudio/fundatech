import { Spinner } from '@chakra-ui/react'

const Loader = ({sz}) => {
	return (
		<Spinner 
		pos="relative" 
		top="55" 
		left="50%" 
		size={sz} 
		color="orange.500" 
		thickness="5px" 
		emptyColor="black" 
		speed="0.65s" />
	)
}


export default Loader