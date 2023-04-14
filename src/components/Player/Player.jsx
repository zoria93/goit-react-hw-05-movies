import Iframe from 'react-iframe';

const Player = ({ title }) => {
  return (
    <>
      <Iframe
        url={title}
        src={`https://v1681494159.bazon.site/embed?search=${title}`}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </>
  );
};

export default Player;
