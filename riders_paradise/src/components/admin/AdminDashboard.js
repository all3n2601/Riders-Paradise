import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LineChart from "../../models/Charts/Linechart";
import BarChart from "../../models/Charts/Barchart";

const DashboardContent = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Card sx={{ backgroundColor: "white", borderRadius: "15px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome Admin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome to your sales dashboard! Lets have a look at todays sales.
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "15px",
          marginTop: "16px",
          backgroundColor: "white",
          width: 150,
          height: 100,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            $100,000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Revenue
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "15px",
          position: "relative",
          left: "300px",
          top: "-115px",
          marginTop: "16px",
          backgroundColor: "white",
          width: 150,
          height: 100,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            25,000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Units Sold
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "15px",
          position: "relative",
          left: "650px",
          top: "-229px",
          marginTop: "16px",
          backgroundColor: "white",
          width: 150,
          height: 100,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            $3000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Revenue Today
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "15px",
          position: "relative",
          left: "980px",
          top: "-345px",
          marginTop: "16px",
          backgroundColor: "white",
          width: 150,
          height: 100,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            500
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Units Sold Today
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "15px",
          position: "relative",
          top: "-345px",
          marginTop: "16px",
          backgroundColor: "white",
          width: 550,
          height: 350,
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            Linechart
          </Typography>
          <LineChart />
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "15px",
          position: "relative",
          top: "-710px",
          left: "600px",
          marginTop: "16px",
          backgroundColor: "white",
          width: 550,
          height: 350,
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            BarChart
          </Typography>
          <BarChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardContent;
