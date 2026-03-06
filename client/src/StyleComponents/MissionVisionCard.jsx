import React from "react";
import styled from "styled-components";

const MissionVisionCard = ({ title, frontText, backText, frontBg, backBg }) => {
  return (
    <StyledWrapper frontBg={frontBg} backBg={backBg}>
      <div className="card">
        <div className="card-inner">

          {/* FRONT */}
          <div className="card-front">

            <span className="badge">ROAR ENT</span>

            <h3>{title}</h3>

            <div className="divider"></div>

            <p>{frontText}</p>

          </div>

          {/* BACK */}
          <div className="card-back">

            <span className="badge">DETAILS</span>

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
    height: 300px;
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
    overflow: hidden;
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

  /* badge */
  .badge {
    font-size: 11px;
    letter-spacing: 1px;
    padding: 6px 12px;
    border-radius: 20px;
    background: rgba(255,255,255,0.2);
    margin-bottom: 14px;
  }

  /* divider */
  .divider {
    width: 60px;
    height: 3px;
    border-radius: 3px;
    background: rgba(255,255,255,0.5);
    margin-bottom: 18px;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    max-width: 90%;
  }

  /* subtle pattern */
  .card-front::before,
  .card-back::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%);
    top: -50%;
    left: -50%;
  }
`;

export default MissionVisionCard;