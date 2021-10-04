import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./About.css";
import img_1 from "./Mark_1.png";

export default function About() {
  return (
    <div className="About_Background">
      <h1 className="About_Title">Hi there, my name is Mark</h1>
      <h2 className="About_Subtitle">
        Computer Science Student || Microsoft Learn Student Ambassador ||
        Content Creator
      </h2>
      <div className="About_Layout">
        <Stack spacing={5} direction="row">
      <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="140"
            image={img_1}
            alt="mark_1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Computer Science Student
            </Typography>
            <Typography variant="body2" color="text.secondary">
             I'm a computer science student at the Tamkang University in Taiwan. I am passionate about both hardware and software side of the computing system.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/projects">Discover my projects</Button>
          </CardActions>
        </Card>
    

        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            height="140"
            image={img_1}
            alt="mark_1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Student Avionics Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/projects">Discover my projects</Button>
          </CardActions>
        </Card>
        
        
        </Stack>
        </div>
        <div className="About_Layout_1">
        <Stack spacing={5} direction="row">

        <Card sx={{ maxWidth: 450 }}>
          <CardMedia
            component="img"
            height="140"
            image={img_1}
            alt="mark_1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Microsoft Learn Student Ambassadors
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="/projects">Discover my projects</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={img_1}
            alt="mark_1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Online Content Creator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" href="https://www.youtube.com/channel/UCkPWNhP80z41tEDvuCMSfGQ">Go to my YouTube channel</Button>
          </CardActions>
        </Card>
        </Stack>
      </div>
    </div>
  );
}
