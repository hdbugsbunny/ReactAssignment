import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuesAns({ data }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{data.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{data.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
