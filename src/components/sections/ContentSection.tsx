import { Box } from '@mui/material';

interface ContentSectionProps {
    text: string;
}
const Section = ({text}: ContentSectionProps) => {
    return (<Box>{text}</Box>)
}
export default Section;