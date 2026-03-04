import styled from "styled-components";

export default function ServiceCard({ title, image, description }) {
  return (
    <StyledWrapper className="service-card">
      <div className="stack">
        <div className="card">
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .stack {
    margin-top:20px;
    width: 100%;
    max-width: 300px; /* slightly smaller */
    transition: 0.25s ease;
  }

  .stack:hover {
    transform: rotate(4deg);
  }

  .stack:hover .card:before {
    transform: translateY(-2%) rotate(-4deg);
  }

  .stack:hover .card:after {
    transform: translateY(2%) rotate(4deg);
  }

  .card {
    aspect-ratio: 4 / 2.5; /* 🔥 Reduced height */
    border: 4px solid black;
    background-color: #fff;
    position: relative;
    transition: 0.2s ease;
    cursor: pointer;
    padding: 5% 5% 12% 5%; /* slightly reduced padding */
    border-radius: 12px;
  }

  .card:before,
  .card:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border: 4px solid black;
    background-color: #fff;
    transform-origin: center center;
    z-index: -1;
    transition: 0.2s ease;
    top: 0;
    left: 0;
    border-radius: 12px;
  }

  .card:before {
    transform: translateY(-2%) rotate(-6deg);
  }

  .card:after {
    transform: translateY(2%) rotate(6deg);
  }

  .image {
    width: 100%;
    height:200px;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    border: 4px solid black;
  }

  .content {
    margin-top: 10px; /* reduced spacing */
    text-align: center;
  }

  h3 {
    font-size: 15px; /* slightly smaller */
    font-weight: 700;
  }

  p {
    font-size: 12px; /* slightly smaller */
    color: #6b7280;
    margin-top: 4px;
  }
`;