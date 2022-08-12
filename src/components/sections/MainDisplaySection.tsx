/*
** The main display section of the app.
** includes an image
** may or may not include a card
** if there is a card, it will either be displayed on the right side of the image or overlap the lower left-hand corner of the image
*/
import { HOME_MAIN_DISPLAY_IMG_SRC } from "../../constants";
import mainDisplayImg from "../../assets/images/home_main_display.jpg";

const MainDisplaySection = () => {
    return (<img src={mainDisplayImg}/>);
}

export default MainDisplaySection;