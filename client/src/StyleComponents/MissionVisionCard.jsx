import React from "react";
import styled from "styled-components";

const MissionVisionCard = ({ title, frontText, backText, frontBg, backBg }) => {
  return (
    <StyledWrapper frontBg={frontBg} backBg={backBg}>
      <div className="card">
        <div className="card-inner">

          {/* FRONT */}
          <div className="card-front">
            <h3>{title}</h3>
            <p>{frontText}</p>
          </div>

          {/* BACK */}
          <div className="card-back">
            <p>{backText}</p>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  .card {
    width: 100%;
    height: 300px; /* increase height for proper ratio */
    perspective: 1200px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    text-align: center;
  }

  .card-front {
    background: ${(props) => props.frontBg || "#F97316"};
    color: #fff;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  .card-back {
    background: ${(props) => props.backBg || "#111827"};
    color: #fff;
    transform: rotateY(180deg);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    max-width: 90%;
  }
`;

export default MissionVisionCard;