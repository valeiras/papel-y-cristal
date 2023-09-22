import styled from 'styled-components';
import { sliderItemType } from '../assets/ts/types';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <FaChevronRight />,
  prevArrow: <FaChevronLeft />,
};

const MultipleItemSlider: React.FC<{ items: sliderItemType[] }> = ({
  items,
}) => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {items.map(({ name, img }) => {
          return (
            <ItemContainer>
              <ImgContainer>
                <img src={img} alt={name} />
              </ImgContainer>
              <HorLine />
              <h3>{name}</h3>
            </ItemContainer>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
export default MultipleItemSlider;

const Wrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--theme-color-dark-green);
  }
  .slick-prev,
  .slick-next {
    color: var(--theme-color-dark-green);
  }
`;
const ItemContainer = styled.div`
  padding-bottom: 1rem;
  text-align: center;
  text-transform: capitalize;
`;

const ImgContainer = styled.div`
  width: 23vw;
  height: 17vw;
  margin: 0 auto;
  background-color: var(--theme-color-green);
  display: flex;

  img {
    width: 12vw;
    margin: auto;
  }
`;

const HorLine = styled.div`
  height: 1px;
  width: 23vw;
  background-color: var(--theme-color-dark-green);
  margin: 1rem auto 1.5rem;
`;
