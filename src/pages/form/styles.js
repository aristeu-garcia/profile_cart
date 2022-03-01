import styled from "styled-components";
export const Container = styled.div`
  /* background: red; */
  display: flex;
  align-self: center;
  justify-self: space-between;
  width: 800px;
  height: 600px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  margin-right: 10px;
  img.background {
    border-radius: 10px;
    height: 100%;
    width: 30%;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    object-fit: cover;
  }
  div.form {
    display: flex;
    flex-direction: column;
    align-items: center:
    justify-content: center;
    width: 90%;
    border-radius: 10px;
    text-align:center;
    height: 100%;
    padding-top: 40px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom: 40px;

    background: transparent;
    h1{
        color: #414a4c;
        margin-bottom:30px;
    }
    div.group-input{
        align-items:left;
        text-align: left;
        height: 70px;
        display: flex;
        flex-direction: column;
        margin-bottom:20px;
        label{
            color:#939393;
            font-weight: 300
        }
        
        input{
            height: 40px;
            border:none;
            border-bottom: 2px solid #f0f0f0;
            :focus {
                border-color: #444444;
            }
           
        }
        .upload-btn-wrapper {
          position: relative;
          overflow: hidden;
          display: inline-block;
          
        }

        .btn {
          border:none;
          border-bottom: 2px solid #f0f0f0;
          background: #e6e6e6;
          color: gray;
          display: flex;
          align-items:center;
          justify-content: center;
          margin-top: 5px;
          /* background-color: white; */
          padding: 5px;
          border-radius: 8px;
          :hover{
          
            transition: all 0.8s;
            background: #6b6b6b;
            color: white;
            
          }
          /* font-size: px; */
          /* font-weight: bold; */
          
          
        }
        .upload-btn-wrapper input[type=file] {
          width:100px;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          
        }
    }
    .btn-submit{
      margin-top: 20px;
      height:40px;
      border-radius: 10px;
      background: #03bb85;
      border:none;
      :hover{
          transition: all 0.8s;
          background: #029c6f;
          color: white;
          
        }
    }
  }
  @media (max-width: 500px){
    img.background{
      width: 12%;
    }
  }
  @media (max-width: 690px){
    .btn-submit{
      margin-top: 100px !important;
    }
  }
  @media (max-width: 350px){
    .btn-submit{
      margin-top: 150px !important;
    }
  }
`;
