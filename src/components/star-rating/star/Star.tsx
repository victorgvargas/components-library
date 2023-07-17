import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface StarProps {
    checked: boolean;
}

const Star = ({ checked }: StarProps) => {
    if (checked) return <FontAwesomeIcon icon={faStar} style={{color: 'orange'}} />

    return <FontAwesomeIcon icon={faStar} style={{color: 'black'}} />
}

export default Star;