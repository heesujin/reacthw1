import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Detail = ({ week }) => {
  const { day } = useParams();
  const circle = [0, 1, 2, 3, 4];
  const [num, setNum] = useState();

  return (
    <All>
      <h3>
        <span
          style={{
            backgroundColor: "#B6B4CE",
            borderRadius: "5px",
            marginRight: "3px",
          }}
        >
          {week[day]}요일
        </span>
        평점 남기기
      </h3>
      <div>
        {circle.map((v, i) => {
          return (
            <Circle
              key={i}
              onClick={() => {
                setNum(i);
              }}
              style={{ background: i <= num ? "#FE8C68" : "#e0e0e0" }}
            ></Circle>
          );
        })}
      </div>
      <Link to="/">
        <Reset>평점 남기기</Reset>
      </Link>
    </All>
  );
};

const All = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 50%;
  float: left;
`;

const Reset = styled.button`
  font-size: 15px;
  width: 200px;
  height: 50px;
  background-color: plum;
  border: 0px;
  border-radius: 5px;
  margin-top: 15px;
`;

export default Detail;
