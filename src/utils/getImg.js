import fisio from '../assets/fisio.jpg'
import logopeda from '../assets/logopeda.jpg'
import lab from '../assets/lab.jpg'
import dentist from '../assets/dentist.jpg'
import nurse from '../assets/nurse.jpg'
import other from '../assets/other.webp'


const getImg = (img) => {
    switch (img) {
        case 'fisio':
            return fisio
        case 'logopeda':
            return logopeda;    
        case "lab":
            return lab;
        case "dentist":
            return dentist;
        case "nurse":
            return nurse;
        case "other":
            return other;                
        default:
            break;
    }

}

    export default getImg; 