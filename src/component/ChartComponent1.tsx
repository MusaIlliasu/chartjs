/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Chart, { ChartItem } from "chart.js/auto";

const ChartComponent1 = () => {

    const chartRef = useRef<HTMLCanvasElement | null>(null);
    let chartInstance: Chart<"bar", number[], string> | null = null;
  
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
            label: "Sample Data",
            data: [60, 50, 90, 80, 40],
            backgroundColor: [
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)"
            ],
            borderWidth: 1
        }]
    };
  
    const options = {
        scales: {
            y: { beginAtZero: true }
        },
        responsive: true,
        maintainAspectRatio: false
    };
  
    useEffect(() => {

        const ctx = chartRef.current!.getContext("2d") as ChartItem;
      
        chartInstance = new Chart(ctx, {
            type: "bar",
            data: data,
            options: options
        });

        return () => chartInstance!.destroy();
  
    }, []); 
  
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <canvas ref={chartRef} />
        </div>
    );
}

export default ChartComponent1;