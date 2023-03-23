import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  @media (max-width: 1024px) {
  grid-template-rows: 200px auto 70px;
  }
  @media (max-width: 400px) {
    grid-template-rows: auto auto 70px;
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;
  height: 75vh;


  > button {
    margin: 16px;
    font-size: 16px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .info-dish {
    margin: 50px auto 0;
    max-width: 1020px;
    width: 100%;

    display: flex;
    gap: 60px;
    img {
      height: 350px;
    }

    .infos {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.WHITE};

      h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 40px;
      }

      p {
        font-weight: 400;
        font-size: 22px;

        margin-bottom: 20px;
      }

      span {
        font-size: 20px;
        font-weight: 700;
      }

      h5 {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 400;

      }

      li {
        list-style: none;

        display: flex;
        gap: 20px;

        ul {
          display: flex;
          flex-direction: column;

          font-size: 2rem;
          line-height: 30px;
          font-weight: 400;
        }
        ul img {
          height: 60px;
        }
        ul span {
          text-align: center;
        }
      }

      .valueAndQuantity {
        display: flex;
        align-items: center;
        margin-top: 20px;
        display: flex;
        gap: 40px;

        h4 {
          font-size: 1.7rem;
          font-weight: 400;
          color: #82f3ff;
        }
        .quantity {
          display: flex;
          gap: 20px;
          > div {
            display: flex;
            align-items: center;
            gap: 20px;

            font-size: 2rem;
            font-weight: 700;
            line-height: 32px;

            button {
              background: transparent;
              border: none;
              color: ${({ theme }) => theme.COLORS.WHITE};
            }
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 20px;
    .info-dish {
      img {
        height: 250px;
      }
    }
  }
  @media (max-width: 400px) {
    .info-dish {
      flex-direction: column;
      img {
        height: auto;
      }

      .valueAndQuantity {
        flex-direction: column;
      }

      .infos .valueAndQuantity {
        .quantity {
          > div {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 2.6rem;
          }
        }
      }
    }
  }
`
