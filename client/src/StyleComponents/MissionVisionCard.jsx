import React from "react";
import styled from "styled-components";

const MissionVisionCard = ({ title, text }) => {
  return (
    <StyledWrapper>
      <div className="card">

        <div className="icon-circle" />

        <h3>{title}</h3>

        <div className="underline" />

        <p>{text}</p>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

display:flex;
justify-content:center;

.card{
  position:relative;
  width:100%;
  max-width:420px;
  padding:40px 35px;

  border-radius:22px;

  background:white;

  border:1px solid #f1f1f1;

  overflow:hidden;

  transition:all .35s ease;

  box-shadow:
  0 10px 30px rgba(0,0,0,0.08);
}

/* glow background */

.card::before{
  content:"";
  position:absolute;
  inset:0;

  background:linear-gradient(
  120deg,
  transparent,
  rgba(249,115,22,0.12),
  transparent);

  opacity:0;

  transition:opacity .35s ease;
}

/* floating circle */

.icon-circle{
  width:55px;
  height:55px;

  border-radius:50%;

  background:linear-gradient(
  135deg,
  #F97316,
  #fb923c);

  margin-bottom:22px;

  transition:transform .35s;
}

/* title */

h3{
  font-size:26px;
  font-weight:700;
  color:#111;
}

/* underline */

.underline{
  width:40px;
  height:3px;
  background:#F97316;
  margin:12px 0 18px 0;
  border-radius:2px;

  transition:width .35s ease;
}

/* text */

p{
  font-size:15px;
  line-height:1.6;
  color:#555;
}

/* hover */

.card:hover{
  transform:translateY(-8px);
  box-shadow:
  0 20px 50px rgba(0,0,0,0.15);
}

.card:hover::before{
  opacity:1;
}

.card:hover .underline{
  width:70px;
}

.card:hover .icon-circle{
  transform:scale(1.1);
}

`;

export default MissionVisionCard;