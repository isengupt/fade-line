import { useSpring, animated, interpolate, config } from "react-spring";

export function HeaderImages({ isVisible }) {
  const { x, opacity } = useSpring({
    x: isVisible ? 0 : 120,
    opacity: isVisible ? 1 : 0,

    config: config.slow,
  });

  return (
    <>
      <animated.div
        class="center-cropped"
        style={{
          opacity: opacity,
          transform: x.interpolate((x) => `translate3d(${-x}px,0,0)`),
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8')",
        }}
      ></animated.div>
      <animated.div
        class="center-cropped"
        style={{
          opacity: opacity,
          transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566688342604-dbe3e7357104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&ar=0.8')",
        }}
      ></animated.div>
    </>
  );
}

export function MovingTexts({ isVisible }) {
  const { x, opacity } = useSpring({
    x: isVisible ? 0 : 120,
    opacity: isVisible ? 1 : 0,

    config: config.slow,
  });

  return (
    <>
      <animated.span
        style={{
          opacity: opacity,
          transform: x.interpolate((x) => `translate3d(${-x}px,0,0)`),
        }}
        className="image__caption__item"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </animated.span>
      <animated.span
        style={{
          opacity: opacity,
          transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
        }}
        className="image__caption__item"
      >
        Donec maximus turpis ac velit suscipit vulputate.
      </animated.span>
      <animated.span
        style={{
          opacity: opacity,
          transform: x.interpolate((x) => `translate3d(${-x}px,0,0)`),
        }}
        className="image__caption__item"
      >
        Maecenas euismod tortor turpis. Aenean dignissim.
      </animated.span>
    </>
  );
}

export function MovingLine({ isVisible }) {
  const { x, opacity, width } = useSpring({
    width: isVisible ? 100 : 0,
    x: isVisible ? 0 : 120,
    opacity: isVisible ? 1 : 0,

    config: config.slow,
  });

  return (
    <>
      <animated.div
        style={{
          width: width.interpolate((width) => `${width}`),
        }}
        className="point"
      ></animated.div>
    </>
  );
}

export function ArticleReel({ isVisible }) {
  const { x, opacity, width } = useSpring({
    x: isVisible ? 0 : 40,
    opacity: isVisible ? 1 : 0,

    config: config.slow,
  });
  return (
    <div className="main__section">
      <div className="info__reel">
        <div className="flex__article__container">
          <animated.div
            style={{
              opacity: opacity,
              transform: x.interpolate((x) => `translate3d(0, ${x / 4}px,0)`),
            }}
            className="flex__article"
          >
            <div className="flex__article__image__container">
              <div
                class="article-cropped"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8')",
                }}
              ></div>
              <div
                class="article-cropped"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566688342604-dbe3e7357104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&ar=0.8')",
                }}
              ></div>
            </div>
            <div className="article__item__container">
              <p className="article__author">By Lorem Ipsum</p>
            </div>

            <div className="article__item__container">
              <h3 className="article__title">
                Aenean tempor finibus mauris ac efficitur
              </h3>
            </div>
          </animated.div>
        </div>
        <div className="main__article__container">
          <animated.div
            style={{
              opacity: opacity,
              transform: x.interpolate((x) => `translate3d(0, ${x}px,0)`),
            }}
            className="main__article"
          >
            <div className="article__main__title">
              <h3 className="article__title" style={{ textAlign: "center" }}>
                Nulla finibus vulputate ex sed molestie.
              </h3>
              <div
                class="large__center__cropped"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566688342604-dbe3e7357104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&ar=0.8')",
                }}
              ></div>
              <div className="blink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.97 13.22a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 10-1.06-1.06l-4.97 4.97V3.75a.75.75 0 00-1.5 0v14.44l-4.97-4.97a.75.75 0 00-1.06 0z"
                  ></path>
                </svg>
              </div>
              <p className="main__small__text">Morbi convallis</p>
              <div className="adorn__line"></div>
            </div>
          </animated.div>
        </div>
        <div className="flex__alternate__container">
          <animated.div
            className="flex__article__center "
            style={{
              opacity: opacity,
              transform: x.interpolate((x) => `translate3d(0, ${x / 4}px,0)`),
            }}
          >
            <div className="large__image__container">
              <div
                className="large__vertical__cropped"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8')",
                }}
              ></div>
            </div>
            <div
              className="article__item__container"
              style={{ justifyContent: "center" }}
            >
              <p className="article__author">Sed mollis quam</p>
            </div>

            <div
              className="article__item__container"
              style={{ justifyContent: "center" }}
            >
              <h3 className="flex__article__description">
                Donec molestie nisl at interdum imperdiet. Donec non molestie
                orci, eget consequat ex. Proin consectetur sagittis ante,
                lacinia pulvinar ante rhoncus sit amet.
              </h3>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}
