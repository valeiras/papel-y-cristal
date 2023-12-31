import styled from 'styled-components';
import { itemType } from '../assets/ts/types';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getFriendlyUrl } from '../assets/ts/utils';

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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        vertical: true,
      },
    },
  ],
};

const MultipleItemSlider: React.FC<{
  items: itemType[];
  basename: string;
}> = ({ items, basename = '' }) => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {items.map(({ name, img, id }) => {
          return (
            <div className="item-container" key={id}>
              <div className="img-bg">
                <Link
                  to={`${basename}/${getFriendlyUrl(name)}`}
                  className="img-link"
                >
                  <img src={img} alt={name} />
                </Link>
              </div>
              <div className="line" />
              <h3>{name}</h3>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
export default MultipleItemSlider;

const Wrapper = styled.div`
  margin: 1rem 0;

  .slick-prev,
  .slick-next {
    color: var(--theme-color-dark-green);
  }

  @media (max-width: 600px) {
    .slick-prev {
      transform: rotate(90deg);
      margin-left: 1rem;
    }
    .slick-next {
      transform: rotate(90deg);
      margin-right: 1rem;
    }
  }

  --laptop-width: 23vw;
  --laptop-height: 17vw;
  --laptop-img-width: 12vw;

  --tablet-width: 34vw;
  --tablet-height: 25vw;
  --tablet-img-width: 17vw;

  --mobile-width: 55vw;
  --mobile-height: 40.5vw;
  --mobile-img-width: 29vw;

  .item-container {
    padding: 1rem 0;
    text-align: center;
    text-transform: capitalize;
  }

  .img-bg {
    width: var(--mobile-width);
    height: var(--mobile-height);
    margin: 0 auto;
    background-color: var(--theme-color-green);
    display: flex;
  }

  .img-link {
    width: var(--mobile-img-width);
    margin: auto;
  }

  img {
    width: 100%;
  }

  .line {
    height: 1px;
    width: var(--mobile-width);
    background-color: var(--theme-color-dark-green);
    margin: 0.5rem auto 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  @media (min-width: 600px) {
    .img-bg {
      width: var(--tablet-width);
      height: var(--tablet-height);
    }
    .img-link {
      width: var(--tablet-img-width);
    }
    .line {
      width: var(--tablet-width);
    }
    h3 {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 992px) {
    .img-bg {
      width: var(--laptop-width);
      height: var(--laptop-height);
    }
    .img-link {
      width: var(--laptop-img-width);
    }
    .line {
      width: var(--laptop-width);
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;
