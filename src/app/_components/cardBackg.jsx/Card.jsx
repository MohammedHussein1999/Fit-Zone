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

export default function CardBackg({title,data,des=[]}) {
  return (
    <div className=" hover:-translate-y-3 ease-in-out  min-w-72 h-80  rounded-lg max-w-sm p-6 bg-white/30 backdrop-blur-lg roaunded-lg border border-white/20 shadow-lg">
      <div className=" w-full text-3xl text-white/70 font-bold text-center">{title}</div>
      <div className="my-3 text-center semi-bold text-white text-xl">{data}</div>
      <ul className="content mb-5 ">{des?.map((el) => (
        <li className="py-1 mb-1 w-full" key={el}>{el}</li>
      ))}</ul>

      <div className="fotter mt-auto w-full font-bold ">
        <Button
          sx={{boxShadow:"none" , fontWeight:"bold" }}
          type="submit"
          variant="contained"
          color="main"
          fullWidth
        >
          اشتـراك
        </Button>
      </div>
    </div>
  );
}
