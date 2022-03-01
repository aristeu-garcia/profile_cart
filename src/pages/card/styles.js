import styled, { keyframes } from "styled-components";
const slide = keyframes`
  100% { transform: translateX(0%); }
  0% { transform: translateX(-100%); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
  animation: ${slide} 0.5s forwards;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;

 background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M220.79 278.16L264.38 278.16L264.38 327.73L220.79 327.73z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1137.86 455.07 a30.12 30.12 0 1 0 60.24 0 a30.12 30.12 0 1 0 -60.24 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M48.26 34.6L57.34 34.6L57.34 43.68L48.26 43.68z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M311.09 63.63L315.77 63.63L315.77 89.79L311.09 89.79z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M90.77 297.03 a35.92 35.92 0 1 0 71.84 0 a35.92 35.92 0 1 0 -71.84 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M275.93 272.68L328.74 272.68L328.74 325.49L275.93 325.49z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M341.78 19.47 a22.18 22.18 0 1 0 44.36 0 a22.18 22.18 0 1 0 -44.36 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M760.85 447.85a20.9 20.9 0 1 0-0.04 41.8z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M965.56 274.87a48.9 48.9 0 1 0-89.22-40.05z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M219.75 204.17L252.63 204.17L252.63 256.67L219.75 256.67z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M706.69 182.29L752.25 182.29L752.25 234.82L706.69 234.82z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M573 513.42L604.97 513.42L604.97 545.39L573 545.39z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1215.41 279.3a31.2 31.2 0 1 0-16.5-60.17z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M503.34 399.79L553.19 399.79L553.19 406.64L503.34 406.64z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M771.97 67.64L820.8 67.64L820.8 116.47L771.97 116.47z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M801.79 412.56L806.1 412.56L806.1 457.51L801.79 457.51z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1135.32 356.56L1160.9 356.56L1160.9 382.14L1135.32 382.14z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M995.49 227.65 a26.84 26.84 0 1 0 53.68 0 a26.84 26.84 0 1 0 -53.68 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M327.68 451.74 a5.18 5.18 0 1 0 10.36 0 a5.18 5.18 0 1 0 -10.36 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1305.14 100.47a32.18 32.18 0 1 0 1.31-64.34z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M567.06 122.89L588.86 122.89L588.86 144.69L567.06 144.69z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M17.24 162.48L48.8 162.48L48.8 194.04L17.24 194.04z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M757.13 204.24L784.6 204.24L784.6 251.74L757.13 251.74z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1009.37 5.49 a47.01 47.01 0 1 0 94.02 0 a47.01 47.01 0 1 0 -94.02 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1186.23 265.8L1206.61 265.8L1206.61 286.18L1186.23 286.18z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M96.42 11.63L147.52 11.63L147.52 43.74L96.42 43.74z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M752.4 435.08L767.37 435.08L767.37 457.58L752.4 457.58z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M892.43 42.1L899.68 42.1L899.68 49.35L892.43 49.35z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1386.77 18.56 a50.41 50.41 0 1 0 100.82 0 a50.41 50.41 0 1 0 -100.82 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M277.81 25.52L315.35 25.52L315.35 63.06L277.81 63.06z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1299.62 406.9L1316.64 406.9L1316.64 407.18L1299.62 407.18z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M110.8 284.3L162.02 284.3L162.02 335.52L110.8 335.52z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M102.9 59.16L149.9 59.16L149.9 106.16L102.9 106.16z' stroke='%23d3b714'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

  img.profile_photo {
    margin-top: 50px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(253, 187, 45, 1);
  }

  div.identification {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: left;
    justify-content: left;
    text-align: left;
    margin-left: 20px;

    h1 {
      margin-top: 20px;
    }
    h2 {
      margin-top: 5px;
      font-weight: 400;
    }
  }
  h2 {
    margin-top: 30px;
    font-weight: 300;
  }
  div.languages {
    width: 95%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 35px;
      height: 35px;
      + img {
        margin-left: 5px;
      }
    }
  }
  .download-button {
    transform: translateY(200px);
  }
  @media (max-width: 370px) {
    div.languages img {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 410px) {
    h1.name {
      font-size: 24px;
    }
  }
`;
export const Plug = styled.div`
  display: flex;
  width: 100px;
  height: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  background: #e5e5e5;
  box-shadow: rgba(0, 0, 0, 0.9) 0px -5px 36px -28px inset;
`;
