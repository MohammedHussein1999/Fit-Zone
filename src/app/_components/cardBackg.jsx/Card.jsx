import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardBackg({title,data,des}) {
  return (
    <Card sx={{ minWidth: 275 }} className="card-backg">
      <CardContent>
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          {des}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="sanin-button">اشتراك</Button>
      </CardActions>
    </Card>
  );
}
