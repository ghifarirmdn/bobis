import React, { useEffect, useState } from "react";
import "./ChooseSeat.css";
import Seat from "../seat/Seat";
import { seats } from "../../variables/seats";
import axios from "axios";

const ChooseSeat = (props) => {
  // const [flag, setFlag] = React.useState(1);
  // const [stopIdx, setStopIdx] = React.useState(1);
  const [data, setData] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState({});

  const getData = async (res) => {
    res = await axios.get("https://tiket-bus-api.kencang.id/api/bus/chair");
    setData(res.data.data);
  };

  const setNumberSeat = () => {
    props.setNumberSeat(selectedSeat?.name);
  };

  const filteredData = [];
  for (let i = 0; i < data?.length; i++) {
    if ((i + 1) % 4 === 1 || (i + 1) % 4 === 2) {
      filteredData.push(data[i]);
    }
  }

  const mappedData = data?.reduce((result, item, index) => {
    if ((index + 1) % 4 === 3 || (index + 1) % 4 === 0) {
      const adjustedIndex = ((index + 1) / 4) * 2 - 1;
      result.push({ ...item, index: adjustedIndex });
    }
    return result;
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: "auto auto",
      }}
    >
      <div
        className="left-seats"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "10px",
          marginLeft: "20px",
        }}
      >
        {filteredData?.map((res, index) => (
          <Seat
            key={index}
            data={res}
            text={res.name}
            type={res.chair_type_id}
            onClick={setSelectedSeat}
            selected={selectedSeat}
            setNumberSeat={setNumberSeat}
          />
        ))}
      </div>

      <div
        className="right-seats"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "10px",
          marginRight: "20px",
        }}
      >
        {mappedData?.map((res, index) => (
          <Seat
            key={index}
            data={res}
            text={res.name}
            type={res.chair_type_id}
            onClick={setSelectedSeat}
            selected={selectedSeat}
            setNumberSeat={setNumberSeat}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseSeat;
