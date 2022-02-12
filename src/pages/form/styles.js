import styled from "styled-components";
export const Container = styled.div`
  /* background: red; */
  display: flex;
  align-self: center;
  justify-self: space-between;
  width: 800px;
  height: 600px;
  border-radius: 10px;
  background: #f7f7f7;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
  img.background {
    border-radius: 10px;
    height: 100%;
    width: 300px;
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
        height: 50px;
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
          color: gray;
          background-color: white;
          padding-top: 5px;
          border-radius: 8px;
          /* font-size: px; */
          /* font-weight: bold; */
        }

        .upload-btn-wrapper input[type=file] {
          
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
        }
    }
  }
`;
